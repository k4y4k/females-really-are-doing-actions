import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import IstanbulPlugin from 'vite-plugin-istanbul'

export default defineConfig({
  plugins: [
    vue(),
    process.env.NODE_ENV === 'production'
      ? null
      : IstanbulPlugin({
          include: 'src/*',
          exclude: ['node_modules'],
          cypress: true,
          requireEnv: false,
        }),
  ],
})
