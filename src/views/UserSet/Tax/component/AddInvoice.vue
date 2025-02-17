<script setup lang="ts">
import { Text } from '@/components'

withDefaults(defineProps<{
    type: boolean,
  }>(), {
    type: 1
  },
)

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
          {{type == 1 ? '个人地址' : '企业地址'}}
        </Text>
        <n-form class="naiveui-form-16">
          <n-grid :cols="24" :x-gap="24">
            <n-form-item-gi :span="24" label="姓名" path="inputValue">
              <n-input placeholder="" />
            </n-form-item-gi>
			<n-form-item-gi :span="12" label="所在地区" path="inputValue">
			  <n-input placeholder="" />
			</n-form-item-gi>
			<n-form-item-gi :span="12" label="地址" path="inputValue">
			  <n-input placeholder="" />
			</n-form-item-gi>
			<n-form-item-gi :span="12" label="注册电话" path="inputValue" v-if="type == 2">
			  <n-input placeholder="" />
			</n-form-item-gi>
			<n-form-item-gi :span="12" label="单位税号" path="inputValue" v-if="type == 2">
			  <n-input placeholder="" />
			</n-form-item-gi>
			<n-form-item-gi :span="12" label="开户银行" path="inputValue" v-if="type == 2">
			  <n-input placeholder="" />
			</n-form-item-gi>
			<n-form-item-gi :span="12" label="银行账号" path="inputValue" v-if="type == 2">
			  <n-input placeholder="" />
			</n-form-item-gi>
			<n-form-item-gi :span="12" label="邮箱" path="inputValue" v-if="type == 2">
			  <n-input placeholder="" />
			</n-form-item-gi>
          </n-grid>
        </n-form>
        <n-flex justify="flex-end" :size="50">
          <n-button type="primary" @click="emit('update:show',false)" text class="naiveui-button-16">取消</n-button>
          <n-button type="primary" @click="emit('update:show',false)" class="naiveui-button-16">保存</n-button>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>
