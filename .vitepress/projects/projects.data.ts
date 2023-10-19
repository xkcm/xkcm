import { ContentData } from "@/types";
import { createContentLoader } from "vitepress";
import { ProjectsFrontmatter } from "./projects.types";

declare const data: ContentData<ProjectsFrontmatter>[];
export { data };

export default createContentLoader(".vitepress/projects/*/*.md");
