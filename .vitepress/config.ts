import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";

const __dirname = fileURLToPath(new URL("./", import.meta.url));

export default defineConfig({
  title: "xkcm portfolio",
  description: "A Portfolio Page of xkcm solutions",
  srcDir: ".vitepress",
  base: "/xkcm/",
  vite: {
    resolve: {
      alias: {
        "@": __dirname,
        "/@/": __dirname,
      },
    },
  },
});
