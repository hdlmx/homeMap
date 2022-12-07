<template>
  <div id="map" style="height: 100%;width: 100%"></div>
</template>

<script setup lang="ts">
import AMapLoader from '@amap/amap-jsapi-loader';
import config from "../../config/config"
import {onMounted, reactive} from "vue";
import http from "../../tools/http"

const initMap = () => {
  AMapLoader.load({
    "key": config.AMapJsApiKey,              // 申请好的Web端开发者Key，首次调用 load 时必填
    "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    "plugins": ['AMap.Scale'],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  }).then((AMap) => {
    map = new AMap.Map('map', {
      viewMode: "3D",
      center: [121.134011, 31.291287],
      zoom: 17
    });
    const marker = new AMap.Marker({
      position: [121.134011, 31.291287]
    });
    map.add(marker);
  }).catch(e => {
    console.log(e);
  })
}
/**
 *获取系统设置里的地图中心点
 */
const getSystemMapCenter = () => {
  http.get("/setting/mapCenter", {
    params: {
      settingKey: "mapCenter"
    }
  }).then((res) => {
    console.log(res.data)
  })
}
let map = reactive<any>({});
onMounted(() => {
  initMap();
  getSystemMapCenter()
})
</script>

<style scoped>

</style>