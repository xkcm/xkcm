<script setup lang="ts">
import StarsCanvas from "../components/StarsCanvas.vue";
</script>

<template>
  <section id="landing-page" class="full-size">
    <StarsCanvas />
    <div id="landing-page__headers-wrapper">
      <h1 id="landing-page__main-header">xkcm solutions</h1>
      <h2 id="landing-page__sub-header">
        developing software out of this world
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
    min-width: 70%;
    max-width: 95%;
    z-index: 1;
    margin: 0 2.5em;
  }

  --p-base-font-size: 5em;
  --p-letter-spacing: 5.5px;

  @media (width <= 576px) {
    --p-base-font-size: 2em;
    --p-letter-spacing: 2px;
  }
  &__main-header {
    font-size: var(--p-base-font-size);
    letter-spacing: var(--p-letter-spacing);
    font-weight: 400;
  }

  &__sub-header {
    font-size: calc(var(--p-base-font-size) / 2);
    letter-spacing: calc(var(--p-letter-spacing) / 2);
    font-weight: 300;
    width: 70%;
  }
}
</style>
