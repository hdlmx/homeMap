<script setup lang="ts">
import {
  MailOutlined,
  SettingOutlined,
  AreaChartOutlined
} from '@ant-design/icons-vue';


</script>

<template>
  <a-layout :style="{height: '100%'}">
    <a-layout-header>
      <a-row>
        <a-col class="head-title" :span="6">
          <a-row :style="{margin:'0px'}" > <h1 class="app-name">大城小家</h1></a-row>
        </a-col>
        <a-col :span="18">
          <a-menu theme="dark" :style="{'margin-right':'0px'}" mode="horizontal">
            <a-menu-item key="analysisTask">
              <router-link to="/analysis">
                <template #icon>
                  <mail-outlined/>
                </template>
                昆山区位
              </router-link>
            </a-menu-item>
            <a-menu-item key="app">
              <router-link to="/house">
                <template #icon>
                  <AreaChartOutlined/>
                </template>
                房势
              </router-link>
            </a-menu-item>
            <a-sub-menu key="sub1">
              <template #icon>
                <setting-outlined/>
              </template>
              <template #title>分析任务</template>
              <a-menu-item-group title="Item 1">
                <a-menu-item key="setting:1">Option 1</a-menu-item>
                <a-menu-item key="set ting:2">Option 2</a-menu-item>
              </a-menu-item-group>
              <a-menu-item-group title="Item 2">
                <a-menu-item key="setting:3">Option 3</a-menu-item>
                <a-menu-item key="setting:4">Option 4</a-menu-item>
              </a-menu-item-group>
            </a-sub-menu>
            <a-menu-item key="alipay">
              <router-link to="/resource">
                资源管理
              </router-link>

            </a-menu-item>
          </a-menu>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content :style="{height:'100%'}">
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transitionName">
          <component :is="Component"/>
        </transition>
      </router-view>
    </a-layout-content>
    <a-layout-footer :style="{height:'30px'}">Footer</a-layout-footer>
  </a-layout>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  height: 100%;

}

#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
.app-name{
  background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 46px;
}

.head-title {
  color: #fff;
  font-size: 18px;
}

.down-enter-active, .down-leave-active {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}

.down-enter-from {
  transform: translate3d(0, -50%, 0);
  opacity: 0.2;
}

.down-leave-to {
  transform: translate3d(0, 50%, 0);
  opacity: 0.2;
}
</style>
