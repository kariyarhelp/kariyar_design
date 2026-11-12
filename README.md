# Kariyar

Private help for women and girls, on any phone.

## Run locally

```
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/layout.jsx` — HTML shell, metadata, global CSS
- `app/page.jsx` — loads the site client-side
- `components/KariyarApp.jsx` — nav, language switch, home / #contact routing
- `components/Ks*.jsx` — page sections
- `public/story/` — hero story video (static embed, loaded in an iframe)
- `styles/` — site styles and design tokens
- `lib/vendor/ds_bundle.js` — design-system components (GradientButton etc.)
