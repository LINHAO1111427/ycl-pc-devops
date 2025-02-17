<script setup lang="ts">
import { Text } from '@/components'

const emit = defineEmits(['update:show'])
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
          添加自定义认证
        </Text>
        <n-form class="naiveui-form-16">
          <n-grid :cols="24" :x-gap="24">
            <n-form-item-gi :span="24" label="证书名称" path="inputValue">
              <n-input placeholder="例如：认证的CMS" />
            </n-form-item-gi>
            <n-form-item-gi :span="24" label="认证机构" path="inputValue">
              <n-input placeholder="例如：联盟" />
            </n-form-item-gi>
            <n-form-item-gi :span="24" label="描述" path="inputValue">
              <n-input placeholder="请输入标题" type="textarea" />
            </n-form-item-gi>
            <n-form-item-gi :span="6" label="发行日期" path="inputValue">
              <n-date-picker placeholder="请选择日期" />
            </n-form-item-gi>
            <n-form-item-gi :span="6" label="到期日（可选）" path="inputValue">
              <n-date-picker placeholder="请选择日期" />
            </n-form-item-gi>
          </n-grid>
        </n-form>
        <n-flex justify="flex-end" :size="50">
          <n-button type="primary" @click="emit('update:show',false)" text class="naiveui-button-16">取消</n-button>
          <n-button type="primary" @click="emit('update:show',false)" class="naiveui-button-16">添加认证</n-button>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>

