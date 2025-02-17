<script setup lang="ts">
import { Text } from '@/components'
import { answerOptions } from './index.ts'

const emit = defineEmits(['update:show', 'confirm']);


function onClickConfirm() {
  emit('confirm');
  emit('update:show');
}
</script>

<template>
  <n-modal centered>
    <n-card
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
      style="width: 850px"
    >
      <n-flex class="contact-work-date" vertical :size="40">
        <Text :size="30">安全问题</Text>
        <Text :size="18">
          当我们需要验证您的身份时，系统会提示您回答您的安全问题，所以请务必选择一个只有您自己知道答案的问题。
        </Text>

        <n-flex vertical>
          <n-form ref="formRef" class="naiveui-form-16">
            <n-form-item path="age" label="年龄">
              <n-select placeholder="请选择" :options="answerOptions" />
            </n-form-item>
            <n-form-item path="answer" label="答案">
              <n-input placeholder="请输入" />
            </n-form-item>
          </n-form>
          <div>
            <n-checkbox>
              我明白，如果我无法回答这个问题，我的账户将被锁定
            </n-checkbox>
          </div>
          <div>
            <n-checkbox>让我在此设备上保持登录状态</n-checkbox>
          </div>
        </n-flex>

        <n-flex justify="flex-end" :size="50">
          <n-button text type="primary" @click="emit('update:show',false)" class="naiveui-button-16">
            取消
          </n-button>
          <n-button type="primary" @click="onClickConfirm" class="naiveui-button-16">确定</n-button>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>