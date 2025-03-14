import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      external: ["/src/assets/images/instagram_icon.png.webp"],
    },
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `
        @import "./src/index.css";
          
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
        :root {
            --color-coffee: #5D4037;
            pinklight: #F8BBD0;
          }
        `
      }
    }
  }
})
