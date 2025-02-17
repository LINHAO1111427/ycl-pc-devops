<template>
    <div class="easy">
        <div class="easy-modal" v-if="open" @mouseenter="mouseenter" @mouseleave="mouseleave">
            <div class="talents-container" style="padding: 0 0">
                <p class="pt-title">
                    浏览自有职业者：
                    <a href="javascipt:;">
                        更多
                    </a>
                </p>
            </div>
            <ul class="easy-modal-ul">
                <li>
                    <p>管理员支持</p>
                    <span>虚拟协助</span>
                    <span>市场研究与产品评论</span>
                    <span>数据录入和转录服务</span>
                    <span>项目管理</span>
                    <p>译本</p>
                    <span>翻译和本地化服务</span>
                    <span>语言辅导和口译</span>
                </li>
                <li>
                    <p>工程与建筑</p>
                    <span>3D建模和CAD</span>
                    <span>建筑与景观建筑</span>
                    <span>电气与电子工程</span>
                    <span>土木与结构工程</span>
                    <span>物理科学</span>
                    <span>合同制造</span>
                    <span>能源与机械工程</span>
                    <span>室内设计与贸易展览设计</span>
                    <span>化学工程</span>
                </li>
                <li>
                    <p>会计与咨询</p>
                    <span>会计与簿记</span>
                    <span>招聘与人力资源</span>
                    <span>财务规划</span>
                    <span>管理咨询与分析</span>

                    <span>其他-会计与咨询</span>
                    <span>个人和专业教练</span>
                    <p>数据科学与分析</p>
                    <span>数据分析与测试</span>
                    <span>数据提取/ETL</span>
                    <span>数据挖掘与管理</span>
                </li>
                <li>
                    <p>顾客服务</p>
                    <span>客户服务和技术支持</span>
                    <span>社区管理与标记</span>
                    <p>IT与网络</p>
                    <span>网络和系统管理</span>
                    <span>DevOps和解决方案架构</span>
                    <span>信息安全与合规</span>
                    <span>ERP/CRM软件</span>
                    <span>数据库管理与行政</span>
                </li>
                <li>
                    <p>法律</p>
                    <span>公司法和合同法</span>
                    <span>公法</span>
                    <span>财税法</span>
                    <span>国际与移民法</span>
                </li>
            </ul>
        </div>
        <div class="talents-container">
            <p class="pt-title">
                浏览自有职业者：
                <a href="javascipt:;" @mouseenter="mouseenter" @mouseleave="mouseleave">
                    更多
                </a>
            </p>
            <div class="pt-menu">
                <span class="pt-menu-title">
                    您的工作
                    <span style="font-size:14px;">完成以下步骤以脱颖而出并快速招聘</span>
                </span>
                <span>
                    <n-button type="primary" size="large" @click="$router.push('/client/addclient')">
                        <i class="icon-tianjia1 iconfont"></i>
                        <span style="font-size:14px;">发布招聘信息</span>
                    </n-button>
                </span>
            </div>
            <div class="pt-items">
                <div class="pt-item">
                    <span class="pt-item-icon">
                        <i class="icon-tianjia iconfont"></i>
                    </span>
                    <p class="pt-item-title">发布新的职位</p>
                    <p class="pt-item-brief">创建新的职位发布并从人才那里 获得建议</p>
                    <n-button type="primary" ghost @click="$router.push('/client/addclient')">
                        发布新职位
                    </n-button>
                </div>
                <div class="pt-item">
                    <span class="pt-item-icon">
                        <i class="icon-liuyan iconfont"></i>
                    </span>
                    <p class="pt-item-title">留言&启用</p>
                    <p class="pt-item-title">人才直达</p>
                    <p class="pt-item-brief">立即与顶尖人才联系，讨论和协作。</p>
                    <n-button type="primary" ghost @click="$router.push('/client/search-talents')">
                        浏览人才并向他们发送消息
                    </n-button>
                </div>
            </div>

            <div class="pt-menu">
                <span class="pt-menu-title">
                    最佳匹配的人才
                </span>
                <span>
                    <div class="pt-menu-more">
                        <span>刷新</span>
                        <i class="icon-shuaxin iconfont"></i>
                    </div>
                    <div class="pt-menu-more" @click="$router.push('/client/search-talents')">
                        <span>搜寻人才</span>
                        <i class="icon-jiantou iconfont"></i>
                    </div>
                </span>
            </div>

            <div class="pt-lists">
                <div class="pt-list" v-for="item,index in 4" :key="index">
                    <div class="pt-list-houcang">
                        <i
                            :class="index > 0 ? 'icon-shoucang-success icon-shoucang iconfont' : 'icon-shoucang iconfont'"></i>
                    </div>
                    <div class="pt-list-icon"></div>
                    <div class="talent-item-name">宝拉</div>
                    <div class="talent-item-brief">专业配音艺术家和翻译</div>
                    <div class="pt-list-price">
                        <span>
                            <i class="icon-jinqian iconfont"></i>
                            ￥40.00/小时
                        </span>
                        <span>
                            <img src="../../assets/client/4.png" alt="">
                            4.95
                        </span>
                        <span>
                            <i class="icon-gongzuo iconfont"></i>
                            63
                        </span>
                    </div>
                    <div class="pt-list-tag">
                        <n-tag size="small" class="easy-tag"
                            :color="{textColor:'#808080',borderColor:'#EDEDED',color:'#EDEDED'}" round>西班牙语-拉丁美洲-中立</n-tag>
                        <n-tag size="small" class="easy-tag"
                            :color="{textColor:'#808080',borderColor:'#EDEDED',color:'#EDEDED'}" round>译本</n-tag>
                        <n-tag size="small" class="easy-tag"
                            :color="{textColor:'#808080',borderColor:'#EDEDED',color:'#EDEDED'}" round>孩子</n-tag>
                        <n-tag size="small" class="easy-tag"
                            :color="{textColor:'#808080',borderColor:'#EDEDED',color:'#EDEDED'}" round>录音</n-tag>
                        <n-tag size="small" class="easy-tag"
                            :color="{textColor:'#808080',borderColor:'#EDEDED',color:'#EDEDED'}" round>+8</n-tag>
                    </div>
                    <div class="pt-list-btn">
                        <n-button type="primary" size="large" @click="open_member()">
                            查看职业档案
                        </n-button>
                    </div>
                </div>
            </div>

            <div class="pt-ad">
                <div class="pt-ad-left">
                    <span>原创力平台优势</span>
                    <span>支付安全；高效交付；全天候客服团队</span>
                </div>
                <div class="pt-ad-right">
                    <img src="../../assets/client/5.png" alt="">
                </div>
            </div>

            <div class="pt-menu">
                <span class="pt-menu-title">
                    最佳匹配的人才
                </span>
            </div>
            <div class="pt-brief">与行业专家一起探索可能性。查看他们的可用性，并预定适合您的时间。</div>
            <a href="/client/search-talents?is_consult=1" class="pt-more">浏览所有类别</a>

            <div class="pt-level">
                <div class="pt-level-item">
                    <img src="../../assets/img/nav1.jpg" alt="">
                    <span>程序代码工程师</span>
                </div>
                <div class="pt-level-item">
                    <img src="../../assets/img/nav2.jpg" alt="">
                    <span>程序代码工程师</span>
                </div>
                <div class="pt-level-item">
                    <img src="../../assets/img/nav3.jpg" alt="">
                    <span>程序代码工程师</span>
                </div>
            </div>
            <div class="pt-end">
                <div class="pt-end-item">
                    <span>交易透明化</span>
                    <img src="../../assets/client/6.png" alt="">
                </div>
                <div class="pt-end-item">
                    <span>反馈信息透明化</span>
                    <img src="../../assets/client/7.png" alt="">
                </div>
                <div class="pt-end-item">
                    <span>信息保证安全</span>
                    <img src="../../assets/client/8.png" alt="">
                </div>
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

    <!-- 切换账户弹窗 -->
    <IndexSwitch v-model:show="switch_open" />
