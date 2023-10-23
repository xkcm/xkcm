import { createContentLoader } from "vitepress";
import { LocalContentData } from "@/types";
import { ProjectFrontmatter } from "./projects.types";

declare const data: LocalContentData<ProjectFrontmatter>[];
export { data };

export default createContentLoader(".vitepress/projects/*/*.md");
