<script setup lang="ts">
import { RenderIcon, Text } from '@/components'
import { CreateOutline, Add, ChevronForward } from '@vicons/ionicons5'
import { ref, onMounted } from 'vue'
import { useMessage } from 'naive-ui'
import AddInvoice from './component/AddInvoice.vue'
import {
  savePersonalAddress,
  getPersonalAddress,
  getCompanyAddressList,
  createCompanyAddress,
  updateCompanyAddress,
  deleteCompanyAddress,
  setDefaultCompanyAddress
} from '@/api/base'

const message = useMessage()
const current = ref('account')

// 地址管理Tab状态 - true为个人地址，false为企业地址
const isActive = ref(true)

const tagOptions = ref(['翻译&本地化服务', '中文', '英语', '法语'])

const slider = [
  {
    title: '账户信息',
    to: 'account',
  },
  {
    title: '地址管理',
    to: 'city',
  },
]

// ===== 地址管理数据 =====
// 个人地址数据
const personalAddress = ref({
  personalName: '',
  personalArea: '',
  personalAddress: '',
  personalPhone: '',
  personalTaxNumber: '',
  personalBankName: '',
  personalBankAccount: '',
  personalEmail: ''
})

// 企业地址数据
const companyAddressList = ref<any[]>([])
const currentCompanyAddress = ref({
  id: null,
  addressName: '',
  companyName: '',
  companyArea: '',
  companyAddress: '',
  companyPhone: '',
  companyTaxNumber: '',
  companyBankName: '',
  companyBankAccount: '',
  companyEmail: '',
  isDefault: false
})

// 原始个人地址数据备份
const originalPersonalAddress = ref({
  personalName: '',
  personalArea: '',
  personalAddress: '',
  personalPhone: '',
  personalTaxNumber: '',
  personalBankName: '',
  personalBankAccount: '',
  personalEmail: ''
})

// 状态管理
const isEditingPersonalAddress = ref(false)
const showAddInvoice = ref(false)
const addInvoiceType = ref(1)
const isSaving = ref(false)

function onMouseenter(key: string) {
  current.value = key
  window.location.hash = key
}

function onClickClose(value) {
  tagOptions.value = tagOptions.value.filter(item => item !== value)
}

// ===== 个人地址管理函数 =====
// 开始编辑个人地址
const startEditPersonalAddress = () => {
  isEditingPersonalAddress.value = true
  originalPersonalAddress.value = {...personalAddress.value}
}

// 取消编辑个人地址
const cancelEditPersonalAddress = () => {
  isEditingPersonalAddress.value = false
  personalAddress.value = {...originalPersonalAddress.value}
}

// 保存个人地址
const savePersonalAddressData = async () => {
  try {
    isSaving.value = true
    const res = await savePersonalAddress(personalAddress.value)
    if (res.code === 0) {
      message.success('个人地址保存成功')
      isEditingPersonalAddress.value = false
      originalPersonalAddress.value = {...personalAddress.value}
    } else {
      message.error(res.msg || '保存失败')
    }
  } catch (error) {
    message.error('保存失败，请重试')
    console.error('保存个人地址失败:', error)
  } finally {
    isSaving.value = false
  }
}

// 加载个人地址
const loadPersonalAddress = async () => {
  try {
    const res = await getPersonalAddress()
    if (res.code === 0 && res.data) {
      personalAddress.value = {...res.data}
      originalPersonalAddress.value = {...res.data}
    }
  } catch (error) {
    console.error('加载个人地址失败:', error)
  }
}

// ===== 企业地址管理函数 =====
// 加载企业地址列表
const loadCompanyAddressList = async () => {
  try {
    const res = await getCompanyAddressList()
    if (res.code === 0 && res.data) {
      companyAddressList.value = res.data
    }
  } catch (error) {
    console.error('加载企业地址列表失败:', error)
  }
}

// 创建企业地址
const createCompanyAddressData = async (addressData: any) => {
  try {
    isSaving.value = true
    const res = await createCompanyAddress(addressData)
    if (res.code === 0) {
      message.success('企业地址创建成功')
      showAddInvoice.value = false
      await loadCompanyAddressList()
      resetCurrentCompanyAddress()
    } else {
      message.error(res.msg || '创建失败')
    }
  } catch (error) {
    message.error('创建失败，请重试')
    console.error('创建企业地址失败:', error)
  } finally {
    isSaving.value = false
  }
}

// 更新企业地址
const updateCompanyAddressData = async (addressData: any) => {
  try {
    isSaving.value = true
    const res = await updateCompanyAddress(addressData)
    if (res.code === 0) {
      message.success('企业地址更新成功')
      showAddInvoice.value = false
      await loadCompanyAddressList()
      resetCurrentCompanyAddress()
    } else {
      message.error(res.msg || '更新失败')
    }
  } catch (error) {
    message.error('更新失败，请重试')
    console.error('更新企业地址失败:', error)
  } finally {
    isSaving.value = false
  }
}

