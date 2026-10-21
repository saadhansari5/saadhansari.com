interface PostFrontmatter {
  title: string;
  description?: string;
  date?: string;
}
interface PostModule { frontmatter: PostFrontmatter; url?: string }

const files = import.meta.glob<PostModule>('../pages/writing/*.{md,mdx}', { eager: true });

export function getPosts() {
  return Object.values(files)
    .filter((post): post is PostModule & { url: string } => Boolean(post.url))
    .map(post => ({ ...post.frontmatter, url: post.url }))
    .sort((a, b) => String(b.date ?? '').localeCompare(String(a.date ?? '')));
}
