<script setup lang="ts">
import HeaderTop from '@/components/Header/HeaderTop.vue'
import {Footer, Button as RButton} from '@/components'
import SliderUser from '@/components/Talents/SliderUser.vue'
import Resume from '@/components/Talents/Resume.vue'
import {onMounted, ref, watchEffect} from 'vue'
import {useRoute} from 'vue-router'
import vipPage from '@/components/vipPage/index.vue'
import {getUserInfo} from '@/api/home'
import {useMessage} from 'naive-ui'

// 创建 message 实例
const message = useMessage()
const route = useRoute()
const type = ref(1)
watchEffect(() => {
  type.value = route.query.type
})


const showModal = ref(false);
const charMessageShow = ref(false);
const userData = ref({});
const isInit = ref(false);
onMounted(async () => {
  const res = await getUserInfo({userId: localStorage.getItem('userId')})
  isInit.value = true
  if (res.code === -1) {
    message.error(res.msg)
    return
  }
  localStorage.setItem('avatar', res.data.avatar)
  userData.value = res.data
  console.log(userData)
})
</script>

<template>
  <HeaderTop :is-login="false" :is-work="false" :avatar="userData.avatar" v-if="isInit"/>
  <div class="talents" v-if="isInit">
    <div class="talents-container">
      <!-- <div class="talents-container-banner">
		<n-flex vertical :size="20">
		  <div class="banner-text">单刻达将引导您了解我们平台的基础知识</div>
		  <div class="banner-text">了解如何使用原创立</div>
		</n-flex>
		<RButton style="width: 200px;margin-top: 60px" color="#fff" font-color="#F18B41">开始探索 单刻达</RButton>
		<img src="../../assets/img/talents-banner.jpg" alt="">
      </div> -->
      <div class="talents-container-information">
        <SliderUser @openCharMessageShow="charMessageShow=true" :userData="userData"></SliderUser>
        <Resume :typeValue="type" @openVip="showModal=true"></Resume>
      </div>
    </div>
    <ChatMessage v-model:show="charMessageShow"/>
    <Footer></Footer>
  </div>
  <vip-page v-model="showModal"></vip-page>
</template>

<style scoped lang="scss">
.talents {
  height: 100%;
  overflow: auto;
}

.talents-container {
  width: 1360px;
  margin: 0 auto;
  padding: 20px 0;
  max-width: 100%;

  .talents-container-banner {
    background-color: #F18B41;
    padding: 32px;
    border-radius: 13px;
    position: relative;

    .banner-text {
      font-size: 30px;
      color: #FFFFFF;
    }

    & img {
      width: 265px;
      position: absolute;
      bottom: 0;
      right: 60px;
    }
  }
}

.talents-container-information {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}

@media (max-width: 1400px) {
  .talents-container {
    padding: 20px;
  }
}
</style>
