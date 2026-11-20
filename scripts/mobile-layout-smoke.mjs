/**
 * Browser-level mobile layout smoke test for the built Astro site.
 * Uses the Chrome DevTools Protocol and Node 24's native WebSocket,
 * so no browser automation dependency or external URL is required.
 */
import { spawn, spawnSync } from 'node:child_process';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const HOST = 'http://127.0.0.1:4177';
const DEBUG = 'http://127.0.0.1:9339';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const routes = ['/', '/areas-of-expertise', '/about', '/instructions', '/contact', '/post-traumatic-stress-disorder', '/privacy-policy'];
const widths = [320, 390, 768];
const screenshots = new Set(['/', '/areas-of-expertise', '/about', '/instructions', '/contact']);
const failures = [];
const results = [];
let server, chrome, socket, tempDir;

async function waitFor(predicate, label, attempts=90) {
  for (let i=0;i<attempts;i++) {
    try {
      const result = await predicate();
      if (result) return result;
    } catch { /* Wait for server readiness. */ }
    await sleep(200);
  }
  throw new Error('Timed out waiting for '+label);
}

function chromeExecutable() {
  const configured = process.env.CHROME_BIN;
  if (configured) return configured;
  for (const name of ['google-chrome','google-chrome-stable','chromium','chromium-browser']) {
    const which = spawnSync('which',[name],{encoding:'utf8'});
    if (which.status === 0 && which.stdout.trim()) return which.stdout.trim();
  }
  throw new Error('Chrome/Chromium not installed on this runner.');
}

async function cdpClient(wsUrl) {
  const ws = new WebSocket(wsUrl);
  await new Promise((resolve,reject)=>{
    ws.addEventListener('open',resolve,{once:true});
    ws.addEventListener('error',reject,{once:true});
  });
  let nextId=0;
  const pending=new Map();
  ws.addEventListener('message',event=>{
    let msg;
    try { msg=JSON.parse(event.data); } catch { return; }
    if (msg.id === undefined) return;
    const p=pending.get(msg.id);
    if (!p) return;
    pending.delete(msg.id);
    if (msg.error) p.reject(new Error(msg.error.message));
    else p.resolve(msg.result);
  });
  const command=(method,params={})=>new Promise((resolve,reject)=>{
    const id=++nextId;
    pending.set(id,{resolve,reject});
    ws.send(JSON.stringify({id,method,params}));
  });
  return { ws, command };
}

const inspectExpression = `(() => {
  const bounds = e => {
    const r=e.getBoundingClientRect();
    return { left:r.left, right:r.right, top:r.top, bottom:r.bottom };
  };
  const w=window.innerWidth;
  const selectors='main h1, .nav-pill, .hero-shell, .credentials-grid, .expertise-item, .home-guidance-panel, .reports-card, .contact-detail, .home-talk-button, .faq-list, .site-footer__inner';
  const outside=[...document.querySelectorAll(selectors)].map(e=>({name:e.className || e.tagName, ...bounds(e)})).filter(r=>r.left < -2 || r.right > w+2).slice(0,7);
  const credentials=document.querySelector('.credentials-grid');
  return {
    viewport:w,
    scrollWidth:document.documentElement.scrollWidth,
    bodyScrollWidth:document.body.scrollWidth,
    title:document.title,
    arrows:document.querySelectorAll('svg.ui-arrow').length,
    credentialsColumns:credentials ? getComputedStyle(credentials).gridTemplateColumns.split(/\\s+/).length : null,
    outside
  };
})()`;

try {
  tempDir=await mkdtemp(path.join(os.tmpdir(),'insight-mobile-'));
  server=spawn('npm',['run','preview','--','--host','127.0.0.1','--port','4177'],{stdio:'ignore'});
  await waitFor(async()=>{const r=await fetch(HOST);return r.ok},'Astro preview');
  chrome=spawn(chromeExecutable(),[
    '--headless=new','--no-sandbox','--disable-gpu','--disable-dev-shm-usage',
    '--no-first-run','--no-default-browser-check','--hide-scrollbars',
    '--remote-allow-origins=*','--remote-debugging-port=9339',
    '--user-data-dir='+tempDir,'about:blank'
  ],{stdio:'ignore'});
  const tab=await waitFor(async()=>{
    const r=await fetch(DEBUG+'/json');
    const tabs=await r.json();
    return tabs.find(t=>t.type==='page' && t.webSocketDebuggerUrl);
  },'Chrome DevTools');
  const client=await cdpClient(tab.webSocketDebuggerUrl);
  socket=client.ws;
  const send=client.command;
  await send('Page.enable');
  await send('Runtime.enable');
  const outdir='artifacts/mobile-qa';
  await mkdir(outdir,{recursive:true});

  for (const width of widths) {
    await send('Emulation.setDeviceMetricsOverride',{
      width,height:900,deviceScaleFactor:1,mobile:true,screenWidth:width,screenHeight:900
    });
    for (const route of routes) {
      await send('Page.navigate',{url:HOST+route});
      await waitFor(async()=>{
        const r=await send('Runtime.evaluate',{expression:'document.readyState',returnByValue:true});
        return r.result?.value === 'complete';
      },route+' page load',40);
      await sleep(180);
      const value=await send('Runtime.evaluate',{expression:inspectExpression,returnByValue:true});
      if (value.exceptionDetails) throw new Error('DOM evaluation failed: '+route);
      const found=value.result.value;
      results.push({width,route,...found});
      if (found.scrollWidth > width+2 || found.bodyScrollWidth > width+2 || found.outside.length) {
        failures.push({width,route,scrollWidth:found.scrollWidth,bodyScrollWidth:found.bodyScrollWidth,outside:found.outside});
      }
      if (route==='/' && width<=390 && found.credentialsColumns!==1) {
        failures.push({width,route,issue:'Credentials strip is not stacked on a narrow phone',columns:found.credentialsColumns});
      }
      if (screenshots.has(route) && width===390) {
        const metric=await send('Page.getLayoutMetrics');
        const pageHeight=metric.cssContentSize?.height || 900;
        const capture=await send('Page.captureScreenshot',{
          format:'png',captureBeyondViewport:true,
          clip:{x:0,y:0,width,height:Math.min(Math.ceil(pageHeight),5000),scale:1}
        });
        const slug=route==='/'?'home':route.slice(1).replaceAll('/','-');
        await writeFile(path.join(outdir,slug+'-390.png'),Buffer.from(capture.data,'base64'));
      }
    }
  }
  console.log('Checked '+results.length+' page/viewport combinations (320px, 390px, 768px).');
  if (failures.length) {
    console.error(JSON.stringify(failures,null,2));
    process.exitCode=1;
  } else {
    console.log('No horizontal overflow, offscreen primary content or unstacked phone credentials found.');
  }
} finally {
  socket?.close();
  chrome?.kill('SIGTERM');
  server?.kill('SIGTERM');
  if (tempDir) await rm(tempDir,{recursive:true,force:true}).catch(()=>{});
}
