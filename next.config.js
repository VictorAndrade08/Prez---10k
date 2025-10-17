const nextConfig = {
  output: 'export',               // ✔️ Exportación estática (requerido para usar `next export`)
  trailingSlash: true,           // ✔️ Necesario para que funcione en cPanel (URLs con `/` al final)

  images: {
    unoptimized: true,           // ✔️ Obligatorio si usas <Image> con `next export`
  },

  experimental: {
    modularizeImports: {
      lodash: {
        transform: 'lodash/{{member}}', // ✔️ Solo afecta performance de lodash
      },
    },
  },

  reactStrictMode: true,         // ✔️ Recomendado en desarrollo
  swcMinify: false,              // ❌ Desactivado para evitar conflictos con estilos CSS
};

module.exports = nextConfig;
