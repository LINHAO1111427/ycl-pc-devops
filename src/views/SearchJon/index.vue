<script setup lang="ts">
import HeaderTop from '@/components/Header/HeaderTop.vue'
import { Footer, Text, Empty, Tabs } from '@/components'
import { ref } from 'vue'

const current = ref('所有职位')

const options = [
  {
    label: '所有职位',
    value: '所有职位',
  },
  {
    label: '所有合同',
    value: '所有合同',
  },
]

function onClickSelect(value) {
  current.value = value
}
</script>

<template>
  <HeaderTop :is-work="false" :is-login="false" />

  <div class="search-joi-container">
    <div class="search-joi-container-body">
      <n-flex vertical>
        <Text :size="32">所有工作</Text>
      </n-flex>
      <div class="search-joi-tabs-container">
        <Tabs :options="options" :value="current" @click="onClickSelect"></Tabs>
      </div>
      <n-flex style="margin: 20px 0" justify="space-between" align="center">
        <n-input round placeholder="请输入.." size="large" style="width: 510px">
          <template #prefix>
            <div class="icon">
              <img src="../../assets/img/search.png" alt="" />
            </div>
          </template>
        </n-input>
        <n-button type="primary" style="width: 156px" size="large">
          寻找新的工作
        </n-button>
      </n-flex>
      <div class="container-item-data">
        <Text :size="14" color="#808080">没有符合您搜索的结果。</Text>
        <Text :size="16" color="#333333">请尝试调整您的按索关键字.</Text>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
.search-joi-container {
  overflow: auto;
  background-color: $BackColor;
  height: $container-height;
  .search-joi-container-body {
    width: 1326px;
    margin: 0 auto;
    padding-top: 40px;
    box-sizing: border-box;
  }

  .container-item-data {
    height: 454px;
    border-radius: 8px 8px 8px 8px;
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 26px;
  }

  .search-joi-tabs-container {
    margin-top: 20px;
    width: 200px;
  }
}
</style>
