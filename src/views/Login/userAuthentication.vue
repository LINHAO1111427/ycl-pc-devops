<script setup lang="ts">
import {NButton} from "naive-ui";
import {ref, onMounted, computed} from "vue";
import {ArchiveOutline as ArchiveIcon, ReturnDownBackSharp} from '@vicons/ionicons5'

const images = import.meta.glob('@/assets/img/*.png', {eager: true});
import {useRouter, useRoute} from "vue-router";
import {getUserSkill} from '@/api/user'
import {Text} from "@/components";
import {
  guideUserInfo,
  setTitle,
  setDescribe,
  setPreferredQualification,
  setExperienceLevel,
  setBudget
} from '@/api/user'
import {useMessage} from 'naive-ui'
// 创建 message 实例
const message = useMessage()
const router = useRouter();
const levels = [
  {
    key: "1",
    label: "入门级",
    description: "我在这个领域还是新手",
    img: images['/src/assets/img/uac1.png'].default
  },
  {
    key: "2",
    label: "中级",
    description: "我在这个领域有丰富的经验",
    img: images['/src/assets/img/uac2.png'].default
  },
  {
    key: "3",
    label: "专家",
    description: "我在这个领域有全面和专业知识",
    img: images['/src/assets/img/uac3.png'].default
  }
];
const options = ref([])
const levels1 = [
  {
    key: "beginner1",
    label: "赚取主要收入",
    description: "单刻达平台作为主要收入来源，每天都会在平台找项目赚收益",
    img: images['/src/assets/img/uac3.png'].default
  },
  {
    key: "intermediate1",
    label: "作为副业",
    description: "单刻达平台作为副业源，空闲时候回来接单，提高自己的收入水平。",
    img: images['/src/assets/img/uac4.png'].default
  },
  {
    key: "expert1",
    label: "其他",
    description: "我还没想好先看看然后在做决定。",
    img: images['/src/assets/img/uac3.png'].default
  },
  {
    key: "stage1",
    label: "专家",
    description: "我在这个领域有全面和专业知识",
    img: images['/src/assets/img/uac5.png'].default
  }
];
const userType = ref(parseInt(useRoute().params.type.toString()))
console.log('==============')
console.log(userType.value)
console.log('==============')
const formRef = ref(null);
const skill1 = ref([])
const form = ref({
  userId: localStorage.getItem('userId'),
  avatar: "",
  name: "",
  birthday: null,
  participateWorkDate: null,
  sex: 1,
  mark: "",
  skill: "java,vue,c++",
  videoUrl: "",
  qualificationList: [
    {
      schoolName: "",
      educationSystem: "",
      degree: "",
      major: "",
      graduationDate:null,
      certificatePhotoUrl: ""
    }
  ],
  card: "",
  cardUrl: "www.baidu.com",
  workList: [
    {
      workName: "",
      department: "",
      industry: "",
      position: "",
      employmentPeriod: null,
      jobDescription: ""
    }
  ],
  target: "",
  jobList: [
    {
      expectedPosition: "",
      weeklyWorkHours: "",
      expectedIndustry: "",
      expectedSalary: "",
      expectedCity: ""
    }
  ],
  grade: ""
});

const selectLevel = (label, type, key) => {
  if (type === 0) {
    form.value.grade = label
  }
  if (type === 1) {
    form.value.target = label
  }
  if (type === 2) {
    formData.value.experienceLevel = key
  }
}

const formData = ref({
  title: '',
  description: '',
  preferredQualification: '',
  experienceLevel: '',
  totalBudget: '',
});

const genderOptions = [
  {label: '男', value: 1},
  {label: '女', value: 2}
];

