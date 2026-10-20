# saadhansari.com

Saad Ansari's personal blog, built with Astro and MDX and hosted on GitHub Pages.
This is a standalone repository, independent of Partake. The initial pages intentionally use browser defaults; design comes later.

## Local development

Requires Node.js 22.22+ (or a newer supported LTS).

```sh
npm ci
npm run dev
```

## Publish a post

Add `src/pages/writing/my-post.mdx`:

```mdx
---
layout: ../../layouts/Post.astro
title: My first post
description: A short description of this post.
date: '2026-10-20'
---

Write here using Markdown.
```

The post appears automatically in the writing index. Put reusable interactive components in `src/components/` and import them into MDX posts. Standalone exhibits can live in `src/pages/exhibits/`.

Run `npm run build`, then commit and push to `main` to publish through GitHub Actions.
All committed post files are published; keep unfinished writing outside the published pages directory.

## Domain setup

The initial deployment uses https://saadhansari5.github.io/saadhansari.com/.
After connecting saadhansari.com in GitHub Pages and GoDaddy DNS, change the URL in `astro.config.mjs` to `https://saadhansari.com/` and rebuild.
Keep this repository's Pages and DNS settings independent of other projects.
