# 基于 vue3 + vite + typescript 实现轻量版新手引导的功能



# 使用方式



<script setup lang="ts">
import { ref } from "vue";

import DriveVue from "./components/drive-vue/index.vue";
const visible = ref(false);
const visible2 = ref(false);
const setVisible = (value: boolean) => {
  visible.value = value;
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
      <div>target dom</div> // 目标DOM
      <template #ctx>       // 提示气泡内容
        <div style="width: 200px; height: 300px">123123</div>
      </template>
    </DriveVue>

  

  <button @click="visible = true">show mask</button>
  <button @click="visible2 = true">show mask</button>


  <div style="display: flex; justify-content: space-around">
    <DriveVue
      :visible="visible2"
      arrow="top"
      @pre="(visible2 = false), (visible = true)"
      @next="visible2 = false"
    >
      <div>target dom</div> // 目标DOM
      <template #ctx>       // 提示气泡内容
        <div style="width: 200px; height: 300px">123123</div>
      </template>
    </DriveVue>
  
  </div>
</template>

<style lang="less" scoped></style>
