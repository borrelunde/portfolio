import { defineConfig } from 'vite'

export default defineConfig({
  // Using a custom domain, we can set the base to '/'
  base: '/',
  
  // Other Vite configurations can be added here as needed
  build: {
    // Output directory that will be deployed to GitHub Pages
    outDir: 'dist',
  }
})