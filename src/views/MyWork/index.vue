<script setup lang="ts">
import HeaderTop from '@/components/Header/HeaderTop.vue'
import { Footer, Text,Empty } from '@/components'
</script>

<template>
  <HeaderTop :is-work="false" :is-login="false" />

  <div class="my-work-container">
    <div class="work-container-body">
      <n-flex vertical>
        <Text :size="32">我的工作</Text>
        <Text :size="18">有效合同</Text>
      </n-flex>

      <div class="container-item-data"> 
        <Empty size="181px"></Empty>
        <Text :size="24">
            暂时没有有效合同
        </Text>
        <Text :size="14">
            你正在处理的合同会出现在这里
        </Text>
        <n-button type="primary" style="width: 257px;"> 搜索新项目</n-button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
.my-work-container {
  overflow: auto;
  background-color: $BackColor;
  height: $container-height;
  .work-container-body {
    width: 1326px;
    margin: 0 auto;
    padding-top: 40px;
    box-sizing: border-box;
  }

  .container-item-data {
    height: 454px;
    background: #f9f9f9;
    border-radius: 8px 8px 8px 8px;
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 26px;
  }
}
</style>
