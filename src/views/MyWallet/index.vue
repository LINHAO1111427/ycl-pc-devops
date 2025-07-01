<script setup lang="ts">
import HeaderTop from '@/components/Header/HeaderTop.vue'
import {IconCashLine, RenderIcon, Footer} from '@/components'
import {SettingsOutline} from '@vicons/ionicons5'

const showModal = ref(false)
const creditScore = ref(50)

const formData = ref({
  depositAmount: '',
  withdrawAmount: ''
})
const submitDeposit = () => {
  console.log('缴纳保证金额：', formData.value.depositAmount)
  // 可以在这里添加实际的提交逻辑
}

const submitWithdraw = () => {
  console.log('体现保证金额：', formData.value.withdrawAmount)
  // 可以在这里添加实际的提交逻辑
}
</script>

<template>
  <HeaderTop :is-work="false" :is-login="false"></HeaderTop>
  <div class="my-wallet">
    <div class="wallet">
      <div class="wallet-header-title">
        我的钱包
      </div>
      <n-flex class="wallet-amount" justify="space-between">
        <div class="wallet-amount-slider">
          <div class="wallet-amount-slider-title">
            预期总收入 ¥1000
          </div>
          <div class="wallet-amount-slider-desc">
            可提现余额 ¥100
          </div>
          <div class="wallet-amount-slider-desc">
            奖励金额 ¥100
          </div>
          <div class="wallet-amount-slider-desc">
            保证金额 ¥0
          </div>
        </div>
        <div class="wallet-slider-button" style="display: flex;flex-direction: column;justify-content: space-around;">
          <n-button size="large" style="width: 178px;" type="primary" @click="$router.push('/withdrawals')">
            <span class="naiveui-text-16">提现</span>
          </n-button>
          <n-button size="large" style="width: 178px;" type="primary" @click="showModal = true">
            <span class="naiveui-text-16">保证金额</span>
          </n-button>
        </div>

      </n-flex>

      <n-flex class="waller-list-container" :size="24">
        <n-flex class="wallet-container-item" :sie="20" vertical justify="space-between">
          <n-flex class="wallet-container-item-header" justify="space-between">
            <n-flex :size="10" align="center">
              <RenderIcon :icon="IconCashLine" :size="24"></RenderIcon>
              <span class="item-header-text">
                  提款时间表
              </span>
            </n-flex>
            <!-- <n-button>
              <n-space>
                <n-icon color="#0D0D12">
                  <SettingsOutline></SettingsOutline>
                </n-icon>
               <span class="naiveui-text-14">More Option</span>
              </n-space>
            </n-button> -->
          </n-flex>
          <n-flex class="wallet-container-details" vertical justify="space-between">
            <div class="details-title">
              直拨至本地银行 （CNY） - 账户末尾地址为 4536
            </div>
            <n-button color="#EFFEFA" text-color="#28806F" size="large" block strong type="primary">每周（06-07 下一期）
            </n-button>
          </n-flex>
          <n-button ghost color="#58968B" size="large" text-color="#58968B" style="height: 48px;"
                    @click="$router.push('/withdrawal-calendar')">
            <span class="naiveui-text-16">查看付款日历</span>
          </n-button>
        </n-flex>
        <n-flex class="wallet-container-item" :sie="20" vertical justify="space-between">
          <n-flex class="wallet-container-item-header" justify="space-between">
            <n-flex :size="10" align="center">
              <RenderIcon :icon="IconCashLine" :size="24"></RenderIcon>
              <span class="item-header-text">
                  上次提款
              </span>
            </n-flex>
          </n-flex>
          <n-flex class="wallet-container-details" vertical justify="space-between">
            <div class="details-title">
              ¥47.01 直接到本地银行 （CNY） - 账户以 4536 结尾
            </div>
            <n-button color="#EFFEFA" text-color="#28806F" size="large" block strong type="primary">2024-06-22
            </n-button>
          </n-flex>
          <n-button ghost color="#58968B" size="large" text-color="#58968B" style="height: 48px;"
                    @click="$router.push('/transaction-log')">
            <span class="naiveui-text-16">查看交易记录</span>
          </n-button>
        </n-flex>
      </n-flex>
    </div>
    <Footer></Footer>
  </div>
  <n-modal v-model:show="showModal" title="用户信用信息" preset="dialog">
    <n-space vertical size="large" >
      <div>用户当前信用分：{{ creditScore }}</div>

      <n-form :model="formData" label-placement="top">
        <n-form-item label="缴纳保证金额">
          <n-input v-model:value="formData.depositAmount" placeholder="请输入保证金额"  style="flex: 1; margin-right: 8px;" />
          <n-button type="primary" @click="submitDeposit" style="margin-top: 8px;">确定</n-button>
        </n-form-item>

        <n-form-item label="体现保证金额">
          <n-input v-model:value="formData.withdrawAmount" placeholder="请输入体现金额" style="flex: 1; margin-right: 8px;" />
          <n-button type="primary" @click="submitWithdraw" style="margin-top: 8px;">确定</n-button>
        </n-form-item>
      </n-form>
    </n-space>
  </n-modal>
</template>

<style scoped lang="scss">
.my-wallet {
  height: $container-height;
  overflow: auto;
  background-color: $BackColor;

  .wallet {
    width: 1326px;
    margin: auto;
    max-width: 100%;
  }

  .wallet-header-title {
    margin: 40px 0 30px 0;
    font-weight: 500;
    font-size: 36px;
    color: #000000;
  }

  .wallet-amount-slider-title {
    font-weight: 600;
    font-size: 24px;
    color: #000000;
  }

  .wallet-amount-slider-desc {
    font-weight: 500;
    font-size: 20px;
    color: #58968B;
    margin-top: 10px;
  }

  .waller-list-container {
    margin-top: 30px;
    margin-bottom: 115px;

    .wallet-container-item {
      width: 456px;
      height: 332px;
      background: #FFFFFF;
      box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.06);
      border-radius: 16px 16px 16px 16px;
      border: 1px solid #DFE1E7;
      padding: 21px 20px 16px 20px;
      box-sizing: border-box;

      .wallet-container-details {
        width: 424px;
        height: 188px;
        background: #FFFFFF;
        border-radius: 8px 8px 8px 8px;
        border: 1px solid #DFE1E7;
        padding: 16px 22px;

        .details-title {
          font-weight: 500;
          font-size: 14px;
          color: #272835;
          line-height: 22px;
        }
      }
    }

    .item-header-text {
      font-weight: 500;
      font-size: 16px;
      color: #0D0D12;
    }
  }
}

@media (max-width: 1400px) {
  .my-wallet {
    .wallet {
      padding: 0 20px;
    }
  }
}
</style>
