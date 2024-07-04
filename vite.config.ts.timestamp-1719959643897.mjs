// vite.config.ts
import { defineConfig } from 'file:///C:/Users/franc/OneDrive/%C3%81rea%20de%20Trabalho/algoritmos%20na%20faculdade/lab_desenvolvimento/CondoEaser/node_modules/vite/dist/node/index.js'
import vue from 'file:///C:/Users/franc/OneDrive/%C3%81rea%20de%20Trabalho/algoritmos%20na%20faculdade/lab_desenvolvimento/CondoEaser/node_modules/@vitejs/plugin-vue/dist/index.mjs'
import Components from 'file:///C:/Users/franc/OneDrive/%C3%81rea%20de%20Trabalho/algoritmos%20na%20faculdade/lab_desenvolvimento/CondoEaser/node_modules/unplugin-vue-components/dist/vite.mjs'
import VueI18n from 'file:///C:/Users/franc/OneDrive/%C3%81rea%20de%20Trabalho/algoritmos%20na%20faculdade/lab_desenvolvimento/CondoEaser/node_modules/@intlify/vite-plugin-vue-i18n/lib/index.mjs'
import AutoImport from 'file:///C:/Users/franc/OneDrive/%C3%81rea%20de%20Trabalho/algoritmos%20na%20faculdade/lab_desenvolvimento/CondoEaser/node_modules/unplugin-auto-import/dist/vite.js'
import { resolve } from 'node:path'
import Pages from 'file:///C:/Users/franc/OneDrive/%C3%81rea%20de%20Trabalho/algoritmos%20na%20faculdade/lab_desenvolvimento/CondoEaser/node_modules/vite-plugin-pages/dist/index.mjs'
import {
  quasar,
  transformAssetUrls
} from 'file:///C:/Users/franc/OneDrive/%C3%81rea%20de%20Trabalho/algoritmos%20na%20faculdade/lab_desenvolvimento/CondoEaser/node_modules/@quasar/vite-plugin/dist/index.js'
import Unocss from 'file:///C:/Users/franc/OneDrive/%C3%81rea%20de%20Trabalho/algoritmos%20na%20faculdade/lab_desenvolvimento/CondoEaser/node_modules/unocss/dist/vite.mjs'
var __vite_injected_original_dirname =
  'C:\\Users\\franc\\OneDrive\\\xC1rea de Trabalho\\algoritmos na faculdade\\lab_desenvolvimento\\CondoEaser'
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      '~': `${resolve(__vite_injected_original_dirname, 'src')}/`
    }
  },
  plugins: [
    Unocss({}),
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: 'src/quasar-variables.sass'
    }),
    Pages({
      extensions: ['vue'],
      dirs: [{ dir: 'src/views', baseRoute: '' }]
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'vue-i18n', 'vue/macros', '@vueuse/head', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/store', 'src/helpers', 'src/stores', 'src/support/'],
      vueTemplate: true
    }),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts'
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve(__vite_injected_original_dirname, './locales/**')]
    })
  ]
})
export { vite_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxmcmFuY1xcXFxPbmVEcml2ZVxcXFxcdTAwQzFyZWEgZGUgVHJhYmFsaG9cXFxcYWxnb3JpdG1vcyBuYSBmYWN1bGRhZGVcXFxcbGFiX2Rlc2Vudm9sdmltZW50b1xcXFxDb25kb0Vhc2VyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxmcmFuY1xcXFxPbmVEcml2ZVxcXFxcdTAwQzFyZWEgZGUgVHJhYmFsaG9cXFxcYWxnb3JpdG1vcyBuYSBmYWN1bGRhZGVcXFxcbGFiX2Rlc2Vudm9sdmltZW50b1xcXFxDb25kb0Vhc2VyXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9mcmFuYy9PbmVEcml2ZS8lQzMlODFyZWElMjBkZSUyMFRyYWJhbGhvL2FsZ29yaXRtb3MlMjBuYSUyMGZhY3VsZGFkZS9sYWJfZGVzZW52b2x2aW1lbnRvL0NvbmRvRWFzZXIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcclxuaW1wb3J0IFZ1ZUkxOG4gZnJvbSBcIkBpbnRsaWZ5L3ZpdGUtcGx1Z2luLXZ1ZS1pMThuXCI7XHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gXCJ1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlXCI7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwibm9kZTpwYXRoXCI7XHJcbmltcG9ydCBQYWdlcyBmcm9tIFwidml0ZS1wbHVnaW4tcGFnZXNcIjtcclxuaW1wb3J0IHsgcXVhc2FyLCB0cmFuc2Zvcm1Bc3NldFVybHMgfSBmcm9tIFwiQHF1YXNhci92aXRlLXBsdWdpblwiO1xyXG5pbXBvcnQgVW5vY3NzIGZyb20gXCJ1bm9jc3Mvdml0ZVwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIn5cIjogYCR7cmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpfS9gLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIFVub2Nzcyh7XHJcbiAgICAgIC8qIG9wdGlvbnMgKi9cclxuICAgIH0pLFxyXG4gICAgdnVlKHtcclxuICAgICAgdGVtcGxhdGU6IHsgdHJhbnNmb3JtQXNzZXRVcmxzIH0sXHJcbiAgICB9KSxcclxuXHJcbiAgICBxdWFzYXIoe1xyXG4gICAgICBzYXNzVmFyaWFibGVzOiBcInNyYy9xdWFzYXItdmFyaWFibGVzLnNhc3NcIixcclxuICAgIH0pLFxyXG4gICAgUGFnZXMoe1xyXG4gICAgICAvLyBIZXJlIHdlIGNhbiBhZGQgJ21kJ1xyXG4gICAgICBleHRlbnNpb25zOiBbXCJ2dWVcIl0sXHJcbiAgICAgIGRpcnM6IFt7IGRpcjogXCJzcmMvdmlld3NcIiwgYmFzZVJvdXRlOiBcIlwiIH1dLFxyXG4gICAgfSksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgIFwidnVlXCIsXHJcbiAgICAgICAgXCJ2dWUtcm91dGVyXCIsXHJcbiAgICAgICAgXCJ2dWUtaTE4blwiLFxyXG4gICAgICAgIFwidnVlL21hY3Jvc1wiLFxyXG4gICAgICAgIFwiQHZ1ZXVzZS9oZWFkXCIsXHJcbiAgICAgICAgXCJAdnVldXNlL2NvcmVcIixcclxuICAgICAgXSxcclxuICAgICAgZHRzOiBcInNyYy9hdXRvLWltcG9ydHMuZC50c1wiLFxyXG4gICAgICBkaXJzOiBbXHJcbiAgICAgICAgXCJzcmMvY29tcG9zYWJsZXNcIixcclxuICAgICAgICBcInNyYy9zdG9yZVwiLFxyXG4gICAgICAgIFwic3JjL2hlbHBlcnNcIixcclxuICAgICAgICBcInNyYy9zdG9yZXNcIixcclxuICAgICAgICBcInNyYy9zdXBwb3J0L1wiLFxyXG4gICAgICBdLFxyXG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSxcclxuICAgIH0pLFxyXG5cclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAvLyBhbGxvdyBhdXRvIGxvYWQgbWFya2Rvd24gY29tcG9uZW50cyB1bmRlciBgLi9zcmMvY29tcG9uZW50cy9gXHJcbiAgICAgIGV4dGVuc2lvbnM6IFtcInZ1ZVwiLCBcIm1kXCJdLFxyXG4gICAgICAvLyBhbGxvdyBhdXRvIGltcG9ydCBhbmQgcmVnaXN0ZXIgY29tcG9uZW50cyB1c2VkIGluIG1hcmtkb3duXHJcbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkL10sXHJcbiAgICAgIGR0czogXCJzcmMvY29tcG9uZW50cy5kLnRzXCIsXHJcbiAgICB9KSxcclxuXHJcbiAgICBWdWVJMThuKHtcclxuICAgICAgcnVudGltZU9ubHk6IHRydWUsXHJcbiAgICAgIGNvbXBvc2l0aW9uT25seTogdHJ1ZSxcclxuICAgICAgaW5jbHVkZTogW3Jlc29sdmUoX19kaXJuYW1lLCBcIi4vbG9jYWxlcy8qKlwiKV0sXHJcbiAgICB9KSxcclxuICBdLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0ZSxTQUFTLG9CQUFvQjtBQUN6Z0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sYUFBYTtBQUNwQixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLGVBQWU7QUFDeEIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsUUFBUSwwQkFBMEI7QUFDM0MsT0FBTyxZQUFZO0FBUm5CLElBQU0sbUNBQW1DO0FBV3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssR0FBRyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNsQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU8sQ0FFUCxDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsTUFDRixVQUFVLEVBQUUsbUJBQW1CO0FBQUEsSUFDakMsQ0FBQztBQUFBLElBRUQsT0FBTztBQUFBLE1BQ0wsZUFBZTtBQUFBLElBQ2pCLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxNQUVKLFlBQVksQ0FBQyxLQUFLO0FBQUEsTUFDbEIsTUFBTSxDQUFDLEVBQUUsS0FBSyxhQUFhLFdBQVcsR0FBRyxDQUFDO0FBQUEsSUFDNUMsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxRQUNKO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxJQUVELFdBQVc7QUFBQSxNQUVULFlBQVksQ0FBQyxPQUFPLElBQUk7QUFBQSxNQUV4QixTQUFTLENBQUMsVUFBVSxjQUFjLE9BQU87QUFBQSxNQUN6QyxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsSUFFRCxRQUFRO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixpQkFBaUI7QUFBQSxNQUNqQixTQUFTLENBQUMsUUFBUSxrQ0FBVyxjQUFjLENBQUM7QUFBQSxJQUM5QyxDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
