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
        <div>
          <Text :size="34">
            将普通话翻译成英语
          </Text>
          <Text :size="16">
            翻译和本地化服务｜2021-10-29——2021-10-30
          </Text>
        </div>
        <n-flex vertical>
          <Text :size="18">
            工作反馈
          </Text>
          <Text :size="16">
            客户反馈
          </Text>
          <Text :size="12" color="#808080">
            没有给出反馈
          </Text>
        </n-flex>
        <n-flex vertical>
          <Text :size="20">
            自由职业者对客户的反馈
          </Text>
          <n-space align="center">
            <n-rate size="large" readonly :value="5" />
            <Text :size="14">5</Text>
          </n-space>
        </n-flex>
        <n-flex justify="space-between">
          <n-flex class="work-details-slider-container" vertical>
            <Text :size="20">
              工作详情
            </Text>
            <Text :size="16">
              职位描述
            </Text>
            <n-ellipsis line-clamp="3" :tooltip="false">
              我们正在寻找一位技术娴熟，一丝不苟的基于Web和Word的中文演示文榜编辑加入我们充满活力的日队。理想的候选人将具备强大的中文能力
            </n-ellipsis>
            <n-space justify="space-between">
              <div>
                固定价格作业
              </div>
              <div>
                ¥0.00
              </div>
            </n-space>
            <n-space justify="space-between">
              <div>
                交货截止日期
              </div>
              <div>
                预算
              </div>
            </n-space>
            <n-space justify="space-between">
              <div>
                11月1日
              </div>
            </n-space>
          </n-flex>
          <n-flex class="work-details-right-box" vertical>
            <Text :size="20">
              关于客户
            </Text>
            <n-flex align="center">
              <n-rate size="large" readonly :value="5" />
              <Text :size="14">4.99条，共52条点赞</Text>
            </n-flex>
            <n-flex vertical>
              <Text>中国</Text>
              <Text>天津</Text>
              <Text class="secondary-color-text-1" :size="12">总支出超过10000元</Text>
            </n-flex>
          </n-flex>
        </n-flex>
        <n-flex justify="flex-end">
          <n-button type="primary" @click="emit('update:show',false)" class="naiveui-button-16">关闭</n-button>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>

<style scoped lang="scss">
::v-deep(.n-base-icon) {
  font-size: 16px;
}

.work-details-slider-container {
  width: 258px;
}

.work-details-right-box {
  width: 358px;
}
</style>