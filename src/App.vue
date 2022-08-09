<script setup lang="ts">
import { ref } from "vue";

import DriveVue from "./components/drive-vue/index.vue";
const visible = ref(false);
const visible2 = ref(false);
</script>

<template>
  <div style="text-align: center">
    <button @click="visible = true">show mask</button>

    <DriveVue
      :visible="visible"
      arrow="bottom"
      @pre="visible = false"
      @next="
        visible2 = true;
        visible = false;
      "
    >
      <div style="width: 300px">flag1</div>
      <template #ctx>
        <div style="width: 200px; height: 300px">do something</div>
      </template>
    </DriveVue>

    <div>flag2</div>
    <div>flag3</div>
    <div>flag4</div>
  </div>

  <div style="display: flex; justify-content: space-around">
    <DriveVue
      :visible="visible2"
      arrow="bottom"
      @pre="(visible2 = false), (visible = true)"
      @next="visible2 = false"
    >
      <div>flag4</div>
      <template #ctx>
        <div style="width: 200px; height: 300px">do something</div>
      </template>
    </DriveVue>
    <div>123123123</div>
  </div>
</template>

<style lang="less" scoped></style>
