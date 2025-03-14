import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Accepter toutes les images de n'importe quel domaine
      },
      {
        protocol: 'http',
        hostname: '**', // Accepter aussi les images HTTP (optionnel, selon les besoins)
      },
    ],
  },
};

export default nextConfig;
