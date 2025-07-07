<script setup lang="ts">
import {Add} from '@vicons/ionicons5'
import {ref} from 'vue'
import {Text, Empty} from '@/components'
import AddWithdrawal from '../../views/UserSet/Withdrawal/component/AddWithdrawal.vue'

const showAddWithdrawal = ref(false)
const addWithdrawalType = ref()

function addWithdrawalClick(type) {
  showAddWithdrawal.value = true
  addWithdrawalType.value = type
}

const current = ref('account')
const slider = [
  {
    title: '管理付款方式',
    to: 'account',
  },
]
import {onMounted} from "vue";
import {getBankInfo, delBank} from "@/api/bank";
import {useMessage} from 'naive-ui'
// 创建 message 实例
const message = useMessage()
const bankDataList = ref([])
const success = () => {
  getBankInfoFunc()
}
const isInit = ref(false)
const getBankInfoFunc = async () => {
  const res = await getBankInfo({
    userId: localStorage.getItem('userId')
  })
  if (res.code !== 0) {
    message.error(res.msg)
    return
  }
  bankDataList.value = res.data

}
onMounted(async () => {
  await getBankInfoFunc()
  isInit.value = true
})

function onMouseenter(key: string) {
  current.value = key
  window.location.hash = key
}

const handleDelete = async (id) => {
  const res = await delBank({
    id: id,
    userId: localStorage.getItem('userId')
  })
  if (res.code !== 0) {
    message.error(res.msg)
    return
  }
  await getBankInfoFunc()
  message.success('删除成功')
}
</script>

<template>
  <div class="contact-container" v-if="isInit">
    <div class="contact-slider">
      <div v-for="item in slider" class="contact-slider-item" :class="current === item.to && 'active'"
           @click="onMouseenter(item.to)">
        <Text color="#000" :size="16">
          {{ item.title }}
        </Text>
      </div>
    </div>
    <div class="contact-main">
      <div class="withdrawal-methods-header">账单和付款</div>
      <div class="withdrawal-methods-container">
        <div class="withdrawal-methods-header-title">
          管理付款方式
        </div>
        <n-flex :size="20">
          <n-flex justify="space-between" style="width: 100%">
            <div class="space-title">银行卡</div>
            <n-button size="large" type="primary" @click="addWithdrawalClick(1)">
              <n-flex :size="5" align="center">
                <n-icon :size="20">
                  <Add></Add>
                </n-icon>
                <span class="naiveui-text-16">银行卡</span>
              </n-flex>
            </n-button>
          </n-flex>
          <div v-if="bankDataList?.length > 0" style="width: 100%;">
            <n-flex
                vertical
                :size="20"
                style="width: 100%;"
            >
              <n-card
                  v-for="(item, index) in bankDataList"
                  :key="index"
                  style="border: 1px solid #EBEBEB; border-radius: 10px; cursor: pointer;"
                  content-style="padding: 20px 30px; display: flex; align-items: center; justify-content: space-between;"
              >
                <div>
                  <div style="font-weight: 500; font-size: 16px;">银行卡</div>
                  <div style="color: #666; margin-top: 4px;">{{ item.branchName }}（{{ item.bankCard }}）</div>
                </div>
                <n-popconfirm
                    @positive-click="handleDelete(item.id)"
                    :show-icon="false"
                    positive-text="删除"
                    negative-text="取消"
                >
                  <template #trigger>
                    <n-button type="error" size="small">删除</n-button>
                  </template>
                  确认删除该银行卡？
                </n-popconfirm>
              </n-card>
            </n-flex>
          </div>
          <div v-else class="empty-text" style="text-align: center; color: #999; margin-top: 20px;">
            暂未添加银行卡
          </div>
        </n-flex>
        <!-- <n-flex :size="20" style="margin-top: 40px;">
<n-flex justify="space-between" style="width: 100%">
<div class="space-title">支付宝 <span>请前往支付宝验证</span></div>
<n-button size="large" type="primary" @click="addWithdrawalClick(2)">
  <n-flex :size="5" align="center">
    <n-icon :size="20">
      <Add></Add>
    </n-icon>
    <span class="naiveui-text-16">支付宝</span>
  </n-flex>
</n-button>
</n-flex>
<n-flex class="withdrawal-items" align="center" justify="space-between">
191111040404@qq.com
<n-button ghost type="error" style="width:70px">
<span class="naiveui-text-16">删除</span>
</n-button>
</n-flex>
</n-flex> -->
      </div>
    </div>
    <AddWithdrawal :addWithdrawalType='addWithdrawalType' v-model:show="showAddWithdrawal" @success="success"/>
  </div>
</template>

<style scoped lang="scss">
.contact-container {
  margin-top: 20px;
  display: flex;
  flex-shrink: 0;
  gap: 20px;
}

.contact-main {
  width: 100%;
}

.contact-slider {
  width: 179px;
  height: 100px;
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

  &:hover,
  &.active {
    background-color: $MainColor;
    border-radius: 8px;

    & div {
      color: #FFFFFF !important;
    }
  }
}

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

.withdrawal-methods-container {
  padding: 40px;
  box-sizing: border-box;
  width: 100%;
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid #EDEDED;
  margin-top: 20px;
  margin-bottom: 60px;
}

.withdrawal-methods-header-title {
  font-weight: 500;
  font-size: 24px;
  color: #333333;
  margin-bottom: 40px;
}

.space-title {
  font-weight: 600;
  font-size: 20px;
  color: #333333;

  span {
    font-weight: 400;
    font-size: 14px;
    color: #808080;
    margin-left: 10px;
  }
}

.empty-text {
  font-weight: 400;
  font-size: 16px;
  color: #808080;
}

.withdrawal-items {
  width: 100%;
  height: 54px;
  border-radius: 6px 6px 6px 6px;
  border: 1px solid #EDEDED;
  padding: 0 20px;
  font-size: 16px;
  color: $SecondaryColor-1;
}
</style>
