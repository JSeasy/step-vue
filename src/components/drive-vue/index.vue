<template>
  <slot></slot>
  <StepVueMask :positionInfo="positionInfo" v-if="props.visible" />
  <StepVuePopover
    :positionInfo="positionInfo"
    v-if="props.visible"
    :arrow="props.arrow"
  >
    <template #ctx>
      <slot name="ctx"></slot>
    </template>
  </StepVuePopover>
</template>

<script lang="ts" setup>
import { onMounted, reactive, useSlots, VNode } from "vue";

import StepVueMask from "./components/step-vue-mask/index.vue";
import StepVuePopover from "./components/step-vue-popover/index.vue";
import { TArrow } from "@/types";
const props = defineProps<{
  visible: boolean;
  arrow: TArrow;
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
const init = () => {
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
};
onMounted(() => {
  init();
  window.addEventListener("resize", init);
});
</script>

<style scoped lang="less"></style>
