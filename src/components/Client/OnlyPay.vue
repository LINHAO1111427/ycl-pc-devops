<template>
    <n-modal v-model:show="showModal">
        <n-card style="width: 600px" :bordered="false" size="huge" role="dialog" aria-modal="true">
            <div class="header-title">
                为该项目付款
            </div>
            <p class="title">UI设计师</p>
            <p class="note">1、负责产业SaaS系统产品的视觉设计、交互设计，把握视觉设计趋势，分析产品特点，确定产品整体设计思路和规范。</p>
            <p class="note">2、负责产业SaaS数据可视化、移动端APP及小程序、活动页面等具体产品形态项目的web、UI的设计和实现，协同产品经理、前端工程师共同把握移动产品的用户体验。</p>
            <p class="note">3、负责设计分析与视觉风格设定，制定视觉规范，交互规范，全面提升用户体验。</p>
            <p class="note">4、为产品的未来发展提供前瞻性的创意设计。 </p>

            <p class="title">项目期限</p>
            <p class="note">2022-05-04——2022-06-04</p>

            <p class="title">金额</p>

            <div class="input-btn">
                <n-input :value="2000" type="text" style="text-align:right;" placeholder="" />
                <n-button type="primary" @click="$router.push('/client/order-pay')">
                    继续
                </n-button>
            </div>
            <p class="title">合计金额</p>
            <p class="note">¥5000</p>
            <template #footer>
                <div class="btns">
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
var showModal = true
const emit = defineEmits(['update:show'])
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