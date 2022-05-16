<script setup lang="ts">
import { ref } from "vue";
import DriveVue from "./components/drive-vue/index.vue";
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" id="img1" ref="target1" />
  <img alt="Vue logo" src="./assets/logo.png" id="img2" ref="target2" />
  <img alt="Vue logo" src="./assets/logo.png" id="img3" ref="target3" />
  <DriveVue
    :driveList="[
      { targetId: '#img1' },
      { targetId: '#img2' },
      { target3: '#img3' },
    ]"
  >
    <div style="margin-top: 123px">123123123123123</div>
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
}
#img3 {
  position: absolute;
  left: 182px;
  top: 150px;
}
</style>
