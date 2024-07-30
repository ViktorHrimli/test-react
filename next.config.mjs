/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "test-cloud-run-5ns7nwldjq-uc.a.run.app", protocol: "https" },
    ],
  },
};

export default nextConfig;
