import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages often serves the site from a sub-path (repo name).
  // `./` keeps asset URLs relative so they work on Pages.
  base: './',
})
