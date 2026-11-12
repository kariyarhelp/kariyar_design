'use client';
import React from 'react';
import { DS } from '../lib/ds.js';
import { KSLang } from './KsFigures.jsx';
import { KSImpact } from './KsImpact.jsx';
import { KSFeatures } from './KsFeatures.jsx';
import { KSFinale, KSCta, KSFooter } from './KsFinale.jsx';
import { KSContact } from './KsContact.jsx';
import { KSPrivacy } from './KsPrivacy.jsx';

export default function KSApp({ page = 'home' }) {
  const [lang, setLang] = React.useState('en');
  React.useEffect(() => { const s = localStorage.getItem('ks-lang'); if (s === 'ha') setLang('ha'); const ssr = document.getElementById('ks-ssr'); if (ssr) ssr.hidden = true; }, []);
  React.useEffect(() => { localStorage.setItem('ks-lang', lang); document.documentElement.lang = lang; }, [lang]);
  const tx = (en, ha) => (lang === 'ha' ? ha : en);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => { const on = () => setScrolled(scrollY > 4); on(); addEventListener('scroll', on, { passive: true }); return () => removeEventListener('scroll', on); }, []);
  React.useEffect(() => {
    const h = location.hash;
    if (h === '#contact' || h === '#privacy') { location.replace('/' + h.slice(1)); return; }
    if (page === 'home' && h) requestAnimationFrame(() => { const el = document.querySelector(h); if (el) window.scrollTo(0, el.getBoundingClientRect().top + scrollY - 56); });
  }, [page]);
  const metaBase = React.useRef(null);
  React.useEffect(() => {
    const meta = {
      home: [tx("Kariyar · Private help for women and girls, on any phone", "Kariyar · Taimako na sirri ga mata da 'yan mata, a kowace waya"), tx("Talk to a trained responder in Hausa or English, find clinics and legal aid near you, or dial *384*77# without data. It's free, and you never have to give your name.", "Yi magana da ma'aikaciya da aka horar da Hausa ko Turanci, nemo asibitoci da taimakon shari'a kusa da ke, ko danna *384*77# ba tare da data ba. Kyauta ne, kuma ba sai kin faɗi sunanki ba.")],
      contact: [tx('Contact us · Kariyar', 'Tuntuɓe mu · Kariyar'), tx('Contact Kariyar about partnerships, funding, press or becoming a responder. If you are in danger, call 112.', "Tuntuɓi Kariyar game da haɗin gwiwa, tallafi, aikin jarida ko zama ma'aikaciya. Idan kina cikin haɗari, kira 112.")],
      privacy: [tx('Privacy policy · Kariyar', 'Manufar sirri · Kariyar'), tx('What Kariyar collects, who can see it and how long we keep it. You never have to give your name, and nothing is saved unless you choose.', 'Abin da Kariyar ke tattarawa, wa zai iya gani, da tsawon lokacin da muke ajiye shi.')],
    }[page];
    const d = document.querySelector('meta[name="description"]');
    if (!metaBase.current) metaBase.current = [document.title, d ? d.getAttribute('content') : ''];
    const m = lang === 'ha' ? meta : metaBase.current;
    document.title = m[0]; if (d) d.setAttribute('content', m[1]);
  }, [page, lang]);
  const { GradientButton } = DS;
  const heroImg = React.useRef(null);
  const heroBg = React.useRef(null);
  React.useEffect(() => {
    const bg = heroBg.current; if (!bg) return;
    const sec = bg.parentElement; let x = .1, y = .95, raf = 0, t0 = performance.now();
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const tick = now => { const d = (now - t0) / 1000; x = .3 + Math.sin(d * .22) * .25 + Math.sin(d * .53) * .06; y = .9 + Math.cos(d * .17) * .08; bg.style.setProperty('--mx', x.toFixed(4)); bg.style.setProperty('--my', y.toFixed(4)); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [page]);
  React.useEffect(() => {
    const el = heroImg.current; if (!el) return;
    const sec = el.closest('.ks-hero');
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.style.setProperty('--p', 1); return; }
    let raf = 0;
    const upd = () => { raf = 0; const r = el.getBoundingClientRect(); const p = Math.min(1, Math.max(0, (innerHeight - r.top) / (innerHeight * 0.75))); el.style.setProperty('--p', p.toFixed(3));
      const s = sec.getBoundingClientRect(); const t = Math.min(1, Math.max(0, -s.top / (s.height * 0.55))); sec.style.setProperty('--b', (t * t * (3 - 2 * t)).toFixed(3)); };
    const on = () => { if (!raf) raf = requestAnimationFrame(upd); };
    upd(); addEventListener('scroll', on, { passive: true }); addEventListener('resize', on);
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); cancelAnimationFrame(raf); };
  }, [page]);
  const [sec, setSec] = React.useState('home');
  const navRef = React.useRef(null);
  const [bar, setBar] = React.useState(null);
  React.useEffect(() => {
    if (page !== 'home') { setSec(page); return; }
    const ids = ['impact', 'features'];
    const onScroll = () => {
      let cur = 'home';
      ids.forEach(id => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < innerHeight * 0.4) cur = id; });
      setSec(cur);
    };
    onScroll(); addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, [page]);
  React.useLayoutEffect(() => {
    const place = () => {
      const a = navRef.current && navRef.current.querySelector('[data-sec="' + sec + '"]');
      setBar(a && a.offsetWidth ? { x: a.offsetLeft, w: a.offsetWidth } : null);
    };
    place(); addEventListener('resize', place);
    return () => removeEventListener('resize', place);
  }, [sec, lang]);
  return (
    <KSLang.Provider value={{ lang, tx, setLang }}>
      <nav className={'ks-nav' + (scrolled ? ' scrolled' : '')}>
        <div className="ks-nav-l" ref={navRef}>
          <a data-sec="home" className={'lnk' + (sec === 'home' ? ' on' : '')} style={{ fontWeight: 600 }} href="/" onClick={(e) => { if (page === 'home') { e.preventDefault(); history.replaceState(null, '', '/'); window.scrollTo(0, 0); } }}>{tx('Home', 'Gida')}</a>
          <a data-sec="impact" className={'lnk' + (sec === 'impact' ? ' on' : '')} href="/#impact">{tx('Impact', 'Tasiri')}</a>
          <a data-sec="features" className={'lnk' + (sec === 'features' ? ' on' : '')} href="/#features">{tx('How we help', 'Yadda muke taimakawa')}</a>
          <a data-sec="contact" className={'lnk ks-nav-contact' + (sec === 'contact' ? ' on' : '')} href="/contact">{tx('Contact', 'Tuntuɓe mu')}</a>
          <span className="ks-nav-bar" aria-hidden="true" style={{ width: bar ? bar.w : 0, transform: 'translateX(' + (bar ? bar.x : 0) + 'px)', opacity: bar ? 1 : 0 }}></span>
        </div>
        <a className="brand" href="/" onClick={(e) => { if (page === 'home') { e.preventDefault(); history.replaceState(null, '', '/'); window.scrollTo(0, 0); } }}><img className="ks-logo-img" width="131" height="30" src="/brand/kariyar-logo.svg" alt="Kariyar"></img></a>
        <div className="ks-nav-r">
        <div className="ks-lang" role="group" aria-label="Language">
          <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
          <button className={lang === 'ha' ? 'on' : ''} onClick={() => setLang('ha')}>HA</button>
        </div>
        <GradientButton size="sm" onClick={() => (location.href = '/#talk')}><span className="ks-long">{tx('Talk to someone now', 'Yi magana da wani yanzu')}</span><span className="ks-short">{tx('Talk now', 'Yi magana')}</span></GradientButton>
        </div>
      </nav>
      {page === 'contact' ? <KSContact></KSContact> : page === 'privacy' ? <KSPrivacy></KSPrivacy> : <React.Fragment>
      <section className="ks-hero" id="top" data-screen-label="Hero">
        <div ref={heroBg} className="ks-hero-bg" aria-hidden="true"></div>
        <div className="ks-hero-text">
          <h1>{tx("Private help for women and girls, on any phone.", "Taimako na sirri ga mata da 'yan mata, a kowace waya.")}</h1>
          <p>{tx("Talk to a trained responder in Hausa or English, find clinics and legal aid near you. It's free, and you never have to give your name.", "Yi magana da ma'aikaciya da aka horar da Hausa ko Turanci, nemo asibitoci da taimakon shari'a kusa da ke. Kyauta ne, kuma ba sai kin faɗi sunanki ba.")}</p>
          <div className="ks-hero-cta"><GradientButton size="lg" onClick={() => (location.href = '/#talk')}>{tx('Talk to someone now', 'Yi magana da wani yanzu')}</GradientButton><a href="#features">{tx('See how it works', 'Duba yadda yake aiki')}</a></div>
        </div>
        <div ref={heroImg} className="ks-hero-img"><iframe src="/story/index.html" title={tx('Kariyar story: from a private message to real help', 'Labarin Kariyar: daga saƙo na sirri zuwa taimako na gaske')} loading="lazy" tabIndex="-1" aria-hidden="true"></iframe></div>
      </section>
      <KSImpact></KSImpact>
      <KSFeatures></KSFeatures>
      <KSFinale></KSFinale>
      <KSCta></KSCta>
      </React.Fragment>}
      <KSFooter></KSFooter>
    </KSLang.Provider>
  );
}
