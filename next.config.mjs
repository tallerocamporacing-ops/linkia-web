/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export para servir desde Cloudflare Pages (Free plan, sin runtime).
  // Los headers HTTP se sirven vía public/_headers (formato nativo de Pages).
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
