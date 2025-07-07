<script setup lang="ts">
import {Text} from '@/components'
import {addBank} from '@/api/bank'
import {useMessage} from 'naive-ui'
// 创建 message 实例
const message = useMessage()
withDefaults(defineProps<{
      addWithdrawalType: boolean,
    }>(), {
      addWithdrawalType: 1
    },
)
const bankData = ref(
    {
      userId: localStorage.getItem('userId'), //用户ID
      name: "", //姓名
      card: "", //身份证号
      bankCard: "", //银行卡号
      bankName: "", //开户行
      branchName: "", //开户支行
      mobile: "" //预留手机号
    }
)
const emit = defineEmits(['update:show','success'])
const save = async () => {
  const res=await addBank(bankData.value)
  if (res.code !== 0) {
    message.error(res.msg)
    return
  }
  emit('success')
  emit('update:show', false)
}
</script>

<template>
  <n-modal>
    <n-card
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
        style="width:850px"
    >
      <n-flex :size="40" class="work-details-modal" vertical>
        <Text :size="34">
          {{ addWithdrawalType == 1 ? '银行卡' : '支付宝' }}
        </Text>
        <n-form class="naiveui-form-16">
          <n-grid :cols="24" :x-gap="24">
            <n-form-item-gi :span="24" label="名字" path="inputValue">
              <n-input placeholder="" v-model:value="bankData.name"/>
            </n-form-item-gi>
            <n-form-item-gi :span="24" :label="addWithdrawalType == 1 ? '银行卡号' : '支付宝账号'" path="inputValue">
              <n-input placeholder="" v-model:value="bankData.bankCard"/>
            </n-form-item-gi>
            <n-form-item-gi :span="24" :label="'开户支行'" path="inputValue">
              <n-input placeholder="" v-model:value="bankData.branchName"/>
            </n-form-item-gi>
            <n-form-item-gi :span="24" label="身份证号" path="inputValue" v-if="addWithdrawalType == 1">
              <n-input placeholder="" v-model:value="bankData.card"/>
            </n-form-item-gi>
          </n-grid>
        </n-form>
        <n-flex justify="flex-end" :size="50">
          <n-button type="primary" @click="emit('update:show',false)" text class="naiveui-button-16">取消</n-button>
          <n-button type="primary" @click="save()" class="naiveui-button-16">保存</n-button>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>
