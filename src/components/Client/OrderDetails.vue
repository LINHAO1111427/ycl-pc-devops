<script setup lang="ts">
	import HeaderTop from '@/components/Header/HeaderTop.vue'
	import { Footer, IconStart, RenderIcon, IconFaxiangmu } from '@/components'
	import { ref, onMounted, h, computed } from 'vue'
	import { createDiscreteApi, useMessage } from 'naive-ui'
	import { useRouter, useRoute } from 'vue-router'
	import { getProject, getOldApplyItem } from '@/api/home'

	const isCollection = ref(false)
	const projectDetail = ref<any>({})
	const loading = ref(false)
	const historyApplyList = ref<any[]>([])
	const historyLoading = ref(false)

	const { dialog } = createDiscreteApi(['dialog'])
	const message = useMessage()
	const router = useRouter()
	const route = useRoute()

	// 格式化金额（分转元）
	const formatPrice = (price: number) => {
		return (price / 100).toFixed(2)
	}

	// 格式化日期
	const formatDate = (dateTime: string) => {
		if (!dateTime) return ''
		return new Date(dateTime).toLocaleDateString('zh-CN')
	}

	// 项目状态映射
	const statusMap: Record<number, string> = {
		2: '项目提交中',
		0: '审核通过',
		1: '审核未通过', 
		99: '已取消'
	}

	// 经验等级映射
	const experienceLevelMap: Record<number, string> = {
		1: '入门级',
		2: '中级',
		3: '专家'
	}

	// 获取项目详情
	const getProjectDetail = async () => {
		const projectId = route.query.id
		if (!projectId) {
			message.error('缺少项目ID参数')
			return
		}

		loading.value = true
		try {
			const res = await getProject({ id: projectId })
			if (res.code !== 0) {
				message.error(res.msg || '获取项目详情失败')
				return
			}
			projectDetail.value = res.data
		} catch (error) {
			message.error('网络错误，请重试')
			console.error('获取项目详情失败:', error)
		} finally {
			loading.value = false
		}
	}

	// 获取历史申请项目列表
	const getHistoryApplyList = async () => {
		historyLoading.value = true
		try {
			const userId = localStorage.getItem('userId')
			if (!userId) {
				console.warn('用户未登录，无法获取历史申请项目')
				return
			}

			const res = await getOldApplyItem({ 
				workerId: userId,
				pageNo: 1,
				pageSize: 20
			})
			
			if (res.code !== 0) {
				console.error('获取历史申请项目失败:', res.msg)
				return
			}
			
			historyApplyList.value = res.data?.list || []
		} catch (error) {
			console.error('获取历史申请项目网络错误:', error)
		} finally {
			historyLoading.value = false
		}
	}

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
					{ default: () => '单刻达平台订单取消协议' }),
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

	// 计算显示的历史申请项目列表
	const displayHistoryList = computed(() => {
		if (historyApplyList.value.length === 0) return []
		return isShow.value ? historyApplyList.value : historyApplyList.value.slice(0, 5)
	})

	// 格式化时间范围
	const formatTimeRange = (startTime: string, endTime: string) => {
		if (!startTime || !endTime) return ''
		const start = new Date(startTime).toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit' })
		const end = new Date(endTime).toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit' })
		return `${start} - ${end}`
	}

	// 页面加载时获取项目详情和历史申请项目
	onMounted(() => {
		getProjectDetail()
		getHistoryApplyList()
	})
