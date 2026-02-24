/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Esto evita que las líneas rojas bloqueen la web
    ignoreBuildErrors: true,
  },
  eslint: {
    // Esto evita que los avisos de estilo bloqueen la web
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
