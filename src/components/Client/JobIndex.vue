<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { RenderIcon, IconCrown, Text, IconLink } from '@/components'
import IndexMemberSend from './IndexMemberSend.vue'
const isShowViewText = ref(false)
const job = ref(1)
const type = ref(2)

const options = [
    {
        title: '里程碑',
        desc: '将项目划分为更小的部分，称为里程碑，里程碑完成并获得批准后，您将获得报酬。',
        type: 1
    },
    {
        title: '一次性工作',
        desc: ' 当所有工作都交付完毕时，再获得全部付款。',
        type: 2
    },
]


// 为里程碑付款
const OnlyPay = defineAsyncComponent(() => import('./OnlyPay.vue'))
const open_pay = ref(false)

// 项目审查
const OnlyApply = defineAsyncComponent(() => import('./OnlyApply.vue'))
const open_apply = ref(false)

// 评价
const OnlyRate = defineAsyncComponent(() => import('./OnlyRate.vue'))
const open_rete = ref(false)

const charMessageShow = ref(false)

const send = ref(false)

const change_send = () => {
    send.value = !send.value
}
</script>
<template>
    <div class="container">
        <div class="container-body">
            <div class="work-details">
                <div class="work-easy-btn">
                    <n-button type="primary" ghost @click="charMessageShow = true">立即聊天</n-button>
                    <n-button type="primary" ghost @click="$router.push('/client/order-pay')">为项目付款</n-button>
                    <n-button type="primary" @click="change_send">发送offer</n-button>
                </div>
                <div class="header1">
                    <div class="easy-icon">
                        <span></span>
                    </div>
                    <div class="easy-title">张小花</div>
                </div>
                <div class="header">
                    <n-flex :wrap="false">
                        <div class="header-left">
                            <div class="header-title">工作细节</div>
                            <div class="header-desc secondary-color-text-1">
                                发布于2024-09-09
                            </div>
                            <n-button round secondary color="#808080">技术文档翻译</n-button>
                            <div class="header-desc secondary-color-text-1">
                                中文翻译审核与更正
                            </div>
                            <div class="header-desc secondary-color-text-1" style="font-size: 14px">
                                翻译审查和更正，加强提供的信息。
                                <n-button text type="primary" style="text-decoration: underline">查看招聘信息</n-button>
                            </div>
                        </div>
                        <n-flex vertical align="center" class="header-right" justify="center" :size="40">
                            <n-flex class="header-icon-item" align="center">
                                <div class="icon">
                                    <RenderIcon icon="icon-jiangpai" :size="30" fill="#808080" />
                                </div>
                                <n-flex vertical class="icon-item-text" :size="5">
                                    <div class="text-title">
                                        中等
                                    </div>
                                    <div class="secondary-color-text-1">
                                        我正在寻找相关经验相对丰富的自由职业者
                                    </div>
                                </n-flex>
                            </n-flex>
                            <n-flex class="header-icon-item" style="width:270px">
                                <div class="icon">
                                    <RenderIcon icon="icon-yusuanzonge" :size="30" fill="#808080" />
                                </div>
                                <n-flex vertical class="icon-item-text" :size="5">
                                    <div class="text-title">
                                        150人民币
                                    </div>
                                    <div class="secondary-color-text-1">
                                        固定价格
                                    </div>
                                </n-flex>
                            </n-flex>
                        </n-flex>
                    </n-flex>
                    <div class="header-select">
                        <div class="header-select-title">
                            这个项目需要多长时间?
                        </div>
                        <span style="font-size: 14px;color: #808080;padding: 18px;display:block">3个月</span>
                    </div>
                </div>

                <div class="header">
                    <div class="header-title">技能和专业知识</div>

                    <div class="easy-tag">
                        <n-tag :color="{textColor: '#808080',borderColor: '#808080',color:'#FFFFFF'}" round>
                            中文
                        </n-tag>
                        <n-tag :color="{textColor: '#808080',borderColor: '#808080',color:'#FFFFFF'}" round>
                            法语
                        </n-tag>
                        <n-tag :color="{textColor: '#808080',borderColor: '#808080',color:'#FFFFFF'}" round>
                            德语
                        </n-tag>
                        <n-tag :color="{textColor: '#808080',borderColor: '#808080',color:'#FFFFFF'}" round>
                            阿拉伯语
                        </n-tag>
                        <n-tag :color="{textColor: '#808080',borderColor: '#808080',color:'#FFFFFF'}" round>
                            荷兰语
                        </n-tag>
                        <n-tag :color="{textColor: '#808080',borderColor: '#808080',color:'#FFFFFF'}" round>
                            意大利语
                        </n-tag>
                        <n-tag :color="{textColor: '#808080',borderColor: '#808080',color:'#FFFFFF'}" round>
                            日语
                        </n-tag>
                        <n-tag :color="{textColor: '#808080',borderColor: '#808080',color:'#FFFFFF'}" round>
                            朝鲜语
                        </n-tag>
                        <n-tag :color="{textColor: '#808080',borderColor: '#808080',color:'#FFFFFF'}" round>
                            内容本地化
                        </n-tag>
                    </div>
                </div>

                <!-- <div class=" header-jobs">
                    <div :class="job == 1 ? 'header-job-success' : 'header-job'" @click="job = 1">自由职业者1</div>
                    <div :class="job == 2 ? 'header-job-success' : 'header-job'" @click="job = 2">自由职业者2</div>
                </div> -->

                <div class="terms">
                    <div class="professional-title">合同细节</div>

                    <div class="professional-title title-2">
                        项目交付方式
                    </div>
                    <div class="terms-type">
                        <template v-for="item in options">
                            <div :class="{
                            'terms-type-item':true,
                            active:type == item.type
                          }" v-if="type == item.type">

                                <div :class="{'terms-item-title':true}">
                                    {{ item.title }}
                                </div>
                                <div class="terms-item-desc">
                                    {{ item.desc }}
                                </div>
                            </div>
                        </template>
                    </div>
                    <template v-if="type == 1">
                        <n-divider></n-divider>
                        <n-flex class="list-select" vertical :size="40">
                            <n-flex :size="8">
                                <n-radio :checked="checkedValue == 1" name="radio1" value="1"
                                    @change="handleChange"></n-radio>
                                <n-flex vertical :size="8">
                                    <Text :size="18">UI设计师</Text>
                                    <Text :size="12">设计十个界面</Text>
                                    <Text :size="18">项目期限</Text>
                                    <Text :size="14">2022-05-04——2022-06-04</Text>
                                    <Text :size="18">金额</Text>
                                    <Text :size="14">¥200</Text>
                                    <Text :size="16">附件</Text>
                                    <n-space>
                                        <n-input placeholder="" disabled style="width:300px">
                                            <template #prefix>
                                                <RenderIcon fill="#58968B" :icon="IconLink"></RenderIcon>
                                            </template>
                                        </n-input>
                                        <n-input placeholder="" disabled style="width:300px">
                                            <template #prefix>
                                                <RenderIcon fill="#58968B" :icon="IconLink"></RenderIcon>
                                            </template>
                                        </n-input>
                                    </n-space>
                                </n-flex>
                            </n-flex>
                            <n-flex :size="8">
                                <n-radio :checked="checkedValue == 2" name="radio1" value="2"
                                    @change="handleChange"></n-radio>
                                <n-flex vertical :size="8">
                                    <Text :size="18">UI设计师</Text>
                                    <Text :size="12">设计十个界面</Text>
                                    <Text :size="18">项目期限</Text>
                                    <Text :size="14">2022-05-04——2022-06-04</Text>
                                    <Text :size="18">金额</Text>
                                    <Text :size="14">¥200</Text>
                                    <Text :size="16">附件</Text>
                                    <n-space>
                                        <n-input placeholder="" disabled style="width:300px">
                                            <template #prefix>
                                                <RenderIcon fill="#58968B" :icon="IconLink"></RenderIcon>
                                            </template>
                                        </n-input>
                                        <n-input placeholder="" disabled style="width:300px">
                                            <template #prefix>
                                                <RenderIcon fill="#58968B" :icon="IconLink"></RenderIcon>
                                            </template>
                                        </n-input>
                                    </n-space>
                                </n-flex>
                            </n-flex>
                        </n-flex>
                        <n-divider></n-divider>
                    </template>
                    <template v-if="type == 2">
                        <n-flex style="margin-top:40px" vertical :size="20">
                            <Text :size="16">附件</Text>
                            <n-space>
                                <Text :size="14">￥200</Text>
                            </n-space>
                        </n-flex>
                        <n-flex style="margin-top:40px" vertical :size="20">
                            <Text :size="16">附件</Text>
                            <n-space>
                                <n-input placeholder="" disabled style="width:300px">
                                    <template #prefix>
                                        <RenderIcon fill="#58968B" :icon="IconLink"></RenderIcon>
                                    </template>
                                </n-input>
                                <n-input placeholder="" disabled style="width:300px">
                                    <template #prefix>
                                        <RenderIcon fill="#58968B" :icon="IconLink"></RenderIcon>
                                    </template>
                                </n-input>
                            </n-space>
                        </n-flex>

                    </template>
                </div>


                <div class="header">
                    <div class="header-title">求职信</div>
                    <p class="job-p">求职信： 你好！ 我是张小花，是一名翻译工作人员，想申请一下这个翻译工作</p>
                </div>

                <div class="header">
                    <div class="header-title">简介亮点</div>
                    <div class="job1-title">原创力工作</div>
                    <div class="job1-tag">翻译</div>
                    <div class="job1-tags ">
                        <n-tag size="small" :color="{textColor: '#808080',borderColor: '#808080',color:'#FFFFFF'}" round>
                            中文
                        </n-tag>
                        <n-tag size="small" :color="{textColor: '#808080',borderColor: '#808080',color:'#FFFFFF'}" round>
                            法语
                        </n-tag>
                    </div>
                    <div class="job1-title">证书</div>
                    <div class="job1-book"></div>
                </div>
            </div>
        </div>
    </div>


    <!-- 为里程碑付款 -->
    <OnlyPay v-model:show="open_pay" />

    <!-- 里程碑审查 -->
    <OnlyApply v-model:show="open_apply" />

    <!-- 评价 -->
    <OnlyRate v-model:show="open_rete" />
	
	<ChatMessage v-model:show="charMessageShow" />
	
	<IndexMemberSend v-model:show="send" />
