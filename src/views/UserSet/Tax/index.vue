<script setup lang="ts">
import { RenderIcon, Text } from '@/components'
import { CreateOutline, Add, ChevronForward } from '@vicons/ionicons5'
import { ref } from 'vue'
import AddInvoice from './component/AddInvoice.vue'

const current = ref('account')

const isActive = ref(true)

const tagOptions = ref(['翻译&本地化服务', '中文', '英语', '法语'])

const slider = [
  {
    title: '账户信息',
    to: 'account',
  },
  {
    title: '个人地址',
    to: 'city',
  },
  // {
  //   title: '擅长领域',
  //   to: 'ling',
  // },
  // {
  //   title: '历史接单总量',
  //   to: 'history',
  // },
]

function onMouseenter(key: string) {
  current.value = key
  window.location.hash = key
}


function onClickClose(value) {
  tagOptions.value = tagOptions.value.filter(item => item !== value)
}

const showAddInvoice = ref(false)
const addInvoiceType = ref(1)

function addInvoiceClick(){
	const type = isActive.value == 1 ? 1 : 2
	showAddInvoice.value = true
	addInvoiceType.value = type
}
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
            添加地址
          </n-button>
        </n-flex>

        <div class="tax-city-container">
          <n-flex class="contact-container-item" justify="space-between" style="margin-bottom: 10px;border: none">
            <Text :size="20">
              地址01
            </Text>
            <n-button type="error" ghost style="width: 80px">删除</n-button>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="14" color="#808080">
              姓名
            </Text>
            <Text :size="14" color="#808080">
              郑盈
            </Text>
          </n-flex>

          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="14" color="#808080">
              所在地区
            </Text>
            <Text :size="14" color="#808080">
              新疆维吾尔自治区乌鲁木齐市沙依巴克区仓房沟片区
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="14" color="#808080">
              地址
            </Text>
            <Text :size="14" color="#808080">
              街道4单元50室
            </Text>
          </n-flex>

          <template v-if="!isActive">
            <n-flex justify="space-between" align="center" class="contact-container-item">
              <Text :size="14" color="#808080">
                注册电话
              </Text>
              <Text :size="14" color="#808080">
                lishihai@sina.com
              </Text>
            </n-flex>
            <n-flex justify="space-between" align="center" class="contact-container-item">
              <Text :size="14" color="#808080">
                单位税号
              </Text>
              <Text :size="14" color="#808080">
                lishihai@sina.com
              </Text>
            </n-flex>
            <n-flex justify="space-between" align="center" class="contact-container-item">
              <Text :size="14" color="#808080">
                开户银行
              </Text>
              <Text :size="14" color="#808080">
                街道4单元50室
              </Text>
            </n-flex>
            <n-flex justify="space-between" align="center" class="contact-container-item">
              <Text :size="14" color="#808080">
                银行账号
              </Text>
              <Text :size="14" color="#808080">
                lishihai@sina.com
              </Text>
            </n-flex>
            <n-flex justify="space-between" align="center" class="contact-container-item">
              <Text :size="14" color="#808080">
                邮箱
              </Text>
              <Text :size="14" color="#808080">
                lishihai@sina.com
              </Text>
            </n-flex>
          </template>
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
  <AddInvoice :type='addInvoiceType' v-model:show="showAddInvoice" />
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