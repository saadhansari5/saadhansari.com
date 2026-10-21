import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('Usage: npm run new -- "Your post title"');
  process.exit(1);
}
const slug = title.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'untitled';
const date = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Los_Angeles', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
const folder = path.join(root, 'drafts');
const target = path.join(folder, `${slug}.md`);
await mkdir(folder, { recursive: true });
try {
  await writeFile(target, `---\nlayout: ../../layouts/Post.astro\ntitle: ${JSON.stringify(title)}\ndescription: ""\ndate: '${date}'\n---\n\n`, { flag: 'wx' });
} catch (error) {
  if (error.code !== 'EEXIST') throw error;
  console.error(`A draft already exists: ${target}`);
  process.exit(1);
}
console.log(`Created local draft: ${target}\nDrafts are ignored by Git and are not published.\nWhen ready, move this file to src/pages/writing/ and push to main.`);
