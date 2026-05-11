import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/hope-for-life-ministries-international/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