</script>
<template>
    <div class="easy">
        <!-- 加载状态 -->
        <div class="talents-container" v-if="loading" style="display: flex; justify-content: center; align-items: center; height: 400px;">
            <n-spin size="large" />
        </div>
        <!-- 项目详情内容 -->
        <div class="talents-container" v-else-if="projectDetail.id">
            <div class="order-top">
                <div class="order-top-title">{{ projectDetail.title || '项目标题' }}</div>
                <div class="order-top-btns">
                    <n-button type="primary" ghost @click="$router.push('/client/addclient')">
                        工作编辑
                    </n-button>
                    <n-button type="primary" @click="$router.push(`/client/order-pay?id=${projectDetail.id}`)">
                        确认为该项目付款
                    </n-button>
                </div>
            </div>
            <div class="order-time">
                <span>{{ formatDate(projectDetail.createTime) }}</span>
                <span>{{ projectDetail.district || '全国' }}</span>
            </div>
            <div class="order-cn">
                {{ projectDetail.description || '项目描述信息' }}
            </div>

            <n-flex class="positions-details_type" align="center" justify="space-evenly" :wrap="false">
                <div class="details_type-item">
                    <RenderIcon :icon="IconFaxiangmu" fill="#808080" size="30" />
                    <n-flex vertical>
                        <div class="type-item-title">{{ projectDetail.deliveryType === 10 ? '一次性项目' : '里程碑项目' }}</div>
                        <div>项目类型</div>
                    </n-flex>
                </div>
                <n-divider vertical style="height: 30px" />
                <div class="details_type-item">
                    <RenderIcon icon="icon-yusuanzonge" fill="#808080" size="30" />
                    <n-flex vertical>
                        <div class="type-item-title">￥{{ formatPrice(projectDetail.totalBudget || 0) }}</div>
                        <div>总预算</div>
                    </n-flex>
                </div>
                <n-divider vertical style="height: 30px" />
                <div class="details_type-item">
                    <RenderIcon icon="icon-jiangpai" fill="#808080" size="30" />
                    <n-flex vertical>
                        <div class="type-item-title">{{ experienceLevelMap[projectDetail.experienceLevel] || '入门级' }}</div>
                        <div class="ellipsis-text" :title="projectDetail.preferredQualification">
                            {{ projectDetail.preferredQualification || '项目资格要求' }}
                        </div>
                    </n-flex>
                </div>
            </n-flex>
            <div class="more-title">技能和专业知识</div>
            <div class="more-btns">
                <n-tag 
                    v-for="skill in projectDetail.projectSkills" 
                    :key="skill.skillId"
                    :color="{textColor:'#808080',borderColor:'#E9E9E9',color:'#EDEDED'}" 
                    round
                >
                    {{ skill.skillName }}
                </n-tag>
                <n-tag 
                    v-if="!projectDetail.projectSkills?.length"
                    :color="{textColor:'#808080',borderColor:'#E9E9E9',color:'#EDEDED'}" 
                    round
                >
                    暂无技能要求
                </n-tag>
            </div>
            <div class="more-cn">
                历史工作发布统计
                <span @click="$router.push('/client/work-ing')">进行中的工作</span>
            </div>

            <!-- 历史申请项目加载状态 -->
            <div v-if="historyLoading" style="text-align: center; padding: 40px 0;">
                <n-spin size="medium" />
                <div style="margin-top: 10px; color: #808080;">加载历史申请项目...</div>
            </div>

            <!-- 历史申请项目列表 -->
            <div v-else-if="historyApplyList.length > 0">
                <div class="more-item" v-for="(item, index) in displayHistoryList" :key="item.id || index">
                    <div class="more-item-left">
                        <div class="more-item-left-title" @click="onClickUrl">
                            {{ item.title || '项目标题' }}
                        </div>
                        <div class="more-item-left-rate">
                            <n-rate readonly size="large" :default-value="item.rating || 5" />
                            <span>{{ item.rating || 5 }}</span>
                        </div>
                        <div class="more-item-left-member">
                            <span>发布者:</span>
                            <span class="more-item-left-member-name">{{ item.publisherName || '发布者' }}</span>
                            <span class="more-item-end" v-if="item.publisherRating">
                                <n-rate readonly :default-value="item.publisherRating" />
                                <span>{{ item.publisherRating }}</span>
                            </span>
                            <span v-else class="more-item-end-cn">暂无发布者评分</span>
                        </div>
                    </div>
                    <div class="more-item-right">
                        <div class="more-item-right-time">
                            {{ formatTimeRange(item.startTime, item.endTime) || formatDate(item.createTime) }}
                        </div>
                        <div class="more-item-right-money">
                            固定价格￥{{ formatPrice(item.totalBudget || item.price || 0) }}
                        </div>
                    </div>
                </div>
                <a href="javascipt:;" class="more-a" @click="isShow = !isShow" v-if="historyApplyList.length > 5">
                    {{ !isShow ? `查看全部(${historyApplyList.length})` : '收起' }}
                </a>
            </div>

            <!-- 暂无历史申请项目 -->
            <div v-else style="text-align: center; padding: 40px 0; color: #808080;">
                暂无历史申请项目
            </div>
        </div>
        <!-- 项目不存在状态 -->
        <div class="talents-container" v-else style="display: flex; justify-content: center; align-items: center; height: 400px;">
            <n-empty description="项目不存在或已删除">
                <template #extra>
                    <n-button @click="$router.back()">返回</n-button>
                </template>
            </n-empty>
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

.ellipsis-text {
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    color: #808080;
}

::v-deep(.n-base-icon svg),
::v-deep(.n-base-icon) {
    //color: #F18B41;
}
</style>
