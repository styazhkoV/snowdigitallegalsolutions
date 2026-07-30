import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://styazhkov.github.io',
  base: '/snowdigitallegalsolutions',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});