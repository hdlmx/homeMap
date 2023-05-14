<template>
  <el-row class="car-panel" :gutter="20">

    <el-col :span="6">
      <img src="../../assets/car/01.jpg" class="car">
    </el-col>
    <el-col :span="6" style="height: 100%">
      <div ref="costDom" style="height: 100%">

      </div>
    </el-col>
    <el-col :span="6" style="height: 100%;">
      <div id="mileage" ref="mileageDom" style="height:100%;"></div>
    </el-col>
    <el-col :span="6" style="height: 100%;">
      <div ref="oilDom" style="height: 100%"></div>

    </el-col>


  </el-row>
</template>

<script setup lang="ts">

import {onMounted, reactive, ref} from "vue";
import * as echarts from "echarts";

let mileageDom = ref<HTMLElement>();
let oilDom = ref<HTMLElement>();
let costDom = ref<HTMLElement>();
const data = [["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 86], ["2000-06-09", 73], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85], ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]];
const dateList = data.map(function (item) {
  return item[0];
});
const valueList = data.map(function (item) {
  return item[1];
});
let mileageData = reactive({// Make gradient line here
  visualMap: [
    {
      show: false,
      type: "continuous",
      seriesIndex: 0,
      min: 0,
      max: 400
    }
  ],
  title: [
    {
      left: "center",
      text: "行驶里程"
    }

  ],
  tooltip: {
    trigger: "axis"
  },
  xAxis: [
    {
      data: dateList
    }
  ],
  yAxis: [
    {}
  ],
  grid: [
    {}
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      data: valueList
    }
  ]
});
let costData = reactive({
  title: {
    text: '费用',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '分类：',
      type: 'pie',
      radius: '50%',
      data: [
        {value: 1048, name: '油费'},
        {value: 735, name: '过路费'},
        {value: 580, name: '停车费'},
        {value: 484, name: '保养费'},
        {value: 300, name: '维修费'},
        {value: 300, name: '保险费'}
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})
let oilData = reactive({
  xAxis: {
    type: 'category',

    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  title: [
    {
      left: "center",
      text: "油量"
    }

  ],
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {}
    }
  ]
})
const drawMileage = () => {
  let mileageChar = echarts.init(mileageDom.value);
  mileageChar.setOption(mileageData);
};
const drawOil = () => {
  let oilChar = echarts.init(oilDom.value)
  oilChar.setOption(oilData)
}
const drawCost = () => {
  let oilChar = echarts.init(costDom.value)
  oilChar.setOption(costData)
}
onMounted(() => {
  drawMileage();
  drawOil();
  drawCost();

});


</script>

<style scoped>
.car-panel {
  display: flex;
  align-content: center;
  height: 100%;
  align-items: center;
  flex-wrap: wrap;
  background: #000000;
  border: #181818 1px solid;

}

.car-chars {
  flex: auto;
  /*  border: #181818 1px solid;*/
}

.car {
  width: 50%;
  height: 50%;
  justify-self: end;
}

.car-cost {
}
</style>