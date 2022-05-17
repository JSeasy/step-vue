<script setup lang="ts">
import { ref } from "vue";
import DriveVue from "./components/drive-vue/index.vue";
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" id="img1" ref="target1" />

  <img alt="Vue logo" src="./assets/logo.png" id="img2" ref="target2" />
  <DriveVue>
    <img src="./assets/logo.png" height="150" width="150" />
  </DriveVue>
</template>

<style lang="less" scoped>
#img1 {
  position: absolute;
  left: 10px;
}
#img2 {
  position: absolute;
  left: 500px;
  top: 80px;
  &:hover {
    cursor: pointer;
  }
}
#img3 {
  position: absolute;
  left: 182px;
  top: 150px;
}
</style>
