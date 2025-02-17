<template>
    <h1>与王杰进行商业咨询</h1>
    <div class="n-flex">
        <div class="n-flex-left">
            <div class="n-flex-left-item">
                <p>很高兴今天见到你。我是来自菲律宾的Jodie，我是一名电子商务经理专家。我一直在通过不同的市场与客户合作，并且已经全职从事自由职业超过 4 年了。以下是我擅长的一些技能</p>
                <div class="n-flex-left-item-rate">
                    <span class="talent-item-rate">
                        <!-- <el-rate v-model="data.rate" :colors="colors" show-text :texts="['1', '2', '3', '4', '5']" /> -->
                        <n-rate readonly :default-value="5" />
                        <span>5</span>
                    </span>
                    <span class="n-flex-left-item-rate-count">186条评价</span>
                </div>
                <div class="n-flex-left-item-title">
                    获取以下方面的个性化建议
                </div>
                <div class="n-flex-left-item-tag">
                    <n-tag size="small" :color="{textColor:'#808080',borderColor:'#E9E9E9',color:'#E9E9E9'}"
                        round>电子商务营销</n-tag>
                    <n-tag size="small" :color="{textColor:'#808080',borderColor:'#E9E9E9',color:'#E9E9E9'}"
                        round>电子邮件营销</n-tag>
                    <n-tag size="small" :color="{textColor:'#808080',borderColor:'#E9E9E9',color:'#E9E9E9'}"
                        round>搜索营销</n-tag>
                    <n-tag size="small" :color="{textColor:'#808080',borderColor:'#E9E9E9',color:'#E9E9E9'}"
                        round>社交媒体营销</n-tag>
                </div>
            </div>

            <div class="n-flex-left-item">
                <div class="item-member">
                    <span class="item-member-title">个人资料</span>
                    <span>
                        <n-button type="primary" ghost @click="onClickUrl('/client/member-detail')">在新窗口打开个人资料</n-button>
                    </span>
                </div>
                <div class="item-member-view">
                    <div class="item-member-view-left">
                        <div class="item-member-view-left-icon">
                            <span class="item-member-view-left-icon-success"></span>
                        </div>
                        <div class="item-member-view-left-info">
                            <div class="info-title">
                                <span class="info-title-h1">张小花</span>
                                <span class="info-title-time">7个小时前发布</span>
                            </div>
                            <div class="info-view">
                                <span>
                                    <i class="icon-weiyanzheng iconfont"></i>
                                    证书未上传
                                </span>
                                <span>一次性任务</span>
                                <span>广东</span>
                            </div>
                        </div>
                    </div>
                    <div class="item-member-view-right talent-item-rate">
                        <!-- <el-rate v-model="data.rate" :colors="colors" show-text :texts="['1', '2', '3', '4', '5']" /> -->
                        <!-- <span class="talent-item-rate"> -->
                        <!-- <el-rate v-model="data.rate" :colors="colors" show-text :texts="['1', '2', '3', '4', '5']" /> -->
                        <n-rate readonly :default-value="5" />
                        <span>5</span>
                        <!-- </span> -->
                    </div>
                </div>
                <div class="item-member-h3-title">个人简介</div>
                <div class="item-member-h3-cn">我正在寻找可以分享我的知识和技能的机会。我的目标是在这个高度激进的环境中通过我的技能实现客户的满意度。</div>

                <div class="item-member-h3-title">工作经验</div>
                <div class="item-member-h3-cn">●查找电子邮件（99%准确和经过验证）</div>
                <n-ellipsis :line-clamp="data.isShow ? 9999 : 1" :tooltip="false">
                    <div class="item-member-h3-cn">●C级高管/总裁/所有者/副总裁/董事/经理的电子邮件●电子邮件和联系人列表构建●潜在客户生成●
                        LinkedIn潜在客户生成●LinkedIn高级搜索（包括X射线搜索和布尔搜索）●潜在客户列表构建●收集个人电子邮件地址●联系信息研究●公司信息研究●网络研究●数据输入●数据抓取和挖掘●PDF到Excel转换●PDF到Word转换●Gmail和Google云端硬盘（表格，文档）●
                        Microsoft Office（Word，Excel，PowerPoint）●各种管理支持任务以下是我用来实现 100% 结果的工具：● LinkedIn 高级帐户（销售导航器）●
                        Rocketreach
                        高级帐户（用于电子邮件和电话搜索）● 高级 Google 搜索（我可以在 Google.com 上找到任何东西）● Mailtester.com（用于电子邮件验证）● 销售导航器（用于潜在客户生成）●
                        Hunter.io（用于电子邮件格式和电子邮件搜索）● Data.com （用于搜索联系信息）● Zoominfo （用于潜在客户生成）● contactout
                        （用于搜索联系信息）我可以流利地说英语和交流。我有一个专用的工作场所，笔记本电脑和稳定的互联网连接。我非常可靠，我是一名专业人士。我每周有空超过 70
                        小时。我全天候待命，愿意在最后期限前完成。注意：如您所见，我有多个作业正在进行中，但其中大多数要么被客户端暂停，要么处于非活动状态。因此，请不要犹豫，邀请我参加您的工作并与我讨论。</div>
                </n-ellipsis>
                <a href="javascript:;" @click="data.isShow = !data.isShow" class="item-member-h3-a">
                    {{ data.isShow ? '收起' : '更多' }}
                </a>
                <div class="item-open">
                    <div class="item-open-icon">
                        <img src="../../assets/client/10.png" alt="">
                    </div>
                    <div class="item-open-view">
                        <div class="item-open-btn">
                            <n-button type="primary" round style="padding:0 40px" @click="onClickUrl('/client/search-advice')">
                                建立咨询
                            </n-button>
                        </div>
                        <p class="item-open-view-p1">商业咨询</p>
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
            </div>

            <div class="n-flex-left-item">
                <div class="item-member">
                    <span class="item-member-title">精彩内容</span>
                </div>
                <div class="item-msg">
                    <div class="item-msg-item">
                        <img src="../../assets/client/11.png" alt="">
                        <div class="item-msg-view">
                            <div class="item-msg-view-title">安排咨询</div>
                            <div class="item-msg-view-cn">与自由职业者协商发起咨询的具体时间。</div>
                        </div>
                    </div>
                    <div class="item-msg-item">
                        <img src="../../assets/client/12.png" alt="">
                        <div class="item-msg-view">
                            <div class="item-msg-view-title">获取有关您定制需求的建议</div>
                            <div class="item-msg-view-cn">分享有关您的项目的详细信息以及您想谈论的内容。</div>
                        </div>
                    </div>
                    <div class="item-msg-item">
                        <img src="../../assets/client/13.png" alt="">
                        <div class="item-msg-view">
                            <div class="item-msg-view-title">加入腾讯会议</div>
                            <div class="item-msg-view-cn">与咨询师进行1V1的会议，讨论您的需求和项目。</div>
                        </div>
                    </div>
                    <div class="item-msg-item">
                        <img src="../../assets/client/14.png" alt="">
                        <div class="item-msg-view">
                            <div class="item-msg-view-title">批准工作</div>
                            <div class="item-msg-view-cn">自由职业者将完成您的要求的文件并将其发送给您共批准：</div>
                            <div class="item-msg-view-cn">项目计划 时间和成本估算</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="n-flex-right">
            <div class="n-flex-right-title">
                <span>选择咨询时常</span>
                <i class="icon-liuyan iconfont"></i>
            </div>
            <div class="n-flex-right-radio">
                <n-radio value="Definitely1" :checked="data.time1 === 'Definitely1'" @click="data.time1 = 'Definitely1'"
                    name="basic-demo">30分钟</n-radio>
                <span>￥300</span>
            </div>
            <div class="n-flex-right-radio">
                <n-radio value="Definitely2" :checked="data.time1 === 'Definitely2'" @click="data.time1 = 'Definitely2'"
                    name="basic-demo">60分钟</n-radio>
                <span>￥400</span>
            </div>
            <div class="n-flex-right-msg">您可以在结账后分享详细信息并向王杰发送消息</div>
            <div class="n-flex-right-title">
                <span>行程安排</span>
            </div>
            <div class="n-flex-right-ress" @click="data.date2 = 'date1'">
                <n-radio value="date1" :checked="data.date2 === 'date1'" name="basic-demo"></n-radio>
                <div class="n-flex-right-ress-view">
                    <p>现在咨询</p>
                    <span>乔安娜现在没空</span>
                </div>
            </div>
            <div class="n-flex-right-ress" @click="data.date2 = 'date2'">
                <n-radio value="date2" :checked="data.date2 === 'date2'" name="basic-demo"></n-radio>
                <div class="n-flex-right-ress-view">
                    <p>预约咨询</p>
                    <span>8月1日 周四</span>
                </div>
            </div>
            <div class="n-flex-right-times">
                <n-button type="primary" :color="data.btn3 == 1 ? '' :'#EDEDED'"
                    :text-color="data.btn3 == 1 ? '#FFFFFF' :'#808080'" size="small" @click="data.btn3 = 1">14:00</n-button>
                <n-button type="primary" :color="data.btn3 == 2 ? '' :'#EDEDED'"
                    :text-color="data.btn3 == 2 ? '' :'#808080'" size="small" @click="data.btn3 = 2">14:30</n-button>
                <n-button type="primary" :color="data.btn3 == 3 ? '' :'#EDEDED'"
                    :text-color="data.btn3 == 3 ? '' :'#808080'" size="small" @click="data.btn3 = 3">15:00</n-button>
            </div>
            <n-button type="primary" style="margin: 30px 0;width:100%" @click="$router.push('/client/order-pay')">继续</n-button>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const data = reactive({
    time1: 'Definitely1',
    date2: 'date1',
    btn3: 1,
    rate: 5,
    isShow: false,
})

