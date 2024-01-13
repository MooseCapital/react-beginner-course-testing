import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({

 plugins: [react(),
 ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
  // other config settings
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {

    }
  },

  optimizeDeps: {
    include: ['echarts-for-react'], // Add your dependencies here
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
