import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Configuração do Vite com suporte ao React e Tailwind CSS v4
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})
