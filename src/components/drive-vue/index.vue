<template>
  <slot></slot>
  <StepVueMask :positionInfo="hightLightInfo" v-if="props.visible" />
  <StepVuePopover
    :positionInfo="popoverInfo"
    v-if="props.visible"
    :arrow="props.arrow"
    @popoverMounted="popoverMounted"
  >
    <template #ctx>
      <slot name="ctx"></slot>
    </template>
  </StepVuePopover>
</template>

<script lang="ts" setup>
import { onMounted, reactive, RendererNode, useSlots, VNode } from "vue";

import StepVueMask from "./components/step-vue-mask/index.vue";
import StepVuePopover from "./components/step-vue-popover/index.vue";
import { IPositionInfo, TArrow, TPopover } from "@/types";
const props = defineProps<{
  visible: boolean;
  arrow: TArrow;
}>();

const slots = useSlots();

const vmSlots = slots.default?.();

const hightLightInfo = reactive({
  x: 0,
  y: 0,
  height: 0,
  width: 0,
});
const popoverInfo = reactive({
  x: 0,
  y: 0,
  height: 0,
  width: 0,
});

const popoverMounted = (popover: TPopover) => {
  const popoverInfo = getPositionInfo(popover.value);
  const { x, y, height, width } = computedPositionWidthArrow(
    popoverInfo,
    hightLightInfo,
    props.arrow
  );
  popoverInfo.x = x;
  popoverInfo.y = y;
  popoverInfo.height = height;
  popoverInfo.width = width;
};

const computedPositionWidthArrow = (
  popoverInfo: IPositionInfo,
  hightLightInfo: IPositionInfo,
  arrow: TArrow
) => {
  switch (arrow) {
    case "top":
      return {
        ...hightLightInfo,
        y: hightLightInfo.y - hightLightInfo.height - 200,
      };
    case "bottom":
      return {
        ...hightLightInfo,
      };
    case "right":
      return {
        ...hightLightInfo,
        x: hightLightInfo.x + hightLightInfo.width + 12,
        y: hightLightInfo.y - hightLightInfo.height,
      };
    case "left":
      return {
        ...hightLightInfo,
        x: hightLightInfo.x - hightLightInfo.width - 12,
        y: hightLightInfo.y - hightLightInfo.height,
      };
  }
};

const getTarget = (vmSlots: VNode[]) => {
  const target = vmSlots[0];
  return target.el;
};

const getPositionInfo = (target: RendererNode | HTMLElement | null) => {
  const { x, y, height, width } = target?.getBoundingClientRect();
  return { x, y, height, width };
};

const init = () => {
  if (vmSlots) {
    const targetInfo = getTarget(vmSlots);
    if (targetInfo) {
      const { x, y, height, width } = getPositionInfo(targetInfo);
      hightLightInfo.x = x;
      hightLightInfo.y = y;
      hightLightInfo.height = height;
      hightLightInfo.width = width;
    }
  }
};
onMounted(() => {
  init();
  window.addEventListener("resize", init);
});
</script>

<style scoped lang="less"></style>
