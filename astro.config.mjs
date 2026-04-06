// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://asrajavel.github.io',
  base: '/iskcon-tuticorin',
  vite: {
    plugins: [tailwindcss()],
  },
});
