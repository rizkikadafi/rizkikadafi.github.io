import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rizkikadafi.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});