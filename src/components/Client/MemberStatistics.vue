<script setup lang="ts">
import HeaderTop from '@/components/Header/HeaderTop.vue'
import Layout from '@/components/Layout/Layout.vue'
import { computed, ref } from 'vue'
import { Echarts } from '@/components'

const dateOptions = [
  {
    label: '过去7天',
    value: 7,
  },
  {
    label: '过去一个月内',
    value: 30,
  },
]

const currentDate = ref(7);


const currentDay = ref(7)


const discount = computed(() => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
      formatter: function([params]) {
        console.log(params)
        return `<div style="width: 102px;text-align: center" class="secondary-color-text-1">
            <div  style="text-align: center">
              2024-06-${params.name}
            </div>
            <div style="color: #000000">${params.value}</div>
        </div>`
      },
    },
    xAxis: {
      type: 'category',
      data: new Array(currentDay.value).fill(0).map((_, index) => `7-${index + 1}`),
    },
    yAxis: {
      type: 'value',
    },
    grid: {
      top: 15,
      bottom: 20,
    },
    series: [
      {
        data: new Array(currentDay.value).fill(0).map((_, index) => Math.floor(Math.random() * 10)),
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle: {
          color: '#58968b',
        },
      },
    ],
  }
})

const histogram = computed(() => {
  return {
    xAxis: {
      type: 'category',
      data: new Array(currentDate.value).fill(0).map((_, index) => `7-${index + 1}`),
    },
    yAxis: {
      type: 'value',
    },
    grid: {
      top: 15,
      bottom: 20,
    },
    series: [
      {
        type: 'bar',
        data: new Array(currentDate.value).fill(0).map((_, index) => Math.floor(Math.random() * 10)),
        itemStyle: {
          normal: {
            color: function(params) {
              return params.dataIndex % 2 === 0 ? '#FF5B5B' : '#F7C604'
            },
          },
        },
        barWidth: '30%',
      },
    ],
  }
})

</script>

<template>
    <div class="user-statistics">
        <div class="statistics-title">
            统计数据和趋势
        </div>
        <div class="statistics-desc">
            查看发出offer、发布工作总数、发出邀请数量分析以及花销和您的好评率
        </div>
        <div class="secondary-color-text-1">
            统计信息不会实时更新，最多可能需要 24 小时才能反映最近的活动。
        </div>
    </div>
    <div class="user-statistics-data">
        <div class="user-statistics-data-item">
            <div class="data-item-title">花费金额合计</div>
            <div class="data-item-nums">
                124000
            </div>
            <RouterLink class="data-item-footer">历史花销记录</RouterLink>
        </div>
        <div class="user-statistics-data-item">
            <div class="data-item-title">好评率</div>
            <div style="margin-top: 35px;">
                <n-rate readonly :default-value="5" color="#F18B41" size="large" />
            </div>
            <div class="data-item-nums" style="margin-top: 15px;">
                5.0
            </div>
        </div>
    </div>
    <n-flex justify="space-between" style="margin-top: 60px;margin-bottom: 300px;gap:0" :size="145">
        <n-flex class="user-echarts-discount size-500" :size="16" vertical>
            <div class="echarts-discount-title">
                发出offer总数
            </div>
            <n-select :options="dateOptions" v-model:value="currentDay" style="width:150px" />
            <div class="echarts-container">
                <Echarts :options="discount" />
            </div>
        </n-flex>
        <n-flex class="user-echarts-discount size-500" :size="16" vertical>
            <div class="echarts-discount-title">
                发布工作数量
            </div>
            <n-select :options="dateOptions" v-model:value="currentDate" style="width:150px" />
            <div class="echarts-container">
                <Echarts :options="histogram" />
            </div>
        </n-flex>
        <n-flex class="user-echarts-discount size-500" :size="16" vertical>
            <div class="echarts-discount-title">
                发布邀请数量
            </div>
            <n-select :options="dateOptions" v-model:value="currentDate" style="width:150px" />
            <div class="echarts-container">
                <Echarts :options="histogram" />
            </div>
        </n-flex>
    </n-flex>
</template>

<style scoped lang="scss">
.user-statistics {

    .statistics-title {
        font-weight: 500;
        font-size: 40px;
        color: #333333;
        line-height: 47px;
        margin-top: 40px;
    }

    .statistics-desc {
        font-weight: 500;
        font-size: 16px;
        color: #333333;
        line-height: 19px;
        margin-top: 5px;
        margin-bottom: 10px;
    }
}

.user-statistics-data {
    margin-top: 45px;
    display: flex;
    gap: 40px;

    .user-statistics-data-item {
        width: 344px;
        height: 197px;
        box-shadow: 0 4px 10px 0 rgba(248, 250, 251, 0.25);
        border-radius: 12px 12px 12px 12px;
        border: 1px solid #EAEDF2;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #ffffff;

        .data-item-title {
            font-weight: 500;
            font-size: 24px;
            color: #000000;
            line-height: 28px;
            margin-top: 30px;
        }

        .data-item-nums {
            font-weight: 500;
            font-size: 32px;
            color: #333333;
            line-height: 38px;
            margin-top: 35px;
        }

        .data-item-footer {
            margin-top: 23px;
            font-weight: 400;
            font-size: 12px;
            color: #58968B;
            line-height: 14px;
        }

        ::v-deep(.n-base-icon svg),
        ::v-deep(.n-base-icon) {
            width: 18px;
            height: 18px;
            color: #F18B41;
        }
    }

}

.user-echarts-discount {
    width: 53%;
    height: 402px;
    background: #FFFFFF;
    box-shadow: 0 4px 10px 0 #F8FAFB;
    border-radius: 14px 14px 14px 14px;
    border: 1px solid #EAEDF2;
    padding: 16px;

    &.size-500 {
        width: 49%;
        margin-bottom: 20px;
    }

    .echarts-discount-title {
        font-weight: 500;
        font-size: 20px;
        color: #0F0F10;
        line-height: 24px;
    }

    .echarts-container {
        height: 100%;
    }
}
</style>