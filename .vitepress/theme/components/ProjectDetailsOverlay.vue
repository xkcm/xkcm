<script setup lang="ts">
import { useRouter } from "vitepress";
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";
import { onClickOutside, onKeyUp } from "@vueuse/core";
import { ProjectFrontmatter } from "@/projects/projects.types";

const { status } = defineProps<{
  projectName: string;
  status: ProjectFrontmatter["status"];
  repo?: ProjectFrontmatter["repo"];
}>();

const container = ref<HTMLElement>(null);
const router = useRouter();

const close = () => router.go("/projects/");
const statusCaption = computed(
  () =>
    ({
      maintain: "Maintained",
      wip: "In Progress",
      finished: "Finished",
    })[status],
);

onKeyUp("Escape", close, { target: document });
onClickOutside(container, close);
</script>

<template>
  <div id="project-details__layout" class="full-size">
    <article id="project-details__container" ref="container">
      <a href="/projects/">&lt; Go back to projects</a>

      <h2>{{ projectName }}</h2>

      <p>
        <span v-if="repo" id="project-details__repo-link">
          Repository:
          <a :href="repo" target="_blank">
            {{ repo }} <Icon icon="mdi:github" :height="20" />
          </a>
        </span>
      </p>
      <p>
        <span id="project-details__status" v-if="statusCaption">
          Status: {{ statusCaption }}
        </span>
      </p>

      <slot />
    </article>
  </div>
</template>

<style lang="scss">
@use "@/theme/utils.scss";

#project-details {
  &__layout {
    position: fixed;
    left: 0;
    top: 0;
    color: utils.getColor(text);
    padding: 2em;
    box-sizing: border-box;
    overflow: auto;
    @include utils.useAppScrollbar;
    @media (width <= 576px) {
      padding: 10px;
    }
  }

  &__container {
    margin: 0 auto;
    padding: 1rem 2rem;
    background-color: utils.getColor(background, 200);
    width: 60%;
    @media (width <= 576px) {
      width: 100%;
    }

    min-height: 100%;
    border-radius: 4px;
    box-sizing: border-box;

    > a {
      font-size: 0.9rem;
    }

    a {
      color: utils.getColor(blue);
    }

    > h2 {
      font-size: 2rem;
      padding: 1.5rem 0 0rem 0;
    }
  }

  &__repo-link {
    a {
      display: inline-flex;
      align-items: flex-end;
      gap: 4px;
    }
  }
}
</style>
