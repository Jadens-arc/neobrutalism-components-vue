import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'NeobrutalistComponents',
      fileName: (format) => `neobrutalism-components.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'radix-vue', '@vueuse/core', 'class-variance-authority', 'clsx', 'tailwind-merge', 'lucide-vue-next', 'date-fns', 'vue-sonner', 'v-calendar', 'embla-carousel-vue', 'vaul-vue', 'vue3-otp-input'],
      output: {
        globals: {
          vue: 'Vue',
          'radix-vue': 'RadixVue',
          '@vueuse/core': 'VueUse',
          'class-variance-authority': 'ClassVarianceAuthority',
          'clsx': 'clsx',
          'tailwind-merge': 'tailwindMerge',
          'lucide-vue-next': 'LucideVueNext',
          'date-fns': 'dateFns',
          'vue-sonner': 'VueSonner',
          'v-calendar': 'VCalendar',
          'embla-carousel-vue': 'EmblaCarouselVue',
          'vaul-vue': 'VaulVue',
          'vue3-otp-input': 'Vue3OtpInput'
        }
      }
    }
  }
})
