<script setup lang="ts">
import {Text, Empty} from '@/components'
import {ref, h, onMounted} from 'vue'
import {CreateOutline, AddCircleOutline, SaveOutline} from '@vicons/ionicons5'
import {NButton, NSpace} from 'naive-ui'
import {RouterLink} from 'vue-router'
import EditAvatar from './EditAvatar.vue'
import {useStore} from 'vuex'
import {computed} from 'vue'
import {useUser} from "@/api/useUser.ts";
import {getEmployerCompanyInfo, updateEmployerCompanyInfo, updateCompanyContact, uploadCompanyImages} from '@/api/base'
import {useMessage} from 'naive-ui'

const store = useStore()
const message = useMessage()
const avatar = ref(localStorage.getItem('avatar') || '')
const userData = ref(JSON.parse(localStorage.getItem('UserData') || JSON.stringify({
  userType: 0
})))
const userInfo = ref<any>({})

// 编辑状态管理
const isEditingCompanyInfo = ref(false)
const isEditingCompanyContact = ref(false)
const isSaving = ref(false)

// 公司信息表单数据
const companyInfo = ref({
  companyName: '',
  companyAddress: '',
  website: '',
  industry: '',
  employeeCount: '',
  otherInfo: '',
  legalPerson: '',
  creditNo: ''
})

// 公司联系方式表单数据
const companyContact = ref({
  contactName: '',
  contactPhone: '',
  taxNumber: '',
  contactAddress: ''
})

// 图片上传数据
const companyImages = ref({
  businessLicensePersonImages: [], // 营业执照法人正反面
  businessLicenseImages: []       // 营业执照
})

// 原始数据备份，用于取消编辑时恢复
const originalCompanyInfo = ref({
  companyName: '',
  companyAddress: '',
  website: '',
  industry: '',
  employeeCount: '',
  otherInfo: '',
  legalPerson: '',
  creditNo: ''
})
const originalCompanyContact = ref({
  contactName: '',
  contactPhone: '',
  taxNumber: '',
  contactAddress: ''
})


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
const { getUser} = useUser()
function onMouseenter(key: string) {
  current.value = key
  window.location.hash = key
}
const success = () => {
}
const showEditAvatar = ref(false)

// 开始编辑公司信息
const startEditCompanyInfo = () => {
  isEditingCompanyInfo.value = true
  // 备份原始数据
  originalCompanyInfo.value = { ...companyInfo.value }
}

// 保存公司信息
const saveCompanyInfo = async () => {
  try {
    // 验证统一社会信用代码不能为空
    if (!companyInfo.value.creditNo || companyInfo.value.creditNo.trim() === '') {
      message.error('统一社会信用代码不能为空')
      return
    }
    
    isSaving.value = true
    const res = await updateEmployerCompanyInfo(companyInfo.value)
    if (res.code === 0) {
      message.success('公司信息保存成功')
      isEditingCompanyInfo.value = false
      // 更新原始数据
      originalCompanyInfo.value = { ...companyInfo.value }
    } else {
      message.error(res.msg || '保存失败')
    }
  } catch (error) {
    message.error('保存失败，请重试')
  } finally {
    isSaving.value = false
  }
}

// 开始编辑公司联系方式
const startEditCompanyContact = () => {
  isEditingCompanyContact.value = true
  // 备份原始数据
  originalCompanyContact.value = { ...companyContact.value }
}

// 保存公司联系方式
const saveCompanyContact = async () => {
  try {
    isSaving.value = true
    const res = await updateCompanyContact(companyContact.value)
    if (res.code === 0) {
      message.success('公司联系方式保存成功')
      isEditingCompanyContact.value = false
      // 更新原始数据
      originalCompanyContact.value = { ...companyContact.value }
    } else {
      message.error(res.msg || '保存失败')
    }
  } catch (error) {
    message.error('保存失败，请重试')
  } finally {
    isSaving.value = false
  }
}

// 取消编辑
const cancelEdit = () => {
  isEditingCompanyInfo.value = false
  isEditingCompanyContact.value = false
  // 恢复原始数据
  companyInfo.value = { ...originalCompanyInfo.value }
  companyContact.value = { ...originalCompanyContact.value }
}

