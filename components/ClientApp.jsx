'use client';
import dynamic from 'next/dynamic';
import BootScreen from './BootScreen.jsx';

// The interactive site relies on window, localStorage and scroll APIs, so it renders on the client.
// The server still sends the full page text (SeoContent) so search engines see it without running JS.
const KariyarApp = dynamic(() => import('./KariyarApp.jsx'), { ssr: false, loading: () => <BootScreen /> });

export default function ClientApp({ page }) {
  return <KariyarApp page={page} />;
}