</template>
<script setup>
import { ref, defineAsyncComponent } from 'vue';
import {
    ChevronBack
}
    from '@vicons/ionicons5'
import { useRouter } from 'vue-router'
const IndexMember = defineAsyncComponent(() => import('@/components/Client/IndexMember.vue'))
const IndexSwitch = defineAsyncComponent(() => import('@/components/Client/IndexSwitch.vue'))
const open = ref(false)
const time = ref()
const mouseenter = () => {
    clearTimeout(time.value)
    open.value = true
}

const mouseleave = () => {
    time.value = setTimeout(() => {
        open.value = false
    }, 100)
}

const open_index_member = ref(false)
const open_member = () => {
    open_index_member.value = !open_index_member.value
}

const switch_open = ref(false)
const router = useRouter()
	
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
}

.pt-title {
    font-size: 12px;
    color: #333333;
    width: 100%;
}

.pt-title a {
    color: #58968B;
    text-decoration: underline;
}

.easy-modal {
    position: absolute;
    left: 0;
    width: 100%;
    background-color: #FFFFFF;
    top: 0;
    z-index: 99999;
    padding: 20px 0;
}

.pt-menu {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
}

.pt-menu-title {
    font-weight: 400;
    font-size: 30px;
    color: #333333;
}

.pt-menu-title span {
    font-size: 12px;
    color: #808080;
}

