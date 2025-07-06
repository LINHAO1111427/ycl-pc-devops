<script setup lang="ts">
import {CreateOutline, SwapVerticalOutline, ReturnDownBackSharp, Trash, AddCircleOutline} from '@vicons/ionicons5'
import {Text} from '@/components'
import WorkDetails from './WorkDetails.vue'
import EditIntroduction from './EditIntroduction.vue'
import {onMounted, ref} from 'vue'
import AddEmployment from "@/views/PersonalData/component/AddEmployment.vue";
import AddEducation from "@/views/PersonalData/component/AddEducation.vue";
import {deleteUserWork} from '@/api/home'
import {getUserSkill, saveUserSkill, saveUserCertificationsUrl, deleteUserCertificationsUrl} from '@/api/user'
import {useMessage} from 'naive-ui'
// 创建 message 实例
const message = useMessage()
const uploadUrl = `${import.meta.env.VITE_API_BASE_URL}/app-api/common/addOrUpdate` // 替换为你的真实上传地址
// 设置 headers
const token = localStorage.getItem('token')
const uploadHeaders = {
  Authorization: `Bearer ${token}`, // 或其他自定义 key，比如 'token': token
}
const handleRemove = async (options) => {
  const res = await deleteUserCertificationsUrl({resumeId: props.userData.resume.resumeId})
  if (res.code !== 0) {
    message.error(res.msg)
    return
  }
  // 你可以执行逻辑，比如发请求删除服务器上的图片
}

const handleUploadFinish = async ({file, event, fileList}) => {
  // 上传成功后的响应
  const response = JSON.parse(event?.target?.response || '{}')
  console.log('上传成功：', response)

  // 你可以从 response 中取出图片 URL
  previewUrl.value = response.url || response.data?.url
  console.log('图片 URL:', previewUrl.value)
  const res = await saveUserCertificationsUrl({
    userId: localStorage.getItem('userId'), //用户id
    certificationsUrl: previewUrl.value //其他认证(照片)
  })
  if (res.code !== 0) {
    message.error(res.msg)
    return
  }
  // TODO: 你可以把 imageUrl 存到某个变量或者传给父组件
}

const emit = defineEmits(['success'])
const props = defineProps({
  edi: {
    type: Boolean,
    default: true,
  },
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
        resumeId: 0,
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
  }
})

const showWorkDetails = ref(false)

const showEditIntroduction = ref(false)
const EmploymentId = ref(null)
const userInput = ref({
  hig: ['中文', '法语', '德语', '阿拉伯语', '荷兰语'],
  higInput: '',
})
const options = ref([])
const addShow = ref(false)

function onClickAdd() {
  userInput.value.hig.push(userInput.value.higInput)
  userInput.value.higInput = ''
}

// 通过 JavaScript 触发文件上传
const uploadRef = ref(null)  // 绑定 n-upload 组件
     // 存储上传的文件列表
const previewUrl = ref(props.userData.resume.certificationsUrl || '')
const fileList = ref([])

// 初始化 fileList（预加载图片）
if (previewUrl.value) {
  fileList.value = [
    {
      id: Date.now(), // 唯一 ID
      name: '证书图片', // 图片名称
      status: 'finished', // 表示上传完成
      url: previewUrl.value // 图片地址
    }
  ]
}
// 触发文件选择框
const openUploadDialog = () => {
  uploadRef.value?.openOpenFileDialog()
}

function formatTime(timestamp) {
  if (timestamp === null || timestamp === '') {
    return ''
  }
  const date = new Date(timestamp)
  return date.toLocaleString() // 例如 "2024/7/5 08:00:00"
}

