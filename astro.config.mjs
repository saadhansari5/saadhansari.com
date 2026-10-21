import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const url = new URL('https://saadhansari.com/');

export default defineConfig({
  site: url.origin,
  base: url.pathname,
  trailingSlash: 'always',
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
  },
  integrations: [mdx()],
});
