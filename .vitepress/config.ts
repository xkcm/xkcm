import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vitepress";

const __dirname = fileURLToPath(new URL("./", import.meta.url));

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "xkcm portfolio",
  description: "A Portfolio Page of xkcm solutions",
  srcDir: ".vitepress",
  vite: {
    resolve: {
      alias: {
        "@": __dirname,
        "/@/": __dirname,
      },
    },
  },
});
