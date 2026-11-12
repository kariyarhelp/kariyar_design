export default function BootScreen() {
  return (
    <div className="ks-boot-screen" style={{ zIndex: 100 }} role="status" aria-live="polite">
      <div className="ks-boot-mark"><img className="ks-boot-logo" width="175" height="40" src="/brand/kariyar-logo-white.svg" alt="Kariyar" /></div>
      <span className="ks-boot-bar"><i></i></span>
      <span className="ks-sr">Loading Kariyar…</span>
    </div>
  );
}
