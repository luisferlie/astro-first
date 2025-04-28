// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://luisferlie.github.io/astro-first/',
  base: '/astro-first/',
  vite: {
    plugins: [tailwindcss()]
  }
});