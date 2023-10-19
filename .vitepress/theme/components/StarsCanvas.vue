<script setup lang="ts">
import { vElementSize } from "@vueuse/components";
import { ref } from "vue";

import { paintStars } from "../helpers/paint-stars";

const canvas = ref<HTMLCanvasElement>(null);

const onResize = ({ width, height }: { width: number; height: number }) => {
  canvas.value.height = height;
  canvas.value.width = width;
  paintStars(canvas.value);
};
</script>

<template>
  <div class="full-size stars__container" v-element-size="onResize">
    <canvas class="stars__canvas" ref="canvas"></canvas>
  </div>
</template>

<style lang="scss">
.stars__container {
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}
</style>