const rules = {
  name: {required: true, message: '请输入姓名', trigger: 'blur'},
  dob: {required: true, message: '请选择出生日期', trigger: 'change'},
  workTime: {required: true, message: '请输入参加工作时间', trigger: 'blur'},
  gender: {required: true, message: '请选择性别', trigger: 'change'}
};
const nextFlag = ref(true)
const stage = ref(1);
const projectId = ref(true)
const nextFunc = async () => {
  stage.value++;
  if (userType.value === 1) {
    if (stage.value === 8) {
      try {
        form.value.skill = skill1.value.join(',')
        const res = await guideUserInfo(form.value)
        if (res.code === 0) {
          console.log(stage.value)
          nextFlag.value = false
        } else {
          message.error(res.msg)
        }
      } catch (error) {
        console.error('获取用户失败', error)
      }
    }
  } else {
    if (stage.value === 6) {
      nextFlag.value = false
      try {
        const res = await setTitle({title: formData.value.title})
        if (res.code === 0) {
          projectId.value = res.data
          await setDescribe({
            id: projectId.value,
            description: formData.value.description
          })
          await setPreferredQualification({
            id: projectId.value,
            preferredQualification: formData.value.preferredQualification
          })
          await setExperienceLevel({
            id: projectId.value,
            experienceLevel: formData.value.experienceLevel
          })
          await setBudget({
            id: projectId.value,
            totalBudget: formData.value.totalBudget
          })
        } else {
          message.error(res.msg)
        }
      } catch (error) {
        console.error('系统异常', error)
      }
    }
  }
};
const backFunc = () => {
  stage.value--
  if (stage.value === 0) {
    stage.value = 1
  }
};

const userInfo = {
  name: "怀冰瑶",
  job: "游泳",
  avatar: "https://imgs.699pic.com/images/500/634/068.jpg!list1x.v2" // 替换为真实头像 URL
};

const goToOrders = () => {
  //
  // localStorage.setItem('LoginData', JSON.stringify({userType: userType.value, isLogin: true}))
  if (userType.value === 1) {
    router.push('/talents')
  } else {
    localStorage.setItem('userForm', JSON.stringify(formData.value))
    router.push('/client/addclient')
    // router.push('/client/index')
  }

  console.log("跳转到接单页面");
};
const goToProfile = () => {
  if (userType.value === 1) {
    router.push('/personal-data')
  } else {
    router.push('/client/member-contact')
  }
  console.log("返回个人中心");
};
console.log(router)
onMounted(async() => {
  const res = await getUserSkill({classification: 3})
  if (res.code !== 0) {
    message.error(res.msg)
    return
  }
  options.value = res.data.map(item => {
    return {
      value: item.name,
      label: item.name,
      checked: false,
    }
  })
});
const userInput = ref({
  hig: ['英文翻译'],
  higInput: '',
})

function onClickAdd() {
  skillArray.value.push(userInput.value.higInput)
  form.value.skill = skillArray.value.join(', ')
  userInput.value.higInput = ''
}

// 计算属性：将 skill 字符串变为数组
const skillArray = computed(() => {
  return form.value.skill
      ? form.value.skill.split(',').map(item => item.trim()).filter(item => item !== '')
      : []
})

// 删除方法：从数组中删掉对应项，并更新 form.skill
const removeSkill = (index) => {
  const arr = [...skillArray.value]
  arr.splice(index, 1)
  form.value.skill = arr.join(', ')
}

</script>