.icon-tianjia1 {
    font-size: 15px;
    padding-right: 10px;
}

.pt-items {
    display: flex;
    margin: 20px 0;
}

.pt-item {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    margin-right: 20px;
    width: 270px;
    padding-bottom: 30px;
    border-radius: 10px;
    border: 1px solid #FFFFFF;
}

.pt-item:hover {
    border: 1px solid #58968B;
}

.pt-item-icon {
    margin: 20px 0;
}

.pt-item-icon i {
    font-size: 30px;
    color: #979797;
}

.pt-item-title {
    font-weight: 300;
    font-size: 16px;
    color: #000000;
    line-height: 19px;
    text-align: center;
}

.pt-item-brief {
    font-size: 14px;
    color: #808080;
    padding: 10px 0;
    width: 70%;
    text-align: center;
    line-height: 20px;
}

.pt-menu-more {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}

.pt-menu-more span {
    font-weight: 500;
    font-size: 17px;
    color: #000000;
    margin-left: 100px;
}

.pt-menu-more i {
    color: #000000;
    margin-left: 5px;
    font-size: 18px;
}

.pt-menu-more .icon-jiantou {
    transform: rotate(-90deg);
}

.pt-lists {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
}

.pt-list {
    width: calc(25% - 20px);
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
}

.pt-list-houcang {
    position: absolute;
    top: -4px;
    right: 20px;
}

.icon-shoucang {
    font-size: 35px;
    color: #EDEDED;
}

.icon-shoucang-success {
    font-size: 35px;
    color: #58968B;
}


.pt-list-icon {
    width: 50px;
    height: 50px;
    background-color: #D9D9D9;
    border-radius: 100px;
    position: relative;
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
    font-size: 16px;
    color: #000000;
    line-height: 19px;
    text-align: center;
}

.pt-list-price {
    padding: 10px 0;
    display: flex;
    align-items: center;
}

.pt-list-price span {
    display: inline-flex;
    align-items: center;
    margin: 0 5px;
}

.pt-list-price span i {
    margin: 0 5px;
    font-size: 15px;
}

.pt-list-price span img {
    width: 15px;
    height: 15px;
}

.pt-list-tag {
    width: 70%;
}

.easy-tag {
    font-size: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
}

.pt-list-btn {
    margin-top: 30px;
}

.pt-ad {
    width: 100%;
    height: 170px;
    background-color: #F18B41;
    border-radius: 10px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
}

.pt-ad-left {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
}

.pt-ad-left span {
    font-weight: 500;
    font-size: 20px;
    color: #FFFFFF;
    margin-left: 20px;
    padding: 10px;
}

.pt-brief {
    color: #808080;
    padding: 20px 0;
	font-size:14px;
}

.pt-more {
    color: #58968B;
    text-decoration: underline;
	font-size:14px;
}

.pt-level {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
}

.pt-level-item {
    width: 30%;
}

.pt-level-item img {
    width: 100%;
}

.pt-level-item span {
    display: block;
    text-align: center;
    font-weight: 400;
    font-size: 24px;
    color: #808080;
    padding: 20px 0;
}

.pt-ad-right img {
    height: 100%;
    padding-right: 20px;
}

.pt-end {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

.pt-end-item {
    width: 30%;
    position: relative;
    height: 250px;
    background-color: #FFFFFF;
    border-radius: 10px;
}

.pt-end-item span {
    font-size: 29px;
    color: #58968B;
    margin: 40px 0 0 40px;
    display: block;
}

.pt-end-item img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 45%;
}

.easy-modal-ul {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
}

.easy-modal-ul p {
    font-weight: 500;
    font-size: 18px;
    color: #000000;
    margin-top: 20px;
    margin-bottom: 10px;
}

.easy-modal-ul span {
    width: 100%;
    display: block;
    color: #808080;
    cursor: pointer;
    padding: 10px 0;
}
</style>