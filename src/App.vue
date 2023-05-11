<script setup lang="ts">
import AMapLoader from '@amap/amap-jsapi-loader';
import config from "./config/configt"
import {onMounted, reactive} from "vue";
const initMap = () => {
  AMapLoader.load({
    "key": config.AMapJsApiKey,              // 申请好的Web端开发者Key，首次调用 load 时必填
    "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    "plugins": ['AMap.Scale'],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  }).then((AMap) => {
    map = new AMap.Map('map', {
      viewMode: "3D",
      center: [121.053956, 31.31559],
      zoom: 17
    });
    const marker = new AMap.Marker({
      position: [121.053956, 31.31559]
    });
    map.add(marker);
  }).catch(e => {
    console.log(e);
  })
}
let map = reactive<any>({});
onMounted(() => {
  initMap();
})
</script>

<template>
  <el-container style="width: 100%">
    <el-header style="flex-shrink:0;width: 100%;background: #fff">
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
    <el-container style="margin-top: 1px;flex:auto">
      <el-aside style="min-width: 200px;background: #fff">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location/>
              </el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon>
              <icon-menu/>
            </el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon>
              <document/>
            </el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon>
              <setting/>
            </el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container style="">
        <el-main style="background: beige;padding: 10px">
          <div style="width: 100%;display: flex;flex: auto;height: 100%" id="map"></div>
        </el-main>

      </el-container>
    </el-container>
    <el-footer style="background: #f9f9f9">
      <el-row>
        <el-col :span="24" style="display:flex;justify-content: center"><p>版权申明</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="24" style="display:flex;justify-content: center"><p>20223@</p></el-col>
      </el-row>
    </el-footer>
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
