<script setup lang="ts">
import { ref } from "vue";

import DriveVue from "./components/drive-vue/index.vue";
const visible = ref(true);
const setVisible = (value: boolean) => {
  visible.value = value;
};
</script>

<template>
  <DriveVue :visible="visible">
    <img src="./assets/logo.png" height="150" width="150" />
    <template #top> 123123123 </template>
  </DriveVue>
  <button @click="setVisible(true)">show mask</button>
</template>

<style lang="less" scoped>
.high-light {
  z-index: 999;
}
</style>
