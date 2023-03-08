import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {proxy: {'/graphql': {target: 'http://localhost:3001', secure: false, changeOrigin: true}}, port: 3000},
  plugins: [react()],
})
