<script setup lang="ts">
import HeaderClientTop from '@/components/Header/HeaderClientTop.vue'
import Layout from '@/components/Layout/Layout.vue'
import { Tabs } from '@/components'
import { useRoute, useRouter } from 'vue-router'

const router = useRoute()

const routers = useRouter()

const current = ref(router.path)

const options = [
  {
    label: '提现方式',
    value: '/client/member-contact11',
  },
  {
    label: '我的信息',
    value: '/client/member-contact',
  },
  {
    label: '账单和付款',
    value: '/client/member-withdrawal',
  },
  {
    label: '密码和安全',
    value:'/client/member-security'
  },
  {
    label: '身份验证',
    value: '/client/member-identity',
  },
  {
    label: '通知设置',
    value: '/client/member-notice',
  },
]

function click(value: string) {
  if (!value) {
    return
  }
  current.value = value
  routers.push(value)
}

</script>

<template>
  <HeaderClientTop :is-work="false" :is-login="false"></HeaderClientTop>
  <Layout>
    <div class="user-set-container">
      <div class="user-header-title">
        账户设置
      </div>
      <div class="user-header-tabs">
        <div class="user-header-slider width-100">
          <div class="user-slider-title">
            用户设置
          </div>
          <Tabs :options="options.slice(1,options.length)" align="center" :value="current" color="#58968B"
            @click="click" />
        </div>
      </div>
      <RouterView></RouterView>
    </div>
  </Layout>
</template>

<style scoped lang="scss">
.user-set-container {
  .user-header-title {
    margin: 50px 0 30px 0;
    font-weight: 500;
    font-size: 34px;
    color: #333333;
  }

  .user-header-tabs {
    width: 100%;
    height: 111px;
    background: #FFFFFF;
    border-radius: 16px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }

  .user-slider-title {
    font-size: 24px;
    color: #333333;
    margin-bottom: 15px;
  }

  .user-header-slider {
    width: 140px;
    padding-right: 40px;
    border-right: 1px solid #EDEDED;

    &.width-100 {
      width: 100%;
      border-right: none;
    }
  }
}
</style>