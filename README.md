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

The site is configured for https://saadhansari.com/. GitHub Pages uses GitHub Actions as its publishing source and saadhansari.com as its custom domain.

At GoDaddy, use four A records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. The `www` CNAME should point to `saadhansari5.github.io`.
After DNS resolves to GitHub and a certificate is issued, enable Enforce HTTPS in this repository's Pages settings.
Keep this repository's Pages and DNS settings independent of other projects.

## Design previews

Two independent, original design studies live at `/preview/pilcrow/` and `/preview/astropaper/`. They explore the typography and layout of those themes using a simple shared structure. They share reusable preview components and styles. They are not installations of the upstream themes.

Both support light and dark modes. They follow the system appearance initially and remember an explicit choice in localStorage under `saad-theme`. The preference carries between both previews and syncs across tabs. Ring and map decoration was removed after review.

The studies include clearly labeled sample writing. They are marked `noindex, nofollow`; the main blog and real writing routes remain separate. Choose a direction before applying its layout to the main blog.
