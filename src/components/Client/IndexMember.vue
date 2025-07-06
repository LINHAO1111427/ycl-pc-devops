<template>
  <div class="personal-data" v-if="isinIt">
    <n-flex class="personal-data-header" align="center" :size="20">
      <n-avatar :size="60" round :src="user.userFoundation.avatar"></n-avatar>
      <n-flex vertical :size="10">
        <n-flex class="personal-data-title" align="center">
          {{ user.userFoundation.name }}
        </n-flex>
        <n-space align="center">
          <n-flex class="secondary-color-text-1" align="center" :size="5">
            <n-icon :size="16" class="main-color-size">
              <LocationOutline/>
            </n-icon>
            {{ user.userFoundation.city || '暂无' }}
          </n-flex>
          <n-flex class="secondary-color-text-1" align="center" :size="5">
            <n-icon :size="10" class="main-color-size">
              <EllipseSharp/>
            </n-icon>
            在线时间 {{ user.userFoundation.loginTime || '暂无' }}
          </n-flex>
        </n-space>
      </n-flex>
      <n-space style="margin-left:auto" :size="30" v-if="isShowButton">
        <n-flex
            :class="{'start-icons-button':true,active:isCollection}"
            align="center"
            justify="center"
            @click="isCollection  = !isCollection"
        >
          <RenderIcon :icon="IconStart" :fill="isCollection ? '#58968B' : '#e5e5e5'" size="20"/>
        </n-flex>
        <n-button type="primary" size="large" @click="change_send(1)" :disabled="!isPayment">
          <span class="naiveui-text-14">立即发送offer</span>
        </n-button>
        <n-button type="primary" size="large" @click="change_send(3)">
          <span class="naiveui-text-14">{{ isPayment ? "取消退款" : "立刻为项目付款" }}</span>
        </n-button>
        <n-button type="primary" size="large" @click="charMessageShow = true">
          <span class="naiveui-text-14">立即聊天</span>
        </n-button>
        <n-button type="primary" size="large" @click="change_send(2)">
          <span class="naiveui-text-14">立即邀请发送项目简历</span>
        </n-button>
      </n-space>
    </n-flex>
    <n-flex :size="0" class="personal-data-container" :wrap="false">
      <div class="personal-data-slider">
        <div class="personal-data-slider-user">
          <n-flex align="center" justify="space-between">
            <div class="text-size-16">查看职业档案</div>
            <n-icon :size="22" class="cursor-pointer-style main-color-size" v-if="edi">
              <CreateOutline></CreateOutline>
            </n-icon>
          </n-flex>
          <n-space vertical :size="15" style="margin-top: 15px">
            <div class="secondary-color-text-1" style="font-size: 14px">设计师</div>
            <div class="secondary-color-text-1" style="font-size: 14px">
              所有工作
            </div>
          </n-space>
        </div>
        <n-flex class="personal-data-slider-nums" align="center" justify="center" :size="20">
          <n-flex class="personal-data-slider-nums-item" vertical align="center">
            <div class="slider-nums-item-nums">{{ user.userOrderInfo.orderCount }}</div>
            <div class="secondary-color-text-1">历史接单(单)</div>
          </n-flex>
          <n-flex class="personal-data-slider-nums-item" vertical align="center">
            <div class="slider-nums-item-nums">{{ user.userOrderInfo.totalIncome }}</div>
            <div class="secondary-color-text-1">总收入(￥)</div>
          </n-flex>
          <n-flex class="personal-data-slider-nums-item" vertical align="center">
            <div class="slider-nums-item-nums">{{ user.userOrderInfo.assess }}</div>
            <div class="secondary-color-text-1">评分(5.0)</div>
          </n-flex>
        </n-flex>
        <n-flex class="personal-data-slider-footer" vertical :size="20">
          <n-flex vertical>
            <n-flex align="center" justify="space-between">
              <div class="text-size-16">视频介绍</div>
              <n-icon :size="22" class="cursor-pointer-style main-color-size" @click="showVideo = true"
                      v-if="edi">
              </n-icon>
            </n-flex>
          </n-flex>
          <n-flex align="center" justify="space-between">
            <n-space vertical>
              <span style="font-size: 14px">每周小时数量</span>
              <span class="secondary-color-text-1">超过{{ user.userOtherInfo.weeklyWorkHours }}小时/周</span>
            </n-space>
          </n-flex>
          <n-flex vertical :size="15">
            <n-flex align="center" justify="space-between">
              <div class="text-size-16">语言</div>
            </n-flex>
            <n-flex justify="space-between" v-for="(item1,index) in user.userOtherInfo.languageList">
              <n-flex vertical :size="10">
                <span style="font-size: 14px">{{ item1.language }}：{{ item1.level }}</span>
              </n-flex>
            </n-flex>
          </n-flex>
          <n-flex align="center" justify="space-between" v-if="user.userOtherInfo.cardUrl!==null">
            <div class="text-size-16">个人验证</div>
          </n-flex>
          <n-flex align="center">
            <n-space vertical>
              <span style="font-size: 14px">身份证认证</span>
              <n-flex align="center" v-if="user.userOtherInfo.cardUrl!==null">
                <Text class="secondary-color-text-1">已认证</Text>
                <i class="icon-weiyanzheng iconfont"></i>
              </n-flex>
            </n-space>
          </n-flex>
          <n-flex vertical :size="15">
            <n-flex align="center" justify="space-between">
              <div class="text-size-16">教育</div>
            </n-flex>
            <n-flex justify="space-between" v-for="(item1,index) in user.userOtherInfo.qualificationsList">
              <n-flex vertical :size="10">
                <span style="font-size: 14px">{{ item1.schoolName }}</span>
                <span class="secondary-color-text-1">{{ item1.major }}</span>
                <span class="secondary-color-text-1">{{ item1.startDate }} {{ item1.graduationDate }} </span>
              </n-flex>
            </n-flex>
          </n-flex>
        </n-flex>
      </div>


      <div class="personal-data-container-body">
        <div class="personal-profile">
          <n-flex align="center" style="height: 30px">
            <Text :size="22" weight="600">自我简介</Text>
            <n-icon :size="22" class="cursor-pointer-style main-color-size" v-if="edi">
              <CreateOutline></CreateOutline>
            </n-icon>
          </n-flex>
          <Text :size="14" class="secondary-color-text-1">
            {{ user.userBusinessConsultation.selfIntroduction }}
          </Text>
        </div>
        <div class="personal-work-experience">
          <n-flex align="center" style="height: 30px;margin-bottom: 30px">
            <Text :size="26" weight="600">工作经历</Text>
          </n-flex>
          <Text :size="18" v-if="user.userBusinessConsultation.workList!==null">
            已完成工作
          </Text>
          <n-flex class="personal-work-list" :size="20" vertical>
            <n-flex class="personal-work-list-item" vertical v-for="(item,index) in user.userBusinessConsultation.workList"
                    @click="showWorkDetails = true">
              <Text :size="20">
                {{ item.workName }}
              </Text>
              <Text :size="16" color="#808080">
                {{ item.position }}
              </Text>
              <n-flex justify="space-between" style="margin-top: 20px">
                <Text :size="16" color="#808080">
                  {{ item.startData }} {{ item.endData }}
                </Text>
              </n-flex>
            </n-flex>
          </n-flex>
        </div>
        <n-flex class="personal-skills-container" vertical :size="20">
          <Text :size="26" weight="600">技能和专业知识</Text>
          <n-flex>
            <n-tag round class="cursor-pointer-style" v-for="(item,index) in skills">{{ item }}</n-tag>
          </n-flex>
        </n-flex>
        <n-flex class="personal-skills-container" vertical :size="10">
          <Text :size="26" weight="600">建立商业咨询</Text>
          <n-flex class="item-open" style="overflow-x: auto;width: 100%;">
            <!--            <div class="item-open-icon">-->
            <!--              <img src="../../assets/client/10.png" alt="">-->
            <!--            </div>-->
            <div class="item-open-scroll">
              <n-flex class="item-open-view" vertical v-for="(item,index) in user.userConsultaionList" :key="item">
                <p class="item-open-view-p1">
                  商业咨询<span>{{ item.projectName }}</span>
                  <div class="item-open-btn">
                    <n-button type="primary" round style="padding:0 40px"
                              @click="$router.push('/client/search-advice')">
                      建立咨询
                    </n-button>
                  </div>
                </p>
                <p class="item-open-view-p2">
                  {{ item.projectIntroduction }}每{{ item.consultationDuration }}分钟{{ item.consultaionPrice }}元</p>
                <p class="item-open-view-p3">下次咨询时间：{{ item.consultaionTime }}</p>
                <div class="n-flex-left-item-tag1">
                  <n-tag size="small" :color="{textColor:'#808080',borderColor:'#E9E9E9',color:'#E9E9E9'}"
                         round v-for="(item,index) in achievement">{{ item }}
                  </n-tag>
                </div>
              </n-flex>
            </div>
          </n-flex>
        </n-flex>

        <n-flex class="personal-skills-container" vertical :size="10">
          <div>
            <Text :size="26" weight="600">历史商业咨询项目</Text>
            <Text :size="14" color="#808080" v-if="edi">
              项目是一种在单刻达上赚钱的新方式，可帮助您做更多您喜欢做的工作。创建项目产品，突出您的优势并吸引更多客户
            </Text>
            <template v-else>
              <n-flex style="margin-top: 20px">
                <n-flex vertical v-for="(item,index) in old">
                  <n-image>
                    <template #placeholder>
                      <div class="image-placeholder"></div>
                    </template>
                  </n-image>
                  <Text :size="16" weight="600">{{ item.title }}</Text>
                </n-flex>
              </n-flex>
            </template>
          </div>
          <n-button type="primary" style="width: 88px" v-if="edi">管理项目</n-button>
        </n-flex>
      </div>
    </n-flex>
  </div>
