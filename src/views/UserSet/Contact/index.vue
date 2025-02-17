<script setup lang="ts">
import { Text, Empty } from '@/components'
import { ref, h } from 'vue'
import { CreateOutline, AddCircleOutline } from '@vicons/ionicons5'
import { NButton, NSpace } from 'naive-ui'
import { RouterLink } from 'vue-router'
import EditAccount from './component/EditAccount.vue'
import AddAddress from './component/AddAddress.vue'

const showEditAccount = ref(false)

const showAddAddress = ref(false)

const current = ref('account')

const data = ref([{
  name: '郑盈',
  phone: '1234567890',
  city: '天津 天津市 和平区 营 口道',
  address: '万达公寓1209',
  code: '000000',
}])

const columns = [
  {
    title: '收货人',
    key: 'name',
  },
  {
    title: '电话/手机',
    key: 'phone',
  },
  {
    title: '所在地区',
    key: 'city',
  },
  {
    title: '详细地址',
    key: 'address',
  },
  {
    title: '邮编',
    key: 'code',
  },
  {
    title: '操作',
    key: 'operation',
    render: () => {
      return h(NSpace, () => [
        h(NButton, { text: true, type: 'primary', onClick() {
            showAddAddress.value = true
          } }, () => '修改'),
        h(NButton, {
          text: true, type: 'error', onClick() {
            data.value = []
          },
        }, () => '删除'),
      ])
    },
  },

]

const slider = [
  {
    title: '账户',
    to: 'account',
  },
  {
    title: '地址管理',
    to: 'city',
  }
]

function onMouseenter(key: string) {
  current.value = key
  window.location.hash = key
}
</script>

<template>
  <div class="contact-container">
    <div class="contact-slider">
      <div
        v-for="item in slider"
        class="contact-slider-item"
        :class="current === item.to && 'active'"
        @click="onMouseenter(item.to)"
      >
        <Text color="#000" :size="16">
          {{ item.title }}
        </Text>
      </div>
    </div>

    <div class="contact-main">
      <div class="withdrawal-methods-header">
        联系方式
      </div>
      <div class="user-contact-container" id="account">
        <n-flex align="center" justify="space-between">
          <Text color="#333333" :size="24">账户</Text>
          <n-icon :size="22" class="cursor-pointer-style main-color-size" @click="showEditAccount = true">
            <CreateOutline />
          </n-icon>
        </n-flex>
        <div class="contact-container-cell">
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              用户ID
            </Text>
            <Text :size="16" color="#808080">
              jasonzha
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              名字
            </Text>
            <Text :size="16" color="#808080">
              郑盈
            </Text>
          </n-flex>

          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              手机号码
            </Text>
            <Text :size="16" color="#808080">
              15179893205
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              邮箱
            </Text>
            <Text :size="16" color="#808080">
              lishihai@sina.com
            </Text>
          </n-flex>
        </div>
      </div>
      <div class="user-contact-container" style="margin-bottom: 156px" id="city">
        <n-flex align="center" justify="space-between">
          <Text color="#333333" :size="24">地址管理</Text>
          <n-icon :size="22" class="cursor-pointer-style main-color-size" @click="showAddAddress = true">
            <AddCircleOutline />
          </n-icon>
        </n-flex>
        <div class="contact-container-cell" style="margin-top: 10px;background-color: transparent">
          <n-data-table class="table"
            :columns="columns"
            :data="data"
            :bordered="false"
          >
            <template #empty>
              <Empty size="150px"></Empty>
            </template>
          </n-data-table>
        </div>
      </div>
    </div>
  </div>
   <EditAccount v-model:show="showEditAccount" />
   <AddAddress v-model:show="showAddAddress" />
</template>

<style lang="scss" scoped>
.contact-container {
  margin-top: 20px;
  display: flex;
  flex-shrink: 0;
  gap: 20px;

  .contact-slider {
    width: 179px;
    height: 158px;
    background: #FFFFFF;
    border-radius: 16px 16px 16px 16px;
    box-sizing: border-box;
    padding: 20px;
  }

  .contact-slider-item {
    font-size: 16px;
    color: #FFFFFF;
    cursor: pointer;
    padding: 16px 10px;
    margin-bottom: 10px;

    &:hover, &.active {
      background-color: $MainColor;
      border-radius: 8px;

      & div {
        color: #FFFFFF !important;
      }
    }
  }

  .contact-main {
    width: 100%;

    .withdrawal-methods-header {
      margin-top: 20px;
      width: 100%;
      height: 80px;
      background: #FFFFFF;
      border-radius: 16px;
      border: 1px solid #EDEDED;
      display: flex;
      align-items: center;
      padding: 0 40px;
      font-size: 28px;
      color: #333333;
    }

    .user-contact-container {
      height: 392px;
      background: #FFFFFF;
      border-radius: 16px;
      border: 1px solid #EDEDED;
      margin-top: 20px;
      padding: 40px;
      box-sizing: border-box;
    }
  }

  .contact-container-cell {
    background-color: #f8f8f8;
    height: 238px;
    margin-top: 40px;
    border-radius: 16px;
    padding: 20px;
    box-sizing: border-box;
  }

  .contact-container-item {
    padding: 10px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #EDEDED;

    &:last-child {
      border: none
    }
  }
  :deep(.table.n-data-table .n-data-table-th .n-data-table-th__title-wrapper .n-data-table-th__title){
	  font-size: 14px;
  }
  :deep(.table.n-data-table .n-data-table-td) {
	font-size: 14px;
  }
  :deep(.table .n-button .n-button__content){
	  font-size: 14px;
  }
}

</style>