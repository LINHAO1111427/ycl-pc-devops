<script setup lang="ts">
import HeaderTop from '@/components/Header/HeaderTop.vue'
import {
  Footer,
  IconCrown,
  RenderIcon,
  IconReport,
  IconDiscount,
  IconService1,
  IconCheckBox,
  IconClose,
} from '@/components'
import { ref } from 'vue'

import avatarUrl from '../../assets/img/avatar.png'

import Pay from './component/Pay.vue'

const showPay = ref(false)

const currentSelect = ref('连续包月')

const options = [
  {
    title: '连续包月',
    tip: '首月',
    price: '19.9',
    price1: '29.9',
  },
  {
    title: '连续包季',
    tip: '首月',
    price: '76.7',
    price1: '89.7',
  },
  {
    title: '连续包年',
    tip: '',
    price: '339',
    price1: '0.94/天',
  },
]

const descOptions = [
  {
    icon: IconCrown,
    title: '查看价格区间',
    desc: '看到竞争对手的价格区间<br/>让自己的出价更具竞争力',
  },
  {
    icon: IconReport,
    title: '行业详细分析报告',
    desc: '每个月会收到平台的行业<br/>详细分析报告',
  },
  {
    icon: IconDiscount,
    title: '服务费折扣',
    desc: '20%折扣到15%<br/>&nbsp;',
  },
  {
    icon: IconService1,
    title: '专属客服',
    desc: '专属客服回复更快<br/> &nbsp;',
  },
]
</script>

<template>
  <div class="member-pages">
    <HeaderTop :is-login="false" :is-work="false" />
    <div class="member-pages_container">
      <div class="member-pages-header-title">原创力会员</div>
      <n-flex class="member-pages_send" align="center" justify="space-between">
        <n-flex class="member-pages_avatar">
          <n-flex justify="space-around" vertical>
            <n-flex align="center" class="avatar_user">
              <n-avatar
                :src="avatarUrl"
                round
                :size="80"
              />
              <n-flex justify="space-evenly" vertical>
                <div class="avatar-title">Jason Z.</div>
                <div class="avatar-desc">设计师</div>
              </n-flex>
            </n-flex>
            <span style="margin-top: 20px;">
              默认为自动续费，需要在会员到期前一天，前往
              <n-button type="primary" text>
                <span style="text-decoration: underline">订阅页面</span>
              </n-button>
              退订
            </span>
          </n-flex>
        </n-flex>
        <n-flex>
          <n-flex
            justify="space-evenly"
            :class="[
              'member-pages-select',
              currentSelect === item.title ? 'active' : '',
            ]"
            vertical
            v-for="item in options"
            @click="currentSelect = item.title"
          >
            <div class="member-pages-select-title">{{ item.title }}</div>
            <n-flex align="flex-end" justify="center" :size="5">
              <div class="find">{{ item.tip }}</div>
              <div class="member-pages-price">
                <div class="member-pages-price-symbol">￥</div>
                <div class="member-pages-price-numbers">{{ item.price }}</div>
              </div>
            </n-flex>
            <n-flex align="flex-end" justify="center" :size="5">
              <div class="member-pages-price">
                <div class="member-pages-price-symbol mini">￥</div>
                <div class="member-pages-price-numbers mini">
                  {{ item.price1 }}
                </div>
              </div>
            </n-flex>
          </n-flex>
        </n-flex>
        <n-flex vertical class="button-footer" justify="center">
          <n-button type="primary" size="large" @click="showPay = true">
			  <span class="naiveui-text-16">立即开通</span>
		  </n-button>
          <n-button type="primary" ghost size="large">
			  <span class="naiveui-text-16">关联订阅</span>
		  </n-button>
          <div class="secondary-color-text-1">关联订阅后享首月、首季折扣</div>
        </n-flex>
      </n-flex>

      <n-flex
        class="member-pages-desc-container"
        justify="space-around"
        align="center"
      >
        <n-flex
          class="member-pages-desc-item"
          vertical
          v-for="item in descOptions"
          align="center"
          :size="20"
        >
          <RenderIcon :icon="item.icon" :size="60" fill="#F18C43" />
          <div class="member-pages-desc-item-title">
            {{ item.title }}
          </div>
          <div class="member-pages-desc-item-desc" v-html="item.desc"></div>
        </n-flex>
      </n-flex>

      <div class="positions-skills-header">
        <div class="positions-skills-header-item">权益对比</div>
        <div class="positions-skills-header-item">普通账户</div>
        <div class="positions-skills-header-item">会员账户</div>
      </div>

      <div class="positions-skills-container-price">
        <n-flex class="positions-skills-container-price-item" vertical align="center" :size="40">
          <div>极速匹配</div>
          <div>查看价格区间</div>
          <div>行业详细分析报告</div>
          <div>工作推荐</div>
          <div>服务费折扣</div>
          <div>专属客服</div>
          <div>每日签到积分</div>
        </n-flex>
        <n-flex class="positions-skills-container-price-item" vertical align="center" :size="40">
          <RenderIcon :icon="IconClose" fill="#BFC0C0" size="22" v-for="item in 3" />
          <RenderIcon :icon="IconCheckBox" stroke="#3A665E" size="22" is-stroke />
          <RenderIcon :icon="IconClose" fill="#BFC0C0" size="22" v-for="item in 2" />
		  <RenderIcon :icon="IconCheckBox" stroke="#3A665E" size="22" is-stroke />
        </n-flex>
        <n-flex class="positions-skills-container-price-item" vertical align="center" :size="40">
          <RenderIcon :icon="IconCheckBox" stroke="#3A665E" size="22" is-stroke v-for="item in 7" />
        </n-flex>
      </div>
    </div>
    <Footer />
  </div>
  <Pay v-model:show="showPay" />
