import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://proplogai.com',
  base: '/glossary',
  integrations: [tailwind()],
});
