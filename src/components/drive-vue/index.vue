<template>
  <slot></slot>
  <StepVueMask :positionInfo="positionInfo" v-if="props.visible" />
  <StepVuePopover :positionInfo="positionInfo" v-if="props.visible">
    <template #top>
      <slot name="top"></slot>
    </template>
  </StepVuePopover>
</template>

<script lang="ts" setup>
import { onMounted, reactive, useSlots, VNode } from "vue";

import StepVueMask from "./components/step-vue-mask/index.vue";
import StepVuePopover from "./components/step-vue-popover/index.vue";
const props = defineProps<{
  visible: boolean;
}>();

const slots = useSlots();
const vmSlots = slots.default?.();
const positionInfo = reactive({
  x: 0,
  y: 0,
  height: 0,
  width: 0,
});

const getTarget = (vmSlots: VNode[]) => {
  const target = vmSlots[0];
  return target.el;
};
onMounted(() => {
  if (vmSlots) {
    const targetInfo = getTarget(vmSlots);
    if (targetInfo) {
      const { x, y, height, width } = targetInfo.getBoundingClientRect();
      positionInfo.x = x;
      positionInfo.y = y;
      positionInfo.height = height;
      positionInfo.width = width;
    }
  }
  window.addEventListener("resize", () => {
    if (vmSlots) {
      const targetInfo = getTarget(vmSlots);
      if (targetInfo) {
        const { x, y, height, width } = targetInfo.getBoundingClientRect();
        positionInfo.x = x;
        positionInfo.y = y;
        positionInfo.height = height;
        positionInfo.width = width;
      }
    }
  });
});
</script>

<style scoped lang="less"></style>
