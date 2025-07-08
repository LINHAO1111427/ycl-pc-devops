<script setup lang="ts">
import { RenderIcon, Text } from '@/components'
import { CreateOutline, CloudUploadOutline, TrashOutline, SaveOutline } from '@vicons/ionicons5'
import { ref, onMounted } from 'vue'
import { useMessage, UploadFileInfo, UploadInst } from 'naive-ui'
import EditPersonalInfo from './component/EditPersonalInfo.vue'
import { 
  getPersonalInfo, 
  deletePersonalInfo, 
  getIdCardInfo, 
  saveIdCardInfo,
  uploadCompanyImages 
} from '@/api/base'

const message = useMessage()
const current = ref('account')

// 个人信息数据
const personalInfo = ref({
  personalName: '',
  personalIdCard: ''
})

// 身份证照片数据
const idCardInfo = ref({
  personalIdCardFrontUrl: '',
  personalIdCardBackUrl: ''
})

// 上传相关配置
const token = localStorage.getItem('token')
const uploadUrl = `${import.meta.env.VITE_API_BASE_URL}/app-api/common/addOrUpdate`
const uploadHeaders = {
  Authorization: `Bearer ${token}`
}

// 上传组件引用和文件列表
const frontUploadRef = ref<UploadInst>()
const backUploadRef = ref<UploadInst>()
const frontFileList = ref<any[]>([])
const backFileList = ref<any[]>([])
const isUploading = ref(false)
const isSaving = ref(false)

// 弹窗状态
const showEditPersonalInfo = ref(false)
const isEditMode = ref(false) // 是否为编辑模式

const slider = [
  {
    title: '个人信息',
    to: 'account',
  },
  {
    title: '身份证验证',
    to: 'city',
  },
]

function onMouseenter(key: string) {
  current.value = key
  window.location.hash = key
}

// ===== 个人信息管理 =====
// 加载个人信息
const loadPersonalInfo = async () => {
  try {
    const res = await getPersonalInfo()
    if (res.code === 0 && res.data) {
      personalInfo.value = res.data
    }
  } catch (error) {
    console.error('获取个人信息失败:', error)
  }
}

// 编辑个人信息
const handleEditPersonalInfo = () => {
  isEditMode.value = true
  showEditPersonalInfo.value = true
}

// 添加个人信息
const handleAddPersonalInfo = () => {
  isEditMode.value = false
  showEditPersonalInfo.value = true
}

// 删除个人信息
const handleDeletePersonalInfo = async () => {
  try {
    const res = await deletePersonalInfo()
    if (res.code === 0) {
      message.success('个人信息删除成功')
      personalInfo.value = {
        personalName: '',
        personalIdCard: ''
      }
    } else {
      message.error(res.msg || '删除失败')
    }
  } catch (error) {
    message.error('删除失败，请重试')
    console.error('删除个人信息失败:', error)
  }
}

// 个人信息保存成功回调
const handlePersonalInfoSaved = (data: any) => {
  personalInfo.value = data
  loadPersonalInfo() // 重新加载数据
}

// ===== 身份证验证管理 =====
// 加载身份证信息
const loadIdCardInfo = async () => {
  try {
    const res = await getIdCardInfo()
    if (res.code === 0 && res.data) {
      idCardInfo.value = res.data
      
      // 初始化文件列表
      if (idCardInfo.value.personalIdCardFrontUrl) {
        frontFileList.value = [{
          id: 'front_' + Date.now(),
          name: '身份证正面',
          status: 'finished',
          url: idCardInfo.value.personalIdCardFrontUrl
        }]
      }
      
      if (idCardInfo.value.personalIdCardBackUrl) {
        backFileList.value = [{
          id: 'back_' + Date.now(),
          name: '身份证反面', 
          status: 'finished',
          url: idCardInfo.value.personalIdCardBackUrl
        }]
      }
    }
  } catch (error) {
    console.error('获取身份证信息失败:', error)
  }
}

