<template>

  <el-card :body-style="{ padding: '0px' }">
    <img
        src="../../assets/img.png"
        class="image"
    />
    <div style="padding: 14px">
      <span style="font-size: 30px;color:#ff7547;font-weight: bold">{{ month }}月{{day}}天</span>
      <span style="font-size: 20px;color: #a856f0;font-weight: bold">{{totalDays}}d</span>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import {ref} from "vue";
import moment from "moment"

const currentDate = ref(new Date());
let today = moment();
let borthday = moment("2022-10-07")
let totalDays = today.diff(borthday, 'days');
let month = Math.floor(totalDays / 30)
let day = totalDays % 30
console.log(today.diff(borthday, 'days'))
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