function onClickUrl(url){
	const routerPath = router.resolve(url).href
	window.open(routerPath, '_blank')
}
</script>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 30px;
    color: #333333;
    padding: 20px 0;
}

.n-flex {
    display: flex;
    justify-content: space-between;
}

.n-flex-left {
    width: calc(100% - 320px);
}


.n-flex-right {
    width: 300px;
    background-color: #FFFFFF;
    border-radius: 10px;
    margin-left: 20px;
    padding: 20px 20px 0 20px;
    height: 460px;
}

.n-flex-right-title {
    display: flex;
    align-items: center;
}

.n-flex-right-title span {
    font-size: 16px;
    color: #333333;
    font-weight: 500;
    margin-right: 10px;
}

.n-flex-right-title i {
    font-size: 20px;
    color: #58968B;
}

.n-flex-right-radio {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px
}

.n-flex-right-msg {
    font-size: 11px;
    color: #808080;
    text-align: center;
    padding: 20px 0;
}

.n-flex-right-ress {
    display: flex;
    align-items: center;
    padding: 10px 0;
    cursor: pointer;
}

.n-flex-right-ress-view {
    padding-left: 15px;
}

.n-flex-right-ress-view p {
    font-size: 14px;
    color: #333333;
    padding: 10px 0;
}

