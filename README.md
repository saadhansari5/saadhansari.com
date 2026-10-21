# saadhansari.com

Saad Ansari's personal blog, built with Astro and hosted on GitHub Pages. This is a standalone repository, independent of Partake.

The accepted layout is a simple editorial blog with light/dark mode. Writing, Exhibits, and About are intentionally empty. Theme preference follows the system initially, then remembers a manual choice across pages and tabs.

## Writing

See [WRITING.md](WRITING.md) for the short writing and formatting guide. Use Markdown (`.md`) for ordinary posts and MDX (`.mdx`) when embedding interactive components.

Create a local draft:

```sh
npm run new -- "Your post title"
```

This creates a blank Markdown file in `drafts/`. That folder is ignored by Git and excluded from the site. The repository itself is public, so keep unpublished work in this local drafts folder.

When a post is ready, move its file to `src/pages/writing/`, build, and push to `main`. It appears in the writing index automatically. Images can go in `public/images/`; reusable visual components go in `src/components/`. A blank manual starter is in [templates/post.md](templates/post.md).

## Development and publishing

Requires Node.js 22.22+ or a newer supported LTS.

```sh
npm ci
npm run dev
npm run build
```

Pushes to `main` automatically build and publish through GitHub Actions. The live site is https://saadhansari.com/ and HTTPS enforcement is enabled.

The shared site layout is `src/layouts/Base.astro`, post layout is `src/layouts/Post.astro`, and typography and theme tokens live in `src/styles/site.css`. Markdown and MDX posts share the same formatting. A `.wide` wrapper inside a post can hold an exhibit wider than the prose column.

The old design preview routes redirect to the main blog. Their sample content has been removed; prior designs remain in Git history.

## Domain

GoDaddy A records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. The `www` CNAME points to `saadhansari5.github.io`. Keep this site's DNS and deployment independent of other projects.
