import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Change this to https://saadhansari.com once its DNS is connected.
const url = new URL('https://saadhansari5.github.io/saadhansari.com/');

export default defineConfig({
  site: url.origin,
  base: url.pathname,
  trailingSlash: 'always',
  integrations: [mdx()],
});
