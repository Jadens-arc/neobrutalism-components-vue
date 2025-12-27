import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'neobrutalism-components-vue': fileURLToPath(new URL('../src/index.js', import.meta.url)),
      '@': fileURLToPath(new URL('../src', import.meta.url))
    },
    dedupe: ['vue']
  },
  optimizeDeps: {
    exclude: ['neobrutalism-components-vue']
  }
})
