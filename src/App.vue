<script setup lang="ts">
import {
  MailOutlined,
  SettingOutlined,
  AreaChartOutlined
} from '@ant-design/icons-vue';
import {Layout, LayoutContent, LayoutFooter, LayoutHeader, Row, Col, Menu,SubMenu,MenuItem,MenuItemGroup} from 'ant-design-vue'


</script>

<template>

  <Layout :style="{height: '100%'}">
    <LayoutHeader>
      <Row>
        <Col class="head-title" :span="6">
          <Row :style="{margin:'0px'}">大城小家</Row>
        </Col>
        <Col :span="18">
          <Menu theme="dark" :style="{'margin-right':'0px'}" mode="horizontal">
            <MenuItem key="analysisTask">
              <router-link to="/analysis">
                <template #icon>
                  <mail-outlined/>
                </template>
                昆山区位
              </router-link>
            </MenuItem>
            <MenuItem key="app">
              <router-link to="/house">
                <template #icon>
                  <AreaChartOutlined/>
                </template>
                房势
              </router-link>
            </MenuItem>
            <SubMenu key="sub1">
              <template #icon>
                <setting-outlined/>
              </template>
              <template #title>分析任务</template>
              <MenuItemGroup title="Item 1">
                <MenuItem key="setting:1">Option 1</MenuItem>
                <MenuItem key="set ting:2">Option 2</MenuItem>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <MenuItem key="setting:3">Option 3</MenuItem>
                <MenuItem key="setting:4">Option 4</MenuItem>
              </MenuItemGroup>
            </SubMenu>
            <MenuItem key="alipay">
              <router-link to="/resource">
                资源管理
              </router-link>

            </MenuItem>
          </Menu>
        </Col>
      </Row>
    </LayoutHeader>
    <LayoutContent :style="{height:'100%'}">
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transitionName">
          <component :is="Component"/>
        </transition>
      </router-view>
    </LayoutContent>
    <LayoutFooter :style="{height:'30px'}">Footer</LayoutFooter>
  </Layout>

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


.head-title {
  color: #fff;
  font-size: 18px;
}

</style>
