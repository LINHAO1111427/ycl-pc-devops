<script setup lang="ts">
import { Text } from '@/components'
import { RenderIcon, IconCashLine } from '@/components'

const emit = defineEmits(['update:show'])
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
      <n-flex :size="40" class="work-details-modal" vertical>
        <div>
          <Text :size="34">索取客户推荐</Text>
          <Text :size="16" class="secondary-color-text-1">
            不要担心我们泄漏客户的联系方式，我们只会展示您的姓氏、客户职位
            、任务名称
          </Text>
        </div>
        <n-flex :wrap="false" :size="20">
          <n-form style="width: calc(100% - 256px)"  class="naiveui-form-16">
            <n-grid :cols="24" :x-gap="20">
              <n-form-item-gi :span="22" label="姓名" path="inputValue">
                <n-input placeholder="请输入姓名" />
              </n-form-item-gi>
              <n-form-item-gi
                :span="22"
                label="企业电子邮件地址"
                path="inputValue"
              >
                <n-input placeholder="请输入企业电子邮件地址" />
              </n-form-item-gi>
              <n-form-item-gi
                :span="11"
                label="客户标题（可选）"
                path="inputValue"
              >
                <n-input placeholder="请输入企业电子邮件地址" />
              </n-form-item-gi>
              <n-form-item-gi
                :span="11"
                label="项目类型（可选）"
                path="inputValue"
              >
                <n-input placeholder="请输入标题" />
              </n-form-item-gi>

              <n-form-item-gi :span="22" label="给客户的消息" path="inputValue">
                <n-input
                  placeholder="请输入标题"
                  type="textarea"
                  style="height: 160px"
                />
              </n-form-item-gi>
            </n-grid>
          </n-form>
          <n-flex vertical class="letter-container" align="center">
            <!-- <RenderIcon :icon="IconCashLine" :size="100"></RenderIcon> -->
			<img src="../../../assets/img/tuijian-sousuo.png">
            <Text :size="24" align="center">通过客户推荐加强您的形象</Text>
            <n-space vertical :size="20">
              <Text :size="16">
                从原创力意外的客户那里展示 您的技能和成功形象
              </Text>
              <Text :size="16">
                您的客户将收到一封电子邮件， 其中包含提交成功案例的说明
              </Text>
              <Text :size="16">推荐信将在原创力验证后显示在您的个人资料中</Text>
            </n-space>
          </n-flex>
        </n-flex>
        <n-flex justify="flex-end" :size="50">
          <n-button type="primary" @click="emit('update:show', false)" text class="naiveui-button-16">
            取消
          </n-button>
          <n-button type="primary" @click="emit('update:show', false)" class="naiveui-button-16">
            请求推荐
          </n-button>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>

<style lang="scss">
.letter-container {
  width: 265px;
  height: 439px;
  background: #ededed;
  border-radius: 12px 12px 12px 12px;
  flex-shrink: 0;
  padding: 20px;
}
</style>
