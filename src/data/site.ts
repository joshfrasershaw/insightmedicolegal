/**
 * Confirmed shared identifiers. Correspondence addresses differ between source
 * projects; do not guess one here. See CODEX_TASK.md before publishing.
 */
export const site = {
  name: 'Insight Medicolegal',
  legalName: 'Insight Medicolegal Ltd',
  companyNumber: 'SC822243',
  doctor: 'Dr Yameen Qureshi',
  gmc: '4771627',
  email: 'instructions@insightmedicolegal.co.uk',
  phone: '07739 587092',
  phoneHref: 'tel:+447739587092',
  registeredOffice:
    'Clyde Offices, 48 West George Street, 2nd Floor, Glasgow, G2 1BP',
  developerName: 'Allerton Digital',
  developerUrl: 'https://allertondigital.co.uk',
} as const;

export const mainNav = [
  { label: 'Expertise', href: '/areas-of-expertise' },
  { label: 'About', href: '/about' },
  { label: 'Instructions', href: '/instructions' },
  { label: 'Contact', href: '/contact' },
] as const;

export const expertise = [
  { title: 'Post-traumatic stress disorder', slug: 'post-traumatic-stress-disorder', summary: 'Trauma-related symptoms, diagnosis, causation, treatment and prognosis.' },
  { title: 'Anxiety and depression', slug: 'anxiety-depression', summary: 'Symptoms, psychiatric injury, pre-existing factors and functioning.' },
  { title: 'Addiction psychiatry', slug: 'addiction-psychiatry', summary: 'Alcohol and substance misuse, dependence and dual diagnosis.' },
  { title: 'Chronic pain and psychological injury', slug: 'chronic-pain-psychological-injury', summary: 'Psychiatric consequences of injury and persistent pain.' },
  { title: 'Personality and adjustment disorders', slug: 'personality-adjustment-disorders', summary: 'Longstanding personality difficulties and adjustment reactions.' },
  { title: 'Personal injury and clinical negligence', slug: 'personal-injury-clinical-negligence', summary: 'Diagnosis, causation, treatment needs and prognosis.' },
  { title: 'Employment and occupational matters', slug: 'employment-occupational-matters', summary: 'Workplace events, occupational functioning and capacity for work.' },
  { title: 'Professional regulation', slug: 'professional-regulation', summary: 'Fitness-to-practise and other professional regulatory proceedings.' },
] as const;
