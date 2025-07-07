<script setup lang="ts">
import {Text} from '@/components'

const emit = defineEmits(['update:show', 'success'])
const showKf = ref(false)
const addKf = () => {

  emit('success')
  emit('update:show', false)
}
</script>

<template>
  <n-modal>
    <n-card :bordered="false" size="huge" role="dialog" aria-modal="true" style="width:850px">
      <Text :size="34">
        付款
      </Text>
      <n-flex :size="15" align="center" class="pay-modal" vertical>
        <div class="code">
          <img src="../../../assets/img/qrCode.png" style="width: 320px;height: 320px"/>
        </div>
        <Text :size="16">
          扫描二维码付款
        </Text>
        <Text :size="16" color="#808080">
          <div style="font-weight: 600;font-size: 16px;">尊敬的客户，您好！</div>
          感谢您一直以来对我们平台的关注与支持！为给您带来更优质的体验，平台正处于试运营阶段，聊天功能将于48小时后正式开放，届时我们将第一时间推送通知。
          在此期间，若您有任何平台相关问题，欢迎随时添加专属客服微信进行咨询。为表歉意，<span
            style="color: red;font-size: 16px;">凡添加客服微信的用户，均可免费领取50元项目金额抵扣券或诚意金，</span>在使用平台服务时可直接抵扣或提现。
          我们深知暂时的不便给您带来困扰，团队正全力以赴完善功能，期待以更完美的状态与您相遇！如有其他疑问，欢迎随时联系我们~再次感谢您的理解与包容！
        </Text>
        <n-flex>
          <n-button size="large" @click="emit('update:show',false)" class="naiveui-button-16"
                    style="margin-top: 29px;">取消
          </n-button>
          <n-button type="primary" size="large" @click="addKf()" class="naiveui-button-16"
                    style="margin-top: 29px;">添加客服
          </n-button>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>
<style scoped lang="scss">
.pay-modal {
  .code {
    width: 320px;
    height: 320px;
    margin: 0 auto;
    background: #D9D9D9;
    border-radius: 12px 12px 12px 12px;
  }
}
</style>
