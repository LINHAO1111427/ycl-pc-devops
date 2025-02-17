<script setup lang="ts">
	import HeaderTop from '@/components/Header/HeaderTop.vue'
	import { Footer, IconStart, RenderIcon, IconFaxiangmu } from '@/components'
	import { ref } from 'vue'
	import { createDiscreteApi } from 'naive-ui'
	import { useRouter } from 'vue-router'

	const isCollection = ref(false)

	const { dialog } = createDiscreteApi(['dialog'])

	const router = useRouter()

	function onClickCancel() {
		dialog.warning({
			actionClass: 'naiveui-dialog-action',
			showIcon: false,
			closable: false,
			title: '是否确认取消',
			content: () => h('div', {}, [
				h('p',
					{
						style: {
							cursor: 'pointer',
						},
						onClick() {
							let routeData = router.resolve({ path: '/article-detail' })
							window.open(routeData.href, '_blank')
						},
					},
					{ default: () => '原创力平台订单取消协议' }),
			]),
			positiveText: '是',
			negativeText: '否',
			maskClosable: false,
			positiveButtonProps: {
				color: '#58968B'
			},
		})
	}
    function cancel_order() {
        dialog.warning({
			actionClass: 'naiveui-dialog-action',
			showIcon: false,
			closable: false,
			title: '您是否确定取消订单',
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
            onPositiveClick() {
                cancel_order_success()
            }
		})
    }
    function cancel_order_success() {
        dialog.warning({
			actionClass: 'naiveui-dialog-action',
			showIcon: false,
			closable: false,
			title: '您的订单已取消，谢谢！',
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
			}
		})
    }
	function onClickUrl(){
		const routerPath = router.resolve(`/client/order-details`).href
		window.open(routerPath, '_blank')
	}
	const isShow = ref(false)
</script>
<template>
    <div class="easy">
        <div class="talents-container">
            <div class="order-top">
                <div class="order-top-title">演示自由职业者工作:超过 20 张幻灯片的中英译本</div>
                <div class="order-top-btns">
                    <n-button type="primary" ghost @click="$router.push('/client/addclient')">
                        工作编辑
                    </n-button>
                    <n-button type="primary" @click="$router.push('/client/order-pay')">
                        确认为该项目付款
                    </n-button>
                </div>
            </div>
            <div class="order-time">
                <span>2024-07-10</span>
                <span>北京</span>
            </div>
            <div class="order-cn">
                我们正在寻找一位技术娴熟，一丝不苟的基于Web和Word的中文演示文榜编辑加入我们充满活力的日队。理想的候选人将具备强大的中文能力和出色的辑技能，在创建、和优化网络内容和基于单词的演示文稿方面拥有丰富的经验，这个角色需要的不仅仅是语言能力:候选人必须对中国文化有深入的了解，以确保内容不仅在语言上准确，而且在文化上具有相关性和吸引力。将文化畑微差别无缝整合到内容中的能力至关重要，因为这将与我们的目标受众产生共鸣并保持真实性。
                成功的候选人将展示对中国文化习俗、传统和社会规范的根深蒂团的了解。这种文化洞察力对于制作适合上下文和吸引人的内容至关重要，无论是理解惯用语、识别文化参考，还是使内容与文化事件和趋势保持一致，候选人的文化背景都将在他们的编辑职中发挥至关重要的作用。此外，选人必须善于驾驭中文交流中特有的语气和风格的复杂性，确保所有内容都符合我们的品牌声音，同时具有文化敏感性和吸引力。这种全面的文化意识，加上卓越的编辑技巧，将成为候选人为我们团队做出贡献的基石。
            </div>

            <n-flex class="positions-details_type" align="center" justify="space-evenly" :wrap="false">
                <div class="details_type-item">
                    <RenderIcon :icon="IconFaxiangmu" fill="#808080" size="30" />
                    <n-flex vertical>
                        <div class="type-item-title">一次性项目</div>
                        <div>项目类型</div>
                    </n-flex>
                </div>
                <n-divider vertical style="height: 30px" />
                <div class="details_type-item">
                    <RenderIcon icon="icon-yusuanzonge" fill="#808080" size="30" />
                    <n-flex vertical>
                        <div class="type-item-title">￥1500.00</div>
                        <div>总预算</div>
                    </n-flex>
                </div>
                <n-divider vertical style="height: 30px" />
                <div class="details_type-item">
                    <RenderIcon icon="icon-jiangpai" fill="#808080" size="30" />
                    <n-flex vertical>
                        <div class="type-item-title">入门级</div>
                        <div>我正在寻找无经验/经验不太足的自由职业者</div>
                    </n-flex>
                </div>
            </n-flex>
            <div class="more-title">技能和专业知识</div>
            <div class="more-btns">
                <n-tag :color="{textColor:'#808080',borderColor:'#E9E9E9',color:'#EDEDED'}" round>电子商务营销</n-tag>
                <n-tag :color="{textColor:'#808080',borderColor:'#E9E9E9',color:'#EDEDED'}" round>电子邮件营销</n-tag>
                <n-tag :color="{textColor:'#808080',borderColor:'#E9E9E9',color:'#EDEDED'}" round>搜索营销</n-tag>
                <n-tag :color="{textColor:'#808080',borderColor:'#E9E9E9',color:'#EDEDED'}" round>社交媒体营销</n-tag>
            </div>
            <div class="more-cn">
                历史工作发布统计
                <span @click="$router.push('/client/work-ing')">进行中的工作</span>
            </div>

            <div class="more-item" v-for="item,index in (isShow ? 14 : 5)" :key="index">
                <div class="more-item-left">
                    <div class="more-item-left-title" @click="onClickUrl">
                        我们的远程工作需要以中文为母语的人和作家
                    </div>
                    <div class="more-item-left-rate">
                        <n-rate readonly size="large" :default-value="5" />
                        <span>5</span>
                    </div>
                    <div class="more-item-left-member">
                        <span>发布者:</span>
                        <span class="more-item-left-member-name">南司富</span>
                        <span class="more-item-end" v-if="index < 2">
                            <n-rate readonly :default-value="5" />
                            <span>5</span>
                        </span>
                        <span v-else class="more-item-end-cn">暂无发布者评分</span>
                    </div>
                </div>
                <div class="more-item-right">
                    <div class="more-item-right-time">2024-07 - 2024-09</div>
                    <div class="more-item-right-money">固定价格￥280.00</div>
                </div>
            </div>
            <a href="javascipt:;" class="more-a" @click="isShow = !isShow">{{ !isShow ? '查看全部(14)' : '收起' }}</a>
        </div>
    </div>