const delFunc = async (id) => {
  const res = await deleteUserWork({id: id})
  if (res.code !== 0) {
    message.error(res.msg)
    return
  }
  emit('success')
}
const addShowFunc = (id) => {
  if (id) {
    EmploymentId.value = id
  }
  addShow.value = true
}
// 处理上传的图片
const handleUpload = (options) => {
  const file = options.file.file
  if (file) {
    previewUrl.value = URL.createObjectURL(file) // 生成预览 URL
  }
}
const success = () => {
  emit('success')
}
const skillArray = computed({
  get: () => {
    return props.userData.resume.skills
        ? props.userData.resume.skills.split(',')
        : []
  },
  set: (val) => {
    props.userData.resume.skills = val.join(',')
  }
})
const handleValueChange = async (newValue) => {
  const res = await saveUserSkill({
    userId: localStorage.getItem('userId'),
    skills: newValue.join(',')
  })
  if (res.code !== 0) {
    message.error(res.msg)
    return
  }
  console.log('选中的值变了:', newValue)
  // 你可以在这里处理逻辑，比如更新数据库、提交表单等
}

onMounted(async () => {
  const res = await getUserSkill({classification: 3})
  if (res.code !== 0) {
    message.error(res.msg)
    return
  }
  options.value = res.data.map(item => {
    return {
      value: item.name,
      label: item.name
    }
  })
})

</script>