</template>

<style scoped lang="scss">
.submit-proposals {
    background-color: #f4fbfa;
    height: 100%;
    overflow: auto;

    .container-body {
        flex: 1;
    }
}

.container {
    width: 1316px;
    max-width: 100%;
    padding-top: 40px;
    padding-bottom: 30px;
}

.slider-avatar {
    width: 264px;
    height: 840px;
    background: #FFFFFF;
    border-radius: 16px 16px 16px 16px;
    flex-shrink: 0;
    padding: 20px 0;
    box-sizing: border-box;
}

.personal-data-slider {
    width: 100%;
    border-bottom: solid 1px #e7e7e7;
    border-top: transparent;
    height: 100%;
    flex-shrink: 0;
}

.personal-data-slider-user {
    height: 167px;
    background: #ffffff;
    padding: 20px;
    box-sizing: border-box;
    border-bottom: solid 1px #e7e7e7;
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

@media (max-width: 1400px) {
    .submit-proposals {

        .container {
            padding: 20px;
        }

    }
}

@media screen and (max-width: 1920px) {

    /* 在此处添加适用于宽度小于1360像素的设备的样式 */
    .submit-proposals {
        .container {
            width: 1200px;
            margin: 0 auto;
            padding: 20px 0 140px 0;
            max-width: 100%;
        }
    }
}

.work-details {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;

    .project-described {
        padding: 40px;
        width: 100%;
        background-color: #FFFFFF;
        border-radius: 16px 16px 16px 16px;
        border: 1px solid #EDEDED;
    }

    .header {
        padding: 40px;
        width: 100%;
        background-color: #FFFFFF;
        border-radius: 16px 16px 16px 16px;
        border: 1px solid #EDEDED;

        .header-left {
            width: 100%;
            height: 180px;
            border-right: solid 1px #EDEDED;
            justify-content: space-around;

            .header-title {
                font-weight: 600;
                font-size: 24px;
                color: #333333;
            }

            .header-desc {
                font-weight: 400;
                font-size: 16px;
                color: #808080;
                margin-top: 10px;
                margin-bottom: 20px;
            }
        }

        .header-right {
            width: 100%;

            .text-title {
                font-weight: bold;
                font-size: 14px;
                color: #333333;
            }

        }

        .header-select {
            margin-top: 40px;

            .header-select-title {
                font-size: 18px;
                color: #333333;
                line-height: 21px;
                margin-bottom: 10px;
            }

        }
    }


    .professional,
    .terms,
    .cover-letter,
    .two-points,
    .tow-footer {
        padding: 40px;
        width: 100%;
        background: #FFFFFF;
        border: 1px solid #EDEDED;
        border-radius: 16px 16px 16px 16px;
        box-sizing: border-box;
    }

    .professional-title {
        font-weight: 600;
        font-size: 24px;
        color: #333333;
        margin-bottom: 20px;

        &.title-2 {
            font-size: 18px;
            font-weight: 400;
        }
    }

    .terms-desc {
        font-size: 16px;
        margin-bottom: 20px;

        ::v-deep(.n-button__content) {
            font-size: 16px;
            text-decoration: underline;
        }
    }

    .terms-type {
        display: flex;
        gap: 20px;
    }

    .terms-type-item {
        padding: 20px;
        box-sizing: border-box;
        background: #FFFFFF;
        border-radius: 8px;
        border: 1px solid #EDEDED;
        width: 100%;
        cursor: pointer;

        &.active {
            border: 1px solid #58968B;
            color: #58968B;
            background: #BFE1DB;
        }

        .terms-item-title {
            font-weight: bold;
            font-size: 18px;
        }

        .terms-item-desc {
            font-weight: 500;
            font-size: 12px;
            margin-top: 10px;
        }
    }

    .add-header {
        display: flex;
        margin-top: 40px;
        justify-content: space-between;
        align-items: center;

        .add-header-title {
            font-weight: bold;
            font-size: 18px;
            color: #333333;
        }
    }

    .add-form-item {
        margin-top: 20px;

        ::v-deep(.n-form-item-label__text) {
            font-size: 14px;
        }
    }

    .server-desc {
        margin-top: 40px;
        font-size: 14px;
        margin-bottom: 10px;
    }


    .project-table-item {
        width: 100%;
        height: 86px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;

        .project-item-title {
            font-weight: bold;
            font-size: 18px;
            color: #333333;
        }

        .project-item-desc {
            font-weight: 500;
            font-size: 14px;
            color: #808080;
        }
    }

    .project-tip {
        text-align: center;
        font-size: 14px;
        cursor: pointer;
        color: $SecondaryColor-1;

        a {
            font-size: 14px;
        }
    }

    .letter-header-title {
        width: 100%;
        height: 73px;
        background: #FFFFFF;
        border-radius: 16px;
        border: 1px solid #EDEDED;
        display: flex;
        align-items: center;
        padding: 0 20px;
        margin-bottom: 20px;

        .title-text {
            font-size: 18px;
            color: #727272;
            margin-right: auto;
        }
    }

    .annex {
        width: 100%;
        height: 249px;
        background: #FFFFFF;
        border-radius: 16px 16px 16px 16px;
        border: 1px solid #EDEDED;
        margin-top: 20px;
        padding: 20px;
        box-sizing: border-box;

        .annex-title {
            font-size: 18px;
            color: #333333;
            margin-bottom: 20px;
        }

        .annex-desc,
        .annex-value {
            font-size: 14px;
            margin-top: 20px;
            color: #818181;
        }

        .annex-value {
            margin-top: 10px;
            line-height: 16px;
        }
    }

    ::v-deep(.n-form-item-label__text) {
        font-size: 14px;
    }

    .tow-tag {
        margin-bottom: 20px;
    }

    ::v-deep(.list-select .n-radio .n-radio__dot-wrapper) {
        width: 34px;
        height: 34px;
    }

    ::v-deep(.list-select .n-radio .n-radio__dot) {
        width: 34px;
        height: 34px;
    }
}

.header-title {
    font-weight: 600;
    font-size: 24px;
    color: #333333;
}

.header-job {
    text-align: center;
    font-size: 16px;
    color: #808080;
    padding: 10px;
    position: relative;
    margin-right: 40px;
    cursor: pointer;
}

.header-job-success {
    text-align: center;
    font-size: 16px;
    color: #333333;
    padding: 10px;
    position: relative;
    margin-right: 40px;
    cursor: pointer;
}

.header-job-success::after {
    content: '';
    width: 100%;
    height: 5px;
    background: #58968B;
    position: absolute;
    left: 0;
    bottom: 0;
}

.header-job::after {
    content: '';
    width: 100%;
    height: 5px;
    background: #EDEDED;
    position: absolute;
    left: 0;
    bottom: 0;
}

.header-jobs {
    display: flex;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 16px 16px 16px 16px;
    border: 1px solid #EDEDED;
    padding: 20px 40px;
}

.easy-btns {
    padding: 40px 0 0 0;
    text-align: right;
}

.easy-btns button {
    margin-left: 30px;
}

.easy-money {
    display: flex;
    justify-content: space-between;
}

.easy-end-alert {
    font-size: 14px;
    color: #808080;
    text-align: center;
    padding: 30px 0 0 0;
}

.easy-end-alert span {
    color: #58968B;
    font-size: 14px;
    text-decoration: underline;
}

.work-easy-btn {
    text-align: right;
}

.work-easy-btn button {
    padding: 0 40px;
    margin-left: 20px;
}

.header1 {
    padding: 20px 40px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 16px 16px 16px 16px;
    border: 1px solid #EDEDED;
    display: flex;
    align-items: center;
}

.easy-icon {
    width: 50px;
    height: 50px;
    background-color: #D9D9D9;
    border-radius: 100px;
    position: relative;
}

.easy-icon span {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #58968B;
    border-radius: 100px;
    top: 3px;
    left: 2px;
}

.easy-title {
    font-size: 20px;
    color: #333333;
    padding-left: 20px;
}

.easy-tag {
    padding-top: 20px;
}

.easy-tag .n-tag {
    margin-right: 10px;
}

.job-p {
    font-size: 12px;
    color: #808080;
    padding-top: 20px;
}

.job1-title {
    font-size: 14px;
    color: #333333;
    padding: 15px 0;
}

.job1-tag {
    font-size: 12px;
    color: #808080;
    padding-bottom: 20px;
    padding-top: 10px;
}

.job1-tags .n-tag {
    margin-right: 10px;
}

.job1-book {
    width: 244px;
    height: 173px;
    background: #D9D9D9;
    border-radius: 12px 12px 12px 12px;
}
</style>