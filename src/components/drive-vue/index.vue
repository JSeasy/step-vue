<template>
  <slot></slot>
  <StepVue />
</template>

<script lang="ts" setup>
import { onMounted, useSlots, VNode, createApp } from "vue";
import StepVue from "./components/index.vue";
const slots = useSlots();
const vmSlots = slots.default?.();
onMounted(() => {
  if (vmSlots) {
    const getTarget = (vmSlots: VNode[]) => {
      const target = vmSlots[0];
      return target.el;
    };
    const targetInfo = getTarget(vmSlots) as HTMLElement;
  }
});
</script>

<style scoped lang="less"></style>
