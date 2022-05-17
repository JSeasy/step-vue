<template>
  <slot></slot>
  <StepVue :positionInfo="positionInfo" />
</template>

<script lang="ts" setup>
import { onMounted, reactive, useSlots, VNode } from "vue";
import StepVue from "./components/index.vue";
const slots = useSlots();
const vmSlots = slots.default?.();
const positionInfo = reactive({
  x: 0,
  y: 0,
  height: 0,
  width: 0,
});
onMounted(() => {
  console.log(vmSlots);
  if (vmSlots) {
    const getTarget = (vmSlots: VNode[]) => {
      const target = vmSlots[0];
      return target.el;
    };
    const targetInfo = getTarget(vmSlots) as HTMLElement;
    const { x, y, height, width } = targetInfo.getBoundingClientRect();

    positionInfo.x = x;
    positionInfo.y = y;
    positionInfo.height = height;
    positionInfo.width = width;
  }
});
</script>

<style scoped lang="less"></style>
