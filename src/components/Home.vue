<template>
  首页
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import http from "../tools/http";

const init = () => {
  const data = {
    "address": "上海市闵行区虹梅南路2288"
  }
  http.post("api/web-api/geo", data).then(rest => {
    console.log(rest.data)
  });

}

onMounted(() => {
  init();


})
</script>

<style scoped>

</style>