// 保存身份证信息
const saveIdCardData = async () => {
  if (!idCardInfo.value.personalIdCardFrontUrl || !idCardInfo.value.personalIdCardBackUrl) {
    message.warning('请上传完整的身份证正反面照片')
    return
  }
  
  try {
    isSaving.value = true
    const res = await saveIdCardInfo(idCardInfo.value)
    if (res.code === 0) {
      message.success('身份证信息保存成功')
    } else {
      message.error(res.msg || '保存失败')
    }
  } catch (error) {
    message.error('保存失败，请重试')
    console.error('保存身份证信息失败:', error)
  } finally {
    isSaving.value = false
  }
}

// ===== 图片上传处理 =====
// 上传成功处理函数
const handleFrontUploadFinish = ({ file, event, fileList }: any) => {
  try {
    const response = JSON.parse(event?.target?.response || '{}')
    if (response.code === 0 || response.success) {
      const imageUrl = response.data?.url || response.data?.path || response.url
      if (imageUrl) {
        idCardInfo.value.personalIdCardFrontUrl = imageUrl
        message.success('身份证正面上传成功')
      } else {
        message.error('上传成功但未获取到图片地址')
      }
    } else {
      message.error(response.msg || response.message || '上传失败')
    }
  } catch (error) {
    console.error('解析上传响应失败:', error)
    message.error('上传失败')
  }
}

const handleBackUploadFinish = ({ file, event, fileList }: any) => {
  try {
    const response = JSON.parse(event?.target?.response || '{}')
    if (response.code === 0 || response.success) {
      const imageUrl = response.data?.url || response.data?.path || response.url
      if (imageUrl) {
        idCardInfo.value.personalIdCardBackUrl = imageUrl
        message.success('身份证反面上传成功')
      } else {
        message.error('上传成功但未获取到图片地址')
      }
    } else {
      message.error(response.msg || response.message || '上传失败')
    }
  } catch (error) {
    console.error('解析上传响应失败:', error)
    message.error('上传失败')
  }
}

// 删除图片
const removeFrontImage = () => {
  idCardInfo.value.personalIdCardFrontUrl = ''
  frontFileList.value = []
  message.success('身份证正面已删除')
}

const removeBackImage = () => {
  idCardInfo.value.personalIdCardBackUrl = ''
  backFileList.value = []
  message.success('身份证反面已删除')
}

// 上传前检查
const beforeUpload = (data: { file: UploadFileInfo }) => {
  const file = data.file.file
  if (!file) return false
  
  // 检查文件类型
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']
  if (!allowedTypes.includes(file.type)) {
    message.error('只支持上传 JPG、JPEG、PNG 格式的图片')
    return false
  }
  
  // 检查文件大小（5MB）
  if (file.size > 5 * 1024 * 1024) {
    message.error('图片大小不能超过 5MB')
    return false
  }
  
  return true
}

// 打开上传对话框
const openFrontUpload = () => {
  if (frontFileList.value.length >= 1) {
    message.warning('最多只能上传1张身份证正面照片')
    return
  }
  frontUploadRef.value?.openOpenFileDialog()
}

const openBackUpload = () => {
  if (backFileList.value.length >= 1) {
    message.warning('最多只能上传1张身份证反面照片')
    return
  }
  backUploadRef.value?.openOpenFileDialog()
}

// 页面初始化
onMounted(() => {
  loadPersonalInfo()
  loadIdCardInfo()
})
</script>