// 删除企业地址
const deleteCompanyAddressData = async (id: number) => {
  try {
    const res = await deleteCompanyAddress({id})
    if (res.code === 0) {
      message.success('企业地址删除成功')
      await loadCompanyAddressList()
    } else {
      message.error(res.msg || '删除失败')
    }
  } catch (error) {
    message.error('删除失败，请重试')
    console.error('删除企业地址失败:', error)
  }
}

// 设置默认企业地址
const setDefaultCompanyAddressData = async (id: number) => {
  try {
    const res = await setDefaultCompanyAddress({id})
    if (res.code === 0) {
      message.success('设置默认地址成功')
      await loadCompanyAddressList()
    } else {
      message.error(res.msg || '设置失败')
    }
  } catch (error) {
    message.error('设置失败，请重试')
    console.error('设置默认地址失败:', error)
  }
}

// 编辑企业地址
const editCompanyAddress = (address: any) => {
  currentCompanyAddress.value = {...address}
  showAddInvoice.value = true
  addInvoiceType.value = 2
}

// 重置当前企业地址
const resetCurrentCompanyAddress = () => {
  currentCompanyAddress.value = {
    id: null,
    addressName: '',
    companyName: '',
    companyArea: '',
    companyAddress: '',
    companyPhone: '',
    companyTaxNumber: '',
    companyBankName: '',
    companyBankAccount: '',
    companyEmail: '',
    isDefault: false
  }
}

// 添加地址按钮点击事件
function addInvoiceClick(){
  const type = isActive.value ? 1 : 2
  addInvoiceType.value = type
  if (type === 1) {
    // 个人地址：直接在页面上编辑
    startEditPersonalAddress()
  } else {
    // 企业地址：打开弹窗
    resetCurrentCompanyAddress()
    showAddInvoice.value = true
  }
}

// 处理弹窗保存事件
const handleModalSave = async (addressData: any, isEdit: boolean) => {
  if (isEdit) {
    await updateCompanyAddressData(addressData)
  } else {
    await createCompanyAddressData(addressData)
  }
}

// 初始化数据
onMounted(async () => {
  try {
    await loadPersonalAddress()
    await loadCompanyAddressList()
  } catch (error) {
    console.error('初始化税务信息数据失败:', error)
    message.error('加载数据失败，请刷新页面重试')
  }
})
</script>

