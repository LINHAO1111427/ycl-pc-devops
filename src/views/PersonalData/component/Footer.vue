<script setup lang="ts">
import {Text, Empty} from '@/components'
import {AddCircleOutline, BookOutline, CreateOutline, Trash} from '@vicons/ionicons5'
import OtherPractitioner from '@/views/PersonalData/component/OtherPractitioner.vue'
import AddEmployment from '@/views/PersonalData/component/AddEmployment.vue'
import CustomAuth from '@/views/PersonalData/component/CustomAuth.vue'
import RecommendationLetter from '@/views/PersonalData/component/RecommendationLetter.vue'
import {ref} from 'vue'

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
          <!--          <Text :size="18" class="secondary-color-text-1">过去客户的认可</Text>-->
        </div>
        <n-icon :size="22" class="cursor-pointer-style main-color-size" @click="letterShow = true">
          <AddCircleOutline/>
        </n-icon>
      </n-flex>
      <n-flex align="center" vertical style="gap: 16px 12px;">
        <div class="personal-empty">
          <Empty size="200px"/>
        </div>
        <Text :size="22" color="#000" align="center">
          通过单刻达客户推荐展示您的技能
        </Text>
        <n-button type="primary"
                  size="large"
                  style="width: 257px"
                  @click="letterShow = true">
          <span class="naiveui-text-16">索取推荐信</span>
        </n-button>
      </n-flex>
    </n-flex>
    <n-flex class="personal-footer-recommend" vertical>
      <Text :size="24">
        已完成项目
      </Text>
      <n-flex class="personal-work-list" :size="20" vertical style="margin-left: 20px;margin-top: 30px;">
        <n-flex class="personal-work-list-item" vertical v-for="_item in 3">
          <Text :size="20">
            将普通话翻译成英语
          </Text>
          <Text :size="16" color="#808080">
            没有给出反馈
          </Text>
          <n-flex justify="space-between" style="margin-top: 20px">
            <Text :size="16" color="#808080">
              2021-04-10 - 2022-04-10
            </Text>
            <template v-if="edi">
              <n-button type="primary" style="width: 120px">
                项目详情
              </n-button>
            </template>
            <template v-else>
              <Text class="secondary-color-text-1">固定价格</Text>
            </template>
          </n-flex>
        </n-flex>
      </n-flex>
    </n-flex>
    <!--    <n-flex class="personal-footer-recommend" vertical v-if="edi">-->
    <!--      <n-flex justify="space-between" align="center" class="footer-recommend-header">-->
    <!--        <div class="personal-footer-header">-->
    <!--          <Text :size="22">认证</Text>-->
    <!--        </div>-->
    <!--        <n-icon :size="22" class="cursor-pointer-style main-color-size" @click="authShow = true">-->
    <!--          <AddCircleOutline />-->
    <!--        </n-icon>-->
    <!--      </n-flex>-->
    <!--      <n-flex align="center" vertical style="gap: 16px 12px;">-->
    <!--        <div class="personal-empty">-->
    <!--          <Empty size="200px" />-->
    <!--        </div>-->
    <!--        <Text :size="22" color="#000" align="center" class="width-512">-->
    <!--          列出您的认证有助于证明您的特定知识或能力。 <br>您可以手动添加它们-->
    <!--        </Text>-->
    <!--        <n-button type="primary"-->
    <!--          size="large"-->
    <!--          style="width: 257px"-->
    <!--          @click="authShow = true">-->
    <!--          <span class="naiveui-text-16">手动添加</span>-->
    <!--        </n-button>-->
    <!--      </n-flex>-->
    <!--    </n-flex>-->

    <!--    <n-flex class="personal-footer-recommend" vertical>-->
    <!--      <n-flex justify="space-between" align="center" class="footer-recommend-header shrink">-->
    <!--        <div class="personal-footer-header">-->
    <!--          <Text :size="22">工作经历</Text>-->
    <!--        </div>-->
    <!--        <n-icon  v-if="edi"-->
    <!--          :size="22"-->
    <!--          class="cursor-pointer-style main-color-size"-->
    <!--          @click="addShow = true">-->
    <!--          <AddCircleOutline />-->
    <!--        </n-icon>-->
    <!--      </n-flex>-->
    <!--      <n-flex vertical class="recommend-item-container">-->
    <!--        <div class="recommend-item-container-item">-->
    <!--          <n-flex class="recommend-item-header" justify="space-between">-->
    <!--            <Text :size="20">阿尔法视觉有限公司</Text>-->
    <!--            <n-flex align="center" v-if="edi">-->
    <!--              <n-icon :size="18" class="cursor-pointer-style main-color-size" @click="addShow = true">-->
    <!--                <CreateOutline />-->
    <!--              </n-icon>-->
    <!--              <n-icon :size="18" class="cursor-pointer-style main-color-size">-->
    <!--                <Trash />-->
    <!--              </n-icon>-->
    <!--            </n-flex>-->
    <!--          </n-flex>-->
    <!--          <Text :size="16">-->
    <!--            视觉设计师-->
    <!--          </Text>-->
    <!--          <Text :size="14" class="secondary-color-text-1">-->
    <!--            2016年3月-目前-->
    <!--          </Text>-->
    <!--          <Text :size="14" class="secondary-color-text-1">-->
    <!--            我现在在阿尔法视觉有限公司担任视觉设计师职位，我的工作时负责公司设计方面的一切工作-->
    <!--          </Text>-->
    <!--        </div>-->
    <!--      </n-flex>-->
    <!--    </n-flex>-->

    <!--    <n-flex class="personal-footer-recommend" vertical>-->
    <!--      <n-flex justify="space-between" align="center" class="footer-recommend-header">-->
    <!--        <div class="personal-footer-header">-->
    <!--          <Text :size="22">其他经历</Text>-->
    <!--        </div>-->
    <!--        <n-icon :size="22"-->
    <!--                class="cursor-pointer-style main-color-size"-->
    <!--                @click="otherShow = true"-->
    <!--                v-if="edi">-->
    <!--          <AddCircleOutline/>-->
    <!--        </n-icon>-->
    <!--      </n-flex>-->
    <!--      <template v-if="edi">-->
    <!--        <n-flex align="center" vertical style="gap: 16px 12px;">-->
    <!--          <div class="personal-empty">-->
    <!--            <Empty size="200px"/>-->
    <!--          </div>-->
    <!--          <Text :size="22" color="#000" align="center" class="width-512">-->
    <!--            添加任何其他有助于您脱颖而出的体验-->
    <!--          </Text>-->
    <!--          <n-button type="primary" size="large" style="width: 257px" @click="otherShow = true">-->
    <!--            <span class="naiveui-text-16">添加您的其他经历</span>-->
    <!--          </n-button>-->
    <!--        </n-flex>-->
    <!--      </template>-->
    <!--      <template v-else>-->
    <!--        <div class="recommend-item-container-item">-->
    <!--          <n-flex class="recommend-item-header" justify="space-between">-->
    <!--            <Text :size="20">个人经历</Text>-->
    <!--            <n-flex align="center" v-if="edi">-->
    <!--              <n-icon :size="18" class="cursor-pointer-style main-color-size">-->
    <!--                <CreateOutline/>-->
    <!--              </n-icon>-->
    <!--              <n-icon :size="18" class="cursor-pointer-style main-color-size">-->
    <!--                <Trash/>-->
    <!--              </n-icon>-->
    <!--            </n-flex>-->
    <!--          </n-flex>-->
    <!--          <Text :size="16">视屏剪辑</Text>-->
    <!--          <Text :size="14" class="secondary-color-text-1">-->
    <!--            我现在在阿尔法视觉有限公司担任视觉设计师职位，我的工作时负责公司设计方面的一切工作-->
    <!--          </Text>-->
    <!--        </div>-->
    <!--      </template>-->
    <!--    </n-flex>-->
    <n-flex class="personal-footer-recommend" vertical :size="10">
      <div>
        <Text :size="26" weight="600">商业咨询项目展示</Text>
        <Text :size="14" color="#808080" v-if="edi">
          项目是一种在单刻达上赚钱的新方式，可帮助您做更多您喜欢做的工作。创建项目产品，突出您的优势并吸引更多客户
        </Text>
        <template v-else>
          <n-flex style="margin-top: 20px">
            <n-flex vertical>
              <n-image>
                <template #placeholder>
                  <div class="image-placeholder"></div>
                </template>
              </n-image>
              <Text :size="16" weight="600">证书</Text>
            </n-flex>
            <n-flex vertical>
              <n-image>
                <template #placeholder>
                  <div class="image-placeholder"></div>
                </template>
              </n-image>
              <Text :size="16" weight="600">设计：web网站</Text>
            </n-flex>
          </n-flex>
        </template>
      </div>
      <n-button type="primary" style="width: 88px" v-if="edi" @click="$router.push('/add/project')">管理项目</n-button>
    </n-flex>
  </div>
  <OtherPractitioner v-model:show="otherShow"/>
  <AddEmployment v-model:show="addShow"/>
  <CustomAuth v-model:show="authShow"/>
  <RecommendationLetter v-model:show="letterShow"/>
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
