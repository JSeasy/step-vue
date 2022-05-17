<template>
  <Teleport to="body">
    <div
      class="step-vue-popover"
      :style="{
        left: positionInfo.x + 'px',
        top: positionInfo.y + positionInfo.height + 12 + 'px',
        width: positionInfo.width + 'px',
      }"
    >
      <slot name="top"></slot>
      <div class="step-vue-arrow step-vue-arrow-top"></div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useSlots } from "vue";

const { positionInfo } = defineProps<{
  positionInfo: { x: number; y: number; height: number; width: number };
}>();
const slots = useSlots();
</script>

<style scoped lang="less">
.step-vue-popover {
  min-height: 120px;
  background: white;
  position: absolute;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
  box-shadow: 3px 3px 20px rgb(0 0 0);
  .step-vue-arrow {
    width: 8.48528137px;
    height: 8.48528137px;
    position: absolute;
    left: 20px;
    border-color: transparent #fff #fff transparent;
    border-width: 4.24264069px;
    transform: rotate(45deg);
    border-style: solid;
    box-sizing: border-box;
  }
  .step-vue-arrow-top {
    bottom: -4.8px;
  }
  .step-vue-arrow-right {
    bottom: -4.8px;
  }
  .step-vue-arrow-left {
    bottom: -4.8px;
  }
  .step-vue-arrow-bottom {
    bottom: -4.8px;
  }
}
</style>
