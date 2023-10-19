export interface ProjectFrontmatter {
  projectId: string;
  projectName: string;
  summary: string;
  status: "wip" | "maintain" | "finished";
  repo?: string;

  style?: {
    card: {
      border: string;
      background: string;
    };
  };
}
