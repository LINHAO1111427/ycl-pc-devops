<script setup lang="ts">
import {Text, Empty} from '@/components'
import {AddCircleOutline, BookOutline, CreateOutline, Trash} from '@vicons/ionicons5'
import OtherPractitioner from '@/views/PersonalData/component/OtherPractitioner.vue'
import AddEmployment from '@/views/PersonalData/component/AddEmployment.vue'
import CustomAuth from '@/views/PersonalData/component/CustomAuth.vue'
import RecommendationLetter from '@/views/PersonalData/component/RecommendationLetter.vue'
import {userRecommendationPage, userOrderPage, userBusinessConsultationPage} from '@/api/user'
import {onMounted, ref} from 'vue'
import {useMessage} from 'naive-ui'
import {useRouter} from "vue-router";

const router = useRouter()
// 创建 message 实例
const message = useMessage()
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
const projectData = ref([])
const recommendationList = ref([])
const businessConsultation = ref([])

function formatTime(timestamp) {
  if (timestamp === null || timestamp === '') {
    return ''
  }
  const date = new Date(timestamp)
  return date.toLocaleString() // 例如 "2024/7/5 08:00:00"
}

const ediProject = (id) => {
  router.push({
    path: '/add/project',
    query: {id: id}
  })
}
onMounted(async () => {
  const res = await userOrderPage({userId: localStorage.getItem('userId'), pageNo: 1, pageSize: 10})
  if (res.code === -1) {
    message.error(res.msg)
    return
  }
  projectData.value = res.data.list
  const res1 = await userRecommendationPage({userId: localStorage.getItem('userId'), pageNo: 1, pageSize: 10})
  if (res1.code === -1) {
    message.error(res1.msg)
    return
  }
  recommendationList.value = res1.data.list

  const res2 = await userBusinessConsultationPage({userId: localStorage.getItem('userId'), pageNo: 1, pageSize: 10})
  if (res2.code === -1) {
    message.error(res2.msg)
    return
  }
  businessConsultation.value = res2.data.list
  // recommendationList.value = res1.data.list


})
</script>

<template>
  <div>
<!--    <n-flex class="personal-footer-recommend" vertical v-if="edi">-->
    <!--      <n-flex justify="space-between" align="center" class="footer-recommend-header">-->
    <!--        <div class="personal-footer-header">-->
    <!--          <Text :size="22">推荐</Text>-->
    <!--          &lt;!&ndash;          <Text :size="18" class="secondary-color-text-1">过去客户的认可</Text>&ndash;&gt;-->
    <!--        </div>-->
    <!--        <n-icon :size="22" class="cursor-pointer-style main-color-size" @click="letterShow = true">-->
    <!--          <AddCircleOutline/>-->
    <!--        </n-icon>-->
    <!--      </n-flex>-->
    <!--      <template v-if="recommendationList.length===0">-->
    <!--        <n-flex align="center" vertical style="gap: 16px 12px;">-->
    <!--          <div class="personal-empty">-->
    <!--            <Empty size="200px"/>-->
    <!--          </div>-->
    <!--          <Text :size="22" color="#000" align="center">-->
    <!--            通过单刻达客户推荐展示您的技能-->
    <!--          </Text>-->
    <!--          <n-button type="primary"-->
    <!--                    size="large"-->
    <!--                    style="width: 257px"-->
    <!--                    @click="letterShow = true">-->
    <!--            <span class="naiveui-text-16">索取推荐信</span>-->
    <!--          </n-button>-->
    <!--        </n-flex>-->
    <!--      </template>-->
    <!--      <template v-else>-->
    <!--        <n-flex class="personal-work-list" :size="20" vertical style="margin-left: 20px;margin-top: 30px;">-->
    <!--          <n-flex class="personal-work-list-item" vertical v-for="(item,index) in recommendationList">-->
    <!--            <Text :size="20">-->
    <!--              {{ item.title }}-->
    <!--            </Text>-->
    <!--            <Text :size="16" color="#808080">-->
    <!--              {{ item.message }}-->
    <!--            </Text>-->
    <!--            <n-flex justify="space-between" style="margin-top: 20px">-->
    <!--              <Text :size="16" color="#808080">-->
    <!--                {{ formatTime(item.createTime) }}-->
    <!--              </Text>-->
    <!--            </n-flex>-->
    <!--          </n-flex>-->
    <!--        </n-flex>-->
    <!--      </template>-->
    <!--    </n-flex>-->
    <n-flex class="personal-footer-recommend" vertical>
      <Text :size="24">
        已完成项目
      </Text>
      <n-flex class="personal-work-list" :size="20" vertical style="margin-left: 20px;margin-top: 30px;">
        <n-flex class="personal-work-list-item" vertical v-for="(item,index) in projectData">
          <Text :size="20">
            {{ item.projectName }}
          </Text>
          <Text :size="16" color="#808080">
            {{ item.comment }}
          </Text>
          <n-flex justify="space-between" style="margin-top: 20px">
            <Text :size="16" color="#808080">
              {{ formatTime(item.startTime) }} {{ formatTime(item.endTime) }}
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
        <template v-if="businessConsultation.length>0">
          <n-flex class="personal-work-list-item" vertical v-for="(item,index) in businessConsultation"
                  style="cursor: pointer;" @click="ediProject(item.id)">
            <Text :size="20">
              {{ item.projectName }}
            </Text>
            <Text :size="16" color="#808080">
              {{ item.projectIntroduction }}
            </Text>
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
