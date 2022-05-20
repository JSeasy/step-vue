<template>
  <Teleport to="body">
    <div
      class="step-vue-popover"
      ref="popover"
      :style="{ left: positionInfo.x + 'px', top: positionInfo.y + 'px' }"
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
import { useSlots, withDefaults, ref, onMounted } from "vue";

import { TArrow, IPositionInfo, TPopover } from "@/types";
const popover = ref(null);

const emit = defineEmits<{
  (event: "pre"): void;
  (event: "next"): void;
  (event: "popoverMounted", popover: TPopover): void;
}>();

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
  emit("popoverMounted", popover);
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
    margin-bottom: 5px;
  }
  .step-vue-btns-wrap {
    display: flex;
    justify-content: space-between;
    button {
      cursor: pointer;
    }
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
