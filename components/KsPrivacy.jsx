'use client';
import React from 'react';
import { useKS } from './KsFigures.jsx';

const KS_PRIV = [
  { id: 'collect', h: ['What we collect', 'Abin da muke tattarawa'], body: [
    ['Messages you send to a responder, while the conversation is open.', 'Only the details you choose to share. You never need to give your name, address or phone number.', 'Basic technical data needed to keep the service running, such as app version and whether a message was delivered.']
  ] },
  { id: 'never', h: ['What we never collect', 'Abin da ba ma tattarawa'], body: [
    ['Your contacts, photos or call history.', 'Your exact location, unless you choose to share it to find a nearby service.', 'Advertising or tracking IDs. We do not run ads and we do not sell data.']
  ] },
  { id: 'use', h: ['How we use it', 'Yadda muke amfani da shi'], body: [
    ['To connect you with a trained responder and keep the conversation going.', 'To refer you to a clinic, legal aid group or safe space, only when you agree.', 'To count how many people we help. These counts never include names or messages.']
  ] },
  { id: 'see', h: ['Who can see it', 'Wa zai iya gani'], body: [
    ['The responder helping you, and their supervisor if your safety is at risk.', 'A partner service, only the details needed for a referral you have agreed to.', 'Programme partners and funders see totals only, never individual conversations.']
  ] },
  { id: 'keep', h: ['How long we keep it', 'Tsawon lokacin da muke ajiye shi'], body: [
    ['Nothing is saved on your phone unless you choose to save it.', 'Conversations are deleted from our system after they close, unless you ask us to keep a record for follow-up.', 'Anonymous counts are kept to report on the programme.']
  ] },
  { id: 'phone', h: ['If you share a phone', 'Idan kina raba waya'], body: [
    ['Kariyar opens behind a neutral Notes screen and can be locked with a PIN.', 'Quick exit closes the app instantly and clears what was on screen.', 'SMS and USSD (*384*77#) messages use neutral wording that does not mention Kariyar.']
  ] },
  { id: 'choices', h: ['Your choices', 'Zaɓinki'], body: [
    ['End a conversation and delete it at any time.', 'Say no to a referral. You can still keep talking.', 'Ask what we hold about you, or ask us to delete it, using the contact page.']
  ] },
  { id: 'safety', h: ['When we may share without asking', 'Lokacin da za mu iya raba ba tare da tambaya ba'], body: [
    ['If a responder believes someone is in immediate danger of serious harm, they may contact emergency services. We will tell you when we do this, if it is safe to.']
  ] },
];
const KS_PRIV_SHORT = [
  ['user-circle-dashed', "You don't have to give your name.", 'Ba sai kin faɗi sunanki ba.'],
  ['trash', 'Nothing is saved unless you choose.', 'Ba a ajiye komai sai kin zaɓa.'],
  ['hand-palm', 'We never sell data or show ads.', 'Ba ma sayar da bayanai ko nuna talla.'],
  ['handshake', 'Referrals happen only when you agree.', 'Ana tura ki ne kawai idan kin yarda.'],
];
function KSPrivacy() {
  const { tx, lang } = useKS();
  const [on, setOn] = React.useState(KS_PRIV[0].id);
  React.useEffect(() => {
    const els = KS_PRIV.map(s => document.getElementById('pv-' + s.id)).filter(Boolean);
    const io = new IntersectionObserver(es => { es.forEach(e => { if (e.isIntersecting) setOn(e.target.id.slice(3)); }); }, { rootMargin: '-30% 0px -60% 0px' });
    els.forEach(el => io.observe(el)); return () => io.disconnect();
  }, []);
  const go = (e, id) => { e.preventDefault(); const el = document.getElementById('pv-' + id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 88, behavior: 'smooth' }); };
  return (
    <main className="ks-priv" data-screen-label="Privacy policy">
      <header className="ks-pv-head">
        <span className="ks-eyebrow">{tx('Privacy policy', 'Manufar sirri')}</span>
        <h1>{tx('Your privacy keeps you safe.', 'Sirrinki yana kare ki.')}</h1>
        <p>{tx('Kariyar is built for women and girls who may be at risk. This page explains what we collect, who can see it and how long we keep it.', "An gina Kariyar don mata da 'yan mata da ke iya fuskantar haɗari. Wannan shafi yana bayyana abin da muke tattarawa, wa zai iya gani, da tsawon lokacin da muke ajiye shi.")}</p>
        <span className="ks-pv-date">{tx('Last updated 12 November 2026', 'An sabunta 12 ga Nuwamba 2026')}</span>
      </header>
      <section className="ks-pv-short" aria-label={tx('The short version', 'A taƙaice')}>
        <h2>{tx('The short version', 'A taƙaice')}</h2>
        <ul>{KS_PRIV_SHORT.map(([ic, en, ha]) => <li key={ic}><i className={'ph ph-' + ic} aria-hidden="true"></i><span>{tx(en, ha)}</span></li>)}</ul>
      </section>
      <div className="ks-pv-body">
        <nav className="ks-pv-toc" aria-label={tx('On this page', 'A wannan shafi')}>
          <span>{tx('On this page', 'A wannan shafi')}</span>
          {KS_PRIV.map(s => <a key={s.id} href={'#pv-' + s.id} className={on === s.id ? 'on' : ''} onClick={(e) => go(e, s.id)}>{tx(s.h[0], s.h[1])}</a>)}
        </nav>
        <div className="ks-pv-sections">
          {lang === 'ha' && <p className="ks-pv-note"><i className="ph ph-translate" aria-hidden="true"></i>Ana fassara cikakken bayani zuwa Hausa. A yanzu yana cikin Turanci.</p>}
          {KS_PRIV.map((s, n) => <section key={s.id} id={'pv-' + s.id} className="ks-pv-sec">
            <h2><em>{String(n + 1).padStart(2, '0')}</em>{tx(s.h[0], s.h[1])}</h2>
            <ul>{s.body[0].map((t, k) => <li key={k}>{t}</li>)}</ul>
          </section>)}
          <section className="ks-pv-contact">
            <div><h2>{tx('Questions about your data?', 'Tambayoyi game da bayananki?')}</h2><p>{tx('Write to us and we will reply by email. If you are in danger now, call 112.', 'Rubuto mana kuma za mu amsa ta imel. Idan kina cikin haɗari yanzu, kira 112.')}</p></div>
            <a className="ks-pv-btn" href="/contact">{tx('Contact us', 'Tuntuɓe mu')}</a>
          </section>
        </div>
      </div>
    </main>
  );
}

export { KSPrivacy };
