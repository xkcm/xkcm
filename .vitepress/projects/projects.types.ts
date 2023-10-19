export interface ProjectFrontmatter {
  projectId: string;
  projectName: string;
  summary: string;
  status: "wip" | "maintain" | "finished" | "paused";
  repo?: string;

  style?: {
    card: {
      border: string;
      background: string;
    };
  };
}
