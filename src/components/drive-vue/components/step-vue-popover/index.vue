<template>
  <Teleport to="body">
    <div
      class="step-vue-popover"
      :style="{
        left: computedPositionInfo.x + 'px',
        top: computedPositionInfo.y + computedPositionInfo.height + 12 + 'px',
        width: computedPositionInfo.width + 'px',
      }"
    >
      <div class="step-vue-ctx-wrap">
        <slot name="ctx"></slot>
      </div>
      <div :class="['step-vue-arrow', `step-vue-arrow-${arrow}`]"></div>
      <div class="step-vue-btns-wrap">
        <div class="step-vue-pre-btn-wrap">
          <button @click="emit('pre')">pre</button>
        </div>
        <div class="step-vue-next-btn-wrap">
          <button @click="emit('next')">next</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useSlots, withDefaults, ref, onMounted } from "vue";

import { TArrow, IPositionInfo } from "@/types";
const popover = ref(null);
const computedPositionInfo = computed(() =>
  computedPositionWidthArrow(positionInfo, arrow)
);

const emit = defineEmits<{ (event: "pre"): void; (event: "next"): void }>();
const computedPositionWidthArrow = (position: IPositionInfo, arrow: TArrow) => {
  switch (arrow) {
    case "top":
      return {
        ...position,
        y: position.y - position.height - 200,
      };
    case "bottom":
      return {
        ...position,
      };
    case "right":
      return {
        ...position,
        x: position.x + position.width + 12,
        y: position.y - position.height,
      };
    case "left":
      return {
        ...position,
        x: position.x - position.width - 12,
        y: position.y - position.height,
      };
  }
};

const { positionInfo, arrow } = withDefaults(
  defineProps<{
    positionInfo: IPositionInfo;
    arrow: TArrow;
  }>(),
  {
    arrow: "top",
  }
);
useSlots();

onMounted(() => {
  console.log(popover);
});
</script>

<style scoped lang="less">
.step-vue-popover {
  background: white;
  position: absolute;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
  box-shadow: 3px 3px 20px rgb(0 0 0);
  transition: all 0.3s;
  .step-vue-ctx-wrap {
    min-height: 120px;
  }
  .step-vue-btns-wrap {
    display: flex;
    justify-content: space-between;
  }
  .step-vue-arrow {
    width: 8.48528137px;
    height: 8.48528137px;
    position: absolute;
    border-color: transparent #fff #fff transparent;
    border-width: 4.24264069px;
    border-style: solid;
    box-sizing: border-box;
  }
  .step-vue-arrow-top {
    bottom: -4.5px;
    transform: rotate(45deg);
    left: 20px;
  }
  .step-vue-arrow-left {
    right: -4.5px;
    transform: rotate(-45deg);
  }
  .step-vue-arrow-right {
    left: -4.5px;
    transform: rotate(135deg);
  }
  .step-vue-arrow-bottom {
    top: -4.5px;
    left: 20px;
    transform: rotate(225deg);
  }
}
</style>
