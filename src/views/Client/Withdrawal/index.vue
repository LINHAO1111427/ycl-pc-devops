<script setup lang="ts">
import Layout from '@/components/Layout/Layout.vue'
import { Text } from '@/components'
import HeaderTop from '@/components/Header/HeaderClientTop.vue'
import { h } from 'vue'
import { createDiscreteApi } from 'naive-ui'

const options = [
  {
    label: '中国银行储蓄卡（1234）',
    value: '中国银行储蓄卡（1234）',
  },
  {
    label: '中国银行储蓄卡（5886）',
    value: '中国银行储蓄卡（5886）',
  },
]

function renderLabel(options) {
  return h('div', {
    style: {
      fontSize: '16px',
      textAlign: 'right',
      minWidth: '250px',
    },
  }, options.label)
}
const money = ref(null)
function onClickAll(){
	money.value = 1200
}
const { dialog } = createDiscreteApi(['dialog'])
function onClickSubmit(){
	dialog.warning({
		actionClass: 'naiveui-dialog-action',
		showIcon: false,
		closable: false,
		title: '提现受理成功',
		content:'稍后可到提现银行APP查询到账金额',
		positiveText: '确认',
		maskClosable: false,
		positiveButtonProps: {
			color: '#58968B'
		},
	})
}
</script>

<template>
  <HeaderTop :is-work="false"></HeaderTop>
  <Layout>
    <div class="withdrawal-body">
      <Text :size="36">提现金额</Text>
      <n-flex vertical :size="16">
        <div class="withdrawal-input-container">
          <n-input v-model:value="money" placeholder="请输入提现金额">
            <template #prefix>
              <Text :size="35">￥</Text>
            </template>
            请输入
          </n-input>
        </div>
        <Text :size="16" class="secondary-color-text-1">
          当前可提现1200元
          <n-button type="primary" text class="router-link" style="font-size:16px" @click="onClickAll">全部提现</n-button>
        </Text>

        <n-flex class="withdrawal-footer-recommend" align="center" justify="space-between">
          <Text :size="20">提现至</Text>
          <n-flex align="flex-end" justify="flex-end" vertical style="min-width:300px">
            <n-select
              :options="options"
              size="large"
              placeholder="请选择提现方式"
              :render-label="renderLabel"
            />
            <Text class="secondary-color-text-1" style="margin-right: 10px">预计两小时内到账</Text>
          </n-flex>
        </n-flex>
        <n-flex align="center" justify="center" style="margin-bottom: 50px">
          <n-button type="primary" style="width: 650px;height: 50px" @click="onClickSubmit">提现</n-button>
        </n-flex>
      </n-flex>
    </div>
  </Layout>
</template>

<style scoped lang="scss">
.withdrawal-body {
  padding-top: 40px;

  .withdrawal-input-container {
    height: 152px;
    background: #FFFFFF;
    border-radius: 12px 12px 12px 12px;
    margin-top: 20px;
    padding: 50px 25px;
  }

  ::v-deep(.n-input-wrapper) {
    --n-height: 50px;
  }

  ::v-deep(.n-input__input-el), ::v-deep(.n-input__placeholder span), {
    font-size: 30px;
  }

  ::v-deep( .n-input__border),
  ::v-deep(.n-base-selection__border),
  ::v-deep(.n-input__state-border),
  ::v-deep(.n-base-selection__state-border) {
    display: none !important;
  }

  ::v-deep(.n-base-selection-input__content), ::v-deep(.n-base-selection-placeholder__inner) {
    font-size: 16px;
    text-align: right;
    width: 100%;
  }


}

.withdrawal-footer-recommend {
  width: 1326px;
  max-width:100%;
  height: 101px;
  background: #FFFFFF;
  border-radius: 12px 12px 12px 12px;
  padding: 0px 20px;
  margin-bottom: 150px;
}


::v-deep(.n-button__content) {
  font-size: 16px;
}

</style>