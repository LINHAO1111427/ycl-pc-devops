<script setup lang="ts">
import Layout from '@/components/Layout/Layout.vue'
import SearchCategory from '@/components/SearchCategory/index.vue'
import HeaderTop from '@/components/Header/HeaderTop.vue'
import Cart from '@/components/Talents/Card.vue'
import { ChevronBack } from '@vicons/ionicons5'

const options = [
  {
    header: '筛选',
    key: 'char',
    children: [
      {
        item: '付款方式经过验证',
        value: '付款方式经过验证',
      },
      {
        item: '付款方式未经验证',
        value: '付款方式未经验证',
      },
    ],
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
    header: '招聘区域',
    key: 'ar',
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
    header: '经验水平',
    key: 'jin',
    children: [
      {
        item: '入门级',
        value: '入门级',
      },
      {
        item: '中级',
        value: '中级',
      },
      {
        item: '专家',
        value: '专家',
      },
    ],
  },
  {
    header: '报价区间',
    key: 'bao',
    children: [
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
  {
    header: '客户历史记录',
    key: 'hist',
    children: [
      {
        item: '没有招聘历史',
        value: '没有招聘历史',
      },
      {
        item: '1-9人招聘',
        value: '1-9人招聘',
      },
      {
        item: '10+招聘',
        value: '10+招聘',
      },
    ],
  },
]

const active = ref(false)

const list = ref([
	{
		id: 1,
		isActive: false
	},
	{
		id: 2,
		isActive: false
	},
	{
		id: 3,
		isActive: false
	}
])

function handleUpdateValue(value) {
	if (value == 1) {
		list.value = [
			{
				id: 1,
				isActive: false
			},
			{
				id: 2,
				isActive: false
			},
			{
				id: 3,
				isActive: false
			}
		]
	} else if (value == 2) {
		list.value = [
			{
				id: 1,
				isActive: false
			},
			{
				id: 2,
				isActive: false
			}
		]
	} else if (value == 3) {
		list.value = [
			{
				id: 1,
				isActive: true
			}
		]
	}
}
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
          <SearchCategory :options="options" />
        </div>
        <n-flex vertical :size="0" style="overflow: hidden;">
          <n-tabs type="line" animated @update:value="handleUpdateValue">
            <n-tab-pane name="1" tab="保存搜索" />
            <n-tab-pane name="2" tab="最近浏览" />
            <n-tab-pane name="3" tab="已收藏的项目" />
          </n-tabs>
          <n-flex class="search-category-container" vertical :size="20">
            <Cart :list="list" @click="active = true"></Cart>
          </n-flex>
        </n-flex>
      </n-flex>
    </n-flex>
  </Layout>
  <n-drawer v-model:show="active" width="1153px" placement="right">
    <n-drawer-content>
      <template #header>
        <n-flex justify="space-between" align="center">
          <n-icon :size="20" @click="active = false" class="cursor-pointer-style">
            <ChevronBack />
          </n-icon>
          <n-button size="small" type="primary" ghost>新窗口中打开职位</n-button>
        </n-flex>
      </template>
      <PositionsDetails></PositionsDetails>
    </n-drawer-content>
  </n-drawer>
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
::v-deep(.n-drawer-header__main) {
  width: 100%;
}
</style>