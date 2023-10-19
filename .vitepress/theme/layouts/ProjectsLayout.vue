<script setup lang="ts">
import { ref } from "vue";
import { vIntersectionObserver } from "@vueuse/components";

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
  </section>
</template>

<style lang="scss">
@use "@/theme/utils.scss";

#projects {
  color: utils.getColor(text);
  background-color: utils.getColor(background, 300);
  box-sizing: border-box;

  &__header {
    padding: 1rem 2rem;
    font-size: 1.3rem;
    opacity: 0;

    &.visible {
      opacity: 1;
      animation: slide-and-fade 300ms linear forwards;
    }
  }
}

@keyframes slide-and-fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
