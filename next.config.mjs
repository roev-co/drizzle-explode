/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // If you uyncomment the below line, the build will succeed:
    // serverComponentsExternalPackages: ["drizzle-orm"],
  },
};

export default nextConfig;