.n-flex-right-ress-view span {
    font-size: 12px;
    color: #808080;
    padding-bottom: 10px;
    display: block;
}

.n-flex-right-ress i {
    font-size: 20px;
    color: #58968B
}

.n-flex-right-times {
    display: flex;
    justify-content: space-between;
}

.n-flex-right-times button {
    padding: 0 20px;
}

.n-flex-left-item {
    padding: 40px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 16px 16px 16px 16px;
    border: 1px solid #EDEDED;
    margin-bottom: 20px;
}

.n-flex-left-item p {
    font-size: 13px;
    color: #808080;
    line-height: 20px;
}

.n-flex-left-item-rate {
    display: flex;
    align-items: center;
    padding: 10px 0;
}

.n-flex-left-item-rate span {
    font-size: 14px;
    color: #333333;
}

.n-flex-left-item-rate-count {
    font-size: 14px;
    margin-left: 30px;
    color: #333333;
}

.n-flex-left-item-title {
    font-size: 17px;
    color: #333333;
    padding: 10px 0;
}

.n-flex-left-item-tag {
    margin-top: 20px;
}

.n-flex-left-item-tag .n-tag {
    width: 120px;
    justify-content: center;
    margin-right: 10px;
}

.item-member {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.item-member-title {
    font-size: 24px;
    color: #333333;
}

.item-member-view {
    justify-content: space-between;
    display: flex;
    padding-top: 50px;
}

.item-member-view-left {
    display: flex;
}

.item-member-view-left-icon {
    width: 55px;
    height: 55px;
    background-color: #D9D9D9;
    border-radius: 100px;
    position: relative;
}

.item-member-view-left-icon-success {
    width: 12px;
    height: 12px;
    background-color: #58968B;
    border-radius: 100px;
    position: absolute;
    left: 2px;
    top: 1px;
}

.item-member-view-left-info {
    display: inline-flex;
    flex-direction: column;
    padding-left: 20px;
    justify-content: space-around;
}

.info-title {
    display: inline-flex;
    align-items: flex-end;
}

.info-title-h1 {
    font-weight: 600;
    font-size: 20px;
    color: #333333;
}

.info-title-time {
    font-size: 12px;
    color: #808080;
    margin-left: 10px;
}

.info-view {
    display: flex;
    align-items: center;
}

.info-view span {
    display: inline-flex;
    align-items: center;
    margin-right: 20px;
    color: #808080;
    font-size: 11px;
}

.item-member-view-right {
    display: inline-flex;
    align-items: flex-end;
}

.item-member-h3-title {
    font-size: 14px;
    color: #333333;
    padding: 20px 0;
}

.item-member-h3-cn {
    font-size: 12px;
    color: #808080;
    line-height: 25px;
}

.item-member-h3-a {
    text-decoration: underline;
    font-size: 12px;
    color: #58968B;
    padding: 10px 0;
    display: block;
}

.item-open {
    display: flex;
    width: 100%;
    height: 189px;
    background: #FFFFFF;
    border-radius: 16px 16px 16px 16px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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

.item-msg-item {
    display: flex;
    padding: 10px 0;
}

.item-msg-item:first-child {
    padding-top: 50px;
}

.item-msg-item img {
    width: 50px;
    height: 50px;
}

.item-msg-view {
    display: inline-flex;
    flex-direction: column;
    padding-left: 15px;
}

.item-msg-view-title {
    font-size: 17px;
    color: #333333;
    padding: 5px 0;
}

.item-msg-view-cn {
    font-size: 10px;
    padding: 3px 0;
    color: #808080;
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