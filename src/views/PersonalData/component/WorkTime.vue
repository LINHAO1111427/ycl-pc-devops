<script setup lang="ts">
import {Text} from '@/components'
import {ref} from 'vue'
import {updateWeeklyWorkHours} from '@/api/user'
// const value = ref('3')
const props = defineProps({
  weekHours: [Number, String, null]
})
import {useMessage} from 'naive-ui'
// 创建 message 实例
const message = useMessage()
const innerWeekHours = ref(props.weekHours)
watch(() => props.weekHours, val => {
  innerWeekHours.value = val
})
const emit = defineEmits(['update:show'])

const songs = [
  {
    label: '每周40小时以上',
    value: '0',
  },
  {
    label: '每周少于40小时',
    value: '1',
  },
  {
    label: '我可以随时接受新的工作',
    value: '2',
  },
  {
    label: '无',
    value: null,
  },
]

const onClickConfirm = async () => {

  const res = await updateWeeklyWorkHours({
    userId: localStorage.getItem('userId'),
    weeklyWorkHours: innerWeekHours.value //每周工作时间
  })
  if (res.code !== 0) {
    message.error(res.msg)
    return
  }
  emit('update:show', false)
  emit('update:weekHours', innerWeekHours)
}
</script>

<template>
  <n-modal>
    <n-card
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
        style="width: 850px"
    >
      <n-flex class="contact-work-date" vertical :size="40">
        <Text :size="30">有效工作时间</Text>
        <n-flex vertical>
          <Text :size="18">每周小时数</Text>
          <Text :size="16" color="#808080">了解你的工作量有助于单刻达找到适合你的工作。</Text>
        </n-flex>
        <n-divider style="margin: 0"></n-divider>
        <n-space vertical>
          <Text :size="18">我目前可以工作</Text>
          {{ props.weekHours }}
          <n-radio-group v-model:value="innerWeekHours" name="radiogroup">
            <n-space vertical>
              <n-radio v-for="song in songs" :key="song.value" :value="song.value">
                {{ song.label }}
              </n-radio>
            </n-space>
          </n-radio-group>
        </n-space>
        <n-flex justify="flex-end" :size="50">
          <n-button text type="primary" @click="emit('update:show', false)" class="naiveui-button-16">
            取消
          </n-button>
          <n-button type="primary" @click="onClickConfirm" class="naiveui-button-16">
            确定
          </n-button>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>

<style scoped lang="scss">

</style>
