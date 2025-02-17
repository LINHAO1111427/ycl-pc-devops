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
      style="width:750px"
    >
      <n-flex :size="10" class="work-details-modal" vertical>
        <Text :size="34">
          自我简介
        </Text>
        <n-form>
          <n-grid :cols="24" :x-gap="24">
            <n-form-item-gi :span="24" label="" path="inputValue">
              <n-input type="textarea" placeholder="" />
            </n-form-item-gi>
          </n-grid>
        </n-form>
        <n-flex justify="flex-end" :size="50">
          <n-button type="primary" @click="emit('update:show',false)" text>取消</n-button>
          <n-button type="primary" @click="emit('update:show',false)">保存</n-button>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>
