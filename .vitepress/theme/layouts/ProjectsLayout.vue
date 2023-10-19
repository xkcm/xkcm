<script setup lang="ts">
import { ref } from "vue";
import { vIntersectionObserver } from "@vueuse/components";

import { data as projects } from "@/projects/projects.data";
import ProjectCard from "../components/ProjectCard.vue";

const isSectionVisible = ref(false);
const onVisible = ([observerEntry]) => {
  if (!isSectionVisible.value) {
    isSectionVisible.value = observerEntry.intersectionRatio >= 1;
  }
};
</script>

<template>
  <section
    id="projects"
    class="full-size"
    v-intersection-observer="[onVisible, { threshold: 1 }]"
  >
    <div id="projects__header" :class="{ visible: isSectionVisible }">
      xkcm solutions
    </div>
    <div id="projects__container">
      <h3>My work</h3>
      <div id="projects__wrapper">
        <ProjectCard
          v-for="project of projects"
          :project-id="project.frontmatter.projectId"
          :project-name="project.frontmatter.projectName"
          :summary="project.frontmatter.summary"
          :href="project.url"
          :bg-color="project.frontmatter.style?.card.background"
          :border-color="project.frontmatter.style?.card.border"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "@/theme/utils.scss";

#projects {
  color: utils.getColor(text);
  background-image: url("@/theme/assets/geometry-bg.svg");
  background-size: cover;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &__header {
    padding: 1rem 2rem;
    font-size: 1.3rem;
    opacity: 0;
    transition: opacity 300ms linear;

    @media (width <= 576px) {
      text-align: center;
    }

    &.visible {
      opacity: 1;
    }
  }

  &__container {
    padding: 1rem 0;
    box-sizing: border-box;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100svh - 60px + 1rem);

    h3 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 2rem;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 40%;
    height: 100%;
    overflow: auto;
    padding-bottom: 1rem;
    @include utils.useAppScrollbar;
    @media (width <= 576px) {
      width: 80%;
      gap: 0.5rem;
    }
  }
}
</style>
