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
  { label: 'Reports', href: '/areas-of-expertise' },
  { label: 'About', href: '/about' },
  { label: 'How it works', href: '/instructions' },
  { label: 'Contact', href: '/contact' },
] as const;

export const expertise = [
  { title: 'Post-traumatic stress disorder', slug: 'post-traumatic-stress-disorder', summary: 'Trauma symptoms, diagnosis and their effect on daily life.' },
  { title: 'Anxiety and depression', slug: 'anxiety-depression', summary: 'How anxiety or depression affects work and daily life.' },
  { title: 'Addiction psychiatry', slug: 'addiction-psychiatry', summary: 'Alcohol or drug dependence and related mental health problems.' },
  { title: 'Chronic pain and psychological injury', slug: 'chronic-pain-psychological-injury', summary: 'The mental health effects of injury or long-term pain.' },
  { title: 'Personality and adjustment disorders', slug: 'personality-adjustment-disorders', summary: 'Long-standing difficulties and responses to stressful events.' },
  { title: 'Personal injury and clinical negligence', slug: 'personal-injury-clinical-negligence', summary: 'Mental health problems following injury or medical treatment.' },
  { title: 'Employment and occupational matters', slug: 'employment-occupational-matters', summary: 'Mental health, workplace disputes and ability to work.' },
  { title: 'Professional regulation', slug: 'professional-regulation', summary: 'Mental health evidence for professional regulators.' },
] as const;
