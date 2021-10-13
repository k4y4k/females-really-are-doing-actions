import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['src/**/*.{html,vue}'],
  },
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue,html}'],
})
