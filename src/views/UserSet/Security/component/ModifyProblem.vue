<script setup lang="ts">
import { Text } from '@/components'
import { ref } from 'vue'
import { answerOptions } from './index'

const isVar = ref(false)

const answer = ref(null)

const emit = defineEmits(['update:show'])


function onClickConfirm() {
  answer.value = null
  if (isVar.value) {
    emit('update:show')
  }
  isVar.value = true
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
        <div>
          <Text :size="30">修改问题</Text>
          <Text :size="12" color="#808080">
            当我们需要验证您的身份时，系统会提示您回答您的安全问题，所以请务必选择一个只有您自己知道答案的问题。
          </Text>
        </div>
        <n-flex vertical>
          <template v-if="!isVar">
            <Text :size="18">问题</Text>
            <Text :size="12">
              你的宠物叫什么名字
            </Text>
          </template>
          <n-form ref="formRef" class="naiveui-form-16" :style="{
            'margin-top': isVar ? 0 : '40px'
          }">
            <template v-if="isVar">
              <n-form-item path="answer" label="答案">
                <n-select placeholder="请选择" :options="answerOptions" />
              </n-form-item>
            </template>
            <n-form-item path="answer" label="答案">
              <n-input v-model:value="answer" placeholder="请输入" />
            </n-form-item>
          </n-form>
          <template v-if="isVar">
            <div>
              <n-checkbox>
                我明白，如果我无法回答这个问题，我的账户将被锁定
              </n-checkbox>
            </div>
            <div>
              <n-checkbox>让我在此设备上保持登录状态</n-checkbox>
            </div>
          </template>
        </n-flex>

        <n-flex justify="flex-end" :size="50">
          <n-button text type="primary" @click="emit('update:show',false)" class="naiveui-button-16">
            取消
          </n-button>
          <n-button type="primary" @click="onClickConfirm" class="naiveui-button-16">{{ isVar ? '确定' : '验证' }}</n-button>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>

<style scoped lang="scss">

</style>