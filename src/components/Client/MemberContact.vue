<script setup lang="ts">
import { Text, Empty } from '@/components'
import { ref, h } from 'vue'
import { CreateOutline, AddCircleOutline } from '@vicons/ionicons5'
import { NButton, NSpace } from 'naive-ui'
import { RouterLink } from 'vue-router'
import EditAvatar from './EditAvatar.vue'

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
        h(NButton, { text: true, type: 'primary', onClick() {
            showAddAddress.value = true
          } }, () => '修改'),
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

function onMouseenter(key: string) {
  current.value = key
  window.location.hash = key
}

const showEditAvatar = ref(false)
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
					    <n-avatar class="cursor-pointer-style" round @click="showEditAvatar = true"></n-avatar>
					</n-flex>
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
                            郑盈
                        </Text>
                    </n-flex>
                    <n-flex justify="space-between" align="center" class="contact-container-item">
                        <Text :size="16" color="#808080">
                            所在地区
                        </Text>
                        <Text :size="16" color="#808080">
                            新疆维吾尔自治区乌鲁木齐市沙依巴克区仓房沟片区
                        </Text>
                    </n-flex>

                    <n-flex justify="space-between" align="center" class="contact-container-item">
                        <Text :size="16" color="#808080">
                            网站
                        </Text>
                        <Text :size="16" color="#808080">
                            街道4单元50室
                        </Text>
                    </n-flex>
                    <n-flex justify="space-between" align="center" class="contact-container-item">
                        <Text :size="16" color="#808080">
                            您的行业
                        </Text>
                        <Text :size="16" color="#808080" style="display: flex;align-items:center;">
                            IT
                        </Text>
                    </n-flex>
                    <n-flex justify="space-between" align="center" class="contact-container-item">
                        <Text :size="16" color="#808080">
                            贵公司有多少人
                        </Text>
                        <Text :size="16" color="#808080" style="display: flex;align-items:center;">
                            100
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
                            
                        </Text>
                    </n-flex>


                </div>
                <div class="easy-view">
                    <div class="easy-view-title">营业执照法人</div>
					<n-upload :show-file-list="false" :trigger-style="{cursor:'pointer'}">
                    <div class="easy-view-icon">
                        <n-icon size="30" color="#58968B">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 32 32">
                                <path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" fill="currentColor"></path>
                            </svg>
                        </n-icon>
                    </div>
					</n-upload>
                    <div class="easy-view-text">点击 上传项目文件</div>
                    <div class="easy-view-msg">您最多可以附加10个大小为25 MB的文件。包括工作样本或其他文件来支持你的申请。
                    </div>
                </div>

                <div class="easy-view">
                    <div class="easy-view-title">对公账号认证</div>
                    <n-upload :show-file-list="false" :trigger-style="{cursor:'pointer'}">
                    <div class="easy-view-icon">
                        <n-icon size="30" color="#58968B">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 32 32">
                                <path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" fill="currentColor"></path>
                            </svg>
                        </n-icon>
                    </div>
                    </n-upload>
                    <div class="easy-view-text">点击 上传项目文件</div>
                    <div class="easy-view-msg">您最多可以附加10个大小为25 MB的文件。包括工作样本或其他文件来支持你的申请。
                    </div>
                </div>

                <div class="easy-view">
                    <div class="easy-view-title">上传营业执照</div>
                    <n-upload :show-file-list="false" :trigger-style="{cursor:'pointer'}">
                    <div class="easy-view-icon">
                        <n-icon size="30" color="#58968B">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 32 32">
                                <path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" fill="currentColor"></path>
                            </svg>
                        </n-icon>
                    </div>
                    </n-upload>
                    <div class="easy-view-text">点击 上传项目文件</div>
                    <div class="easy-view-msg">您最多可以附加10个大小为25 MB的文件。包括工作样本或其他文件来支持你的申请。
                    </div>
                </div>

                <div class="easy-view">
                    <div class="easy-view-title">企业邮箱认证</div>
                    <n-upload :show-file-list="false" :trigger-style="{cursor:'pointer'}">
                    <div class="easy-view-icon">
                        <n-icon size="30" color="#58968B">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 32 32">
                                <path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" fill="currentColor"></path>
                            </svg>
                        </n-icon>
                    </div>
                    </n-upload>
                    <div class="easy-view-text">点击 上传项目文件</div>
                    <div class="easy-view-msg">您最多可以附加10个大小为25 MB的文件。包括工作样本或其他文件来支持你的申请。
                    </div>
                </div>
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
                            增值税号
                        </Text>
                        <Text :size="16" color="#808080">
                            jasonzha
                        </Text>
                    </n-flex>
                    <n-flex justify="space-between" align="center" class="contact-container-item">
                        <Text :size="16" color="#808080">
                            地址
                        </Text>
                        <Text :size="16" color="#808080">
                            天津
                        </Text>
                    </n-flex>
                </div>
            </div>
        </div>
    </div>
	<EditAvatar v-model:show="showEditAvatar" />
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
}
</style>