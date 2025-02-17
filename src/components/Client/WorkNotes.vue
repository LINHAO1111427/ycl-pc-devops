<template>
    <n-modal v-model:show="showModal">
        <n-card style="width: 800px" :bordered="false" size="huge" role="dialog" aria-modal="true">
            <div class="header-title">
                项目简历收件箱
            </div>
            <n-flex align="center" style="margin:20px 0; ">
                <n-input round placeholder="搜索项目名称" size="large" style="width: 516px">
                    <template #prefix>
                        <div class="icon">
                            <img src="../../assets/img/search.png" alt="" />
                        </div>
                    </template>
                </n-input>
                <div class="hide_input">
					  <RenderIcon class="cursor-pointer-style" icon="icon-rili" fill="#808080" size="25" />
					  <n-date-picker type="daterange" clearable @update-value="handleUpdateValue" />
                </div>
            </n-flex>
            <div class="member-item" v-for="item,index in 3" :key="index">
                <div class="member-item-top">
                    <div class="item-top-icon">
                        <div class="item-top-icon-success"></div>
                    </div>
                    <div class="item-top-view">
                        <p>张小花</p>
                        <div class="item-top-view-span">
                            <span>申请日期:2024-08-02</span>
                            <span>出价金额：200</span>
                        </div>
                    </div>
                </div>
                <p class="member-item-p">求职信： 你好！ 我是张小花，是一名翻译工作人员，想申请一下这个翻译工作</p>
                <a href="javaScript:void(0)" class="member-item-a" @click="$router.push('/client/job')">查看详情</a>
            </div>

            <template #footer>
                <div class="btns">
                    <n-pagination v-model:page="page" :page-count="1" />

                    <n-button quaternary type="primary" @click="emit('update:show',false)">
                        取消
                    </n-button>
                    <n-button type="primary" @click="emit('update:show',false)">
                        确定
                    </n-button>
                </div>
            </template>
        </n-card>
    </n-modal>
</template>
<script setup>
import { ref } from 'vue'
import { Footer, IconStart, RenderIcon, IconFaxiangmu } from '@/components'
var showModal = true
const emit = defineEmits(['update:show'])
const checkedValue = ref('id1')
const page = ref(1)
const showCalendar = ref(false);
function handleUpdateValue() {
	showCalendar.value = false;
}
</script>
<style scoped  lang="scss">
::v-deep(.n-base-icon) {
    font-size: 16px;
}
.hide_input{
	position: relative;
	::v-deep(.n-date-picker){
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		width: 25px;
		height: 25px;
		overflow: hidden;
	}
	::v-deep(.n-input .n-input-wrapper){
		cursor: pointer;
	}
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