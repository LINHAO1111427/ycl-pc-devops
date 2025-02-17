<script setup lang="ts">
import Layout from '@/components/Layout/Layout.vue'
import SearchCategory from '@/components/SearchCategory/index.vue'
import HeaderTop from '@/components/Header/HeaderTop.vue'
import Cart from '@/components/SearchTalents/Card.vue'

import { useRoute } from 'vue-router'

const route = useRoute()

const isConsult = ref(0)

watchEffect(() => {
	isConsult.value = route.query.is_consult
})

const options = [
  {
    header: '筛选',
    key: 'char',
    children: [
      {
        item: '个人',
        value: '个人',
      },
      {
        item: '企业',
        value: '企业',
      },
      {
        item: '商业咨询',
        value: '商业咨询',
      },
    ],
	value:isConsult.value == 1 ? ['商业咨询'] : []
  },
  {
    header: '5星好评率',
    key: 'rate',
    children: [
      {
        item: '0-2',
        value: '0-2',
      },
      {
        item: '2-4',
        value: '2-4',
      },
      {
        item: '4-5',
        value: '4-5',
      },
    ],
  },
  {
    header: '接单量',
    key: 'jie',
    children: [
      {
        item: '5-20',
        value: '5-20',
      },
      {
        item: '20-50',
        value: '20-50',
      },
      {
        item: '50-100',
        value: '50-100',
      },
      {
        item: '100-200',
        value: '100-200',
      },
      {
        item: '200+',
        value: '200+',
      },
    ],
  },
  {
    header: '选择相应地区',
    key: 'are',
    children: [
      {
        item: '全国',
        value: '全国',
      },
      {
        item: '天津',
        value: '天津',
      },
      {
        item: '北京',
        value: '北京',
      },
      {
        item: '上海',
        value: '上海',
      },
      {
        item: '郑州',
        value: '郑州',
      },
      {
        item: '深圳',
        value: '深圳',
      },
      {
        item: '广州',
        value: '广州',
      },
    ],
  },
  {
    header: '收入合计',
    key: 'shou',
    children: [
      {
        item: '每小时',
        value: '每小时',
      },
      {
        item: '固定价格',
        value: '固定价格',
      },
      {
        item: '少于100元',
        value: '少于100元',
      },
      {
        item: '100-500元',
        value: '100-500元',
      },
      {
        item: '1000-5000元',
        value: '1000-5000元',
      },
      {
        item: '5000元以上',
        value: '5000元以上',
      },
    ],
  },
]

</script>

<template>
  <HeaderTop :is-work="false"></HeaderTop>
  <Layout>
    <n-flex class="search-position" vertical :size="40">
      <n-space align="center" :size="20" class="search-position-header">
        <n-input
          round
          placeholder="请输入.."
          size="large"
          style="width: 770px"
          clearable
        >
          <template #prefix>
            <div class="icon">
              <img src="../../assets/img/search.png" alt="" />
            </div>
          </template>
        </n-input>
        <!-- <n-button type="primary" text>高级搜索</n-button> -->
      </n-space>
      <n-flex class="search-position-container" :wrap="false" :size="26">
        <div class="search-category">
          <SearchCategory :options="options"></SearchCategory>
        </div>
        <n-flex vertical :size="0" style="overflow: hidden;">
          <n-tabs type="line" animated class="my-tabs">
            <n-tab-pane name="oasis" tab="全部人才" />
            <n-tab-pane name="the beatles" tab="个人" />
            <n-tab-pane name="jay chou" tab="企业" />
          </n-tabs>
          <n-flex class="search-category-container" vertical :size="20">
            <Cart :isConsult="isConsult" @click="active = true"></Cart>
          </n-flex>
        </n-flex>
      </n-flex>
    </n-flex>
  </Layout>
</template>

<style scoped lang="scss">
.search-position {
  padding-top: 40px;
  padding-bottom: 40px;

  .search-position-header {
    ::v-deep(.n-button__content) {
      font-size: 16px
    }
  }

  .search-category-container {
    // width: 1022px;
  }

  .search-category {
    flex-shrink: 0;
  }
  
  ::v-deep(.n-tabs-tab__label) {
    font-size: 16px;
  }
}
</style>