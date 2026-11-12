import { SITE_URL, PAGES } from '../lib/site.js';

export default function sitemap() {
  const now = new Date('2026-11-12');
  return Object.entries(PAGES).map(([k, p]) => ({
    url: SITE_URL + (p.path === '/' ? '/' : p.path),
    lastModified: now,
    changeFrequency: k === 'home' ? 'weekly' : 'yearly',
    priority: k === 'home' ? 1 : k === 'contact' ? 0.6 : 0.3,
  }));
}
