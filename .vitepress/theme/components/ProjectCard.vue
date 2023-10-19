<script setup lang="ts">
import { computed } from "vue";
import { omitNil } from "../helpers/object";

const { bgColor, borderColor } = defineProps<{
  projectId: string;
  projectName: string;
  summary: string;
  href: string;

  bgColor?: string;
  borderColor?: string;
}>();

const cssVariables = computed(() =>
  omitNil({
    "--bg-color": bgColor,
    "--border-color": borderColor,
  }),
);
</script>

<template>
  <article class="project-card" :style="cssVariables">
    <h4>
      <a :href="href">{{ projectName }}</a>
    </h4>

    <p>{{ summary }}</p>

    <a :href="href" tabindex="-1">Learn more</a>
  </article>
</template>

<style lang="scss">
@use "@/theme/utils.scss";

.project-card {
  --_bg-color: var(--bg-color, #{utils.getColor(card-bg)});
  --_border-color: var(--border-color, #{utils.getColor(card-border)});
  padding: 1.4rem 2rem;
  background-color: var(--_bg-color);
  border: 2px solid var(--_border-color);
  font-size: 1em;

  > a {
    color: utils.getColor(blue);
    opacity: 0.8;
    transition: opacity 50ms linear;
    &:hover {
      opacity: 1;
    }
  }

  > h4 a {
    color: utils.getColor(text);
    text-decoration: none;
  }

  box-shadow: 0 0 2px 0 var(--_border-color) inset;
}
</style>
