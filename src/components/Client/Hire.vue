<template>
    <div class="easy">
        <div class="talents-container">
            <div class="client-menu">
                <p @click="$router.push('/client/talent')" :class="data.menu == 1 ? 'client-menu-success' : ''">发现人才</p>
                <p @click="$router.push('/client/hire')" :class="data.menu == 2 ? 'client-menu-success' : ''">我的雇佣</p>
                <p @click="$router.push('/client/browse')" :class="data.menu == 3 ? 'client-menu-success' : ''">最近浏览</p>
                <p @click="$router.push('/client/collect')" :class="data.menu == 4 ? 'client-menu-success' : ''">已收藏的人才</p>
            </div>

            <div class="client-form">
                <h1 class="client-form-h1">我的雇佣</h1>
                <p class="client-form-p">查找与您共事过的人</p>

                <el-scrollbar>
                    <div class="talent-view">
                        <div class="talent-item" v-for="item,index in 5" :key="index" @click="open_member()">
                            <div class="talent-houcang">
                                <i class="icon-shoucang iconfont"></i>
                            </div>

                            <div class="talent-item-icon">
                                <div class="talent-item-icon-tag"></div>
                            </div>
                            <div class="talent-item-name">宝拉</div>
                            <div class="talent-item-brief">专业配音艺术家和翻译</div>
                            <div class="talent-item-money">
                                <span>￥</span>
                                ￥40.00/小时
                            </div>
                            <div class="talent-item-rate">
                                <n-rate readonly :default-value="5" />
                                <span>5</span>
                            </div>
                        </div>
                    </div>
                </el-scrollbar>
            </div>
        </div>
    </div>
	<!-- 人才详情弹窗 -->
	<n-drawer v-model:show="open_index_member" width="1153px" placement="right">
	    <n-drawer-content>
	        <template #header>
	            <n-flex justify="space-between" align="center" @click="open_member()">
	                <n-icon :size="20" class="cursor-pointer-style">
	                    <ChevronBack />
	                </n-icon>
	                <n-button size="small" type="primary" ghost @click="onClickUrl">在新窗口中打开个人资料</n-button>
	            </n-flex>
	        </template>
	        <IndexMember />
	    </n-drawer-content>
	</n-drawer>
</template>
<script setup>
import { reactive, onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()


const value2 = 5
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])

const data = reactive({
    menu: 2,
})


import {
    ChevronBack
}
    from '@vicons/ionicons5'
const IndexMember = defineAsyncComponent(() => import('@/components/Client/IndexMember.vue'))
const open_index_member = ref(false)
const open_member = () => {
    open_index_member.value = !open_index_member.value
}
function onClickUrl(){
	const routerPath = router.resolve(`/client/member-detail`).href
	window.open(routerPath, '_blank')
}
</script>

<style scoped>
::v-deep(.n-drawer-header__main) {
  width: 100%;
}
.easy {
    width: 100%;
    background-color: #F4FBFA;
    position: relative;
}

.talents-container {
    width: 1360px;
    margin: 0 auto;
    padding: 20px 0;
    max-width: 100%;
    display: flex;
}

@media screen and (max-width: 1360px) {

    /* 在此处添加适用于宽度小于1360像素的设备的样式 */
    .talents-container {
        width: 1200px;
        margin: 0 auto;
        padding: 20px 0;
        max-width: 100%;
        display: flex;
    }
}

.client-menu {
    width: 159px;
    height: 286px;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

}

.client-menu p {
    font-weight: 600;
    font-size: 14px;
    color: #333333;
    font-style: normal;
    text-transform: none;
    cursor: pointer;
    width: calc(100% - 10px);
    padding-left: 10px;
    text-align: left;
    line-height: 47px;
    border-radius: 10px;
}

.client-menu-success {
    background-color: #58968B;
    color: #FFFFFF !important;
}

.client-form {
    flex: 1;
    width: calc(100% - 50px);
    margin-left: 50px;
}

.client-form-h1 {
    font-weight: 400;
    font-size: 26px;
    color: #333333;
    margin-bottom: 20px;
}

.el-scrollbar {
    height: auto !important;
    margin-bottom: 30px;
}

.client-form-p {
    font-weight: 400;
    font-size: 13px;
    color: #808080;
    margin-bottom: 30px;
}

.talent-view {
    display: flex;
}

.talent-item {
    display: inline-flex;
    background-color: #FFFFFF;
    border-radius: 12px;
    min-width: 22%;
    justify-content: center;
    padding: 30px 0;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
}

.client-form-p {
    font-weight: 400;
    font-size: 13px;
    color: #808080;
    margin-bottom: 30px;
}

.talent-view {
    display: flex;
}

.talent-item {
    display: inline-flex;
    background-color: #FFFFFF;
    border-radius: 12px;
    min-width: 22%;
    justify-content: center;
    padding: 30px 0;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-right: 20px;
}

.talent-houcang {
    position: absolute;
    top: -1px;
    right: 20px;
}

.icon-shoucang {
    font-size: 25px;
    color: #EDEDED;
}

.talent-item-icon {
    width: 50px;
    height: 50px;
    background-color: #D9D9D9;
    border-radius: 100px;
    position: relative;
}

.talent-item-icon-tag {
    width: 10px;
    height: 10px;
    background-color: #58968B;
    border-radius: 100px;
    position: absolute;
    left: 0;
    top: 10px;
}

.talent-item-name {
    font-weight: 500;
    font-size: 18px;
    color: #000000;
    line-height: 40px;
    text-align: center;
}

.talent-item-brief {
    font-weight: 400;
    font-size: 11px;
    color: #000000;
    line-height: 19px;
    text-align: center;
}

.talent-item-money {
    display: flex;
    align-items: center;
    color: #808080;
    padding: 10px 0;
}

.talent-item-money span {
    display: inline-flex;
    border: 1px solid #808080;
    color: #808080;
    border-radius: 100px;
    font-size: 10px;
}

.talent-type {
    padding: 10px 0;
}

.talent-type-title-success {
    font-weight: 500;
    font-size: 18px;
    color: #58968B;
    line-height: 23px;
    text-align: left;
}

.talent-type-title {
    font-weight: 500;
    font-size: 18px;
    color: #333333;
    line-height: 23px;
    text-align: left;
    cursor: pointer;
}

.talent-type-tag {
    margin-top: 10px;
}

.easy-tag {
    margin-right: 10px;
    margin-bottom: 10px;
}

.talent-item-rate {
    display: flex;
    align-items: center;
}

.talent-item-rate span {
    padding-left: 5px;
}

::v-deep(.n-base-icon svg),
::v-deep(.n-base-icon) {
    color: #F18B41;
}
</style>