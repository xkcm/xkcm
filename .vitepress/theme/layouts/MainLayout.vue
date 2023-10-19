<script setup lang="ts">
import { onMounted } from "vue";
import { useData } from "vitepress";

import LandingPage from "./LandingPage.vue";
import ProjectsLayout from "./ProjectsLayout.vue";
import ProjectDetailsOverlay from "../components/ProjectDetailsOverlay.vue";

const { frontmatter } = useData();

onMounted(() => {
  const scrollToSelector =
    frontmatter.value.scrollTo || (frontmatter.value.projectId && "#projects");

  if (scrollToSelector) {
    const el = document.querySelector(scrollToSelector);
    el.scrollIntoView();
  }
});
</script>

<template>
  <main
    id="site-container"
    :class="{ 'project-details-open': !!frontmatter.projectId }"
  >
    <LandingPage />
    <ProjectsLayout />
  </main>
  <ProjectDetailsOverlay
    v-if="frontmatter.projectId"
    :project-name="frontmatter.projectName"
    :status="frontmatter.status"
    :repo="frontmatter.repo"
  >
    <Content />
  </ProjectDetailsOverlay>
</template>

<style lang="scss">
@use "@/theme/utils.scss";
body {
  background-color: utils.getColor(background, 300);
}

#site-container {
  width: 100%;
  height: 100svh;
  overflow-y: auto;
  overflow-x: hidden;
  filter: blur(0);
  transition: filter 100ms linear;
  background-color: utils.getColor(background);

  @include utils.useAppScrollbar;

  &.project-details-open {
    filter: blur(5px);
  }
}
</style>
