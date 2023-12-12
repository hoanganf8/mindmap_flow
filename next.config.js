/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    MINDMAP_URL: process.cwd() + "/data/mindmap.json",
    HOST_URL: process.env.AUTH0_BASE_URL,
  },
  async headers() {
    return [
      {
        source: "/my-mindmap",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store",
          },
        ],
      },
    ];
  },
  swcMinify: false,
};

module.exports = nextConfig;
