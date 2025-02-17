<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { RenderIcon, IconCrown, Text, IconLink } from '@/components'
import { createDiscreteApi } from 'naive-ui'
const { dialog } = createDiscreteApi(['dialog'])

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
function onClickSubmit(type){
	let contentText = ''
	if(type == 2){
		contentText = '是否确定结束该工作'
	}else{
		contentText = '是否确定结束该里程碑工作'
	}
	dialog.success({
	  actionClass:'naiveui-dialog-action',
	  showIcon: false,
	  closable: false,
	  // title:'提示信息',
	  content: contentText,
	  positiveText: '确定',
	  negativeText: '取消',
	  maskClosable: false,
	  positiveButtonProps:{
		color:'#58968B'
	  },
	  negativeButtonProps:{
		 quaternary:true,
		 color:'#58968B'
	  },
	  onPositiveClick: () => {
		  dialog.success({
		    actionClass:'naiveui-dialog-action',
		    showIcon: false,
		    closable: false,
		    // title:'提示信息',
		    content: type == 2 ? '该工作已结束' : '该里程碑工作已结束',
		    positiveText: '确定',
		    maskClosable: false,
		    positiveButtonProps:{
		  	color:'#58968B'
		    },
		    onPositiveClick: () => {
				if(type == 2){
					open_rete.value = true
				}
		    }
		  })
	  }
	})
}
</script>
<template>
    <div class="container">
        <div class="slider-avatar">
            <n-flex :size="20" style="padding:0 20px ;">
                <n-avatar :size="60" round :src="avatarUrl"></n-avatar>
                <n-flex vertical :size="5 ">
                    <n-space align="center">
                        <Text :size="20">乔安娜</Text>
                        <RenderIcon :icon="IconMessage" :size="20" fill="#58968B"></RenderIcon>
                    </n-space>
                    <Text :size="14" class="secondary-color-text-1">Joanna</Text>
                </n-flex>
            </n-flex>
            <n-flex :size="0" class="personal-data-container" :wrap="false">
                <div class="personal-data-slider">
                    <div class="personal-data-slider-user">
                        <n-flex align="center" justify="space-between">
                            <div class="text-size-16">查看职业档案</div>
                        </n-flex>
                        <n-space vertical :size="15" style="margin-top: 15px">
                            <div class="secondary-color-text-1" style="font-size: 14px">设计师</div>
                            <div class="secondary-color-text-1" style="font-size: 14px">家装设计师</div>
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
                </div>
            </n-flex>
            <n-flex align="center" justify="space-between" style="padding:20px">
                <n-space vertical>
                    <span style="font-size: 14px">每周小时数量</span>
                    <n-flex vertical :size="10">
                        <span style="font-size: 11px;color:#808080" class="secondary-color-text-1">
                            超过40小时/周
                        </span>
                    </n-flex>
                </n-space>

            </n-flex>

            <n-flex vertical :size="15" style="padding:20px">
                <n-flex align="center" justify="space-between">
                    <div class="text-size-16">语言</div>
                </n-flex>
                <n-flex vertical :size="10">
                    <span style="font-size: 14px" class="secondary-color-text-1">
                        中文：母语或双语
                    </span>
                    <span style="font-size: 14px" class="secondary-color-text-1">
                        英语：母语或双语
                    </span>
                </n-flex>
            </n-flex>
            <n-flex vertical :size="15" style="padding:20px">
                <n-flex align="center" justify="space-between">
                    <div class="text-size-16">个人验证</div>
                </n-flex>
                <n-flex vertical :size="10">
                    <span style="font-size: 14px;color:#333333" class="secondary-color-text-1">
                        身份证认证
                    </span>
                    <span style="font-size: 11px;display:flex;align-items: center;" class="secondary-color-text-1">
                        已认证
                        <i class="icon-weiyanzheng iconfont" style="padding-left: 5px;"></i>
                    </span>
                </n-flex>
            </n-flex>
            <n-flex vertical :size="15" style="padding:20px">
                <n-flex align="center" justify="space-between">
                    <div class="text-size-16">教育</div>
                </n-flex>
                <n-flex vertical :size="10">
                    <span style="font-size: 14px;color:#333333" class="secondary-color-text-1">
                        清华大学
                    </span>
                    <span style="font-size: 11px;" class="secondary-color-text-1">
                        设计硕士，高级设计师
                    </span>
                    <span style="font-size: 11px;" class="secondary-color-text-1">
                        2016-2019
                    </span>
                </n-flex>
                <n-flex vertical :size="10">
                    <span style="font-size: 14px;color:#333333" class="secondary-color-text-1">
                        天津美术学院
                    </span>
                    <span style="font-size: 11px;" class="secondary-color-text-1">
                        设计硕士，高级设计师
                    </span>
                    <span style="font-size: 11px;color:#808080" class="secondary-color-text-1">
                        2012-2016
                    </span>
                </n-flex>
            </n-flex>
        </div>
        <div class="container-body">
            <div class="work-details">
                <div class="project-described">
                    <n-flex vertical align="flex-start">
                        <Text :size="24" weight="600">项目描述</Text>
                        <n-ellipsis :line-clamp="!isShowViewText ? 1 : 99999" :tooltip="false">
                            <Text class="secondary-color-text-1">
                                电灯熄灭 物换星移 泥牛入海
                                黑暗好像 一颗巨石 按在胸口
                                独脚大盗 百万富翁 摸爬滚打
                                黑暗好像 一颗巨石 按在胸口
                                电灯熄灭 物换星移 泥牛入海
                                黑暗好像 一颗巨石 按在胸口
                                独脚大盗 百万富翁 摸爬滚打
                                黑暗好像 一颗巨石 按在胸口
                                电灯熄灭 物换星移 泥牛入海
                                黑暗好像 一颗巨石 按在胸口
                                独脚大盗 百万富翁 摸爬滚打
                                黑暗好像 一颗巨石 按在胸口
                                电灯熄灭 物换星移 泥牛入海
                                黑暗好像 一颗巨石 按在胸口
                                独脚大盗 百万富翁 摸爬滚打
                                黑暗好像 一颗巨石 按在胸口
                            </Text>
                        </n-ellipsis>
                        <n-button type="primary" text @click="isShowViewText = !isShowViewText">查看更多</n-button>
                    </n-flex>
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
                    <div class="header-title">招聘人数</div>
                    <span style="font-size: 14px;color: #808080;padding: 18px 0;display:block">2人</span>
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
                        <n-divider></n-divider>
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
                        <div class="easy-btns">
                            <n-button type="primary" size="large" @click="open_apply = !open_apply">项目审查</n-button>
                            <n-button type="primary" size="large" @click="open_pay = !open_pay">为该项目付款</n-button>
                        </div>
                        <n-divider></n-divider>
                    </template>

                    <div class="easy-money">
                        <span class="professional-title title-2">项目总价</span>
                        <span class="professional-title title-2">￥200</span>
                    </div>
                    <p class="easy-end-alert">
                        包括原创力固定价格保护。
                        <span>了解更多信息</span>
                    </p>
                </div>

                <div class="tow-footer" style="padding: 20px 40px;margin-bottom: 77px">
                    <n-flex justify="flex-end" :size="40">
                        <n-button type="primary" text>取消</n-button>
                        <n-popover trigger="click" raw :show-arrow="false" v-if="type == 1">
                            <template #trigger>
                                <n-button type="primary">结束项目工作</n-button>
                            </template>
                            <n-flex vertical size="large" style="padding:17px;background-color: #ffffff;">
                                <n-button type="primary">结束里程碑工作</n-button>
                                <n-button type="tertiary">结束该项目全部工作</n-button>
                            </n-flex>
                        </n-popover>
                        <n-button type="primary" v-else @click="onClickSubmit(2)">确认结束工作</n-button>
                    </n-flex>
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
    display: flex;
    justify-content: space-around;
    gap: 20px;


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
            text-align: center;
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
</style>