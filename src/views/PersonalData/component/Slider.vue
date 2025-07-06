<script setup lang="ts">
import {
  AddCircleOutline,
  ChevronDownSharp,
  ChevronForwardOutline,
  CreateOutline,
  Trash,
  ShieldCheckmarkSharp,
} from '@vicons/ionicons5'
import EditingLanguage from './EditingLanguage.vue'
import WorkTime from './WorkTime.vue'
import {ref} from 'vue'
import AddEducation from '@/views/PersonalData/component/AddEducation.vue'
import AddVideo from '@/views/PersonalData/component/AddVideo.vue'
import {Text} from '@/components'
import {deleteUserSchool} from '@/api/user'
const emit = defineEmits([ 'success'])
import {useMessage} from 'naive-ui'
// 创建 message 实例
const message = useMessage()
const props = defineProps({
  userData: {
    type: Object,
    default: {
      userId: "",
      avatar: "",
      name: "",
      score: 0,
      isSpecialIndivuals: 1,
      ip: "",
      city: "",
      loginTime: null,
      orderCount: 0,
      totalIncome: 0,
      assess: 0,
      videoUrl: "",
      weeklyWorkHours: null,
      languageList: [],
      card: "",
      cardUrl: "",
      qualificationList: [
        {
          id: 10,
          userId: "",
          schoolName: "",
          educationSystem: "",
          degree: "",
          major: "",
          startDate: null,
          graduationDate: 0,
          certificatePhotoUrl: "",
          qualificationCode: null
        }
      ],
      resume: {
        resumeId: 16,
        userId: "",
        selfIntroduction: "",
        workList: [
          {
            id: 6,
            userId: "",
            workName: "",
            country: null,
            city: null,
            position: "",
            startData: null,
            endData: null,
            jobDescription: ""
          }
        ],
        skills: "",
        skilled: "",
        certificationsUrl: ""
      },
      dataCompletionRate: 54
    }
  },
  edi: {
    type: Boolean,
    default: true,
  },
})

const showLanguage = ref(false)

const showWork = ref(false)

const education = ref(false)

const showVideo = ref(false)

const educationId = ref(null)
const updateEDU = (id) => {
  educationId.value = id
  education.value = true
}
const addEdU = () => {
  educationId.value = null
  education.value = true
}
const delEDU = async (index, id) => {
  const res = await deleteUserSchool({id: id})
  if (res.code !== 0) {
    message.error(res.msg)
    return
  }
  props.userData.qualificationList.splice(index, 1)
}
const success=()=>{
  emit('success')
}
function formatTime(timestamp) {
  const date = new Date(timestamp)
  return date.toLocaleString() // 例如 "2024/7/5 08:00:00"
}
</script>

