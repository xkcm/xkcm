<script setup lang="ts">
import { computed } from "vue";
import { omitNil } from "../helpers/object";
import { ProjectFrontmatter } from "@/projects/projects.types";

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
  --_bg-color: var(--bg-color, #{utils.getColor(background, 200)});
  --_border-color: var(--border-color, #{utils.getColor(background, 100)});
  padding: 0.8rem 1rem;
  background-color: var(--_bg-color);
  border: 2px solid var(--_border-color);
  border-radius: 9px;
  width: 40%;
  @media (width <= 576px) {
    width: 80%;
  }
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

  --_shadow-color: var(--_border-color);
  box-shadow:
    0 0 2px 0 var(--_shadow-color),
    0 0 4px 0 var(--_shadow-color),
    0 0 6px 0 var(--_shadow-color);
}
</style>
