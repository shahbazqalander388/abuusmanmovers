import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  build: {
    cssCodeSplit: true,
    sourcemap: false,
    target: 'es2020',
    modulePreload: { polyfill: false },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'react';
            }
            if (id.includes('i18next') || id.includes('react-i18next') || id.includes('i18next-browser-languagedetector')) {
              return 'i18n';
            }
            if (id.includes('framer-motion')) {
              return 'motion';
            }
            if (id.includes('@react-google-maps/api')) {
              return 'maps';
            }
            if (id.includes('@tsparticles') || id.includes('tsparticles')) {
              return 'particles';
            }
            if (id.includes('react-icons')) {
              return 'icons';
            }
          }
        },
      },
    },
  },
})
