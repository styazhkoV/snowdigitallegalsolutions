// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://github.com/styazhkoV/Snow-DigitalLegalSolutions.git',
  base: '/', // если репозиторий = username.github.io
  // если репозиторий будет snowdigitallegalsolutions → base: '/snowdigitallegalsolutions/'
});