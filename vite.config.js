import { defineConfig } from 'vite';

export default defineConfig({
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
