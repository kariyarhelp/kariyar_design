import '../styles/ds/styles.css';
import '../styles/site.css';

import { SITE_URL, SITE_NAME } from '../lib/site.js';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Kariyar · Private help for women and girls, on any phone', template: '%s · Kariyar' },
  description: 'Kariyar is a free, private safety companion for women and girls in Nigeria. Talk to a trained responder, find help nearby, or dial *384*77# from any phone.',
  applicationName: SITE_NAME,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  formatDetection: { telephone: false },
};

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#0f0f35' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" />
        <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
