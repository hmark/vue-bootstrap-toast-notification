import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    cssCodeSplit: true,
    target: "esnext",
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'VueBootstrapToastNotification',
      // the proper extensions will be added
      fileName: 'vue-bootstrap-toast-notification'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
