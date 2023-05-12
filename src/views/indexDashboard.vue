<template>
  <div class="dashPanel">
    <el-row style="width: 100%">
      <el-col :span="24">
        <overview>
        </overview>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <car></car>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24"></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import overview from "@/views/index/overView.vue";
import car from "@/views/index/car.vue";
</script>

<style scoped>
.dashPanel {
  display: grid;
  width: 100%;
  grid-template-rows: 1fr 3fr 3fr;

}
</style>