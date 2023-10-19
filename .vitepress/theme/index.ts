// https://vitepress.dev/guide/custom-theme
import Layout from "./layouts/MainLayout.vue";
import "./style.scss";

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
};
