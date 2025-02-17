<template>
    <div class="personal-data">
        <n-flex class="personal-data-header" align="center" :size="20">
            <n-avatar :size="60" round :src="avatarUrl"></n-avatar>
            <n-flex vertical :size="10">
                <n-flex class="personal-data-title" align="center">
                    Jason Z.

                </n-flex>
                <n-space align="center">
                    <n-flex class="secondary-color-text-1" align="center" :size="5">
                        <n-icon :size="16" class="main-color-size">
                            <LocationOutline />
                        </n-icon>
                        天津
                    </n-flex>
                    <n-flex class="secondary-color-text-1" align="center" :size="5">
                        <n-icon :size="10" class="main-color-size">
                            <EllipseSharp />
                        </n-icon>
                        在线时间 9:00
                    </n-flex>
                </n-space>
            </n-flex>
            <n-space style="margin-left:auto" :size="30">
                <n-flex
                  :class="{'start-icons-button':true,active:isCollection}"
                  align="center"
                  justify="center"
                  @click="isCollection  = !isCollection"
                >
                  <RenderIcon :icon="IconStart" :fill="isCollection ? '#58968B' : '#e5e5e5'" size="20" />
                </n-flex>
                <n-button type="primary" size="large" @click="change_send(1)">
                    <span class="naiveui-text-14">立即发送offer</span>
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
                        <div class="slider-nums-item-nums">124</div>
                        <div class="secondary-color-text-1">历史接单(单)</div>
                    </n-flex>
                    <n-flex class="personal-data-slider-nums-item" vertical align="center">
                        <div class="slider-nums-item-nums">124000</div>
                        <div class="secondary-color-text-1">总收入(￥)</div>
                    </n-flex>
                    <n-flex class="personal-data-slider-nums-item" vertical align="center">
                        <div class="slider-nums-item-nums">4.9</div>
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
                            <span class="secondary-color-text-1">超过40小时/周</span>
                        </n-space>
                    </n-flex>
                    <n-flex vertical :size="15">
                        <n-flex align="center" justify="space-between">
                            <div class="text-size-16">语言</div>
                        </n-flex>
                        <n-flex justify="space-between">
                            <n-flex vertical :size="10">
                                <span style="font-size: 14px">中文：母语或双语</span>
                            </n-flex>
                        </n-flex>
                        <n-flex justify="space-between">
                            <n-flex vertical :size="10">
                                <span style="font-size: 14px">英语：母语或双语</span>
                            </n-flex>
                        </n-flex>
                    </n-flex>
                    <n-flex align="center" justify="space-between">
                        <div class="text-size-16">个人验证</div>
                    </n-flex>
                    <n-flex align="center">
                        <n-space vertical>
                            <span style="font-size: 14px">身份证认证</span>
                            <n-flex align="center">
                                <Text class="secondary-color-text-1">已认证 </Text>
                                <i class="icon-weiyanzheng iconfont"></i>
                            </n-flex>
                        </n-space>
                    </n-flex>
                    <n-flex vertical :size="15">
                        <n-flex align="center" justify="space-between">
                            <div class="text-size-16">教育</div>
                        </n-flex>
                        <n-flex justify="space-between">
                            <n-flex vertical :size="10">
                                <span style="font-size: 14px">清华大学</span>
                                <span class="secondary-color-text-1">设计硕士，高级设计师</span>
                                <span class="secondary-color-text-1">2016-2019</span>
                            </n-flex>

                        </n-flex>
                        <n-flex justify="space-between">
                            <n-flex vertical :size="10">
                                <span style="font-size: 14px">天津美术学院</span>
                                <span class="secondary-color-text-1">设计硕士，高级设计师</span>
                                <span class="secondary-color-text-1">2016-2019</span>
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
                        CET4/6 TEM4/8
                        我在我的大学通过了，TEM8是我国的最高级别，代表英语学习者可以像母语人士一样与外国人交流，在我的国家，我做过翻译，为外国客户翻译论文和其他东西，我有很强的学习新事物的能力，如果你雇用我，
                        我绝对不会让你失望的！
                    </Text>
                </div>
                <div class="personal-work-experience">
                    <n-flex align="center" style="height: 30px;margin-bottom: 30px">
                        <Text :size="26" weight="600">工作经历</Text>
                    </n-flex>
                    <Text :size="18">
                        已完成工作（3）
                    </Text>
                    <n-flex class="personal-work-list" :size="20" vertical>
                        <n-flex class="personal-work-list-item" vertical v-for="_item in 3" @click="showWorkDetails = true">
                            <Text :size="20">
                                将普通话翻译成英语
                            </Text>
                            <Text :size="16" color="#808080">
                                没有给出反馈
                            </Text>
                            <n-flex justify="space-between" style="margin-top: 20px">
                                <Text :size="16" color="#808080">
                                    2021-04-10 - 2022-04-10
                                </Text>
                            </n-flex>
                        </n-flex>
                    </n-flex>
                </div>
                <n-flex class="personal-skills-container" vertical :size="20">
                    <Text :size="26" weight="600">技能和专业知识</Text>
                    <n-flex>
                        <n-tag round class="cursor-pointer-style">中文</n-tag>
                        <n-tag round class="cursor-pointer-style">法语</n-tag>
                        <n-tag round class="cursor-pointer-style">德语</n-tag>
                        <n-tag round class="cursor-pointer-style">阿拉伯语</n-tag>
                        <n-tag round class="cursor-pointer-style">荷兰语</n-tag>
                        <n-tag round class="cursor-pointer-style">意大利语</n-tag>
                        <n-tag round class="cursor-pointer-style">日语</n-tag>
                        <n-tag round class="cursor-pointer-style">朝鲜语</n-tag>
                        <n-tag round class="cursor-pointer-style">内容本地化</n-tag>
                    </n-flex>
                </n-flex>
                <n-flex class="personal-skills-container" vertical :size="10">
                    <Text :size="26" weight="600">建立商业咨询</Text>
                    <div class="item-open">
                        <div class="item-open-icon">
                            <img src="../../assets/client/10.png" alt="">
                        </div>
                        <div class="item-open-view">
                            <div class="item-open-btn">
                                <n-button type="primary" round style="padding:0 40px" @click="$router.push('/client/search-advice')">
                                    建立咨询
                                </n-button>
                            </div>
                            <p class="item-open-view-p1">
                                商业咨询<span>咨询服务说明</span>
                            </p>
                            <p class="item-open-view-p2">腾讯会议每30分钟150元</p>
                            <p class="item-open-view-p3">下次咨询时间：14:00</p>
                            <div class="n-flex-left-item-tag1">
                                <n-tag size="small" :color="{textColor:'#808080',borderColor:'#E9E9E9',color:'#E9E9E9'}"
                                    round>文件翻译</n-tag>
                                <n-tag size="small" :color="{textColor:'#808080',borderColor:'#E9E9E9',color:'#E9E9E9'}"
                                    round>译本</n-tag>
                                <n-tag size="small" :color="{textColor:'#808080',borderColor:'#E9E9E9',color:'#E9E9E9'}"
                                    round>普通话</n-tag>
                                <n-tag size="small" :color="{textColor:'#808080',borderColor:'#E9E9E9',color:'#E9E9E9'}"
                                    round>方言</n-tag>
                                <n-tag size="small" :color="{textColor:'#808080',borderColor:'#E9E9E9',color:'#E9E9E9'}"
                                    round>英译中文</n-tag>
                                <n-tag size="small" :color="{textColor:'#808080',borderColor:'#E9E9E9',color:'#E9E9E9'}"
                                    round>翻译</n-tag>
                            </div>
                        </div>
                    </div>
                </n-flex>

                <n-flex class="personal-skills-container" vertical :size="10">
                    <div>
                        <Text :size="26" weight="600">商业咨询项目展示</Text>
                        <Text :size="14" color="#808080" v-if="edi">
                            项目是一种在原创力上赚钱的新方式，可帮助您做更多您喜欢做的工作。创建项目产品，突出您的优势并吸引更多客户
                        </Text>
                        <template v-else>
                            <n-flex style="margin-top: 20px">
                                <n-flex vertical>
                                    <n-image>
                                        <template #placeholder>
                                            <div class="image-placeholder"></div>
                                        </template>
                                    </n-image>
                                    <Text :size="16" weight="600">证书</Text>
                                </n-flex>
                                <n-flex vertical>
                                    <n-image>
                                        <template #placeholder>
                                            <div class="image-placeholder"></div>
                                        </template>
                                    </n-image>
                                    <Text :size="16" weight="600">设计：web网站</Text>
                                </n-flex>
                            </n-flex>
                        </template>
                    </div>
                    <n-button type="primary" style="width: 88px" v-if="edi">管理项目</n-button>
                </n-flex>
            </div>
        </n-flex>
    </div>

    <div class="client-form">
        <div class="client-form-view">
            <p class="client-form-view-title">工作经历</p>
            <p class="client-form-view-pp">阿尔法视觉有限公司</p>
            <p class="client-form-view-p1">视觉设计师</p>
            <p class="client-form-view-p2">2016年3月-目前</p>
            <p class="client-form-view-p2">我现在在阿尔法视觉有限公司担任视觉设计师职位，我的工作时负责公司设计方面的一切工作</p>
        </div>
    </div>
    <div class="client-form">
        <div class="client-form-view">
            <p class="client-form-view-title">其他经历</p>
            <p class="client-form-view-pp">个人经历</p>
            <p class="client-form-view-p1">视觉设计师</p>
            <p class="client-form-view-p2">我现在在阿尔法视觉有限公司担任视觉设计师职位，我的工作时负责公司设计方面的一切工作</p>
        </div>
    </div>

    <!-- 立即邀请发送项目简历按钮 -->
    <IndexMemberSend v-model:show="send" :typeValue="typeValue" />
	<ChatMessage v-model:show="charMessageShow" />
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
import { Text, RenderIcon, IconStart } from '@/components'
import { ref } from 'vue'
import IndexMemberSend from './IndexMemberSend.vue'

var edi = false

var active = true

const send = ref(false)
const typeValue = ref(1)

const change_send = (val) => {
    send.value = !send.value
	typeValue.value = val
}

const isCollection = ref(false)

const charMessageShow = ref(false)
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
    width: 100%;
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

.item-open-view {
    margin-left: 30px;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    position: relative;
}

.item-open-view-p1 {
    font-weight: 600;
    font-size: 20px !important;
    color: #000000 !important;
    display: flex;
    align-items: baseline;
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

.item-open-btn {
    position: absolute;
    right: 20px;
    top: 20px;
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
</style>