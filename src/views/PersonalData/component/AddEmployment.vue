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
          添加您的工作经历
        </Text>
        <n-form class="naiveui-form-16">
          <n-grid :cols="24" :x-gap="24">
            <n-form-item-gi :span="24" label="公司" path="inputValue">
              <n-input placeholder="请输入公司" />
            </n-form-item-gi>
            <n-form-item-gi :span="6" label="城市" path="inputValue">
              <n-input placeholder="请输入城市" />
            </n-form-item-gi>
            <n-form-item-gi :span="6" label="国家" path="inputValue">
              <n-input placeholder="列如：美国" />
            </n-form-item-gi>
            <n-form-item-gi :span="24" label="职位名称" path="inputValue">
              <n-input placeholder="请输入标题" />
            </n-form-item-gi>
            <n-form-item-gi :span="6" label="起始年月" path="inputValue">
            	<n-date-picker placeholder="请选择日期" />
            </n-form-item-gi>
            <n-form-item-gi :span="6" label="结束年月" path="inputValue">
            	<n-date-picker placeholder="请选择日期" />
            </n-form-item-gi>
            <n-form-item-gi :span="24" label="工作内容" path="inputValue">
              <n-input placeholder="请输入标题" type="textarea" />
            </n-form-item-gi>
          </n-grid>
        </n-form>
        <n-flex justify="flex-end" :size="50">
          <n-button type="primary" @click="emit('update:show',false)" text class="naiveui-button-16">取消</n-button>
          <n-button type="primary" @click="emit('update:show',false)" class="naiveui-button-16">确定</n-button>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>