</template>

<style scoped lang="scss">
.member-pages {
  background-color: #f4fbfa;
  overflow: auto;
  height: 100%;

  .member-pages_container {
    width: 1326px;
    margin: 0 auto;
	max-width:100%;

    .member-pages-header-title {
      font-size: 52px;
      color: #333333;
      margin: 40px 0;
    }
  }

  .member-pages_send {
    // height: 220px;
    background: #ffffff;
    border-radius: 16px 16px 16px 16px;
    border: 1px solid #ededed;
    padding: 20px;
    box-sizing: border-box;
  }

  .member-pages_avatar {
    height: 100%;
    padding: 10px 40px;
    box-sizing: border-box;
    margin-right: 10px;
    // width: 420px;
  }

  .avatar_user {
    height: 80px;

    .avatar-title {
      font-weight: 500;
      font-size: 26px;
      color: #333333;
    }

    .avatar-desc {
      font-weight: 500;
      font-size: 16px;
      color: #808080;
    }
  }

  .member-pages-select {
    width: 200px;
    height: 180px;
    border-radius: 8px 8px 8px 8px;
    background: #ffffff;
    border: 2px solid #ededed;
    cursor: pointer;

    &.active {
      border: 2px solid #58968b;
      background: #bfe1db;

      .member-pages-price-symbol,
      .member-pages-price-numbers {
        &.mini {
          font-size: 12px;
          font-weight: 400;
          color: $MainColor !important;
        }
      }

      .member-pages-select-title {
        color: $MainColor !important;
      }
    }

    .member-pages-price {
      display: flex;
      align-items: flex-end;
      color: #58968b;

      .member-pages-price-symbol {
        font-size: 14px;
        font-weight: bolder;

        &.mini {
          font-size: 12px;
          font-weight: 400;
          color: $SecondaryColor-1;
        }
      }

      .member-pages-price-numbers {
        font-size: 30px;
        font-weight: bolder;

        &.mini {
          font-size: 16px;
          font-weight: 400;
          color: $SecondaryColor-1;
        }
      }
    }

    .member-pages-select-title {
      text-align: center;
      font-size: 20px;
    }

    .find {
      font-size: 16px;
      color: #58968b;
    }
  }

  .button-footer {
    width: 156px;
    // margin-left: 43px;
  }

  .member-pages-desc-container {
    height: 300px;
    background: #ffffff;
    border-radius: 16px 16px 16px 16px;
    border: 1px solid #ededed;
    margin: 40px 0;

    .member-pages-desc-item-title {
      font-size: 24px;
      color: #333333;
    }

    .member-pages-desc-item-desc {
      font-weight: 400;
      font-size: 16px;
      color: #808080;
      line-height: 23px;
      text-align: center;
    }
  }

  .positions-skills-header {
    height: 68px;
    background: #e1f5f2;
    border: 1px solid #ededed;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .positions-skills-header-item {
      height: 28px;
      font-weight: 600;
      font-size: 20px;
      color: #26554d;
      line-height: 28px;

      border-right: solid 1px rgba(44, 98, 89, 0.3);
      width: 100%;
      text-align: center;

      &:last-child {
        border: none;
      }
    }
  }

  .positions-skills-container-price {
    margin: 40px 0 96px 0;
    height: 434px;
    background: #e1f5f2;
    border-radius: 16px;
    border: 1px solid #ededed;
    display: flex;
    align-items: center;

    .positions-skills-container-price-item {
      width: 100%;

      div {
        font-weight: 600;
        font-size: 16px;
        color: #26554D;
        height: 22px;
        line-height: 22px;
      }
    }
  }
}
@media (max-width: 1400px) {
	.member-pages {
	  .member-pages_container {
		  padding:0 20px;
	  }
	  .member-pages_avatar{
	      padding: 10px 18px;
	  }
	  .member-pages-select {
	      width: 170px;
	      height: 150px;
	 }
	}
}
</style>
