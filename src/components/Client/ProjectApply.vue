<template>
    <n-modal v-model:show="showModal">
        <n-card style="width: 800px" :bordered="false" size="huge" role="dialog" aria-modal="true">
            <div class="header-title">
                里程碑审查
            </div>
            <p class="title">UI设计师</p>
            <p class="note">1、负责产业SaaS系统产品的视觉设计、交互设计，把握视觉设计趋势，分析产品特点，确定产品整体设计思路和规范。</p>
            <p class="note">2、负责产业SaaS数据可视化、移动端APP及小程序、活动页面等具体产品形态项目的web、UI的设计和实现，协同产品经理、前端工程师共同把握移动产品的用户体验。</p>
            <p class="note">3、负责设计分析与视觉风格设定，制定视觉规范，交互规范，全面提升用户体验。</p>
            <p class="note">4、为产品的未来发展提供前瞻性的创意设计。 </p>

            <p class="title">项目期限</p>
            <p class="note">2022-05-04——2022-06-04</p>

            <p class="title">附件</p>
            <n-flex class="list-select" vertical :size="40">
                <n-flex :size="8">
                    <n-flex vertical :size="8" style="">
                        <n-space>
                            <n-input placeholder="" disabled style="width:350px">
                                <template #prefix>
                                    <RenderIcon fill="#58968B" :icon="IconLink"></RenderIcon>
                                </template>
                            </n-input>
                            <n-input placeholder="" disabled style="width:350px">
                                <template #prefix>
                                    <RenderIcon fill="#58968B" :icon="IconLink"></RenderIcon>
                                    <span style="position: absolute;right:10px;color:#808080">链接</span>
                                </template>
                            </n-input>
                        </n-space>
                    </n-flex>
                </n-flex>
            </n-flex>

            <p class="title">审核意见留言板</p>
            <n-input type="textarea" :autosize="{
                minRows: 5,
                maxRows: 5,
              }" placeholder="请输入..." />
            <template #footer>
                <div class="btns">
                    <n-button quaternary type="primary" @click="danger_apply()">
                        未通过
                    </n-button>
                    <n-button type="primary" @click="success_apply()">
                        通过
                    </n-button>
                </div>
            </template>
        </n-card>
    </n-modal>
</template>

<script setup>
import { ref } from 'vue'
import { RenderIcon, IconCrown, Text, IconLink } from '@/components'
import { createDiscreteApi } from 'naive-ui'


const { dialog } = createDiscreteApi(['dialog'])
var showModal = true
const emit = defineEmits(['update:show'])


function success_apply() {
    dialog.warning({
        actionClass: 'naiveui-dialog-action',
        showIcon: false,
        closable: false,
        title: '是否确定通过该审核',
        content: () => h('div', {}, [
            h('p',
                {
                    style: {
                        cursor: 'pointer',
                    },
                    onClick() {
                        console.log("11111")
                    },
                },
                { default: () => '' }),
        ]),
        positiveText: '确定',
        negativeText: '取消',
        maskClosable: false,
        positiveButtonProps: {
            color: '#58968B'
        },
		negativeButtonProps:{
			quaternary:true,
			color: '#808080'
		},
        onPositiveClick() {
            emit('update:show', false)
        }
    })
}

function danger_apply() {
    dialog.warning({
        actionClass: 'naiveui-dialog-action',
        showIcon: false,
        closable: false,
        title: '我们会将该里程碑项目重新发给自由职业者进行修改，谢谢反馈！',
        content: () => h('div', {}, [
            h('p',
                {
                    style: {
                        cursor: 'pointer',
                    },
                    onClick() {
                        console.log("11111")
                    },
                },
                { default: () => '' }),
        ]),
        positiveText: '确定',
        negativeText: '',
        maskClosable: false,
        positiveButtonProps: {
            color: '#58968B'
        },
        onPositiveClick() {
            emit('update:show', false)
        }
    })
}
</script>

<style scoped>
.title {
    font-size: 16px;
    padding: 30px 0 10px 0;
    color: #333333;
}

.note {
    font-size: 12px;
    color: #333333;
}

.input-btn {
    display: flex;
    width: 50%;
}



.input-btn button {
    margin-left: 20px;
}

::v-deep(.n-base-icon) {
    font-size: 16px;
}

.work-details-slider-container {
    width: 258px;
}

.work-details-right-box {
    width: 358px;
}

.header-title {
    font-weight: 400;
    font-size: 27px;
    color: #000000;
}

.radio-item {
    display: flex;
    align-items: baseline;
    margin: 30px 0;
}

.radio-item-radio {
    padding-right: 15px;
}

.radio-item-cn p {
    font-size: 16px;
    color: #333333;
}

.radio-item-cn span {
    display: flex;
    line-height: 25px;
}

.btns {
    text-align: right;
    display: flex;
    justify-content: flex-end;
}

.btns button {
    margin-left: 20px;
}

.member-item-top {
    display: flex;
    margin-top: 30px;
}

.item-top-icon {
    width: 50px;
    height: 50px;
    background-color: #D9D9D9;
    border-radius: 100px;
    position: relative;
}

.item-top-icon-success {
    width: 10px;
    height: 10px;
    background-color: #58968B;
    border-radius: 100px;
    position: absolute;
    left: 5px;
    top: 2px;
}

.item-top-view {
    padding-left: 20px;
    flex: 1;
}

.item-top-view p {
    font-size: 20px;
    color: #333333;
}

.item-top-view-span {
    text-align: right;
    width: 100%;
}

.item-top-view-span span {
    font-size: 10px;
    color: #808080;
    margin-left: 30px;
}

.member-item-p {
    font-size: 12px;
    color: #808080;
    padding: 10px 0 0 0;
}

.member-item-a {
    font-size: 12px;
    color: #58968B;
}
</style>