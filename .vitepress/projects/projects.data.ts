import { ContentData } from "@/types";
import { createContentLoader } from "vitepress";
import { ProjectFrontmatter } from "./projects.types";

declare const data: ContentData<ProjectFrontmatter>[];
export { data };

export default createContentLoader(".vitepress/projects/*/*.md");