<!--  <div class="client-form">-->
  <!--    <div class="client-form-view">-->
  <!--      <p class="client-form-view-title">工作经历</p>-->
  <!--      <p class="client-form-view-pp">阿尔法视觉有限公司</p>-->
  <!--      <p class="client-form-view-p1">视觉设计师</p>-->
  <!--      <p class="client-form-view-p2">2016年3月-目前</p>-->
  <!--      <p class="client-form-view-p2">-->
  <!--        我现在在阿尔法视觉有限公司担任视觉设计师职位，我的工作时负责公司设计方面的一切工作</p>-->
  <!--    </div>-->
  <!--  </div>-->
  <!--  <div class="client-form">-->
  <!--    <div class="client-form-view">-->
  <!--      <p class="client-form-view-title">其他经历</p>-->
  <!--      <p class="client-form-view-pp">个人经历</p>-->
  <!--      <p class="client-form-view-p1">视觉设计师</p>-->
  <!--      <p class="client-form-view-p2">-->
  <!--        我现在在阿尔法视觉有限公司担任视觉设计师职位，我的工作时负责公司设计方面的一切工作</p>-->
  <!--    </div>-->
  <!--  </div>-->

  <!-- 立即邀请发送项目简历按钮 -->
  <IndexMemberSend v-model:show="send" :typeValue="typeValue" @updateFunc="updateFunc"/>
  <ChatMessage v-model:show="charMessageShow"/>
