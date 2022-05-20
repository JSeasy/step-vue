<script setup lang="ts">
import { ref } from "vue";

import DriveVue from "./components/drive-vue/index.vue";
const visible = ref(false);
const setVisible = (value: boolean) => {
  visible.value = value;
};
const pre = () => {
  console.log("pre");
};
const next = () => {
  console.log("next");
};
</script>

<template>
  <div style="text-align: center">
    <DriveVue :visible="visible" arrow="right" @pre="pre" @next="next">
      <img
        src="./assets/logo.png"
        height="150"
        width="150"
        style="margin-top: 180px"
      />
      <template #ctx>
        <div style="width: 500px; height: 300px">123123</div>
      </template>
    </DriveVue>
  </div>

  <button @click="visible = true">show mask</button>
</template>

<style lang="less" scoped>
.high-light {
  z-index: 999;
}
</style>
