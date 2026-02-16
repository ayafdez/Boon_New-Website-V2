import { createRequire } from 'module';
import { withContentlayer } from 'next-contentlayer2';

const require = createRequire(import.meta.url);
const redirectsData = require('./redirects.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/boon-public-assets/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/djbo6r080/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  async redirects() {
    return redirectsData.map((r) => ({
      source: r.source,
      destination: r.destination,
      permanent: r.permanent ?? true,
    }));
  },
};

export default withContentlayer(nextConfig);
