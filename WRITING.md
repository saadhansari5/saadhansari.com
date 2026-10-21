# Writing on saadhansari.com

The easiest workflow: write a draft in Obsidian, another text editor, or this chat, then ask to format and publish it. The site takes care of fonts, spacing, mobile layout, and light/dark mode. Say “save as a draft” when it should stay unpublished.

## Start a blank draft

From this repository:

```sh
npm run new -- "Your post title"
```

Open the resulting `drafts/your-post-title.md` in your editor. The title and date are filled in. Write a short description between the quotes; it appears in the writing index and search metadata.

The local `drafts/` folder is ignored by Git. Files committed elsewhere in this repository are public, even if they do not appear on the website.

You can also copy `templates/post.md` to the drafts folder manually. Leave the `layout` line as supplied. Fill in the title, description, and an ISO date such as `2026-10-20`.

## Format with Markdown

Start writing directly below the closing `---`. The title at the top of the file becomes the page heading automatically.

```md
An ordinary paragraph. Leave a blank line between paragraphs.

## A section heading

### A smaller heading

**Bold**, *italic*, and [a link](https://example.com).

- A list item
- Another item

1. A numbered item
2. Another item

> A quotation.

![Describe the image](/images/my-photo.jpg)
```

For an image, put its file in `public/images/`, then use its `/images/filename` address in the post. Add meaningful alt text inside the brackets.

For code, use three backticks before and after the code, optionally followed by a language name such as `js` on the opening line. Code colors adjust to light/dark mode. Markdown tables are supported too.

## Preview and publish

To see the actual site layout before publishing, copy or move the finished draft into `src/pages/writing/` and run `npm run dev`. Open the printed local address and visit Writing. A file called `my-post.md` appears at `/writing/my-post/`.

Copying a file into this folder makes it part of the next deployment. Commit and push to `main` only when it is ready to go live. If you decide to keep drafting, move it back to `drafts/` first.

Run `npm run build` before publishing. A successful push triggers automatic deployment. You can also edit existing published files through GitHub's pencil button and commit the change.

## Interactive exhibits

Use `.mdx` instead of `.md` when a post needs a custom chart, map, or simulation. It still supports Markdown, plus imports of reusable components:

```mdx
import MyChart from '../../components/MyChart.astro';

## Explore the data

<MyChart />
```

The component must exist before importing it. Ask to build the visualization, and keep writing the surrounding explanation normally. Interactive components can use the site's `--paper`, `--ink`, `--muted`, `--accent`, and `--line` CSS variables to follow the reader's theme.
