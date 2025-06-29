
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: ["e5ba-2401-4900-8fdf-aeb9-246e-c615-a902-2f58.ngrok-free.app"],
    host: true, // This enables listening on all local IPs
  }
})