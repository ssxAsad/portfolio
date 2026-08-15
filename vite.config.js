import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // You are missing this line

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})