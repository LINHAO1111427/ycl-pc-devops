<script setup lang="ts">
import {Text, Empty} from '@/components'
import {ref, h, onMounted} from 'vue'
import {CreateOutline, AddCircleOutline} from '@vicons/ionicons5'
import {NButton, NSpace} from 'naive-ui'
import {RouterLink} from 'vue-router'
import EditAvatar from './EditAvatar.vue'
import {useStore} from 'vuex'
import {computed} from 'vue'
import {useUser} from "@/api/useUser.ts";
import {getContact, getEmployerCompanyInfo} from '@/api/base'

const store = useStore()
const avatar = ref(localStorage.getItem('avatar') || '')
const userData = ref(JSON.parse(localStorage.getItem('UserData') || JSON.stringify({
  userType: 0
})))
const userInfo = ref({})


const showEditAccount = ref(false)

const showAddAddress = ref(false)

const current = ref('account')

const data = ref([{
  name: '郑盈',
  phone: '1234567890',
  city: '天津 天津市 和平区 营 口道',
  address: '万达公寓1209',
  code: '000000',
}])

const columns = [
  {
    title: '收货人',
    key: 'name',
  },
  {
    title: '电话/手机',
    key: 'phone',
  },
  {
    title: '所在地区',
    key: 'city',
  },
  {
    title: '详细地址',
    key: 'address',
  },
  {
    title: '邮编',
    key: 'code',
  },
  {
    title: '操作',
    key: 'operation',
    render: () => {
      return h(NSpace, () => [
        h(NButton, {
          text: true, type: 'primary', onClick() {
            showAddAddress.value = true
          }
        }, () => '修改'),
        h(NButton, {
          text: true, type: 'error', onClick() {
            data.value = []
          },
        }, () => '删除'),
      ])
    },
  },

]

const slider = [
  {
    title: '账户信息',
    to: 'account',
  },
  {
    title: '公司详情',
    to: 'city',
  },
  {
    title: '公司联系方式',
    to: 'city2',
  }
]
const {getUser} = useUser()
const EmployerCompany = ref({})
const contact = ref({})
const token = localStorage.getItem('token')
const uploadUrl = `${import.meta.env.VITE_API_BASE_URL}/app-api/common/addOrUpdate`
const uploadHeaders = {
  Authorization: `Bearer ${token}`, // 或其他自定义 key，比如 'token': token
}

function handleRemove(event) {
  console.log(event)
}

function handleUploadFinish({file, event, fileList}) {
  // 上传成功后的响应
  const response = JSON.parse(event?.target?.response || '{}')

  // TODO: 你可以把 imageUrl 存到某个变量或者传给父组件
}

function onMouseenter(key: string) {
  current.value = key
  window.location.hash = key
}

const uploadRef = ref(null)
const uploadRef1 = ref(null)
const fileList = ref([])
const fileList1 = ref([])
const previewUrl = ref('')
const previewUrl1 = ref('')
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
if (previewUrl1.value) {
  fileList1.value = [
    {
      id: Date.now(), // 唯一 ID
      name: '证书图片', // 图片名称
      status: 'finished', // 表示上传完成
      url: previewUrl1.value // 图片地址
    }
  ]
}
// 处理上传的图片
const handleUpload = (options) => {
  const file = options.file.file
  if (file) {
    previewUrl.value = URL.createObjectURL(file) // 生成预览 URL
  }
}
// 处理上传的图片
const handleUpload1 = (options) => {
  const file = options.file.file
  if (file) {
    previewUrl1.value = URL.createObjectURL(file) // 生成预览 URL
  }
}

const success = () => {
}
const showEditAvatar = ref(false)
onMounted(async () => {
  const res = await getUser()
  userInfo.value = res.data
  const res1 = await getEmployerCompanyInfo()
  EmployerCompany.value = res1.data
  const res2 = await getContact()
  contact.value = res2.data
})
const openUploadDialog = (type) => {
  if (type === 0) {
    uploadRef.value?.openOpenFileDialog()
    return
  }
  uploadRef1.value?.openOpenFileDialog()
}
</script>

