<script setup lang="ts">
import HeaderTop from '@/components/Header/HeaderTop.vue'
import { IconCashLine, RenderIcon, Text, Footer } from '@/components'
import { SettingsOutline } from '@vicons/ionicons5'
</script>

<template>
  <HeaderTop :is-work="false" :is-login="false"></HeaderTop>
  <div class="my-wallet">
    <div class="wallet">
      <div class="wallet-header-title">
        提现历史
      </div>
      <n-flex class="wallet-amount" justify="space-between">
        <div class="wallet-amount-slider">
          <div class="wallet-amount-slider-title">
            <Text :size="42">余额：</Text><Text :size="42" color="#58968B">¥120420.00</Text>
          </div>
		  <div class="wallet-amount-slider-content">
			  <Text :size="18">报表周期</Text>
			  <div class="date-main">
				  <n-date-picker v-model:value="range" type="daterange" clearable />
			  </div>
		  </div>
        </div>
      </n-flex>
    </div>
    <Footer></Footer>
  </div>
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
	padding-bottom: 300px;
  }

  .wallet-header-title {
    margin: 40px 0 30px 0;
    font-weight: 500;
    font-size: 36px;
    color: #000000;
  }

  .wallet-amount-slider-title {
    font-weight: 600;
    font-size: 42px;
    color: #000000;
	display: flex;
  }
  
  .wallet-amount-slider-content{
	  margin-top: 82px;
  }
  
  .date-main{
	  margin-top: 10px;
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
		  padding:0 20px;
	  }
	}
}
</style>