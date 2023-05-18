<template>

  <el-card :body-style="{ padding: '0px' }">
    <img
      src="../../assets/mydaugther.png"
      class="image"
    />
    <div style="padding: 14px">
      <span style="font-size: 30px;color:#ff7547;font-weight: bold">7月11天</span>
      <span style="font-size: 20px;color: #a856f0;font-weight: bold">200d</span>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const currentDate = ref(new Date());
</script>

<style scoped>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>