<template>
  <div class="contact-container">
    <div class="contact-slider">
      <div v-for="item in slider" class="contact-slider-item" :class="current === item.to && 'active'"
           @click="onMouseenter(item.to)">
        <Text color="#000" :size="16">
          {{ item.title }}
        </Text>
      </div>
    </div>

    <div class="contact-main">
      <div class="withdrawal-methods-header">
        我的信息
      </div>
      <div class="user-contact-container" id="account">
        <n-flex align="center" justify="space-between">
          <Text color="#333333" :size="24">账户信息</Text>
        </n-flex>
        <div class="contact-container-cell">
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              头像
            </Text>
            <n-avatar class="cursor-pointer-style" round @click="showEditAvatar = true" :src="avatar"></n-avatar>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              用户ID
            </Text>
            <Text :size="16" color="#808080">
              {{ userInfo.userId }}
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              名字
            </Text>
            <Text :size="16" color="#808080">
              {{ userInfo.name }}
            </Text>
          </n-flex>

          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              手机号码
            </Text>
            <Text :size="16" color="#808080">
              {{ userInfo.mobile }}
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              邮箱
            </Text>
            <Text :size="16" color="#808080">
            </Text>
          </n-flex>
        </div>
      </div>
      <div class="user-contact-container" id="city">
        <n-flex align="center" justify="space-between">
          <Text color="#333333" :size="24">公司详情</Text>
        </n-flex>
        <div class="contact-container-cell">
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              公司名称
            </Text>
            <Text :size="16" color="#808080">
              {{ EmployerCompany.companyName }}
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              所在地区
            </Text>
            <Text :size="16" color="#808080">
              {{ EmployerCompany.companyAddress }}
            </Text>
          </n-flex>

          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              网站
            </Text>
            <Text :size="16" color="#808080">
              {{ EmployerCompany.bankAccountUrl }}
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              您的行业
            </Text>
            <Text :size="16" color="#808080" style="display: flex;align-items:center;">
              {{ EmployerCompany.industry }}
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              贵公司有多少人
            </Text>
            <Text :size="16" color="#808080" style="display: flex;align-items:center;">
              {{ EmployerCompany.employeeCount }}
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              标语
            </Text>
            <Text :size="16" color="#808080" style="display: flex;align-items:center;">

            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              描述
            </Text>
            <Text :size="16" color="#808080">
              {{ EmployerCompany.otherInfo }}
            </Text>
          </n-flex>


        </div>
        <div class="easy-view">
          <div class="easy-view-title">营业执照法人</div>
          <n-flex style="align-items: center;">
            <n-upload
                v-show="fileList.length>0"
                ref="uploadRef"
                :show-trigger="false"
                accept="image/*"
                :action="uploadUrl"
                :on-finish="(file, event, fileList)=>{handleUploadFinish(file, event, fileList,1)}"
                :headers="uploadHeaders"
                list-type="image-card"
                v-model:file-list="fileList"
                @remove="handleRemove"
                @change="handleUpload"
            >
            </n-upload>
            <div class="easy-view-icon" @click="openUploadDialog(0)" v-if="fileList.length<2">
              <n-icon size="30" color="#58968B">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 32 32">
                  <path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" fill="currentColor"></path>
                </svg>
              </n-icon>
            </div>
          </n-flex>
          <div class="easy-view-text">点击 营业执照法人正反面</div>
          <div class="easy-view-msg">您最多可以附加2个大小为25 MB的文件。
          </div>
        </div>

        <!--                <div class="easy-view">-->
        <!--                    <div class="easy-view-title">对公账号认证</div>-->
        <!--                    <n-upload :show-file-list="false" :trigger-style="{cursor:'pointer'}">-->
        <!--                    <div class="easy-view-icon">-->
        <!--                        <n-icon size="30" color="#58968B">-->
        <!--                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"-->
        <!--                                viewBox="0 0 32 32">-->
        <!--                                <path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" fill="currentColor"></path>-->
        <!--                            </svg>-->
        <!--                        </n-icon>-->
        <!--                    </div>-->
        <!--                    </n-upload>-->
        <!--                    <div class="easy-view-text">点击 上传项目文件</div>-->
        <!--                    <div class="easy-view-msg">您最多可以附加10个大小为25 MB的文件。包括工作样本或其他文件来支持你的申请。-->
        <!--                    </div>-->
        <!--                </div>-->

        <div class="easy-view">
          <div class="easy-view-title">上传营业执照</div>
          <n-flex style="align-items: center;">
            <n-upload
                ref="uploadRef1"
                v-show="fileList1.length>0"
                :show-trigger="false"
                accept="image/*"
                :action="uploadUrl"
                :on-finish="(file, event, fileList1)=>{handleUploadFinish(file, event, fileList1,1)}"
                :headers="uploadHeaders"
                list-type="image-card"
                v-model:file-list="fileList1"
                @remove="handleRemove"
                @change="handleUpload1"
            >
            </n-upload>
            <div class="easy-view-icon" @click="openUploadDialog(1)" v-if="fileList1.length<2">
              <n-icon size="30" color="#58968B">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 32 32">
                  <path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" fill="currentColor"></path>
                </svg>
              </n-icon>
            </div>
          </n-flex>
          <div class="easy-view-text">点击 上传营业执照</div>
          <div class="easy-view-msg">您最多可以附加2个大小为25 MB的文件。
          </div>
        </div>

        <!--                <div class="easy-view">-->
        <!--                    <div class="easy-view-title">企业邮箱认证</div>-->
        <!--                    <n-upload :show-file-list="false" :trigger-style="{cursor:'pointer'}">-->
        <!--                    <div class="easy-view-icon">-->
        <!--                        <n-icon size="30" color="#58968B">-->
        <!--                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"-->
        <!--                                viewBox="0 0 32 32">-->
        <!--                                <path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" fill="currentColor"></path>-->
        <!--                            </svg>-->
        <!--                        </n-icon>-->
        <!--                    </div>-->
        <!--                    </n-upload>-->
        <!--                    <div class="easy-view-text">点击 上传项目文件</div>-->
        <!--                    <div class="easy-view-msg">您最多可以附加10个大小为25 MB的文件。包括工作样本或其他文件来支持你的申请。-->
        <!--                    </div>-->
        <!--                </div>-->
      </div>

      <div class="user-contact-container" id="city2">
        <n-flex align="center" justify="space-between">
          <Text color="#333333" :size="24">公司联系方式</Text>
        </n-flex>
        <div class="contact-container-cell">
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              名字
            </Text>
            <Text :size="16" color="#808080">
              {{ contact.contactName }}
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              手机号码
            </Text>
            <Text :size="16" color="#808080">
              {{ contact.contactPhone }}
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              增值税号
            </Text>
            <Text :size="16" color="#808080">
              {{ contact.taxNumber }}
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              地址
            </Text>
            <Text :size="16" color="#808080">
              {{ contact.contactAddress }}
            </Text>
          </n-flex>
        </div>
      </div>
    </div>
  </div>
  <EditAvatar v-model:show="showEditAvatar" @success="success"/>
