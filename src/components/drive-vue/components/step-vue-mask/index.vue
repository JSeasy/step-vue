<template>
  <Teleport to="body">
    <div class="step-vue-mask">
      <div
        class="high-light"
        :style="{
          left: positionInfo.x + 'px',
          top: positionInfo.y + 'px',
          height: positionInfo.height + 'px',
          width: positionInfo.width + 'px',
        }"
      ></div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
// 插槽位置信息
const { positionInfo } = defineProps<{
  positionInfo: { x: number; y: number; height: number; width: number };
}>();
</script>

<style scoped lang="less">
.step-vue-mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  .high-light {
    background: white;
    position: absolute;
    border-radius: 5px;
    transition: all 0.3s;
  }
}
</style>