// 图片上传处理 - 上传到阿里云
const handleImageUpload = async (file: any, type: string) => {
  try {
    // 验证文件类型
    if (!file.type.startsWith('image/')) {
      message.error('只能上传图片文件')
      return
    }
    
    // 验证文件大小（25MB）
    if (file.size > 25 * 1024 * 1024) {
      message.error('文件大小不能超过25MB')
      return
    }
    
    const formData = new FormData()
    formData.append('file', file)
    formData.append('type', type)
    formData.append('module', 'company') // 模块标识
    
    const res = await uploadCompanyImages(formData)
    
    // 处理阿里云返回的数据
    if (res.code === 0 || res.success) {
      const imageUrl = res.data?.url || res.data?.path || res.url
      
      if (imageUrl) {
        // 根据类型更新对应的图片数组
        if (type === 'businessLicensePerson') {
          companyImages.value.businessLicensePersonImages.push(imageUrl)
        } else if (type === 'businessLicense') {
          companyImages.value.businessLicenseImages.push(imageUrl)
        }
        message.success('图片上传成功')
      } else {
        message.error('上传成功但未获取到图片地址')
      }
    } else {
      message.error(res.msg || res.message || '上传失败')
    }
  } catch (error) {
    console.error('图片上传错误:', error)
    message.error('上传失败，请重试')
  }
}

// 删除图片
const removeImage = (index: number, type: string) => {
  if (type === 'businessLicensePerson') {
    companyImages.value.businessLicensePersonImages.splice(index, 1)
  } else if (type === 'businessLicense') {
    companyImages.value.businessLicenseImages.splice(index, 1)
  }
  message.success('图片已删除')
}

// 检查是否可以上传更多图片
const canUploadMore = (type) => {
  if (type === 'businessLicensePerson') {
    return companyImages.value.businessLicensePersonImages.length < 2
  } else if (type === 'businessLicense') {
    return companyImages.value.businessLicenseImages.length < 2
  }
  return true
}

// 处理上传前的检查
const beforeUpload = (file, type) => {
  // 检查数量限制
  if (!canUploadMore(type)) {
    message.error('最多只能上传2张图片')
    return false
  }
  
  // 检查文件类型
  if (!file.type.startsWith('image/')) {
    message.error('只能上传图片文件')
    return false
  }
  
  // 检查文件大小
  if (file.size > 25 * 1024 * 1024) {
    message.error('文件大小不能超过25MB')
    return false
  }
  
  return true
}

// 初始化公司信息数据
const initCompanyInfo = (data: any) => {
  companyInfo.value = {
    companyName: data?.companyName || '',
    companyAddress: data?.companyAddress || '',
    website: data?.website || '',
    industry: data?.industry || '',
    employeeCount: data?.employeeCount || '',
    otherInfo: data?.otherInfo || '',
    legalPerson: data?.legalPerson || '',
    creditNo: data?.creditNo || ''
  }
  originalCompanyInfo.value = { ...companyInfo.value }
}

// 初始化公司联系方式数据
const initCompanyContact = (data: any) => {
  companyContact.value = {
    contactName: data?.contactName || '',
    contactPhone: data?.contactPhone || '',
    taxNumber: data?.taxNumber || '',
    contactAddress: data?.contactAddress || ''
  }
  originalCompanyContact.value = { ...companyContact.value }
}

// 初始化图片数据
const initCompanyImages = (data: any) => {
  companyImages.value = {
    businessLicensePersonImages: data?.businessLicensePersonImages || [],
    businessLicenseImages: data?.businessLicenseImages || []
  }
}

