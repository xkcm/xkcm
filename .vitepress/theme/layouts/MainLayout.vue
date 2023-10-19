<script setup lang="ts">
import LandingPage from "./LandingPage.vue";
import ProjectsLayout from "./ProjectsLayout.vue";
</script>

<template>
  <main id="site-container">
    <LandingPage />
    <ProjectsLayout />
  </main>
</template>

<style lang="scss">
@use "@/theme/utils.scss";

#site-container {
  width: 100%;
  height: 100svh;
  overflow-y: auto;
  scroll-snap-type: y proximity;

  .full-size {
    scroll-snap-align: start;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: utils.getColor(background, 400);

    &-thumb {
      background-color: utils.getColor(text);
      border-radius: 4px;
    }
  }
}
</style>
