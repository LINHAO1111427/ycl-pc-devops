<script setup lang="ts">
import { Text } from '@/components'
import { ref, watch, computed } from 'vue'
import { useMessage } from 'naive-ui'

// Props定义
const props = withDefaults(defineProps<{
  type: number,
  show: boolean,
  addressData?: any,
  isEditing?: boolean
}>(), {
  type: 1,
  show: false,
  isEditing: false
})

// Emits定义
const emit = defineEmits(['update:show', 'save'])

// Message实例
const message = useMessage()

// 表单数据
const formData = ref({
  personalName: '',
  personalArea: '',
  personalAddress: '',
  personalPhone: '',
  personalTaxNumber: '',
  personalBankName: '',
  personalBankAccount: '',
  personalEmail: ''
})

// 监听addressData变化，用于编辑模式
watch(() => props.addressData, (newData) => {
  if (newData && props.type === 2) {
    formData.value = {
      personalName: newData.companyName || '',
      personalArea: newData.companyArea || '',
      personalAddress: newData.companyAddress || '',
      personalPhone: newData.companyPhone || '',
      personalTaxNumber: newData.companyTaxNumber || '',
      personalBankName: newData.companyBankName || '',
      personalBankAccount: newData.companyBankAccount || '',
      personalEmail: newData.companyEmail || ''
    }
  }
}, { immediate: true })

// 重置表单
const resetForm = () => {
  formData.value = {
    personalName: '',
    personalArea: '',
    personalAddress: '',
    personalPhone: '',
    personalTaxNumber: '',
    personalBankName: '',
    personalBankAccount: '',
    personalEmail: ''
  }
}

// 取消操作
const handleCancel = () => {
  emit('update:show', false)
  resetForm()
}

// 保存操作
const handleSave = () => {
  // 验证必填字段
  if (!formData.value.personalName.trim()) {
    message.error('请输入姓名')
    return
  }
  if (!formData.value.personalArea.trim()) {
    message.error('请输入所在地区')
    return
  }
  if (!formData.value.personalAddress.trim()) {
    message.error('请输入地址')
    return
  }

  // 根据类型处理数据
  let saveData
  if (props.type === 1) {
    // 个人地址
    saveData = { ...formData.value }
  } else {
    // 企业地址
    saveData = {
      id: props.addressData?.id || null,
      addressName: formData.value.personalName,
      companyName: formData.value.personalName,
      companyArea: formData.value.personalArea,
      companyAddress: formData.value.personalAddress,
      companyPhone: formData.value.personalPhone,
      companyTaxNumber: formData.value.personalTaxNumber,
      companyBankName: formData.value.personalBankName,
      companyBankAccount: formData.value.personalBankAccount,
      companyEmail: formData.value.personalEmail,
      isDefault: props.addressData?.isDefault || false
    }
  }

  emit('save', saveData, props.isEditing)
  emit('update:show', false)
  resetForm()
}

// 计算标题
const modalTitle = computed(() => {
  if (props.type === 1) {
    return '个人地址'
  } else {
    return props.isEditing ? '编辑企业地址' : '新增企业地址'
  }
})
</script>

<template>
  <n-modal :show="show" @update:show="emit('update:show', $event)">
    <n-card
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
        style="width:850px"
    >
      <n-flex :size="40" class="work-details-modal" vertical>
        <Text :size="34">
          {{ modalTitle }}
        </Text>
        <n-form class="naiveui-form-16">
          <n-grid :cols="24" :x-gap="24">
            <n-form-item-gi :span="24" :label="type === 1 ? '姓名' : '公司名称'" path="personalName">
              <n-input v-model:value="formData.personalName" :placeholder="type === 1 ? '请输入姓名' : '请输入公司名称'" />
            </n-form-item-gi>
            <n-form-item-gi :span="12" label="所在地区" path="personalArea">
              <n-input v-model:value="formData.personalArea" placeholder="请输入所在地区" />
            </n-form-item-gi>
            <n-form-item-gi :span="12" label="地址" path="personalAddress">
              <n-input v-model:value="formData.personalAddress" placeholder="请输入详细地址" />
            </n-form-item-gi>

            <!-- 个人地址的额外字段 -->
            <template v-if="type === 1">
              <n-form-item-gi :span="12" label="联系电话" path="personalPhone">
                <n-input v-model:value="formData.personalPhone" placeholder="请输入联系电话" />
              </n-form-item-gi>
              <n-form-item-gi :span="12" label="税号" path="personalTaxNumber">
                <n-input v-model:value="formData.personalTaxNumber" placeholder="请输入税号" />
              </n-form-item-gi>
              <n-form-item-gi :span="12" label="开户银行" path="personalBankName">
                <n-input v-model:value="formData.personalBankName" placeholder="请输入开户银行" />
              </n-form-item-gi>
              <n-form-item-gi :span="12" label="银行账号" path="personalBankAccount">
                <n-input v-model:value="formData.personalBankAccount" placeholder="请输入银行账号" />
              </n-form-item-gi>
              <n-form-item-gi :span="12" label="邮箱" path="personalEmail">
                <n-input v-model:value="formData.personalEmail" placeholder="请输入邮箱" />
              </n-form-item-gi>
            </template>

            <!-- 企业地址的额外字段 -->
            <template v-if="type === 2">
              <n-form-item-gi :span="12" label="注册电话" path="personalPhone">
                <n-input v-model:value="formData.personalPhone" placeholder="请输入注册电话" />
              </n-form-item-gi>
              <n-form-item-gi :span="12" label="单位税号" path="personalTaxNumber">
                <n-input v-model:value="formData.personalTaxNumber" placeholder="请输入单位税号" />
              </n-form-item-gi>
              <n-form-item-gi :span="12" label="开户银行" path="personalBankName">
                <n-input v-model:value="formData.personalBankName" placeholder="请输入开户银行" />
              </n-form-item-gi>
              <n-form-item-gi :span="12" label="银行账号" path="personalBankAccount">
                <n-input v-model:value="formData.personalBankAccount" placeholder="请输入银行账号" />
              </n-form-item-gi>
              <n-form-item-gi :span="12" label="邮箱" path="personalEmail">
                <n-input v-model:value="formData.personalEmail" placeholder="请输入邮箱" />
              </n-form-item-gi>
            </template>
          </n-grid>
        </n-form>
        <n-flex justify="flex-end" :size="50">
          <n-button type="primary" @click="handleCancel" text class="naiveui-button-16">取消</n-button>
          <n-button type="primary" @click="handleSave" class="naiveui-button-16">保存</n-button>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>