<template>
  <div class="contact-container">
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
      <div class="withdrawal-methods-header">
        税务信息
      </div>
      <div class="user-contact-container" id="account">
        <n-flex align="center" justify="space-between">
          <Text color="#333333" :size="24">账户信息</Text>
        </n-flex>
        <div class="contact-container-cell">
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              用户ID
            </Text>
            <Text :size="16" color="#808080">
              jasonzha
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              名字
            </Text>
            <Text :size="16" color="#808080">
              郑盈
            </Text>
          </n-flex>

          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              手机号码
            </Text>
            <Text :size="16" color="#808080">
              15179893205
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

      <div class="user-contact-container" id="city" style="margin-bottom: 158px">
        <n-flex align="center" justify="space-between">
          <n-flex :size="40">
            <div :class="{'tax-item-text':true,active:isActive}" @click="isActive = true">个人地址</div>
            <div :class="{'tax-item-text':true,active:!isActive}" @click="isActive = false">企业地址</div>
          </n-flex>
          <n-button type="primary" size="large" @click="addInvoiceClick">
            <n-icon :size="20">
              <Add></Add>
            </n-icon>
            {{ isActive ? '编辑地址' : '添加地址' }}
          </n-button>
        </n-flex>

        <!-- 个人地址 -->
        <div v-if="isActive" class="tax-city-container">
          <n-flex class="contact-container-item" justify="space-between" style="margin-bottom: 10px;border: none">
            <Text :size="20">
              个人地址
            </Text>
            <n-flex :size="12" v-if="isEditingPersonalAddress">
              <n-button type="primary" size="small" @click="savePersonalAddressData" :loading="isSaving">
                保存
              </n-button>
              <n-button size="small" @click="cancelEditPersonalAddress" :disabled="isSaving">
                取消
              </n-button>
            </n-flex>
          </n-flex>

          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="14" color="#808080">姓名</Text>
            <n-input
                v-if="isEditingPersonalAddress"
                v-model:value="personalAddress.personalName"
                size="small"
                style="width: 200px;"
                placeholder="请输入姓名"
            />
            <Text v-else :size="14" color="#808080">
              {{ personalAddress.personalName || '暂无数据' }}
            </Text>
          </n-flex>

          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="14" color="#808080">所在地区</Text>
            <n-input
                v-if="isEditingPersonalAddress"
                v-model:value="personalAddress.personalArea"
                size="small"
                style="width: 200px;"
                placeholder="请输入所在地区"
            />
            <Text v-else :size="14" color="#808080">
              {{ personalAddress.personalArea || '暂无数据' }}
            </Text>
          </n-flex>

          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="14" color="#808080">地址</Text>
            <n-input
                v-if="isEditingPersonalAddress"
                v-model:value="personalAddress.personalAddress"
                size="small"
                style="width: 200px;"
                placeholder="请输入详细地址"
            />
            <Text v-else :size="14" color="#808080">
              {{ personalAddress.personalAddress || '暂无数据' }}
            </Text>
          </n-flex>

          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="14" color="#808080">联系电话</Text>
            <n-input
                v-if="isEditingPersonalAddress"
                v-model:value="personalAddress.personalPhone"
                size="small"
                style="width: 200px;"
                placeholder="请输入联系电话"
            />
            <Text v-else :size="14" color="#808080">
              {{ personalAddress.personalPhone || '暂无数据' }}
            </Text>
          </n-flex>

          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="14" color="#808080">税号</Text>
            <n-input
                v-if="isEditingPersonalAddress"
                v-model:value="personalAddress.personalTaxNumber"
                size="small"
                style="width: 200px;"
                placeholder="请输入税号"
            />
            <Text v-else :size="14" color="#808080">
              {{ personalAddress.personalTaxNumber || '暂无数据' }}
            </Text>
          </n-flex>

          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="14" color="#808080">开户银行</Text>
            <n-input
                v-if="isEditingPersonalAddress"
                v-model:value="personalAddress.personalBankName"
                size="small"
                style="width: 200px;"
                placeholder="请输入开户银行"
            />
            <Text v-else :size="14" color="#808080">
              {{ personalAddress.personalBankName || '暂无数据' }}
            </Text>
          </n-flex>

          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="14" color="#808080">银行账号</Text>
            <n-input
                v-if="isEditingPersonalAddress"
                v-model:value="personalAddress.personalBankAccount"
                size="small"
                style="width: 200px;"
                placeholder="请输入银行账号"
            />
            <Text v-else :size="14" color="#808080">
              {{ personalAddress.personalBankAccount || '暂无数据' }}
            </Text>
          </n-flex>

          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="14" color="#808080">邮箱</Text>
            <n-input
                v-if="isEditingPersonalAddress"
                v-model:value="personalAddress.personalEmail"
                size="small"
                style="width: 200px;"
                placeholder="请输入邮箱"
            />
            <Text v-else :size="14" color="#808080">
              {{ personalAddress.personalEmail || '暂无数据' }}
            </Text>
          </n-flex>
        </div>

        <!-- 企业地址列表 -->
        <div v-else>
          <div v-if="companyAddressList.length === 0" class="tax-city-container">
            <n-empty description="暂无企业地址数据">
              <template #extra>
                <n-button size="small" @click="addInvoiceClick">
                  添加企业地址
                </n-button>
              </template>
            </n-empty>
          </div>

          <div
              v-for="(address, index) in companyAddressList"
              :key="address.id"
              class="tax-city-container"
              style="margin-bottom: 20px;"
          >
            <n-flex class="contact-container-item" justify="space-between" style="margin-bottom: 10px;border: none">
              <n-flex align="center" :size="12">
                <Text :size="20">
                  {{ address.addressName || `企业地址${index + 1}` }}
                </Text>
                <n-tag v-if="address.isDefault" type="success" size="small">默认</n-tag>
              </n-flex>
              <n-flex :size="8">
                <n-button v-if="!address.isDefault" type="info" size="small" @click="setDefaultCompanyAddressData(address.id)">
                  设为默认
                </n-button>
                <n-button type="primary" size="small" @click="editCompanyAddress(address)">
                  编辑
                </n-button>
                <n-button type="error" size="small" @click="deleteCompanyAddressData(address.id)">
                  删除
                </n-button>
              </n-flex>
            </n-flex>

            <n-flex justify="space-between" align="center" class="contact-container-item">
              <Text :size="14" color="#808080">公司名称</Text>
              <Text :size="14" color="#808080">{{ address.companyName || '暂无数据' }}</Text>
            </n-flex>

            <n-flex justify="space-between" align="center" class="contact-container-item">
              <Text :size="14" color="#808080">所在地区</Text>
              <Text :size="14" color="#808080">{{ address.companyArea || '暂无数据' }}</Text>
            </n-flex>

            <n-flex justify="space-between" align="center" class="contact-container-item">
              <Text :size="14" color="#808080">地址</Text>
              <Text :size="14" color="#808080">{{ address.companyAddress || '暂无数据' }}</Text>
            </n-flex>

            <n-flex justify="space-between" align="center" class="contact-container-item">
              <Text :size="14" color="#808080">注册电话</Text>
              <Text :size="14" color="#808080">{{ address.companyPhone || '暂无数据' }}</Text>
            </n-flex>

            <n-flex justify="space-between" align="center" class="contact-container-item">
              <Text :size="14" color="#808080">单位税号</Text>
              <Text :size="14" color="#808080">{{ address.companyTaxNumber || '暂无数据' }}</Text>
            </n-flex>

            <n-flex justify="space-between" align="center" class="contact-container-item">
              <Text :size="14" color="#808080">开户银行</Text>
              <Text :size="14" color="#808080">{{ address.companyBankName || '暂无数据' }}</Text>
            </n-flex>

            <n-flex justify="space-between" align="center" class="contact-container-item">
              <Text :size="14" color="#808080">银行账号</Text>
              <Text :size="14" color="#808080">{{ address.companyBankAccount || '暂无数据' }}</Text>
            </n-flex>

            <n-flex justify="space-between" align="center" class="contact-container-item">
              <Text :size="14" color="#808080">邮箱</Text>
              <Text :size="14" color="#808080">{{ address.companyEmail || '暂无数据' }}</Text>
            </n-flex>
          </div>
        </div>
      </div>

      <!-- <n-flex class="user-contact-container" id="ling" :size="40" vertical>
        <n-flex align="center" justify="space-between">
          <Text color="#333333" :size="24">擅长领域</Text>
          <n-icon :size="22" class="cursor-pointer-style main-color-size">
            <CreateOutline />
          </n-icon>
        </n-flex>
        <n-flex align="center" justify="space-between">
          <n-flex vertical>
            <Text :size="20">
              翻译
            </Text>
            <n-space>
              <n-tag
                round
                :bordered="false"
                v-for="(item,index) in tagOptions"
                @close="onClickClose(item)">
                {{ item }}
              </n-tag>
            </n-space>
          </n-flex>
        </n-flex>
      </n-flex>

      <div class="user-contact-container" id="history" style="margin-bottom: 158px">
        <n-flex align="center" justify="space-between">
          <Text color="#333333" :size="24">历史接单总量</Text>
        </n-flex>
        <div class="contact-container-cell">
          <n-flex justify="space-between" align="center" class="contact-container-item border-no pointer">
            <Text :size="16">
              用于电子书翻译的普通话翻译
            </Text>
            <n-icon :size="16">
              <ChevronForward></ChevronForward>
            </n-icon>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item border-no pointer">
            <Text :size="16">
              用于实体书翻译的翻译
            </Text>
            <n-icon :size="16">
              <ChevronForward></ChevronForward>
            </n-icon>
          </n-flex>

          <n-flex justify="space-between" align="center" class="contact-container-item border-no pointer">
            <Text :size="16">
              用于电子书翻译的法语、日文、中文的翻译
            </Text>
            <n-icon :size="16">
              <ChevronForward></ChevronForward>
            </n-icon>
          </n-flex>

          <n-flex justify="space-between" align="center" class="contact-container-item border-no pointer">
            <Text :size="16">
              用于电子书翻译的普通话翻译
            </Text>
            <n-icon :size="16">
              <ChevronForward></ChevronForward>
            </n-icon>
          </n-flex>
        </div>
      </div> -->
    </div>
  </div>
  <AddInvoice
      :type="addInvoiceType"
      :address-data="currentCompanyAddress"
      :is-editing="currentCompanyAddress.id !== null"
      v-model:show="showAddInvoice"
      @save="handleModalSave"
  />
</template>

<style scoped lang="scss">
.contact-container {
  margin-top: 20px;
  display: flex;
  flex-shrink: 0;
  gap: 20px;

  .contact-slider {
    width: 179px;
    height: 160px;
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

    &:hover, &.active {
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


  .contact-container-item {
    padding: 10px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #EDEDED;

    &.border-no {
      border: none
    }

    &.pointer {
      cursor: pointer;
    }

    &:last-child {
      border: none
    }
  }

  .contact-container-cell {
    background-color: #f8f8f8;
    height: 238px;
    margin-top: 40px;
    border-radius: 16px;
    padding: 20px;
    box-sizing: border-box;
  }

  .tax-item-text {
    font-size: 22px;
    color: $SecondaryColor-1;
    cursor: pointer;

    &.active {
      color: $MainColor
    }
  }

  .tax-city-container {
    margin-top: 40px;
    background: #FBFBFB;
    border-radius: 10px 10px 10px 10px;
    border: 1px solid #EDEDED;
  }
}
</style>