<template>
  <div class="container">
    <div v-if="userType===1" style="height: 100%;">
      <div v-show="stage===1" class="stageClass">
        <div class="containerTitle">
          <h2>恭喜您注册成功</h2>
          <h2>为了更精准匹配客户，请简单回答几个问题。</h2>
        </div>
        <h2>您以前做过自由职业者吗？请选择经验等级</h2>
        <span
            style="margin-top: 37px;margin-bottom: 49px;color: #666666;font-size: 16px;">我们需要了解你是否做过自由职业者，便于为你匹配精准客户。</span>
        <div class="nCard">
          <div
              v-for="level in levels"
              :key="level.key"
              class="cardItem"
              :class="{ selected: form.grade === level.label }"
              @click="selectLevel(level.label,0,level.key)"
          >
            <div class="cardItemText">
              <img :src="level.img"/>
              <div style="height: 56px;">
                <div style="font-size: 28px;">{{ level.label }}</div>
                <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  {{ level.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="stage===2" class="stageClass">
        <h2>你做自由职业者的目标是什么</h2>
        <span
            style="margin-top: 37px;margin-bottom: 49px;color: #666666;font-size: 16px;">我们希望突出最符合你的目标机会，同时像你推送更精准的客户。</span>
        <div class="nCard">
          <div
              v-for="level in levels1"
              :key="level.key"
              class="cardItem"
              :class="{ selected: form.target === level.label }"
              @click="selectLevel(level.label,1,level.key)"
          >
            <div class="cardItemText">
              <img :src="level.img"/>
              <div style="height: 56px;">
                <div style="font-size: 28px;line-height: 28px;height: 40px">{{ level.label }}</div>
                <div style="line-height: 16px">{{ level.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="stage===3" class="stageClass">
        <h2>请填写自己的个人信息</h2>
        <span style="margin-top: 37px;margin-bottom: 49px;color: #666666;font-size: 16px;">我们需要了解你的教育、经验和技能。完成后可以在个人资料进行编辑。</span>
        <n-form ref="formRef" :model="form" :rules="rules" label-width="80px">
          <n-grid :cols="2" :x-gap="24">
            <n-gi>
              <n-input v-model:value="form.name" placeholder="请输入姓名"/>
            </n-gi>
            <n-gi>
              <n-date-picker v-model:value="form.birthday" type="date" placeholder="请选择出生日期"
                             :style="{'--n-input-height': '50px'}"/>
            </n-gi>
            <n-gi>
              <n-date-picker v-model:value="form.participateWorkDate" type="date" placeholder="请输入参加工作时间"
                             :style="{'--n-input-height': '50px'}"/>
            </n-gi>
            <n-gi>
              <n-select class="custom-select" v-model:value="form.sex" :options="genderOptions"
                        placeholder="请选择性别" style="height: 50px;"/>
            </n-gi>
          </n-grid>
          <n-input v-model:value="form.mark" type="textarea" placeholder="请输入自我介绍"
                   style="width: 100%;height: 130px;"/>
        </n-form>
      </div>
      <div v-show="stage===4" class="stageClass">
        <h2>请填写工作经历</h2>
        <span style="margin-top: 37px;margin-bottom: 49px;color: #666666;font-size: 16px;">我们需要了解你的教育、经验和技能。完成后可以在个人资料进行编辑。</span>
        <n-form ref="formRef" :model="form.workList" :rules="rules" label-width="80px">
          <n-grid :cols="2" :x-gap="24">
            <n-gi>
              <n-input v-model:value="form.workList[0].workName" placeholder="请输入公司名称"/>
            </n-gi>
            <n-gi>
              <n-input v-model:value="form.workList[0].department" placeholder="请输入所属部门"/>
            </n-gi>
            <n-gi>
              <n-input v-model:value="form.workList[0].industry" placeholder="请输入所属行业"/>
            </n-gi>
            <n-gi>
              <n-input v-model:value="form.workList[0].position" placeholder="请输入职位"/>
            </n-gi>
            <n-gi>
              <n-date-picker v-model:value="form.workList[0].employmentPeriod" type="date" placeholder="请选择在职时间"
                             :style="{'--n-input-height': '50px'}"/>
            </n-gi>
          </n-grid>
          <n-input v-model:value="form.workList[0].jobDescription" type="textarea" placeholder="请输入工作内容"
                   style="width: 100%;height: 130px;"/>
        </n-form>
      </div>
      <div v-show="stage===5" class="stageClass">
        <h2>请进行身份证验证</h2>
        <span style="margin-top: 37px;margin-bottom: 49px;color: #666666;font-size: 16px;">我们需要了解你的教育、经验和技能。完成后可以在个人资料进行编辑。</span>
        <n-form ref="formRef" :model="form" :rules="rules" label-width="80px">
          <n-grid :cols="2" :x-gap="24">
            <n-gi>
              <n-input v-model:value="form.name" placeholder="真实姓名"/>
            </n-gi>
            <n-gi>
              <n-input v-model:value="form.card" placeholder="身份证号"/>
            </n-gi>
          </n-grid>
        </n-form>
        <n-flex style="flex-direction: row;" vertical>
          <n-upload
              multiple
              directory-dnd
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              list-type="image-card"
              :max="1"
          >
            <n-upload-dragger style="height: 248px;width: 248px;">
              <div style="margin-bottom: 12px">
                <n-icon size="48" :depth="3">
                  <ArchiveIcon/>
                </n-icon>
              </div>
              <div>上传身份证正面</div>
            </n-upload-dragger>
          </n-upload>
          <n-upload
              multiple
              directory-dnd
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              list-type="image-card"
              :max="1"
          >
            <n-upload-dragger style="height: 248px;width: 248px;">
              <div style="margin-bottom: 12px">
                <n-icon size="48" :depth="3">
                  <ArchiveIcon/>
                </n-icon>
              </div>
              <div>上传身份证反面</div>
            </n-upload-dragger>
          </n-upload>
        </n-flex>

      </div>
      <div v-show="stage===6" class="stageClass">
        <h2>请进行学历认证</h2>
        <span style="margin-top: 37px;margin-bottom: 49px;color: #666666;font-size: 16px;">我们需要了解你的教育、经验和技能。完成后可以在个人资料进行编辑。</span>
        <n-form ref="formRef" :model="form.qualificationList" :rules="rules" label-width="80px">
          <n-grid :cols="2" :x-gap="24">
            <n-gi>
              <n-input v-model:value="form.qualificationList[0].schoolName" placeholder="请输入学校名称"/>
            </n-gi>
            <n-gi>
              <n-input v-model:value="form.qualificationList[0].educationSystem" placeholder="请选择学制类型"/>
            </n-gi>
            <n-gi>
              <n-input v-model:value="form.qualificationList[0].degree" placeholder="请输入学历"/>
            </n-gi>
            <n-gi>
              <n-input v-model:value="form.qualificationList[0].major" placeholder="请输入专业"/>
            </n-gi>
            <n-gi>
              <n-date-picker v-model:value="form.qualificationList[0].graduationDate" type="date"
                             placeholder="毕业时间"
                             :style="{'--n-input-height': '50px'}"/>
            </n-gi>
          </n-grid>
        </n-form>
        <n-flex style="flex-direction: row;" vertical>
          <n-upload
              multiple
              directory-dnd
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              list-type="image-card"
              :max="1"
          >
            <n-upload-dragger style="height: 248px;width: 248px;">
              <div style="margin-bottom: 12px">
                <n-icon size="48" :depth="3">
                  <ArchiveIcon/>
                </n-icon>
              </div>
              <div>上传毕业证</div>
            </n-upload-dragger>
          </n-upload>
          <n-upload
              multiple
              directory-dnd
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              list-type="image-card"
              :max="1"
          >
            <n-upload-dragger style="height: 248px;width: 248px;">
              <div style="margin-bottom: 12px">
                <n-icon size="48" :depth="3">
                  <ArchiveIcon/>
                </n-icon>
              </div>
              <div>技能证书</div>
            </n-upload-dragger>
          </n-upload>
        </n-flex>

      </div>
      <div v-show="stage===7" class="stageClass">
        <h2 style="width: 1024px">其他信息完善</h2>
        <span style="margin-top: 37px;margin-bottom: 49px;color: #666666;font-size: 16px;">我们需要了解你的教育、经验和技能。完成后可以在个人资料进行编辑。</span>
        <n-flex class="personal-skills-container" vertical :size="20" style="margin-bottom: 50px;">
          <Text :size="26" weight="600">技能和专业知识</Text>
          <n-select v-model:value="skill1" multiple :options="options"/>

          <!--          <n-input-->
          <!--              v-model:value="userInput.higInput"-->
          <!--              placeholder="请输入标签"-->
          <!--              style="width: 525px;margin-bottom: 0px;"-->
          <!--              @keydown.enter="onClickAdd"-->
          <!--          >-->
          <!--            <template #suffix>-->
          <!--              <n-icon>-->
          <!--                <ReturnDownBackSharp></ReturnDownBackSharp>-->
          <!--              </n-icon>-->
          <!--            </template>-->
          <!--          </n-input>-->
          <!--          <n-flex>-->
          <!--            <n-tag-->
          <!--                round-->
          <!--                class="cursor-pointer-style"-->
          <!--                v-for="(item, index) in skillArray"-->
          <!--                :key="index"-->
          <!--                closable-->
          <!--                @close="removeSkill(index)"-->
          <!--            >-->
          <!--              {{ item }}-->
          <!--            </n-tag>-->
          <!--          </n-flex>-->
        </n-flex>
        <n-upload
            multiple
            directory-dnd
            action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
            :max="5"
        >
          <n-upload-dragger style="height: 248px;width: 248px;">
            <div style="margin-bottom: 12px">
              <n-icon size="48" :depth="3">
                <ArchiveIcon/>
              </n-icon>
            </div>
            <div>上传视频介绍</div>
          </n-upload-dragger>
        </n-upload>
      </div>
      <div v-show="stage===8" class="stageClass">
        <div class="container1">
          <h1 class="title">个人信息完成成功</h1>
          <!--          <NCard class="user-card">-->
          <!--            <div class="user-info">-->
          <!--              <img :src="userInfo.avatar" class="avatar" alt="头像"/>-->
          <!--              <div class="text-info">-->
          <!--                <h2>{{ userInfo.name }}</h2>-->
          <!--                <p>{{ userInfo.job }}</p>-->
          <!--              </div>-->
          <!--              <div class="success-icon">✔️</div>-->
          <!--            </div>-->
          <!--          </NCard>-->
          <div class="button-group">
<!--            <NButton type="primary" @click="goToOrders">立即接单</NButton>-->
            <NButton secondary @click="goToProfile">返回个人中心</NButton>
          </div>
        </div>
      </div>
      <div class="button-group" v-show="stage!==8">
        <NButton secondary @click="backFunc">上一步</NButton>
        <NButton type="primary" class="next-button" @click="nextFunc">下一步</NButton>
        <NButton text class="skip-button">跳过</NButton>
      </div>
    </div>
    <div v-else style="height: 100%;">
      <div v-show="stage===1" class="stageClass">
        <div class="containerTitle">
          <h2 style="width: 1024px;">恭喜您注册成功</h2>
          <h2>为了更精准匹配客户，请简单回答几个问题。</h2>
        </div>
        <h2>请简单描述您需要解决的工作标题</h2>
        <span
            style="margin-top: 37px;margin-bottom: 49px;color: #666666;font-size: 16px;">我们需要了解您的基本情况，便于为你匹配精准人才。</span>
        <n-input v-model:value="formData.title" placeholder="请输入标题"
                 style="width: 100%;"/>
      </div>
      <div v-show="stage===2" class="stageClass">
        <h2 style="width: 1024px;">请简单描述您需要解决的工作内容</h2>
        <span
            style="margin-top: 37px;margin-bottom: 49px;color: #666666;font-size: 16px;">我们希望突出最符合你的目标机会，同时像你推送更精准的客户。</span>
        <n-input v-model:value="formData.description" type="textarea" placeholder="例如：
本项目目标是打造一个数字文旅体验，核心在于利用3D建模技术和Unity3D开发经验。
实现建筑、景观、文物的数字化呈现。项目将采用视界AR技术，将虚拟模型与现实环境相结合。"
                 style="width: 100%;height: 130px;"/>
      </div>
      <div v-show="stage===3" class="stageClass">
        <h2 style="width: 1024px;">请简单描述您需要人才的首选资格</h2>
        <span
            style="margin-top: 37px;margin-bottom: 49px;color: #666666;font-size: 16px;">我们需要了解您的基本情况，便于为你匹配精准人才。</span>
        <n-input v-model:value="formData.preferredQualification" type="textarea"
                 placeholder="请输入首选资格要求
           例：出色的市场分析能力，能洞察用户需求与竞争环境。优秀的沟通与协作能力
           能与技术、设计、运营等多部门高效合作。"
                 style="width: 100%;height: 130px;"/>
      </div>
      <div v-show="stage===4" class="stageClass">
        <h2>请选择您需要人才的经验等级</h2>
        <span
            style="margin-top: 37px;margin-bottom: 49px;color: #666666;font-size: 16px;">我们需要了解您的基本情况，便于为你匹配精准人才。</span>
        <div class="nCard">
          <div
              v-for="level in levels"
              :key="level.key"
              class="cardItem"
              :class="{ selected: formData.experienceLevel === level.key }"
              @click="selectLevel(level.label,2,level.key)"
          >
            <div class="cardItemText">
              <img :src="level.img"/>
              <div style="height: 56px;">
                <div style="font-size: 28px;">{{ level.label }}</div>
                <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  {{ level.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="stage===5" class="stageClass">
        <h2 style="width: 1024px;">请填写项目预算</h2>
        <span
            style="margin-top: 37px;margin-bottom: 49px;color: #666666;font-size: 16px;">我们需要了解您的基本情况，便于为你匹配精准人才。</span>
        <n-input v-model:value="formData.totalBudget" placeholder="请输入价格"
                 style="width: 100%;"/>
      </div>
      <div v-show="stage===6" class="stageClass">
        <div class="container1">
          <h1 class="title">项目基本信息已完成</h1>
          <!--          <NCard class="user-card">-->
          <!--            <div class="user-info">-->
          <!--              <img :src="userInfo.avatar" class="avatar" alt="头像"/>-->
          <!--              <div class="text-info">-->
          <!--                <h2>{{ userInfo.name }}</h2>-->
          <!--                <p>{{ userInfo.job }}</p>-->
          <!--              </div>-->
          <!--              <div class="success-icon">✔️</div>-->
          <!--            </div>-->
          <!--          </NCard>-->
          <div class="button-group">
            <NButton type="primary" @click="goToOrders">立即发单</NButton>
<!--            <NButton secondary @click="goToProfile">返回个人中心</NButton>-->
          </div>
        </div>
      </div>
      <div class="button-group" v-show="nextFlag">
        <NButton secondary @click="backFunc">上一步</NButton>
        <NButton type="primary" class="next-button" @click="nextFunc">下一步</NButton>
        <NButton text class="skip-button">跳过</NButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.n-upload-file-list .n-upload-file.n-upload-file--image-card-type) {
  position: relative;
  width: 248px;
  height: 248px;
}

:deep(.n-upload-trigger.n-upload-trigger--image-card) {
  width: 248px;
  height: 248px;
}

.container1 {
  text-align: center;
  margin-top: 50px;

  .title {
    font-size: 52px;
    font-weight: bold;
    margin-bottom: 80px;
  }

  .user-card {
    background: #FFFFFF;
    box-shadow: 0px 0px 6px 4px rgba(225, 225, 225, 0.36);
    border-radius: 18px;
    width: 964px;
    height: 220px;
    text-align: left;
  }

  .user-info {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  .text-info {
    flex: 1;
    margin-left: 15px;
  }

  .success-icon {
    font-size: 24px;
    color: green;
  }

  .button-group {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 70px !important;
  }
}


/* 或者全局生效 */
:global(.n-date-picker .n-input) {
  height: 50px !important;
  margin-bottom: 28px;
}

.n-upload-dragger {
  display: flex;
  height: 100%;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

:global(.n-select .n-input) {
  height: 50px !important;
}

:deep(.n-base-selection .n-base-selection-label) {
  height: 50px;
}

:deep(.n-input__input .n-input__input-el) {

  height: 50px !important;
}

.n-input {
  line-height: 50px;
  height: 50px;
  width: 500px;
  margin-bottom: 28px;
}

h2 {
  font-size: 36px;
}

.container {
  height: 100%;
  display: flex;
  padding: 64px 0px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.stageClass {
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.containerTitle {
  height: 108px;
  line-height: 54px;
  margin-bottom: 70px;
}

.description {
  color: #666;
  margin-bottom: 20px;
}

.grid-container {
  margin-top: 20px;
}

.nCard {
  margin-top: 40px;
  width: 936px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.cardItem {
  margin-right: 8px;
  padding: 15px;
  display: flex;
  width: 300px;
  height: 200px;
  background: #F6F8FA;
  border-radius: 4px;
  border: 1px solid #F6F8FA;
  cursor: pointer;
  transition: all 0.3s;
  flex-direction: column;
  align-items: center;
}

.cardItemText {
  height: 100%;
  display: flex;
  font-weight: 500;
  font-size: 22px;
  color: #666666;
  line-height: 28px;
  text-align: center;
  font-style: normal;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 42px;
  }
}

.n-card__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cardItem:hover, .selected {
  border-color: #3BC8B4;
  background-color: #EDFFFC;
}

.button-group {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.n-button {
  width: 208px;
  height: 56px;
  border-radius: 24px;
}

.next-button {
  background: #3BC8B4;
}

.skip-button {
  width: 84px;
  height: 56px;
  background: #F7F7F7;
  border-radius: 24px;
}

@media (max-width: 768px) {
  h2 {
    font-size: 22px;
  }

  .containerTitle {
    margin-bottom: 20px;
  }

  .nCard {
    margin-top: 40px;
    width: 100%;
    overflow-x: scroll;
  }

  .cardItem {
    width: auto;
    height: auto;
  }

  .n-button {
    width: 150px;
    height: 40px;
    border-radius: 20px;
  }

  .skip-button {
    width: 60px;
    height: 40px;
    background: #F7F7F7;
    border-radius: 40px;
  }

  .stageClass {
    height: calc(100% - 100px);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .container[data-v-63e9195a] {
    height: 100%;
    display: flex;
    padding: 0px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