<template>
  <div class="identity-container">
    <div class="contact-slider">
      <div
        v-for="item in slider"
        class="contact-slider-item"
        :class="current === item.to && 'active'"
        @click="onMouseenter(item.to)"
      >
        <Text color="#000" :size="16">
          {{ item.title }}
        </Text>
      </div>
    </div>
    <div class="contact-main">
      <div class="withdrawal-methods-header">身份认证</div>
      
      <!-- 个人信息部分 -->
      <div class="user-contact-container" id="account">
        <n-flex align="center" justify="space-between">
          <Text color="#333333" :size="24">个人信息</Text>
          <n-flex :size="8">
            <n-icon 
              v-if="personalInfo.personalName || personalInfo.personalIdCard" 
              :size="22" 
              class="cursor-pointer-style main-color-size" 
              @click="handleEditPersonalInfo"
            >
              <CreateOutline />
            </n-icon>
            <n-button 
              v-if="!personalInfo.personalName && !personalInfo.personalIdCard"
              type="primary" 
              size="small" 
              @click="handleAddPersonalInfo"
            >
              添加个人信息
            </n-button>
            <n-button 
              v-if="personalInfo.personalName || personalInfo.personalIdCard"
              type="error" 
              size="small" 
              @click="handleDeletePersonalInfo"
            >
              删除信息
            </n-button>
          </n-flex>
        </n-flex>
        
        <div class="contact-container-cell">
          <!-- 个人信息展示 -->
          <div v-if="personalInfo.personalName || personalInfo.personalIdCard">
            <n-flex justify="space-between" align="center" class="contact-container-item">
              <Text :size="16" color="#808080">姓名</Text>
              <Text :size="16" color="#333333">
                {{ personalInfo.personalName || '暂无数据' }}
              </Text>
            </n-flex>
            <n-flex justify="space-between" align="center" class="contact-container-item">
              <Text :size="16" color="#808080">身份证</Text>
              <Text :size="16" color="#333333">
                {{ personalInfo.personalIdCard || '暂无数据' }}
              </Text>
            </n-flex>
          </div>
          
          <!-- 空状态 -->
          <div v-else class="empty-state">
            <n-empty description="暂无个人信息">
              <template #extra>
                <n-button type="primary" @click="handleAddPersonalInfo">
                  添加个人信息
                </n-button>
              </template>
            </n-empty>
          </div>
        </div>
      </div>
      
      <!-- 身份证验证部分 -->
      <div class="user-contact-container" id="city">
        <n-flex align="center" justify="space-between">
          <Text color="#333333" :size="24">身份证验证</Text>
        </n-flex>
        
        <!-- 身份证正面上传 -->
        <div class="easy-view">
          <div class="easy-view-title">身份证正面</div>
          <n-flex style="align-items: center;">
            <n-upload
              ref="frontUploadRef"
              v-show="frontFileList.length > 0"
              :show-trigger="false"
              accept="image/*"
              :action="uploadUrl"
              :headers="uploadHeaders"
              list-type="image-card"
              v-model:file-list="frontFileList"
              :on-finish="handleFrontUploadFinish"
              :on-before-upload="beforeUpload"
              @remove="removeFrontImage"
              :max="1"
            />
            <div 
              class="easy-view-icon" 
              @click="openFrontUpload" 
              v-if="frontFileList.length < 1"
            >
              <n-icon size="30" color="#58968B">
                <CloudUploadOutline />
              </n-icon>
            </div>
          </n-flex>
          <div class="easy-view-text">点击 身份证正面</div>
          <div class="easy-view-msg">您最多可以附加1个大小为5 MB的文件。</div>
        </div>

        <!-- 身份证反面上传 -->
        <div class="easy-view">
          <div class="easy-view-title">身份证反面</div>
          <n-flex style="align-items: center;">
            <n-upload
              ref="backUploadRef"
              v-show="backFileList.length > 0"
              :show-trigger="false"
              accept="image/*"
              :action="uploadUrl"
              :headers="uploadHeaders"
              list-type="image-card"
              v-model:file-list="backFileList"
              :on-finish="handleBackUploadFinish"
              :on-before-upload="beforeUpload"
              @remove="removeBackImage"
              :max="1"
            />
            <div 
              class="easy-view-icon" 
              @click="openBackUpload" 
              v-if="backFileList.length < 1"
            >
              <n-icon size="30" color="#58968B">
                <CloudUploadOutline />
              </n-icon>
            </div>
          </n-flex>
          <div class="easy-view-text">点击 身份证反面</div>
          <div class="easy-view-msg">您最多可以附加1个大小为5 MB的文件。</div>
        </div>
        
        <!-- 保存按钮 -->
        <n-flex justify="center" style="margin-top: 30px;">
          <n-button 
            type="primary" 
            size="large"
            :loading="isSaving"
            @click="saveIdCardData"
            :disabled="!idCardInfo.personalIdCardFrontUrl || !idCardInfo.personalIdCardBackUrl"
          >
            <template #icon>
              <n-icon>
                <SaveOutline />
              </n-icon>
            </template>
            保存身份证信息
          </n-button>
        </n-flex>
        
        <!-- 上传提示 -->
        <n-alert 
          v-if="!idCardInfo.personalIdCardFrontUrl || !idCardInfo.personalIdCardBackUrl"
          type="info" 
          style="margin-top: 20px;"
        >
          请上传身份证正反面照片，支持JPG、JPEG、PNG格式，文件大小不超过5MB
        </n-alert>
      </div>
    </div>
  </div>
  
  <!-- 编辑个人信息弹窗 -->
  <EditPersonalInfo 
    v-model:show="showEditPersonalInfo"
    :personal-data="personalInfo"
    :is-edit="isEditMode"
    @on-saved="handlePersonalInfoSaved"
  />
