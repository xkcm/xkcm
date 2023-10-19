export interface ContentData<T = Record<string, any>> {
  url: string;
  frontmatter: T;

  src?: string;
  html?: string;
  excerpt?: string;
}
