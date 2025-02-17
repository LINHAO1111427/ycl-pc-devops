<script setup lang="ts">
import HeaderTop from '@/components/Header/HeaderTop.vue'
import { Footer, Button as RButton } from '@/components'
import SliderUser from '@/components/Talents/SliderUser.vue'
import Resume from '@/components/Talents/Resume.vue'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const type = ref(1)

watchEffect(() => {
	type.value = route.query.type
})
</script>

<template>
  <div class="talents">
	<HeaderTop :is-login="false" :is-work="false" />
    <div class="talents-container">
      <!-- <div class="talents-container-banner">
		<n-flex vertical :size="20">
		  <div class="banner-text">原创力将引导您了解我们平台的基础知识</div>
		  <div class="banner-text">了解如何使用原创立</div>
		</n-flex>
		<RButton style="width: 200px;margin-top: 60px" color="#fff" font-color="#F18B41">开始探索 原创力</RButton>
		<img src="../../assets/img/talents-banner.jpg" alt="">
      </div> -->
      <div class="talents-container-information">
        <SliderUser></SliderUser>
        <Resume :typeValue="type"></Resume>
      </div>
    </div>
    <Footer></Footer>
  </div>
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
  max-width:100%;

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