<template>
  <div class="personal-data-slider">
    <!--    <div class="personal-data-slider-user">-->
    <!--      <n-flex align="center" justify="space-between">-->
    <!--        <div class="text-size-16">查看职业档案</div>-->
    <!--        <n-icon :size="22" class="cursor-pointer-style main-color-size" v-if="edi"  @click="$router.push('/user-set/personal')">-->
    <!--          <CreateOutline></CreateOutline>-->
    <!--        </n-icon>-->
    <!--      </n-flex>-->
    <!--      <n-space vertical :size="15" style="margin-top: 15px">-->
    <!--        <div class="secondary-color-text-1" style="font-size: 14px">设计师</div>-->
    <!--        <div class="secondary-color-text-1" style="font-size: 14px">-->
    <!--          所有工作-->
    <!--        </div>-->
    <!--      </n-space>-->
    <!--    </div>-->
    <n-flex
        class="personal-data-slider-nums"
        align="center"
        justify="center"
        :vertical="true"
        :size="20"
    >
      <n-flex align="center"
              justify="space-between" style="width: 100%;">
        <n-flex class="personal-data-slider-nums-item" vertical align="center">
          <div class="slider-nums-item-nums">{{ userData.orderCount }}</div>
          <div class="secondary-color-text-1">历史接单</div>
        </n-flex>
        <n-flex class="personal-data-slider-nums-item" vertical align="center">
          <div class="slider-nums-item-nums">{{ userData.totalIncome }}</div>
          <div class="secondary-color-text-1">总收入</div>
        </n-flex>
        <n-flex class="personal-data-slider-nums-item" vertical align="center">
          <div class="slider-nums-item-nums">{{ userData.assess }}</div>
          <div class="secondary-color-text-1">评分</div>
        </n-flex>
      </n-flex>
      <n-flex>
        <div class="s-t1">完善你的职业档案</div>
        <n-progress type="line" color="#3BC8B4" :percentage="userData.dataCompletionRate"/>
      </n-flex>
    </n-flex>
    <n-flex class="personal-data-slider-footer" vertical :size="20">
      <n-flex vertical>
        <n-flex align="center" justify="space-between">
          <div class="text-size-16">视频介绍</div>
          <n-icon :size="22" class="cursor-pointer-style main-color-size" @click="showVideo = true" v-if="edi">
            <AddCircleOutline></AddCircleOutline>
          </n-icon>
        </n-flex>
      </n-flex>
      <n-flex align="center" justify="space-between">
        <n-space vertical>
          <span style="font-size: 14px">每周小时数量</span>
          <span class="secondary-color-text-1">{{
              userData.weeklyWorkHours !== null ? (['40以上', '40以下', '时间不限'][userData.weeklyWorkHours]) : '无'
            }}</span>
        </n-space>
        <n-icon :size="22" class="cursor-pointer-style main-color-size" @click="showWork = true" v-if="edi">
          <CreateOutline/>
        </n-icon>
      </n-flex>
      <n-flex vertical :size="15">
        <n-flex align="center" justify="space-between">
          <div class="text-size-16">语言</div>
          <n-flex align="center" v-if="edi">
            <n-icon :size="22" class="cursor-pointer-style main-color-size" @click="showLanguage = true"
                    v-if="userData.languageList.length == 0">
              <AddCircleOutline/>
            </n-icon>
            <n-icon :size="22" class="cursor-pointer-style main-color-size" style="margin-bottom: 3px"
                    @click="showLanguage = true" v-else>
              <CreateOutline/>
            </n-icon>
          </n-flex>
        </n-flex>
        <n-flex vertical :size="10">
          <span style="font-size: 14px" class="secondary-color-text-1" v-for="(item,index) in userData.languageList"
                :key="index">
            {{ item.language }}：{{ item.level }}
          </span>
        </n-flex>
      </n-flex>
      <!--      <n-flex align="center" justify="space-between">-->
      <!--        <div class="text-size-16">个人验证</div>-->
      <!--        <n-icon :size="18" class="cursor-pointer-style main-color-size" v-if="edi">-->
      <!--          <ChevronDownSharp/>-->
      <!--        </n-icon>-->
      <!--      </n-flex>-->

      <!--      <template v-if="edi">-->
      <!--        <n-flex align="center" justify="space-between" style="cursor: pointer;"-->
      <!--                @click="$router.push('/user-set/identity')">-->
      <!--          <n-space vertical>-->
      <!--            <span style="font-size: 14px">身份证认证</span>-->
      <!--            <span class="secondary-color-text-1">请上传您的身份证</span>-->
      <!--          </n-space>-->
      <!--          <n-icon :size="18" class="cursor-pointer-style main-color-size">-->
      <!--            <ChevronForwardOutline/>-->
      <!--          </n-icon>-->
      <!--        </n-flex>-->
      <!--      </template>-->
      <!--      <template v-else>-->
      <!--        <n-flex align="center">-->
      <!--          <n-space vertical>-->
      <!--            <span style="font-size: 14px">身份证认证</span>-->
      <!--            <n-flex align="center">-->
      <!--              <Text class="secondary-color-text-1">已认证</Text>-->
      <!--              <n-icon :size="15" color="#808080">-->
      <!--                <ShieldCheckmarkSharp></ShieldCheckmarkSharp>-->
      <!--              </n-icon>-->
      <!--            </n-flex>-->
      <!--          </n-space>-->
      <!--        </n-flex>-->
      <!--      </template>-->
      <n-flex vertical :size="15">
        <n-flex align="center" justify="space-between">
          <div class="text-size-16">教育</div>

          <n-flex align="center" @click="addEdU" v-if="edi">
            <n-icon
                :size="22"
                class="cursor-pointer-style main-color-size"
                style="margin-bottom: 3px"
            >
              <AddCircleOutline/>
            </n-icon>
          </n-flex>
        </n-flex>
        <n-flex justify="space-between" v-for="(item,index) in userData.qualificationList" :key="index">
          <n-flex vertical :size="10">
            <span style="font-size: 14px">{{ item.schoolName }}</span>
            <span class="secondary-color-text-1">{{ item.major }}</span>
            <span class="secondary-color-text-1"
                  v-if="item.startDate&&item.startDate!==''">{{ formatTime(item.startDate) }}  {{
                formatTime(item.graduationDate)
              }}</span>
          </n-flex>
          <n-flex align="center" v-if="edi">
            <n-icon :size="22" class="cursor-pointer-style main-color-size" @click="updateEDU(item.id)">
              <CreateOutline/>
            </n-icon>
            <n-icon :size="22" class="cursor-pointer-style main-color-size" @click=" delEDU(index,item.id)">
              <Trash/>
            </n-icon>
          </n-flex>
        </n-flex>
      </n-flex>
    </n-flex>
  </div>
  <WorkTime v-model:show="showWork" v-model:weekHours="userData.weeklyWorkHours"></WorkTime>
  <EditingLanguage v-model:show="showLanguage" v-model:languageList="userData.languageList"/>
  <AddEducation v-model:show="education" v-model:educationId="educationId" v-if="education" @success="success"/>
  <AddVideo v-model:show="showVideo"/>
</template>

<style scoped lang="scss">
.personal-data-slider {
  width: 360px;
  //border: solid 1px #e7e7e7;
  //border-top: transparent;
  height: 100%;
  flex-shrink: 0;

  .s-t1 {
    width: 280px;
    height: 20px;
    font-weight: 400;
    font-size: 14px;
    color: #3BC8B4;
    line-height: 20px;
    text-align: left;
    font-style: normal;
  }

  :deep(.n-progress .n-progress-icon) {
    //display: none;
  }

  .personal-data-slider-user {
    height: 167px;
    background: #ffffff;
    padding: 16px;
    box-sizing: border-box;
    border-bottom: solid 1px #e7e7e7;
  }

  .personal-data-slider-nums {
    padding: 20px;
    margin: 20px 0px 0px 20px;
    width: 320px;
    height: 154px;
    background: #F6F8FA;
    border-radius: 20px;
    box-sizing: border-box;
    border-bottom: solid 1px #e7e7e7;

    .slider-nums-item-nums {
      font-weight: 600;
      font-size: 16px;
      color: #333333;
    }
  }

  .personal-data-slider-footer {
    padding: 20px;
    box-sizing: border-box;
  }
}
</style>