</template>

<style scoped>
.easy {
    width: 100%;
    background-color: #ffffff;
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

.order-top {
    display: flex;
    align-items: center;
    padding: 20px 0;
    justify-content: space-between;
}

.order-top-title {
    font-size: 25px;
    color: #333333;
}

.order-top-btns button {
    margin-left: 30px;
    min-width: 170px;
}

.order-time {
    padding: 10px 0;
}

.order-time span {
    font-size: 12px;
    color: #808080;
    margin-right: 30px;
}

.order-cn {
    font-size: 12px;
    color: #333333;
    line-height: 20px;
    padding: 20px 0;
}

.positions-details_type {
    width: 800px;
    height: 77px;
    background: #fcfcfc;
    border-radius: 8px;
    border: 1px solid #ededed;
    margin-top: 20px;
}

.type-item-title {
    font-weight: 600;
    font-size: 14px;
    color: #333333;
}

.details_type-item {
    display: flex;
    align-items: center;
    gap: 10px;
}

.more-title {
    font-size: 20px;
    color: #333333;
    padding: 50px 0 20px 0;
}

.more-btns {
    padding: 0 0 40px 0;
}

.more-btns .n-tag {
    margin-right: 10px;
}

.more-cn {
    font-size: 20px;
    color: #333333;
    display: flex;
    align-items: flex-end;
}

.more-cn span {
    font-size: 12px;
    color: #333333;
    text-decoration: underline;
    padding-left: 20px;
    cursor: pointer;
}

.more-item {
    width: 100%;
    display: flex;
    padding: 20px 0;
    justify-content: space-between;
}

.more-item-left-title {
    font-weight: 500;
    font-size: 12px;
    color: #58968B;
    text-align: left;
    font-style: normal;
    text-decoration-line: underline;
    text-transform: none;
    padding: 5px 0;
	cursor: pointer;
}

.more-item-left-rate {
    display: inline-flex;
    align-items: baseline;
    padding: 2px 0;
}

.more-item-end {
    display: inline-flex;
    align-items: baseline;
    padding: 5px 0;
}

.more-item-end span {
    padding-left: 10px;
}

.more-item-left-rate span {
    padding-left: 10px;
    font-size: 18px;
}

.more-item-left-member {
    display: flex;
    align-items: center;
}

.more-item-left-member-name {
    font-size: 12px;
    color: #58968B;
    text-align: left;
    text-decoration-line: underline;
}

.more-item-left-member span {
    padding-right: 5px;
}

.more-item-right {
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
}

.more-item-right-time {
    padding: 10px 0;
}

.more-item-end-cn {
    font-size: 12px;
    color: #808080;
}

.more-a {
    font-size: 12px;
    color: #333333;
    text-decoration: underline;
}

::v-deep(.n-base-icon svg),
::v-deep(.n-base-icon) {
    color: #F18B41;
}
</style>