</template>

<script setup>
import {
  CreateOutline,
  LocationOutline,
  EllipseSharp,
  ChevronBack
}
  from '@vicons/ionicons5'
import avatarUrl from '../../assets/img/avatar.png'
import {Text, RenderIcon, IconStart} from '@/components'
import {onMounted, ref} from 'vue'
import IndexMemberSend from './IndexMemberSend.vue'
import {createDiscreteApi} from "naive-ui";
import {userInfo} from '@/api/base'
import {useMessage} from 'naive-ui'
import * as from from "@vicons/ionicons5";
import {pageOld} from "@/api/home.js";
// 创建 message 实例
const message = useMessage()
var edi = false

var active = true

const send = ref(false)
const typeValue = ref(1)
const isPayment = ref(false)
const {dialog} = createDiscreteApi(['dialog'])
const isinIt = ref(false)
const props = defineProps({
  isShowButton: {
    type: Boolean,
    default: true,
  },
  userId: {
    type: Number,
    default: null,
  },
})
const user = ref({})
const skills = ref([])
const old = ref([])
const achievement = ref([])
const change_send = (val) => {
  if (val !== 1) {
    if (isPayment.value) {
      dialog.success({
        actionClass: 'naiveui-dialog-action',
        showIcon: false,
        closable: false,
        // title:'提示信息',
        content: "已取消退款",
        positiveText: '确定',
        maskClosable: false,
        positiveButtonProps: {
          color: '#58968B'
        },
        onPositiveClick: () => {
          isPayment.value = !isPayment.value
          // emit('update:show', false)
        }
      })
    } else {
      send.value = !send.value
      typeValue.value = val
    }
  } else {
    send.value = !send.value
    typeValue.value = val
  }
}
const updateFunc = (val) => {
  console.log('已付款')
  isPayment.value = true
}
const isCollection = ref(false)

