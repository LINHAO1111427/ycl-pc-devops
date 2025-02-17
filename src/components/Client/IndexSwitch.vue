<template>
    <n-modal v-model:show="showModal">
        <n-card style="width: 800px" :bordered="false" size="huge" role="dialog" aria-modal="true">
            <div class="header-title">
                切换账号
            </div>
            <div class="list">
                <div class="item" v-for="item,index in 3" @click="emit('update:show',false)">
                    <div class="item-icon"></div>
                    <div class="item-view">
                        <p>王杰</p>
                        <span>jasonfreelancer7@gmail.com</span>
                    </div>
                    <div class="item-a" v-if="index == 0">当前使用</div>
                </div>
            </div>
        </n-card>
    </n-modal>
</template>
<script setup>
import { ref } from 'vue'
var showModal = true
const emit = defineEmits(['update:show'])

</script>
<style scoped>
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
    text-align: center;
    margin: 50px 0;
}

.list {
    padding-bottom: 100px;
}

.item {
    display: flex;
    position: relative;
    justify-content: center;
    padding: 15px;
    cursor: pointer;
}

.item-icon {
    width: 50px;
    height: 50px;
    background: #D9D9D9;
    border-radius: 100px;
}

.item-view {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;
}

.item-view p {
    font-size: 16px;
    color: #333333;
}

.item-view span {
    font-size: 14px;
    color: #808080;
}

.item-a {
    font-size: 12px;
    color: #58968B;
    padding-top: 5px;
    position: absolute;
    left: 61%;
}

.btns {
    text-align: right;
}

.btns button {
    margin-left: 60px;
}
</style>