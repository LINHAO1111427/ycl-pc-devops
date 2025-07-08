<script setup lang="ts">
import { Text } from '@/components'
import { ref, watch } from 'vue'
import { useMessage } from 'naive-ui'
import { savePersonalInfo, updatePersonalInfo } from '@/api/base'

// Props接收
interface Props {
  show: boolean
  personalData?: {
    personalName?: string
    personalIdCard?: string
  }
  isEdit?: boolean // 是否为编辑模式
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
  isEdit: false,
  personalData: () => ({})
})

const emit = defineEmits(['update:show', 'onSaved'])

const message = useMessage()

// 表单数据
const formData = ref({
  personalName: '',
  personalIdCard: ''
})

// 表单验证规则
const rules = {
  personalName: {
    required: true,
    message: '请输入姓名',
    trigger: ['blur', 'input']
  },
  personalIdCard: {
    required: true,
    validator: (rule: any, value: string) => {
      if (!value) {
        return new Error('请输入身份证号')
      }
      // 身份证号格式验证（15位或18位）
      const idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      if (!idCardReg.test(value)) {
        return new Error('身份证号格式不正确')
      }
      return true
    },
    trigger: ['blur', 'input']
  }
}

const formRef = ref()
const isSaving = ref(false)

// 监听显示状态，重置表单数据
watch(() => props.show, (newVal) => {
  if (newVal) {
    // 复制数据，避免直接修改props
    formData.value = {
      personalName: props.personalData.personalName || '',
      personalIdCard: props.personalData.personalIdCard || ''
    }
  }
})

// 关闭弹窗
const handleClose = () => {
  emit('update:show', false)
  // 重置表单
  formRef.value?.restoreValidation()
}

// 保存个人信息
const handleSave = async () => {
  try {
    // 表单验证
    await formRef.value?.validate()
    
    isSaving.value = true
    
    let res
    if (props.isEdit) {
      // 编辑模式：调用更新接口
      res = await updatePersonalInfo(formData.value)
    } else {
      // 新增模式：调用保存接口
      res = await savePersonalInfo(formData.value)
    }
    
    if (res.code === 0) {
      message.success(props.isEdit ? '个人信息更新成功' : '个人信息保存成功')
      emit('onSaved', formData.value) // 通知父组件刷新数据
      handleClose()
    } else {
      message.error(res.msg || '操作失败')
    }
  } catch (error: any) {
    if (error.errors) {
      // 表单验证错误，不显示消息
      return
    }
    message.error('操作失败，请重试')
    console.error('保存个人信息失败:', error)
  } finally {
    isSaving.value = false
  }
}
</script>

<template>
  <n-modal :show="show" @update:show="handleClose">
    <n-card
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
      style="width:650px"
    >
      <template #header>
        <Text :size="24">
          {{ isEdit ? '编辑个人信息' : '添加个人信息' }}
        </Text>
      </template>
      
      <n-form 
        ref="formRef"
        :model="formData" 
        :rules="rules"
        label-placement="left"
        label-width="100px"
        require-mark-placement="right-hanging"
      >
        <n-form-item label="姓名" path="personalName">
          <n-input 
            v-model:value="formData.personalName"
            placeholder="请输入姓名"
            :disabled="isSaving"
            clearable
          />
        </n-form-item>
        
        <n-form-item label="身份证号" path="personalIdCard">
          <n-input 
            v-model:value="formData.personalIdCard"
            placeholder="请输入身份证号"
            :disabled="isSaving"
            clearable
            maxlength="18"
          />
        </n-form-item>
      </n-form>
      
      <template #footer>
        <n-flex justify="flex-end" :size="16">
          <n-button 
            @click="handleClose"
            :disabled="isSaving"
          >
            取消
          </n-button>
          <n-button 
            type="primary" 
            @click="handleSave"
            :loading="isSaving"
          >
            {{ isEdit ? '更新' : '保存' }}
          </n-button>
        </n-flex>
      </template>
    </n-card>
  </n-modal>
</template>

<style scoped lang="scss">
:deep(.n-form-item-label) {
  font-weight: 500;
}
</style>
