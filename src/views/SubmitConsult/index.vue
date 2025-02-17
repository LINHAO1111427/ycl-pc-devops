<script setup lang="ts">
import { Footer, IconMessage, RenderIcon, Text, IconWeiyanzheng, IconYiyanzheng } from '@/components'
import Header from '@/components/Header/Header.vue'
import WorkDetails from './component/WorkDetails.vue'
import avatarUrl from '../../assets/img/avatar.png'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const show = ref(false)

const status = ref(route.query.status || 0)

const charMessageShow = ref(false)
</script>

<template>
  <div class="submit-proposals">
    <Header :is-header-nav="false" :is-work="false" :is-login="false" />
    <div class="container">
      <div class="slider-avatar">
        <n-flex :size="20">
          <n-avatar :size="60" round :src="avatarUrl"></n-avatar>
          <n-flex vertical :size="5 ">
            <n-space align="center">
              <Text :size="20">乔安娜</Text>
              <RenderIcon :icon="IconMessage" :size="20" fill="#58968B" @click="charMessageShow=true"></RenderIcon>
            </n-space>
            <n-rate value="5" color="#F18B41" readonly />
          </n-flex>
          <n-flex vertical>
			  <Text :size="16">关于客户</Text>
			  <Text :size="12" color="#808080">于2024-07-30加入原创力</Text>
			  <n-flex style="gap: 8px 5px;margin-top: 10px;">
				  <RenderIcon :size="15" fill="#808080" :icon="IconWeiyanzheng" />
				  <Text :size="12" color="#808080">付款方式未验证</Text>
			  </n-flex>
			  <n-flex style="gap: 8px 5px;margin-bottom: 10px;">
				  <RenderIcon :size="15" fill="#808080" :icon="IconYiyanzheng" />
				  <Text :size="12" color="#808080">电话号码已验证</Text>
			  </n-flex>
			  <Text :size="16">已发布 329个职位</Text>
			  <Text :size="12" color="#808080" style="margin-bottom: 10px;">62%的雇佣率，3个职位空缺</Text>
			  <Text :size="16">总共花费48000人民币</Text>
			  <Text :size="12" color="#808080">总共雇佣260位人才，32位活跃员工</Text>
          </n-flex>
        </n-flex>
      </div>
      <div class="container-body">
        <WorkDetails :status="status"></WorkDetails>
      </div>
    </div>
    <Footer />
  </div>
  <ChatMessage v-model:show="charMessageShow" />
</template>

<style scoped lang="scss">
.submit-proposals {
  background-color: #f4fbfa;
  height: 100%;
  overflow: auto;


  .container {
    width: 1316px;
	max-width: 100%;
    padding-top: 40px;
    display: flex;
    justify-content: space-around;
    gap: 20px;

    .slider-avatar {
      width: 264px;
      height: 367px;
      background: #FFFFFF;
      border-radius: 16px 16px 16px 16px;
      flex-shrink: 0;
      padding: 20px;
      box-sizing: border-box;
    }
  }

  .container-body {
    flex: 1;
  }
}
@media (max-width: 1400px) {
	.submit-proposals {
		
		.container {
			padding: 20px;
		}
		
	}
}
</style>