</template>

<style scoped lang="scss">
.identity-container {
  margin-top: 20px;
  display: flex;
  flex-shrink: 0;
  gap: 20px;
  padding-bottom: 70px;

  .contact-slider {
    width: 179px;
    height: 160px;
    background: #ffffff;
    border-radius: 16px 16px 16px 16px;
    box-sizing: border-box;
    padding: 20px;
  }

  .contact-slider-item {
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    padding: 16px 10px;
    margin-bottom: 10px;

    &:hover,
    &.active {
      background-color: $MainColor;
      border-radius: 8px;

      & div {
        color: #ffffff !important;
      }
    }
  }

  .contact-main {
    width: 100%;

    .withdrawal-methods-header {
      margin-top: 20px;
      width: 100%;
      height: 80px;
      background: #ffffff;
      border-radius: 16px;
      border: 1px solid #ededed;
      display: flex;
      align-items: center;
      padding: 0 40px;
      font-size: 28px;
      color: #333333;
    }

    .user-contact-container {
      background: #ffffff;
      border-radius: 16px;
      border: 1px solid #ededed;
      margin-top: 20px;
      padding: 40px;
      box-sizing: border-box;
    }
  }

  .contact-container-item {
    padding: 10px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #ededed;

    &:last-child {
      border: none;
    }
  }

  .contact-container-cell {
    background-color: #f8f8f8;
    margin-top: 40px;
    border-radius: 16px;
    padding: 20px;
    box-sizing: border-box;
  }

  .empty-state {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 120px;
  }

  // 营业执照样式，适用于身份证上传
  .easy-view {
    margin-bottom: 30px;
    
    .easy-view-title {
      font-size: 18px;
      font-weight: 600;
      color: #333333;
      margin-bottom: 15px;
    }
    
    .easy-view-icon {
      width: 80px;
      height: 80px;
      border: 2px dashed #d9d9d9;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s;
      
      &:hover {
        border-color: #58968B;
        background-color: #f0f9f7;
      }
    }
    
    .easy-view-text {
      font-size: 14px;
      color: #666666;
      margin-top: 8px;
    }
    
    .easy-view-msg {
      font-size: 12px;
      color: #999999;
      margin-top: 4px;
    }
  }
}

// 深度选择器样式
:deep(.n-upload-file-list .n-upload-file.n-upload-file--image-card-type) {
  width: 120px;
  height: 120px;
}

:deep(.n-upload-trigger.n-upload-trigger--image-card) {
  width: 120px;
  height: 120px;
}
</style>
