import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    // This is what tells Vite to fallback to index.html for all routes (SPA behavior)
    fs: {
      allow: ['.'],
    },
  },
  
})
