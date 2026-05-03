/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/projects/:slug*',
        has: [
          {
            type: 'query',
            key: 'slug',
            value: '.* .*', // Detects spaces
          },
        ],
        destination: '/projects/:slug',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
