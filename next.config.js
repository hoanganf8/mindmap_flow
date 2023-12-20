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
  // swcMinify: false,
  experimental: {
    serverActions: {
      allowedOrigins: [
        "f8-mindmap.sanphamkythuat.online:880",
        "localhost:8000",
        "f8-mindmap.sanphamkythuat.online",
      ],
      allowedForwardedHosts: ["f8-mindmap.sanphamkythuat.online:880"],
    },
  },
  images: {
    domains: ["f8-mindmap.sanphamkythuat.online"],
  },
};

module.exports = nextConfig;
