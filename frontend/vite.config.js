import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Dev-only: avoid CORS/ngrok interstitial by proxying through Vite
      '/api': {
        target: 'https://cranium-deplete-wasting.ngrok-free.dev',
        changeOrigin: true,
        secure: true,
        headers: {
          'ngrok-skip-browser-warning': '1',
        },
      },
    },
  },
});