const charMessageShow = ref(false)

onMounted(async () => {
  try {
    const res1 = await userInfo({userId: props.userId})
    if (res1.code !== 0) {
      message.error(res1.msg || '获取人才详情失败')
      return
    }

    user.value = res1.data.info
    skills.value = (res1?.data?.info?.userBusinessConsultation?.skills || '')
        .split(',')
        .filter(skill => skill.trim() !== '')
    const res = await pageOld({
      workerId: props.userId,
      pageNo: 1,
      pageSize: 10
    })
    if (res.code === -1) {
      message.error(res.msg)
      return
    }
    old.value = res.data.list.slice(0, 2)
    isinIt.value = true
  } catch (err) {
    console.error('获取用户详情失败', err)
    message.error('请求失败，请稍后重试')
  }
})
</script>
<style scoped>
.start-icons-button {
  width: 40px;
  height: 40px;
  border-radius: 12px 12px 12px 12px;
  border: 2px solid #e5e5e5;
}

.start-icons-button.active {
  border: 2px solid #58968B;
}

.personal-data {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
  margin-bottom: 30px;
}

.personal-data-header {
  height: 114px;
  background: #FFFFFF;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: solid 1px #e7e7e7;
}

.personal-data-title {
  font-weight: 500;
  font-size: 20px;
  color: #333333;
  line-height: 23px;
}

.personal-data-container {
  background: #FFFFFF;
}


.personal-data-slider {
  width: 284px;
  border: solid 1px #e7e7e7;
  border-top: transparent;
  flex-shrink: 0;
}

.personal-data-slider-nums {
  height: 94px;
  box-sizing: border-box;
  border-bottom: solid 1px #e7e7e7;
}

.slider-nums-item-nums {
  font-weight: 600;
  font-size: 16px;
  color: #333333;
}

.personal-data-slider-footer {
  padding: 20px;
  box-sizing: border-box;
}

.personal-data-slider-user {
  height: 167px;
  background: #ffffff;
  padding: 16px;
  box-sizing: border-box;
  border-bottom: solid 1px #e7e7e7;
}


.personal-data-container-body {
  width: calc(100% - 300px);
  border-right: solid 1px #EDEDED;
  border-bottom: 1px solid #EDEDED;
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
}

.personal-work-list-item {
  border: solid 1px #58968B;
  width: 100%;
  height: 162px;
  border-radius: 16px;
  padding: 20px 40px;
  cursor: pointer;
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

.item-open {
  display: flex;
  width: 100%;
  height: 189px;
  background: #FFFFFF;
  border-radius: 16px 16px 16px 16px;
  margin-top: 20px;
}

.item-open-icon img {
  height: 80%;
  margin-top: 10%;
}


.item-open-view-p1 {
  font-weight: 600;
  font-size: 20px !important;
  color: #000000 !important;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.item-open-view-p1 span {
  font-weight: 400;
  font-size: 12px;
  color: #58968B;
  padding-left: 10px;
}

.item-open-view-p2 {
  font-size: 16px !important;
  color: #808080;
}

.item-open-view-p3 {
  font-size: 13px !important;
  color: #808080;
}

.n-flex-left-item-tag1 .n-tag {
  margin-right: 10px;
}


.client-form {
  flex: 1;
}

.client-form-view {
  padding: 40px;
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 16px 16px 16px 16px;
  border: 1px solid #EDEDED;
  margin-bottom: 20px;
}

.client-form-view-title {
  font-size: 24px;
  color: #333333;
  line-height: 28px;
  margin-bottom: 30px;
}

.client-form-view-p1 {
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  line-height: 35px;
}

.client-form-view-p2 {
  font-size: 14px;
  color: #808080;
}

.client-form-view-pp {
  font-size: 20px;
  color: #000000;
  line-height: 30px;
}

.item-open-view {
  min-width: 350px; /* 控制单个项宽度 */
  flex-shrink: 0; /* 防止被压缩 */
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px;
  background: #fff;
}

.item-open-scroll {
  display: flex;
  flex-direction: row;
  gap: 16px; /* 元素间距可调 */
  min-width: max-content; /* 关键：防止自动换行压缩 */
  padding-bottom: 8px;
}
</style>