onMounted(async () => {
  try {
    const res = await getUser()
    userInfo.value = res.data || {}
    
    // 调用查询接口获取公司信息
    const companyRes = await getEmployerCompanyInfo()
    
    if (companyRes.code === 0 && companyRes.data) {
      // 初始化所有数据
      initCompanyInfo(companyRes.data)
      initCompanyContact(companyRes.data)
      initCompanyImages(companyRes.data)
    } else {
      // 使用空数据初始化
      initCompanyInfo({})
      initCompanyContact({})
      initCompanyImages({})
    }
  } catch (error) {
    console.error('初始化数据失败:', error)
    message.error('加载数据失败，请刷新页面重试')
  }
})
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
              {{ userInfo?.userId || '' }}
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              名字
            </Text>
            <Text :size="16" color="#808080">
              {{ userInfo?.name || '' }}
            </Text>
          </n-flex>

          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              手机号码
            </Text>
            <Text :size="16" color="#808080">
              {{ userInfo?.mobile || '' }}
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              邮箱
            </Text>
            <Text :size="16" color="#808080">
              lishihai@sina.com
            </Text>
          </n-flex>
        </div>
      </div>
      <div class="user-contact-container" id="city">
        <n-flex align="center" justify="space-between">
          <Text color="#333333" :size="24">公司详情</Text>
          <n-flex :size="12">
            <n-button 
              v-if="!isEditingCompanyInfo" 
              type="primary" 
              size="small" 
              @click="startEditCompanyInfo"
              style="background: #58968B; border-color: #58968B;"
            >
              <template #icon>
                <n-icon><CreateOutline /></n-icon>
              </template>
              修改
            </n-button>
            <template v-else>
              <n-button 
                type="primary" 
                size="small" 
                @click="saveCompanyInfo"
                :loading="isSaving"
                style="background: #58968B; border-color: #58968B;"
              >
                <template #icon>
                  <n-icon><SaveOutline /></n-icon>
                </template>
                保存
              </n-button>
              <n-button 
                size="small" 
                @click="cancelEdit"
                :disabled="isSaving"
              >
                取消
              </n-button>
            </template>
          </n-flex>
        </n-flex>
        <div class="contact-container-cell">
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              公司名称
            </Text>
            <n-input 
              v-if="isEditingCompanyInfo"
              v-model:value="companyInfo.companyName"
              size="small"
              style="width: 200px;"
              placeholder="请输入公司名称"
            />
            <Text v-else :size="16" color="#808080">
              {{ companyInfo.companyName || '暂无数据' }}
            </Text>
          </n-flex>

          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              公司地址
            </Text>
            <n-input 
              v-if="isEditingCompanyInfo"
              v-model:value="companyInfo.companyAddress"
              size="small"
              style="width: 200px;"
              placeholder="请输入公司地址"
            />
            <Text v-else :size="16" color="#808080">
              {{ companyInfo.companyAddress || '暂无数据' }}
            </Text>
          </n-flex>

          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              网站
            </Text>
            <n-input 
              v-if="isEditingCompanyInfo"
              v-model:value="companyInfo.website"
              size="small"
              style="width: 200px;"
              placeholder="请输入网站地址"
            />
            <Text v-else :size="16" color="#808080">
              {{ companyInfo.website || '暂无数据' }}
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              您的行业
            </Text>
            <n-input 
              v-if="isEditingCompanyInfo"
              v-model:value="companyInfo.industry"
              size="small"
              style="width: 200px;"
              placeholder="请输入行业"
            />
            <Text v-else :size="16" color="#808080" style="display: flex;align-items:center;">
              {{ companyInfo.industry || '暂无数据' }}
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              贵公司有多少人
            </Text>
            <n-input 
              v-if="isEditingCompanyInfo"
              v-model:value="companyInfo.employeeCount"
              size="small"
              style="width: 200px;"
              placeholder="请输入公司人数"
            />
            <Text v-else :size="16" color="#808080" style="display: flex;align-items:center;">
              {{ companyInfo.employeeCount || '暂无数据' }}
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              描述
            </Text>
            <n-input 
              v-if="isEditingCompanyInfo"
              v-model:value="companyInfo.otherInfo"
              type="textarea"
              size="small"
              style="width: 200px;"
              placeholder="请输入公司描述"
              :rows="2"
            />
            <Text v-else :size="16" color="#808080">
              {{ companyInfo.otherInfo || '暂无数据' }}
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              法人信息
            </Text>
            <n-input 
              v-if="isEditingCompanyInfo"
              v-model:value="companyInfo.legalPerson"
              size="small"
              style="width: 200px;"
              placeholder="请输入法人信息"
            />
            <Text v-else :size="16" color="#808080">
              {{ companyInfo.legalPerson || '暂无数据' }}
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              统一社会信用代码 <span style="color: #FF4757;">*</span>
            </Text>
            <n-input 
              v-if="isEditingCompanyInfo"
              v-model:value="companyInfo.creditNo"
              size="small"
              style="width: 200px;"
              placeholder="请输入统一社会信用代码"
              :status="!companyInfo.creditNo && isEditingCompanyInfo ? 'error' : undefined"
            />
            <Text v-else :size="16" color="#808080">
              {{ companyInfo.creditNo || '暂无数据' }}
            </Text>
          </n-flex>


        </div>
        <div class="easy-view">
          <div class="easy-view-title">营业执照法人</div>
          <n-upload 
            :show-file-list="false" 
            :trigger-style="{cursor:'pointer'}"
            :custom-request="(options) => handleImageUpload(options.file, 'businessLicensePerson')"
            :before-upload="(file) => beforeUpload(file, 'businessLicensePerson')"
            accept="image/*"
            :max="2"
            :disabled="!canUploadMore('businessLicensePerson')"
          >
            <div class="easy-view-icon" :class="{ 'upload-disabled': !canUploadMore('businessLicensePerson') }">
              <n-icon size="30" :color="canUploadMore('businessLicensePerson') ? '#58968B' : '#CCCCCC'">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 32 32">
                  <path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" fill="currentColor"></path>
                </svg>
              </n-icon>
            </div>
          </n-upload>
          <div class="easy-view-text">
            {{ canUploadMore('businessLicensePerson') ? '点击 营业执照法人正反面' : '已上传满2张图片' }}
          </div>
          <div class="easy-view-msg">
            您最多可以附加2个大小为25 MB的文件。
            (已上传 {{ companyImages.businessLicensePersonImages.length }}/2)
          </div>
          <!-- 已上传的图片展示 -->
          <div v-if="companyImages.businessLicensePersonImages.length > 0" class="uploaded-images">
            <div v-for="(image, index) in companyImages.businessLicensePersonImages" :key="index" class="image-item">
              <img :src="image" alt="营业执照法人" style="width: 100px; height: 100px; object-fit: cover;" />
              <n-button 
                size="small" 
                type="error" 
                @click="removeImage(index, 'businessLicensePerson')"
                style="margin-left: 10px;"
              >
                删除
              </n-button>
            </div>
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
          <n-upload 
            :show-file-list="false" 
            :trigger-style="{cursor:'pointer'}"
            :custom-request="(options) => handleImageUpload(options.file, 'businessLicense')"
            :before-upload="(file) => beforeUpload(file, 'businessLicense')"
            accept="image/*"
            :max="2"
            :disabled="!canUploadMore('businessLicense')"
          >
            <div class="easy-view-icon" :class="{ 'upload-disabled': !canUploadMore('businessLicense') }">
              <n-icon size="30" :color="canUploadMore('businessLicense') ? '#58968B' : '#CCCCCC'">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 32 32">
                  <path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" fill="currentColor"></path>
                </svg>
              </n-icon>
            </div>
          </n-upload>
          <div class="easy-view-text">
            {{ canUploadMore('businessLicense') ? '点击 上传营业执照' : '已上传满2张图片' }}
          </div>
          <div class="easy-view-msg">
            您最多可以附加2个大小为25 MB的文件。
            (已上传 {{ companyImages.businessLicenseImages.length }}/2)
          </div>
          <!-- 已上传的图片展示 -->
          <div v-if="companyImages.businessLicenseImages.length > 0" class="uploaded-images">
            <div v-for="(image, index) in companyImages.businessLicenseImages" :key="index" class="image-item">
              <img :src="image" alt="营业执照" style="width: 100px; height: 100px; object-fit: cover;" />
              <n-button 
                size="small" 
                type="error" 
                @click="removeImage(index, 'businessLicense')"
                style="margin-left: 10px;"
              >
                删除
              </n-button>
            </div>
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
          <n-flex :size="12">
            <n-button 
              v-if="!isEditingCompanyContact" 
              type="primary" 
              size="small" 
              @click="startEditCompanyContact"
              style="background: #58968B; border-color: #58968B;"
            >
              <template #icon>
                <n-icon><CreateOutline /></n-icon>
              </template>
              修改
            </n-button>
            <template v-else>
              <n-button 
                type="primary" 
                size="small" 
                @click="saveCompanyContact"
                :loading="isSaving"
                style="background: #58968B; border-color: #58968B;"
              >
                <template #icon>
                  <n-icon><SaveOutline /></n-icon>
                </template>
                保存
              </n-button>
              <n-button 
                size="small" 
                @click="cancelEdit"
                :disabled="isSaving"
              >
                取消
              </n-button>
            </template>
          </n-flex>
        </n-flex>
        <div class="contact-container-cell">
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              联系人姓名
            </Text>
            <n-input 
              v-if="isEditingCompanyContact"
              v-model:value="companyContact.contactName"
              size="small"
              style="width: 200px;"
              placeholder="请输入联系人姓名"
            />
            <Text v-else :size="16" color="#808080">
              {{ companyContact.contactName || '暂无数据' }}
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              联系电话
            </Text>
            <n-input 
              v-if="isEditingCompanyContact"
              v-model:value="companyContact.contactPhone"
              size="small"
              style="width: 200px;"
              placeholder="请输入联系电话"
            />
            <Text v-else :size="16" color="#808080">
              {{ companyContact.contactPhone || '暂无数据' }}
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              税务登记号
            </Text>
            <n-input 
              v-if="isEditingCompanyContact"
              v-model:value="companyContact.taxNumber"
              size="small"
              style="width: 200px;"
              placeholder="请输入税务登记号"
            />
            <Text v-else :size="16" color="#808080">
              {{ companyContact.taxNumber || '暂无数据' }}
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              联系地址
            </Text>
            <n-input 
              v-if="isEditingCompanyContact"
              v-model:value="companyContact.contactAddress"
              size="small"
              style="width: 200px;"
              placeholder="请输入联系地址"
            />
            <Text v-else :size="16" color="#808080">
              {{ companyContact.contactAddress || '暂无数据' }}
            </Text>
          </n-flex>
        </div>
      </div>
    </div>
  </div>
  <EditAvatar v-model:show="showEditAvatar" @success="success"/>
</template>

<style lang="scss" scoped>
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

  .uploaded-images {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    .image-item {
      display: flex;
      align-items: center;
      padding: 10px;
      border: 1px solid #EDEDED;
      border-radius: 8px;
      background: #f9f9f9;
    }
  }

  .upload-disabled {
    opacity: 0.5;
    cursor: not-allowed !important;
  }
}
</style>