</template>

<style lang="scss" scoped>
::v-deep(.n-upload-file-list.n-upload-file-list--grid) {
  display: flex
}

::v-deep(.n-upload ) {
  display: flex;
  width: auto;
}

.contact-container {
  margin-top: 20px;
  display: flex;
  flex-shrink: 0;
  gap: 20px;

  .contact-slider {
    width: 179px;
    height: 215px;
    background: #FFFFFF;
    border-radius: 16px 16px 16px 16px;
    box-sizing: border-box;
    padding: 20px;
  }

  .contact-slider-item {
    font-size: 16px;
    color: #FFFFFF;
    cursor: pointer;
    padding: 16px 10px;
    margin-bottom: 10px;

    &:hover,
    &.active {
      background-color: $MainColor;
      border-radius: 8px;

      & div {
        color: #FFFFFF !important;
      }
    }
  }

  .contact-main {
    width: 100%;

    .withdrawal-methods-header {
      margin-top: 20px;
      width: 100%;
      height: 80px;
      background: #FFFFFF;
      border-radius: 16px;
      border: 1px solid #EDEDED;
      display: flex;
      align-items: center;
      padding: 0 40px;
      font-size: 28px;
      color: #333333;
    }

    .user-contact-container {
      background: #FFFFFF;
      border-radius: 16px;
      border: 1px solid #EDEDED;
      margin-top: 20px;
      padding: 40px;
      box-sizing: border-box;
    }
  }

  .contact-container-cell {
    background-color: #f8f8f8;
    margin-top: 40px;
    border-radius: 16px;
    padding: 20px;
    box-sizing: border-box;
  }

  .contact-container-item {
    padding: 10px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #EDEDED;

    &:last-child {
      border: none
    }
  }

  :deep(.table.n-data-table .n-data-table-th .n-data-table-th__title-wrapper .n-data-table-th__title) {
    font-size: 14px;
  }

  :deep(.table.n-data-table .n-data-table-td) {
    font-size: 14px;
  }

  :deep(.table .n-button .n-button__content) {
    font-size: 14px;
  }

  .easy-view {
    background: #FFFFFF;
    border-radius: 16px 16px 16px 16px;
    border: 1px solid #EDEDED;
    width: 100%;
    padding: 20px;
    margin: 20px 0;

    .easy-view-title {
      font-size: 18px;
      color: #333333;
      padding: 5px 0;
    }

    .easy-view-icon {
      cursor: pointer;
      width: 80px;
      height: 80px;
      border-radius: 0px 0px 0px 0px;
      border: 1px dashed #58968B;
      margin: 20px 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .easy-view-text {
      font-size: 14px;
      color: #333333;
      font-weight: 500;
    }

    .easy-view-msg {
      font-weight: 500;
      font-size: 12px;
      color: #808080;
      padding: 10px 0;
    }
  }
}
</style>
