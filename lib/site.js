export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://kariyar.org').replace(/\/$/, '');
export const SITE_NAME = 'Kariyar';
export const PAGES = {
  home: { path: '/', title: 'Kariyar · Private help for women and girls, on any phone', description: "Talk to a trained responder in Hausa or English, find clinics and legal aid near you, or dial *384*77# without data. Free, and you never have to give your name." },
  contact: { path: '/contact', title: 'Contact Kariyar · Partnerships, funding, press and responders', description: 'Contact Kariyar about partnerships, funding, press or becoming a responder. We reply by email. If you are in danger now, call 112.' },
  privacy: { path: '/privacy', title: 'Privacy policy · Kariyar', description: 'What Kariyar collects, who can see it and how long we keep it. You never have to give your name, and nothing is saved unless you choose.' },
};
export function pageMetadata(key) {
  const p = PAGES[key];
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: p.path },
    openGraph: { type: 'website', url: p.path, siteName: SITE_NAME, title: p.title, description: p.description, locale: 'en_NG' },
    twitter: { card: 'summary', title: p.title, description: p.description },
  };
}
const ORG_ID = SITE_URL + '/#organization';
const SITE_ID = SITE_URL + '/#website';
export function jsonLd(key) {
  const p = PAGES[key];
  const url = SITE_URL + (p.path === '/' ? '/' : p.path);
  const org = { '@type': 'NGO', '@id': ORG_ID, name: SITE_NAME, url: SITE_URL + '/', logo: SITE_URL + '/brand/kariyar-logo.svg', email: 'hello@kariyar.org', description: 'A free, private safety companion for women and girls in Nigeria. Trained responders in Hausa and English, referrals to clinics, legal aid and safe spaces, and a USSD line (*384*77#) that works on any phone.', areaServed: { '@type': 'Country', name: 'Nigeria' }, knowsLanguage: ['en', 'ha'], contactPoint: [{ '@type': 'ContactPoint', contactType: 'customer support', email: 'hello@kariyar.org', availableLanguage: ['English', 'Hausa'], areaServed: 'NG' }] };
  const site = { '@type': 'WebSite', '@id': SITE_ID, url: SITE_URL + '/', name: SITE_NAME, inLanguage: ['en', 'ha'], publisher: { '@id': ORG_ID } };
  const crumbs = key === 'home' ? null : { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' }, { '@type': 'ListItem', position: 2, name: key === 'contact' ? 'Contact' : 'Privacy policy', item: url }] };
  const pageType = key === 'contact' ? 'ContactPage' : 'WebPage';
  const page = { '@type': pageType, '@id': url + '#webpage', url, name: p.title, description: p.description, isPartOf: { '@id': SITE_ID }, about: { '@id': ORG_ID }, inLanguage: 'en', ...(key === 'privacy' ? { dateModified: '2026-11-12' } : {}), ...(crumbs ? { breadcrumb: crumbs } : {}) };
  return { '@context': 'https://schema.org', '@graph': [org, site, page] };
}
