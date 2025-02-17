<script setup lang="ts">
import { RenderIcon, Text } from '@/components'
import { ref } from 'vue'

const current = ref('notice')

const slider = [
    {
	  title: '加急通知',
	  to: 'notice',
   },
  {
    title: '桌面',
    to: 'desktop',
  },
  {
    title: '移动',
    to: 'move',
  },
  {
    title: '电子邮件',
    to: 'email',
  },
]

const noticeCurrent = ref('电话加急')

const noticeOptions = ref([
  {
    title: '电话加急',
    desc: '新的消息默认15分钟没有及时处理会被电话加急',
	checked:false
  },
  {
    title: '短信加急',
    desc: '新的消息默认15分钟没有及时处理会被短信加急',
	checked:false
  },
])

const options = [
  {
    label: '所有活动',
    value: '所有活动',
  },
]

const optionsTime = [
  {
    label: '十五分钟',
    value: '十五分钟',
  },
  {
    label: '三十分钟',
    value: '三十分钟',
  },
]

const currentValue = ref('所有活动')

const currentTime = ref('十五分钟')

function onMouseenter(key: string) {
  current.value = key
  window.location.hash = key
}
function onClickChecked(index){
	noticeOptions.value[index].checked = noticeOptions.value[index].checked ? false : true
}
</script>

<template>
    <div class="notices-body-container">
        <div class="contact-slider">
            <div v-for="item in slider" class="contact-slider-item" :class="current === item.to && 'active'"
                @click="onMouseenter(item.to)">
                <Text color="#000" :size="16">
                    {{ item.title }}
                </Text>
            </div>
        </div>
        <div class="contact-main">
            <div class="withdrawal-methods-header">通知设置</div>
            <n-flex class="user-contact-container" id="notice" :size="40" vertical>
                <n-flex align="center" justify="space-between">
                    <Text color="#333333" :size="24">加急通知</Text>
                </n-flex>
                <n-flex class="terms-type" vertical>
                    <n-flex v-for="(item,index) in noticeOptions" align="center">
                        <n-checkbox class="rounded-full" size="large">
                            <div :class="{
						'terms-type-item':true,
						active:item.checked === true
					  }" @click="onClickChecked(index)">
                                <div :class="{'terms-item-title':true}">
                                    {{ item.title }}
                                </div>
                                <div class="terms-item-desc">
                                    {{ item.desc }}
                                </div>
                            </div>
                        </n-checkbox>
                    </n-flex>
                </n-flex>
            </n-flex>
            <n-flex class="user-contact-container" id="desktop" :size="40" vertical>
                <n-flex align="center" justify="space-between">
                    <Text color="#333333" :size="24">桌面</Text>
                </n-flex>
                <n-flex class="notices-items-container" vertical :size="40">
                    <n-space vertical>
                        <Text :size="16">
                            显示以下各项的通知
                        </Text>
                        <n-select placeholder="请选择" :options="options" v-model:value="currentValue" />
                    </n-space>
                    <n-space vertical>
                        <Text :size="16">
                            递增消息计数器
                        </Text>
                        <n-select placeholder="请选择" :options="options" v-model:value="currentValue" />
                    </n-space>
                </n-flex>
            </n-flex>

            <n-flex class="user-contact-container" id="move" :size="40" vertical>
                <n-flex align="center" justify="space-between">
                    <Text color="#333333" :size="24">移动</Text>
                </n-flex>
                <n-flex class="notices-items-container" vertical :size="40">
                    <n-space vertical>
                        <Text :size="16">
                            显示以下各项的通知
                        </Text>
                        <n-select placeholder="请选择" :options="options" v-model:value="currentValue" />
                    </n-space>
                    <n-space vertical>
                        <Text :size="16">
                            递增消息计数器
                        </Text>
                        <n-select placeholder="请选择" :options="options" v-model:value="currentValue" />
                    </n-space>
                </n-flex>
            </n-flex>

            <n-flex class="user-contact-container" id="email" :size="40" vertical>
                <n-flex align="center" justify="space-between">
                    <Text color="#333333" :size="24">电子邮件</Text>
                </n-flex>
                <n-flex class="notices-items-container" vertical :size="40">
                    <n-space vertical>
                        <Text :size="16">
                            包含未读活动的邮件
                        </Text>
                        <n-select placeholder="请选择" :options="options" v-model:value="currentValue" />
                        <n-select placeholder="请选择" :options="optionsTime" v-model:value="currentTime" />
                        <n-checkbox>仅在空闲时间发送</n-checkbox>
                    </n-space>
                </n-flex>
            </n-flex>
        </div>
    </div>
</template>

<style scoped lang="scss">
.notices-body-container {
    margin-top: 20px;
    display: flex;
    flex-shrink: 0;
    gap: 20px;
    padding-bottom: 70px;

    .contact-slider {
        width: 179px;
        height: 295px;
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


    .terms-type {
        display: flex;
        gap: 20px;

        :deep(.n-checkbox) {
            align-items: center;
        }

        :deep(.n-checkbox .n-checkbox-box) {
            border-radius: 100%;
        }
    }

    .terms-type-item {
        padding: 15px;
        box-sizing: border-box;
        background: #FFFFFF;
        border-radius: 8px;
        border: 1px solid #EDEDED;
        width: 100%;
        cursor: pointer;
        user-select: none;

        &.active {
            border: 1px solid #58968B;
            color: #58968B;
            // background: #BFE1DB;
        }

        .terms-item-title {
            font-weight: bold;
            font-size: 18px;
        }

        .terms-item-desc {
            font-weight: 500;
            font-size: 12px;
            // margin-top: 10px;
        }
    }
}
</style>
