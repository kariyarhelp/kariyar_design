export const metadata = { title: { absolute: 'Page not found · Kariyar' }, robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <main className="ks-ssr" style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
      <img src="/brand/kariyar-logo.svg" alt="Kariyar" width="131" height="30" style={{ height: 30, width: 'auto' }} />
      <h1 style={{ font: '700 40px/1.1 var(--font-inter)', letterSpacing: '-1.5px', margin: 0 }}>We couldn't find that page.</h1>
      <p style={{ margin: 0, color: 'var(--fg-on-light-2)' }}>If you need help now, dial <a href="tel:*384*77%23">*384*77#</a> from any phone or call 112 in an emergency.</p>
      <p style={{ margin: 0, display: 'flex', gap: 16, flexWrap: 'wrap' }}><a href="/">Go to the home page</a><a href="/contact">Contact us</a><a href="/privacy">Privacy policy</a></p>
    </main>
  );
}
