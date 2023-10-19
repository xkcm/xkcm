<script setup lang="ts">
import StarsCanvas from "../components/StarsCanvas.vue";
</script>

<template>
  <section id="landing-page" class="full-size">
    <StarsCanvas />
    <div id="landing-page__headers-wrapper">
      <h1 id="landing-page__main-header">xkcm solutions</h1>
      <h2 id="landing-page__sub-header">
        creating highest quality software since the beginning of the universe
      </h2>
    </div>
  </section>
</template>

<style lang="scss">
@use "@/theme/utils.scss";

#landing-page {
  color: utils.getColor(text);
  display: grid;
  place-items: center;
  position: relative;

  background: linear-gradient(
    180deg,
    utils.getColor(background, 400),
    utils.getColor(background, 300) 50%
  );

  &__headers-wrapper {
    width: 70%;
    z-index: 1;
  }

  &__main-header {
    font-size: 78px;
    letter-spacing: 5.5px;
    font-weight: 400;
  }

  &__sub-header {
    font-size: 36px;
    letter-spacing: 1%;
    font-weight: 300;
    width: 70%;
  }
}
</style>
