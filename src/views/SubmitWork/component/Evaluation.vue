<script setup lang="ts">
import { RenderIcon, Text, IconStart } from '@/components'
import { ref } from 'vue'

const emit = defineEmits(['update:show'])

const options = [
  {
    title: '态度',
    key: 'attitude',
  },
  {
    title: '响应速度',
    key: 'efficiency',
  },
  {
    title: '支付效率',
    key: 'quality',
  },
]

const score = [
  {
    title: '非常不满意',
    value: '非常不满意',
  },
  {
    title: '不满意',
    value: '不满意',
  },
  {
    title: '一般',
    value: '一般',
  },
  {
    title: '满意',
    value: '满意',
  },
  {
    title: '非常满意',
    value: '非常满意',
  },
]

const currentRate = ref({})

function onClickActive(value, key) {
  currentRate.value[key] = value
}
</script>

<template>
  <n-modal>
    <n-card
      style="width: 750px"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-flex vertical :size="40" style="padding: 0 40px">
        <Text :size="40">
          请对雇主进行评价
        </Text>
        <n-flex class="eval-container" vertical :size="30">
          <n-flex class="eval-container-item" vertical v-for="item in options">
            <Text :size="18">{{ item.title }}</Text>
            <n-flex justify="space-between" class="score-item">
              <n-flex v-for="s in score" vertical align="center" :size="2" @click="onClickActive(s.value,item.key)">
                <div class="score-icons">
                  <RenderIcon
                    :icon="s.value === currentRate[item.key] ? IconStart : 'icon-shoucang1'"
                    :size="30"
                    :fill="s.value === currentRate[item.key] ? '#58968B':'#808080'"
                  />
                </div>
                <Text>{{ s.title }}</Text>
              </n-flex>
            </n-flex>
          </n-flex>
        </n-flex>
      </n-flex>
      <template #footer>
        <n-flex justify="flex-end" :size="50">
          <n-button text type="primary" @click="emit('update:show',false)">
            取消
          </n-button>
          <n-button type="primary" @click="emit('update:show',false)">确定</n-button>
        </n-flex>
      </template>
    </n-card>
  </n-modal>
</template>

<style scoped lang="scss">
.score-item {
  cursor: pointer;
}

.score-icons {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>