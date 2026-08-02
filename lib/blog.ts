import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
  locale: string;
  author: string;
  image?: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export function getAllPosts(locale?: string): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
    const { data } = matter(raw);

    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      category: data.category || 'General',
      readingTime: data.readingTime || '5 min',
      locale: data.locale || 'fr',
      author: data.author || 'Cyril Marchand',
      image: data.image,
    } as BlogPostMeta;
  });

  const filtered = locale ? posts.filter((p) => p.locale === locale) : posts;
  return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    date: data.date || new Date().toISOString(),
    category: data.category || 'General',
    readingTime: data.readingTime || '5 min',
    locale: data.locale || 'fr',
    author: data.author || 'Cyril Marchand',
    image: data.image,
    content,
  };
}

export function getCategories(locale?: string): string[] {
  const posts = getAllPosts(locale);
  const categories = new Set(posts.map((p) => p.category));
  return Array.from(categories);
}
