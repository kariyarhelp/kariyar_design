/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Every redirect goes straight to its final URL in one hop (no chains).
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
    ];
  },
  async headers() {
    // The story video is an embedded helper page; keep it out of search results.
    return [{ source: '/story/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex' }] }];
  },
};
export default nextConfig;
