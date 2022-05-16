<template>
  <Teleport to="body">
    <div class="step-vue">
      <canvas ref="canvas" height="100%" width="100%"></canvas>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, useSlots, VNode, ref } from "vue";
import { fabric } from "fabric";
const canvas = ref(null);
onMounted(() => {
  //   const canvasInstance = new fabric.StaticCanvas(canvas);
  //   console.log(canvasInstance);
});
</script>

<style scoped lang="less">
.step-vue {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
</style>
