import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

 plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
  // other config settings
  build: {
    target: 'esnext',
  },
  server: {
    host: 'localhost',
  },
  optimizeDeps: {
    include: ['echarts-for-react'], // Add your dependencies here
  },

  resolve: {
    alias: {
      // ... other aliases
    },
  },
  css: {
    // ... other CSS config
  },
  define: {
    // ... other defines
  },
  esbuild: {
    // ... other esbuild config
  },
  // Set the suspense timeout
  suspense: { timeout: 10000 },
  experiments: {
    optimizeDeps: {
      entries: ['echarts-for-react'], // Add your dependencies here
      experimentalCodeSplitting: true,
    },
  },

})
