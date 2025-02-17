<script setup lang="ts">
import { Text, Empty } from '@/components'
import { AddCircleOutline, BookOutline, CreateOutline, Trash } from '@vicons/ionicons5'
import OtherPractitioner from '@/views/PersonalData/component/OtherPractitioner.vue'
import AddEmployment from '@/views/PersonalData/component/AddEmployment.vue'
import CustomAuth from '@/views/PersonalData/component/CustomAuth.vue'
import RecommendationLetter from '@/views/PersonalData/component/RecommendationLetter.vue'
import { ref } from 'vue'

const props = defineProps({
  edi: {
    type: Boolean,
    default: true,
  },
})

const otherShow = ref(false)

const addShow = ref(false)

const authShow = ref(false)

const letterShow = ref(false)
</script>

<template>
  <div>
    <n-flex class="personal-footer-recommend" vertical v-if="edi">
      <n-flex justify="space-between" align="center" class="footer-recommend-header">
        <div class="personal-footer-header">
          <Text :size="22">推荐</Text>
          <Text :size="18" class="secondary-color-text-1">过去客户的认可</Text>
        </div>
        <n-icon :size="22" class="cursor-pointer-style main-color-size" @click="letterShow = true">
          <AddCircleOutline />
        </n-icon>
      </n-flex>
      <n-flex align="center" vertical style="gap: 16px 12px;">
        <div class="personal-empty">
          <Empty size="200px" />
        </div>
        <Text :size="22" color="#000" align="center">
          通过原创力客户推荐展示您的技能
        </Text>
        <n-button type="primary"
          size="large"
          style="width: 257px"
          @click="letterShow = true">
          <span class="naiveui-text-16">索取推荐信</span>
        </n-button>
      </n-flex>
    </n-flex>

    <n-flex class="personal-footer-recommend" vertical v-if="edi">
      <n-flex justify="space-between" align="center" class="footer-recommend-header">
        <div class="personal-footer-header">
          <Text :size="22">认证</Text>
        </div>
        <n-icon :size="22" class="cursor-pointer-style main-color-size" @click="authShow = true">
          <AddCircleOutline />
        </n-icon>
      </n-flex>
      <n-flex align="center" vertical style="gap: 16px 12px;">
        <div class="personal-empty">
          <Empty size="200px" />
        </div>
        <Text :size="22" color="#000" align="center" class="width-512">
          列出您的认证有助于证明您的特定知识或能力。 <br>您可以手动添加它们
        </Text>
        <n-button type="primary"
          size="large"
          style="width: 257px"
          @click="authShow = true">
          <span class="naiveui-text-16">手动添加</span>
        </n-button>
      </n-flex>
    </n-flex>

    <n-flex class="personal-footer-recommend" vertical>
      <n-flex justify="space-between" align="center" class="footer-recommend-header shrink">
        <div class="personal-footer-header">
          <Text :size="22">工作经历</Text>
        </div>
        <n-icon  v-if="edi"
          :size="22"
          class="cursor-pointer-style main-color-size"
          @click="addShow = true">
          <AddCircleOutline />
        </n-icon>
      </n-flex>
      <n-flex vertical class="recommend-item-container">
        <div class="recommend-item-container-item">
          <n-flex class="recommend-item-header" justify="space-between">
            <Text :size="20">阿尔法视觉有限公司</Text>
            <n-flex align="center" v-if="edi">
              <n-icon :size="18" class="cursor-pointer-style main-color-size" @click="addShow = true">
                <CreateOutline />
              </n-icon>
              <n-icon :size="18" class="cursor-pointer-style main-color-size">
                <Trash />
              </n-icon>
            </n-flex>
          </n-flex>
          <Text :size="16">
            视觉设计师
          </Text>
          <Text :size="14" class="secondary-color-text-1">
            2016年3月-目前
          </Text>
          <Text :size="14" class="secondary-color-text-1">
            我现在在阿尔法视觉有限公司担任视觉设计师职位，我的工作时负责公司设计方面的一切工作
          </Text>
        </div>
      </n-flex>
    </n-flex>

    <n-flex class="personal-footer-recommend" vertical>
      <n-flex justify="space-between" align="center" class="footer-recommend-header">
        <div class="personal-footer-header">
          <Text :size="22">其他经历</Text>
        </div>
        <n-icon :size="22"
          class="cursor-pointer-style main-color-size"
          @click="otherShow = true"
          v-if="edi">
          <AddCircleOutline />
        </n-icon>
      </n-flex>
	  <template v-if="edi">
      <n-flex align="center" vertical style="gap: 16px 12px;">
        <div class="personal-empty">
          <Empty size="200px" />
        </div>
        <Text :size="22" color="#000" align="center" class="width-512">
          添加任何其他有助于您脱颖而出的体验
        </Text>
        <n-button type="primary" size="large" style="width: 257px" @click="otherShow = true">
          <span class="naiveui-text-16">添加您的其他经历</span>
        </n-button>
      </n-flex>
	  </template>
	  <template v-else>
	    <div class="recommend-item-container-item">
	      <n-flex class="recommend-item-header" justify="space-between">
	        <Text :size="20">个人经历</Text>
	        <n-flex align="center" v-if="edi">
	          <n-icon :size="18" class="cursor-pointer-style main-color-size">
	            <CreateOutline />
	          </n-icon>
	          <n-icon :size="18" class="cursor-pointer-style main-color-size">
	            <Trash />
	          </n-icon>
	        </n-flex>
	      </n-flex>
	      <Text :size="16">视屏剪辑</Text>
	      <Text :size="14" class="secondary-color-text-1">
	        我现在在阿尔法视觉有限公司担任视觉设计师职位，我的工作时负责公司设计方面的一切工作
	      </Text>
	    </div>
	  </template>
    </n-flex>
  </div>
  <OtherPractitioner v-model:show="otherShow" />
  <AddEmployment v-model:show="addShow" />
  <CustomAuth v-model:show="authShow" />
  <RecommendationLetter v-model:show="letterShow" />
</template>

<style scoped lang="scss">
.personal-footer-recommend {
  margin-top: 10px;
  width: 100%;
  background: #FFFFFF;
  border-radius: 16px 16px 16px 16px;
  border: 1px solid #EDEDED;
  padding: 40px;
  box-sizing: border-box;
}

.personal-empty {
  text-align: center;
}

.width-512 {
  width: 512px;
}

.footer-recommend-header {
  height: 72px;

  &.shrink {
    flex-shrink: 0;
  }
}
</style>