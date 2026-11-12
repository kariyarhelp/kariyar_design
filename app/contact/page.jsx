import ClientApp from '../../components/ClientApp.jsx';
import SeoContent from '../../components/SeoContent.jsx';
import JsonLd from '../../components/JsonLd.jsx';
import { pageMetadata, jsonLd } from '../../lib/site.js';

export const metadata = pageMetadata('contact');

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd('contact')} />
      <SeoContent page="contact" />
      <ClientApp page="contact" />
    </>
  );
}
