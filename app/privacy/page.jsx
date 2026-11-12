import ClientApp from '../../components/ClientApp.jsx';
import SeoContent from '../../components/SeoContent.jsx';
import JsonLd from '../../components/JsonLd.jsx';
import { pageMetadata, jsonLd } from '../../lib/site.js';

export const metadata = pageMetadata('privacy');

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd('privacy')} />
      <SeoContent page="privacy" />
      <ClientApp page="privacy" />
    </>
  );
}
