<script setup lang="ts">
import HeaderTop from '@/components/Header/HeaderTop.vue'
import Layout from '@/components/Layout/Layout.vue'
import {ref, h, onMounted} from 'vue'
import {pageUserCount} from "@/api/home";
import {useMessage} from 'naive-ui'
// 创建 message 实例
const message = useMessage()

function formatTime(timestamp) {
  const date = new Date(timestamp)
  return date.toLocaleString() // 例如 "2024/7/5 08:00:00"
}

const columns = [
  {
    title: '日期',
    key: 'transactionTime',
  },
  {
    title: '类型',
    key: 'transactionType',
    className: 'hui'
  },
  {
    title: '描述',
    key: 'description',
    className: 'hui'
  },
  {
    title: '客户',
    key: 'client',
  },
  {
    title: '金额',
    key: 'amount',
    className: 'hui'
  },
  {
    title: 'ID',
    key: 'id',
    className: 'lv'
  },
]

const data = ref([])
const transactionData = ref({})
onMounted(async () => {
  const res = await pageUserCount({
    userId: localStorage.getItem('userId'),
    pageNo: 1,
    pageSize: 10
  })
  if (res.code !== 0) {
    message.error(res.msg)
    return
  }
  data.value = res.data.list.map(item => {
    item.transactionTime = formatTime(item.transactionTime)
    return item
  })
})

</script>

<template>
  <HeaderTop :is-work="false"/>
  <Layout>
    <div class="transaction-log-container">
      <div class="transaction-log-header-title">
        交易记录
      </div>
      <n-data-table :columns="columns" :data="data"/>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
.transaction-log-container {
  background-color: $BackColor;
  padding-bottom: 98px;

  .transaction-log-header-title {
    margin: 50px 0 30px 0;
    font-weight: 500;
    font-size: 34px;
    color: #333333;
  }

  :deep(.n-data-table .n-data-table-td) {
    font-size: 14px;
  }

  :deep(.n-data-table .n-data-table-th) {
    background-color: #ffffff;
  }

  :deep(.n-data-table .n-data-table-td.hui) {
    color: #4B5563 !important;
  }

  :deep(.n-data-table .n-data-table-td.lv) {
    color: #58968B !important;
  }
}
</style>