<template>
  <div class="personal-data-container-body">
    <div class="personal-profile">
      <!--      <n-tabs type="line" animated>-->
      <!--        <n-tab-pane name="oasis" tab="在线简历1">-->
      <n-flex align="center" style="height: 30px">
        <Text :size="22" weight="600">自我简介</Text>
        <n-icon :size="22" class="cursor-pointer-style main-color-size" v-if="edi"
                @click="showEditIntroduction = true">
          <CreateOutline></CreateOutline>
        </n-icon>
      </n-flex>
      <Text :size="14" class="secondary-color-text-1">
        {{ props.userData.resume.selfIntroduction }}
      </Text>
      <!--        </n-tab-pane>-->
      <!--        <n-tab-pane name="the beatles" tab="在线简历2">-->
      <!--          <n-flex align="center" style="height: 30px">-->
      <!--            <Text :size="22" weight="600">自我简介</Text>-->
      <!--            <n-icon :size="22" class="cursor-pointer-style main-color-size" v-if="edi"-->
      <!--                    @click="showEditIntroduction = true">-->
      <!--              <CreateOutline></CreateOutline>-->
      <!--            </n-icon>-->
      <!--          </n-flex>-->
      <!--          <Text :size="14" class="secondary-color-text-1">-->
      <!--            CET4/6 TEM4/8 我在我的大学通过了，TEM8是我国的最高级别，代表英语学习者可以像母语人士一样与外国人交流，在我的国家，我做过翻译，为外国客户翻译论文和其他东西，我有很强的学习新事物的能力，如果你雇用我，-->
      <!--            我绝对不会让你失望的！-->
      <!--          </Text>-->
      <!--        </n-tab-pane>-->
      <!--        <n-tab-pane name="jay chou" tab="在线简历3">-->
      <!--          <n-flex align="center" style="height: 30px">-->
      <!--            <Text :size="22" weight="600">自我简介</Text>-->
      <!--            <n-icon :size="22" class="cursor-pointer-style main-color-size" v-if="edi"-->
      <!--                    @click="showEditIntroduction = true">-->
      <!--              <CreateOutline></CreateOutline>-->
      <!--            </n-icon>-->
      <!--          </n-flex>-->
      <!--          <Text :size="14" class="secondary-color-text-1">-->
      <!--            CET4/6 TEM4/8 我在我的大学通过了，TEM8是我国的最高级别，代表英语学习者可以像母语人士一样与外国人交流，在我的国家，我做过翻译，为外国客户翻译论文和其他东西，我有很强的学习新事物的能力，如果你雇用我，-->
      <!--            我绝对不会让你失望的！-->
      <!--          </Text>-->
      <!--        </n-tab-pane>-->
      <!--      </n-tabs>-->
    </div>
    <!--    <div class="personal-work-experience">-->
    <!--      <n-flex align="center" style="height: 30px;margin-bottom: 30px">-->
    <!--        <Text :size="26" weight="600">工作经历</Text>-->
    <!--        <n-icon :size="22" class="cursor-pointer-style main-color-size">-->
    <!--          <SwapVerticalOutline></SwapVerticalOutline>-->
    <!--        </n-icon>-->
    <!--      </n-flex>-->
    <!--      <Text :size="18">-->
    <!--        已完成工作（3）-->
    <!--      </Text>-->
    <!--      <n-flex class="personal-work-list" :size="20" vertical>-->
    <!--        <n-flex class="personal-work-list-item" vertical v-for="_item in 3" @click="showWorkDetails = true">-->
    <!--          <Text :size="20">-->
    <!--            将普通话翻译成英语-->
    <!--          </Text>-->
    <!--          <Text :size="16" color="#808080">-->
    <!--            没有给出反馈-->
    <!--          </Text>-->
    <!--          <n-flex justify="space-between" style="margin-top: 20px">-->
    <!--            <Text :size="16" color="#808080">-->
    <!--              2021-04-10 - 2022-04-10-->
    <!--            </Text>-->
    <!--            <template v-if="edi">-->
    <!--              <n-button type="primary" style="width: 120px">-->
    <!--                固定价格-->
    <!--              </n-button>-->
    <!--            </template>-->
    <!--            <template v-else>-->
    <!--              <Text class="secondary-color-text-1">固定价格</Text>-->
    <!--            </template>-->
    <!--          </n-flex>-->
    <!--        </n-flex>-->
    <!--      </n-flex>-->
    <!--    </div>-->

    <n-flex class="personal-skills-container" vertical>
      <n-flex justify="space-between" align="center" class="footer-recommend-header shrink">
        <div class="personal-footer-header">
          <Text :size="22">工作经历</Text>
        </div>
        <n-icon v-if="edi"
                :size="22"
                class="cursor-pointer-style main-color-size"
                @click="addShowFunc(false)">
          <AddCircleOutline/>
        </n-icon>
      </n-flex>
      <n-flex vertical class="recommend-item-container">
        <div class="recommend-item-container-item" v-for="(item,index) in props.userData.resume.workList">
          <n-flex class="recommend-item-header" justify="space-between">
            <Text :size="20">{{ item.workName }}</Text>
            <n-flex align="center" v-if="edi">
              <n-icon :size="18" class="cursor-pointer-style main-color-size" @click="addShowFunc(item.id)">
                <CreateOutline/>
              </n-icon>
              <n-icon :size="18" class="cursor-pointer-style main-color-size" @click="delFunc(item.id)">
                <Trash/>
              </n-icon>
            </n-flex>
          </n-flex>
          <Text :size="16">
            {{ item.position }}
          </Text>
          <Text :size="14" class="secondary-color-text-1">
            {{ formatTime(item.startData) }} {{ formatTime(item.endData) }}
          </Text>
          <Text :size="14" class="secondary-color-text-1">
            {{ item.jobDescription }}
          </Text>
        </div>
      </n-flex>
    </n-flex>
    <n-flex class="personal-skills-container" vertical :size="20">
      <Text :size="26" weight="600">技能和专业知识</Text>
      <n-select v-model:value="skillArray" multiple :options="options" @update:value="handleValueChange"/>
      <!--      <n-flex>-->
      <!--        <n-tag-->
      <!--            round-->
      <!--            class="cursor-pointer-style"-->
      <!--            v-for="item in userInput.hig"-->
      <!--            closable-->
      <!--            @close="userInput.hig = userInput.hig.filter(value => value !== item)"-->
      <!--            :key="item">-->
      <!--          {{ item }}-->
      <!--        </n-tag>-->
      <!--      </n-flex>-->
    </n-flex>
    <n-flex class="personal-skills-container" vertical>
      <n-flex justify="space-between" align="center" class="footer-recommend-header shrink">
        <div class="personal-footer-header">
          <Text :size="22">其他认证</Text>
        </div>
        <n-icon v-if="edi"
                :size="22"
                class="cursor-pointer-style main-color-size"
                @click="openUploadDialog">
          <AddCircleOutline/>
        </n-icon>
      </n-flex>
      <n-flex>
        <n-upload
            ref="uploadRef"
            :show-trigger="false"
            accept="image/*"
            :action="uploadUrl"
            :on-finish="(file, event, fileList)=>{handleUploadFinish(file, event, fileList)}"
            :headers="uploadHeaders"
            list-type="image-card"
            v-model:file-list="fileList"
            @remove="handleRemove"
            @change="handleUpload"
        >
        </n-upload>
      </n-flex>
    </n-flex>

    <!--    <n-flex class="personal-skills-container" vertical :size="10">-->
    <!--      <div>-->
    <!--        <Text :size="26" weight="600">商业咨询项目展示</Text>-->
    <!--        <Text :size="14" color="#808080" v-if="edi">-->
    <!--          项目是一种在单刻达上赚钱的新方式，可帮助您做更多您喜欢做的工作。创建项目产品，突出您的优势并吸引更多客户-->
    <!--        </Text>-->
    <!--        <template v-else>-->
    <!--          <n-flex style="margin-top: 20px">-->
    <!--            <n-flex vertical>-->
    <!--              <n-image>-->
    <!--                <template #placeholder>-->
    <!--                  <div class="image-placeholder"></div>-->
    <!--                </template>-->
    <!--              </n-image>-->
    <!--              <Text :size="16" weight="600">证书</Text>-->
    <!--            </n-flex>-->
    <!--            <n-flex vertical>-->
    <!--              <n-image>-->
    <!--                <template #placeholder>-->
    <!--                  <div class="image-placeholder"></div>-->
    <!--                </template>-->
    <!--              </n-image>-->
    <!--              <Text :size="16" weight="600">设计：web网站</Text>-->
    <!--            </n-flex>-->
    <!--          </n-flex>-->
    <!--        </template>-->
    <!--      </div>-->
    <!--      <n-button type="primary" style="width: 88px" v-if="edi" @click="$router.push('/add/project')">管理项目</n-button>-->
    <!--    </n-flex>-->
  </div>
  <AddEmployment v-model:show="addShow" v-model:EmploymentId="EmploymentId" v-if="addShow" @success="success"/>
  <WorkDetails v-model:show="showWorkDetails"></WorkDetails>
  <EditIntroduction v-model:show="showEditIntroduction" v-model:resume="props.userData.resume"
                    v-if="showEditIntroduction" @success="success"/>
</template>

<style scoped lang="scss">
.personal-data-container-body {
  width: calc(100% - 360px);
  border-left: solid 1px #EDEDED;
  border-right: solid 1px #EDEDED;

  :deep(.n-upload-file-list .n-upload-file.n-upload-file--image-card-type) {
    width: 350px;
    height: 240px;
  }

  :deep(.n-upload-file-list.n-upload-file-list--grid) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .personal-profile {
    padding: 21px 116px 21px 37px;
    height: 194px;
    border-bottom: 1px solid #EDEDED;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .personal-work-experience {
    padding: 40px;
    box-sizing: border-box;
    border-bottom: 1px solid #EDEDED;
  }

  .personal-work-list {
    margin-top: 20px;

    .personal-work-list-item {
      border: solid 1px #58968B;
      width: 100%;
      height: 162px;
      border-radius: 16px;
      padding: 20px 40px;
      cursor: pointer;
    }
  }

  .personal-skills-container {
    border-bottom: 1px solid #EDEDED;
    padding: 40px;
    box-sizing: border-box;
  }

  .image-placeholder {
    width: 244px;
    height: 173px;
    background: #D9D9D9;
    border-radius: 12px 12px 12px 12px;
  }
}
</style>
