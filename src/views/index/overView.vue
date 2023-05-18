<script setup lang="ts">


import MyDaughter from "@/views/index/MyDaughter.vue";
</script>
<template>
  <div>
    <el-row>
      <el-col :span="6">
        <my-daughter />
      </el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6">收入</el-col>
      <el-col :span="6">支出</el-col>
    </el-row>
  </div>

</template>
<style scoped>

</style>