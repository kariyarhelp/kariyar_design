import { SEO } from '../lib/seo-content.js';

// Server-rendered text of each page. Hidden once the interactive site has loaded.
export default function SeoContent({ page }) {
  const nav = (
    <nav aria-label="Main">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/#impact">Impact</a></li>
        <li><a href="/#features">How we help</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/privacy">Privacy policy</a></li>
      </ul>
    </nav>
  );
  if (page === 'contact') return (
    <div id="ks-ssr" className="ks-ssr">{nav}
      <main>
        <h1>Let's work together.</h1>
        <p>Contact Kariyar about partnerships, funding, press or becoming a responder. We reply by email at <a href="mailto:hello@kariyar.org">hello@kariyar.org</a>.</p>
        <p>If you are in danger now, call 112. For private help from any phone, dial <a href="tel:*384*77%23">*384*77#</a>.</p>
        <p>Read how we handle your data in our <a href="/privacy">privacy policy</a>.</p>
      </main>
    </div>
  );
  if (page === 'privacy') return (
    <div id="ks-ssr" className="ks-ssr">{nav}
      <main>
        <h1>Your privacy keeps you safe.</h1>
        <p>Kariyar is built for women and girls who may be at risk. This page explains what we collect, who can see it and how long we keep it.</p>
        <p>Last updated 12 November 2026</p>
        <h2>The short version</h2>
        <ul>{SEO.short.map(t => <li key={t}>{t}</li>)}</ul>
        {SEO.priv.map(s => <section key={s.id}><h2>{s.h}</h2><ul>{s.items.map(t => <li key={t}>{t}</li>)}</ul></section>)}
        <h2>Questions about your data?</h2>
        <p>Write to us through the <a href="/contact">contact page</a>. If you are in danger now, call 112.</p>
      </main>
    </div>
  );
  return (
    <div id="ks-ssr" className="ks-ssr">{nav}
      <main>
        <h1>Private help for women and girls, on any phone.</h1>
        <p>Talk to a trained responder in Hausa or English, find clinics and legal aid near you. It's free, and you never have to give your name.</p>
        <section><h2>Every number here is a woman or girl who chose to speak up.</h2><ul>{SEO.impact.map(t => <li key={t}>{t}</li>)}</ul></section>
        <section><h2>Five ways to get help. All private, all free.</h2>{SEO.feats.map(f => <article key={f.h}><h3>{f.h}</h3><p>{f.p}</p></article>)}</section>
        <section><h2>You don't have to carry this alone.</h2><p>Dial <a href="tel:*384*77%23">*384*77#</a> from any phone, or <a href="/contact">contact us</a>.</p></section>
      </main>
    </div>
  );
}
