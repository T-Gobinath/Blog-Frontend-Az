import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/tima/',   // ✅ ADD THIS LINE (VERY IMPORTANT)

  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],

  server: {
    proxy: {
      '/spline-proxy': {
        target: 'https://prod.spline.design',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/spline-proxy/, ''),
        headers: {
          'Origin': 'https://my.spline.design',
          'Referer': 'https://my.spline.design/'
        }
      }
    }
  },

  build: {
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('three')) return 'three'
          if (id.includes('@react-three')) return 'three'
          if (id.includes('gsap')) return 'gsap'
          if (id.includes('framer-motion')) return 'framer'
          if (id.includes('@splinetool')) return 'spline'
          if (id.includes('node_modules')) return 'vendor'
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || ['asset']
          const ext = info[info.length - 1]
          if (/png|jpe?g|gif|webp|svg/.test(ext)) {
            return `assets/images/[name].[hash][extname]`
          }
          return `assets/[name].[hash][extname]`
        }
      }
    },

    cssCodeSplit: true,
  },

  ssr: {
    noExternal: ['zustand']
  }
})