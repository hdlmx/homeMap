<script setup lang="ts">

</script>

<template>
  <el-container style="width: 100%">
    <el-header style="background: #503d2c;width: 100%;">
      <el-container style="margin: 0;padding: 0">
        <el-aside>
          <el-row>
            <el-col>
              <el-row style="justify-content: start;display: flex;">
                <el-col :span="8">logo</el-col>
                <el-col :span="16" class="app-name">大城小家</el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-aside>
        <el-main style="padding: 0">
          <el-row>
            <el-col>
              <el-menu
                  :default-active="activeIndex"
                  mode="horizontal"
                  @select="handleSelect"
              >
                <el-menu-item index="1">首页</el-menu-item>
                <el-sub-menu index="2">
                  <template #title>Workspace</template>
                  <el-menu-item index="2-1">item one</el-menu-item>
                  <el-menu-item index="2-2">item two</el-menu-item>
                  <el-menu-item index="2-3">item three</el-menu-item>
                  <el-sub-menu index="2-4">
                    <template #title>item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                  </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="3">Info</el-menu-item>
                <el-menu-item index="4">Orders</el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-header>
    <el-container>
      <el-aside style="min-width: 200px" width="200"></el-aside>
      <el-container>
        <el-main style="background: beige;">
          <div style="width: 100%"></div>
        </el-main>
        <el-footer style="background: #2c3e50"></el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped>
.app-name {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 42px;
  font-weight: 900;
  line-height: 60px;
}
</style>
