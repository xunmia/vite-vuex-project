import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
        external: ['vue','vuex'],
        output: {
            paths: {
                vue: 'https://cdn.jsdelivr.net/npm/vue@3.0.7/dist/vue.esm-browser.prod.js',
                vuex: 'https://cdn.jsdelivr.net/npm/vuex@4.0.0/dist/vuex.esm-browser.prod.js'
            }
        }
    }
},
  plugins: [vue()]
})
