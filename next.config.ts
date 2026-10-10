import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio 100% estático: `next build` genera `out/` (sin servidor).
  output: "export",
  images: {
    // Requerido por `output: export`: no hay optimizador de imágenes en runtime.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
    ],
  },
};

export default nextConfig;
