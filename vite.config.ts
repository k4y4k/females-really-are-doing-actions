import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import IstanbulPlugin from 'vite-plugin-istanbul'
import pugPlugin from 'vite-plugin-pug'

export default defineConfig({
  plugins: [
    vue(),
    pugPlugin(),
    process.env.NODE_ENV === 'production'
      ? null
      : IstanbulPlugin({
          include: 'src/*',
          exclude: ['node_modules', '.yarn/cache'],
          cypress: true,
          requireEnv: false,
        }),
  ],
})
