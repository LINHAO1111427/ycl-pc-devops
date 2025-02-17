<template>
    <div class="easy">
        <div class="talents-container">
            <h1>订单详情</h1>

            <div class="client-form-view">
                <div class="item-title">
                    <span>工作名称：</span>
                    <p>演示自由职业者工作:超过 20 张幻灯片的中英译本</p>
                </div>
                <div class="item-title1">
                    <span>工作详情：</span>
                    <div>
                        我们正在寻找一位技术娴熟，一丝不苟的基于Web和Word的中文演示文榜编辑加入我们充满活力的日队。理想的候选人将具备强大的中文能力和出色的辑技能，在创建、和优化网络内容和基于单词的演示文稿方面拥有丰富的经验，这个角色需要的不仅仅是语言能力:候选人必须对中国文化有深入的了解，以确保内容不仅在语言上准确，而且在文化上具有相关性和吸引力。将文化畑微差别无缝整合到内容中的能力至关重要，因为这将与我们的目标受众产生共鸣并保持真实性。
                        成功的候选人将展示对中国文化习俗、传统和社会规范的根深蒂团的了解。这种文化洞察力对于制作适合上下文和吸引人的内容至关重要，无论是理解惯用语、识别文化参考，还是使内容与文化事件和趋势保持一致，候选人的文化背景都将在他们的编辑职中发挥至关重要的作用。此外，选人必须善于驾驭中文交流中特有的语气和风格的复杂性，确保所有内容都符合我们的品牌声音，同时具有文化敏感性和吸引力。这种全面的文化意识，加上卓越的编辑技巧，将成为候选人为我们团队做出贡献的基石。
                    </div>
                </div>
            </div>

            <div class="btns">
                <n-button quaternary type="primary">
                    已付款
                </n-button>
                <n-button type="primary" style="padding:0 70px" @click="showModal = !showModal">
                    确认支付
                </n-button>
            </div>
        </div>
    </div>


    <n-modal v-model:show="showModal">
        <n-card style="width: 600px" :bordered="false" size="huge" role="dialog" aria-modal="true">
            <div class="header-title">
                请您尽快付款
            </div>
            <div class="header-icon"></div>
            <div class="header-p">扫描二维码付款</div>
            <div class="header-span">支持微信支付、支付宝支付、信用卡支付</div>

            <template #footer>
                <div class="btns1">
                    <n-button quaternary type="primary" @click="showModal = false">
                        取消
                    </n-button>
                    <n-button type="primary" @click="showModal = false">
                        已完成付款
                    </n-button>
                </div>
            </template>
        </n-card>
    </n-modal>
</template>
<script setup>
import { ref } from 'vue'
const showModal = ref(false)

</script>
<style scoped>
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

@media screen and (max-width: 1360px) {

    /* 在此处添加适用于宽度小于1360像素的设备的样式 */
    .talents-container {
        width: 1200px;
        margin: 0 auto;
        padding: 20px 0;
        max-width: 100%;
    }
}


h1 {
    font-weight: 300;
    font-size: 32px;
    color: #333333;
    padding: 10px 0 20px 0;
}

.client-form-view {
    padding: 40px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 16px 16px 16px 16px;
    border: 1px solid #EDEDED;
    margin-bottom: 20px;
}

.item-title {
    display: flex;
    align-items: center;
    padding: 0 0 20px 0;
}

.item-title1 {
    display: flex;
    padding: 0 0 20px 0;
    align-items: baseline;
}

.item-title span,
.item-title1 span {
    width: 70px;
    font-weight: 500;
    font-size: 13px;
    color: #333333;
}

.item-title p {
    flex: 1;
    color: #333333;
    font-size: 22px;
    font-weight: 400;
    line-height: 22px;
    margin: 0;
}

.item-title1 div {
    width: calc(100% - 60px);
    color: #333333;
    font-size: 12px;
    line-height: 20px;
}

.btns {
    text-align: right;
    padding: 100px 0;
}

.btns button {
    margin-left: 100px;
}


.header-title {
    font-weight: 400;
    font-size: 27px;
    color: #000000;
}

.header-icon {
    width: 250px;
    height: 250px;
    background: #D9D9D9;
    border-radius: 12px 12px 12px 12px;
    margin: 0 auto;
    margin-top: 30px;
}

@media screen and (max-width: 768px) {
    .header-title {
        font-weight: 400;
        font-size: 16px;
        color: #000000;
    }
}

.header-icon {
    width: 200px;
    height: 200px;
    background: #D9D9D9;
    border-radius: 12px 12px 12px 12px;
    margin: 0 auto;
    margin-top: 30px;
}

.header-p {
    font-size: 14px;
    color: #000000;
    text-align: center;
    padding: 10px 0;
}

.header-span {
    font-size: 12px;
    text-align: center;
    color: #808080;
}

.btns1 {
    text-align: center;
}

.btns1 button {
    margin: 0 60px;
}
</style>