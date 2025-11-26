import { defineConfig } from 'vite';

export default defineConfig({
  // Set base path for GitHub Pages
  // For repo at https://github.com/lokesh/open-library-prototype-web-awesome
  // The site will be at https://lokesh.github.io/open-library-prototype-web-awesome/
  base: process.env.NODE_ENV === 'production' 
    ? '/open-library-prototype-web-awesome/' 
    : '/',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        manualChunks: {
          'webawesome': ['@awesome.me/webawesome']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['@awesome.me/webawesome']
  }
});
