import { ContentData } from "vitepress";

export interface LocalContentData<T = Record<string, any>> extends ContentData {
  frontmatter: T;
}
