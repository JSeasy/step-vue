<script setup lang="ts">
import { ref } from "vue";

import DriveVue from "./components/drive-vue/index.vue";
const visible = ref(false);
const visible2 = ref(false);
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
    <DriveVue
      :visible="visible"
      arrow="bottom"
      @pre="visible = false"
      @next="
        visible2 = true;
        visible = false;
      "
    >
      <div style="width: 300px">123123</div>
      <template #ctx>
        <div style="width: 500px; height: 300px">123123</div>
      </template>
    </DriveVue>
    <DriveVue
      :visible="visible2"
      arrow="bottom"
      @pre="(visible2 = false), (visible = true)"
      @next="visible2 = false"
    >
      <div style="width: 500px">1asdasdasd</div>
      <template #ctx>
        <div style="width: 500px; height: 300px">123123</div>
      </template>
    </DriveVue>
  </div>

  <button @click="visible = true">show mask</button>
  <button @click="visible2 = true">show mask</button>
</template>

<style lang="less" scoped></style>
