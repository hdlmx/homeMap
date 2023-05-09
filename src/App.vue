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
    <a-layout>
    <a-layout-sider width="200" style="background: #fff">
      <a-menu
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
      >
        <a-sub-menu key="sub1">
          <template #title>
              <span>
                <user-outlined />
                subnav 1
              </span>
          </template>
          <a-menu-item key="1">option1</a-menu-item>
          <a-menu-item key="2">option2</a-menu-item>
          <a-menu-item key="3">option3</a-menu-item>
          <a-menu-item key="4">option4</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
              <span>
                <laptop-outlined />
                subnav 2
              </span>
          </template>
          <a-menu-item key="5">option5</a-menu-item>
          <a-menu-item key="6">option6</a-menu-item>
          <a-menu-item key="7">option7</a-menu-item>
          <a-menu-item key="8">option8</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #title>
              <span>
                <notification-outlined />
                subnav 3
              </span>
          </template>
          <a-menu-item key="9">option9</a-menu-item>
          <a-menu-item key="10">option10</a-menu-item>
          <a-menu-item key="11">option11</a-menu-item>
          <a-menu-item key="12">option12</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout-content :style="{height:'100%',padding:'24px'}">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transitionName">
          <component :is="Component"/>
        </transition>
      </router-view>
    </a-layout-content>
    <a-layout-footer :style="{height:'10px'}">Footer</a-layout-footer>
  </a-layout>
  </a-layout>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
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
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 42px;
  font-weight: 900
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
body {
  --vt-font-family-base: Quotes, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  text-rendering: unset!important;
  font-synthesis: unset!important;
}
</style>
