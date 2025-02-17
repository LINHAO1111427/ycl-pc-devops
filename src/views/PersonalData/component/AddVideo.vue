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
          视频介绍
        </Text>
        <n-form>
          <n-grid :cols="24" :x-gap="24">
            <n-form-item-gi :span="24" label="视频链接" path="inputValue">
              <n-input placeholder="" />
            </n-form-item-gi>
          </n-grid>
		  <n-grid :cols="24" :x-gap="24">
		    <n-form-item-gi :span="24" label="上传视频" path="inputValue">
		      <n-upload
		          action=""
		          list-type="text"
		        >
		          <n-button>上传视频</n-button>
		        </n-upload>
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
