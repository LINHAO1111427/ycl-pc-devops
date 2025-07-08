<template>
    <div class="easy">
        <!-- 加载状态 -->
        <div class="talents-container" v-if="loading" style="display: flex; justify-content: center; align-items: center; height: 400px;">
            <n-spin size="large" />
        </div>
        
        <!-- 项目详情内容 -->
        <div class="talents-container" v-else-if="projectDetail.id">
            <div class="page-header">
                <h1>订单详情</h1>
                <div class="header-decoration"></div>
            </div>

            <div class="order-summary-card">
                <div class="summary-header">
                    <div class="summary-icon">
                        📋
                    </div>
                    <div class="summary-title">项目信息概览</div>
                </div>
                
                <div class="project-main-info">
                    <div class="project-title">
                        <span class="title-icon">📝</span>
                        {{ projectDetail.title || '项目标题' }}
                    </div>
                    
                    <div class="budget-display">
                        <span class="budget-label">项目预算</span>
                        <span class="budget-amount">￥{{ formatPrice(projectDetail.totalBudget) }}</span>
                    </div>
                </div>
            </div>

            <div class="project-details-grid">
                <div class="detail-card">
                    <div class="detail-header">
                        <span class="detail-icon">⚡</span>
                        <span class="detail-label">项目类型</span>
                    </div>
                    <div class="detail-value">{{ projectDetail.deliveryType === 10 ? '一次性项目' : '里程碑项目' }}</div>
                </div>

                <div class="detail-card">
                    <div class="detail-header">
                        <span class="detail-icon">📅</span>
                        <span class="detail-label">发布时间</span>
                    </div>
                    <div class="detail-value">{{ formatDate(projectDetail.createTime) }}</div>
                </div>

                <div class="detail-card">
                    <div class="detail-header">
                        <span class="detail-icon">📍</span>
                        <span class="detail-label">项目地区</span>
                    </div>
                    <div class="detail-value">{{ projectDetail.district || '全国' }}</div>
                </div>
            </div>

            <div class="project-description-card">
                <div class="description-header">
                    <span class="description-icon">📄</span>
                    <span class="description-title">项目详情</span>
                </div>
                <div class="description-content">
                    {{ projectDetail.description || '项目描述信息' }}
                </div>
            </div>

            <div class="action-buttons">
                <div class="button-container">
                    <n-button 
                        size="large" 
                        quaternary 
                        type="primary" 
                        class="paid-button"
                        @click="handleAlreadyPaid"
                    >
                        已付款
                    </n-button>
                    <n-button 
                        size="large" 
                        type="primary" 
                        class="pay-button"
                        @click="showModal = !showModal"
                    >
                        确认支付
                    </n-button>
                </div>
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


    <n-modal v-model:show="showModal">
        <n-card class="payment-modal" :bordered="false" size="huge" role="dialog" aria-modal="true">
            <div class="payment-header">
                <div class="payment-title">
                    💳 请您尽快付款
                </div>
                <div class="payment-subtitle">
                    为了您的项目能够顺利进行，请及时完成付款
                </div>
            </div>
            
            <div class="qr-container">
                <div class="qr-code">
                    <div class="qr-placeholder">
                        📱
                        <span>二维码</span>
                    </div>
                </div>
                <div class="scan-text">扫描二维码付款</div>
                <div class="support-text">支持微信支付、支付宝支付、信用卡支付</div>
            </div>

            <template #footer>
                <div class="payment-buttons">
                    <n-button 
                        size="large" 
                        quaternary 
                        type="primary" 
                        @click="showModal = false"
                        class="cancel-btn"
                    >
                        取消
                    </n-button>
                    <n-button 
                        size="large" 
                        type="primary" 
                        @click="handlePaymentComplete"
                        class="confirm-btn"
                    >
                        已完成付款
                    </n-button>
                </div>
            </template>
        </n-card>
    </n-modal>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMessage } from 'naive-ui'
import { getProject } from '@/api/home'

const showModal = ref(false)
const projectDetail = ref({})
const loading = ref(false)
const route = useRoute()
const router = useRouter()
const message = useMessage()

// 格式化金额（分转元）
const formatPrice = (price) => {
    if (!price) return '0.00'
    return (price / 100).toFixed(2)
}

// 格式化日期
const formatDate = (dateTime) => {
    if (!dateTime) return ''
    return new Date(dateTime).toLocaleDateString('zh-CN')
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

// 处理付款完成
const handlePaymentComplete = () => {
    showModal.value = false
    // 显示成功消息
    message.success('付款完成！正在跳转到生效的工作页面...')
    // 延迟跳转以显示消息
    setTimeout(() => {
        router.push('/client/work-ing')
    }, 1500)
}

// 处理已付款状态
const handleAlreadyPaid = () => {
    message.info('正在跳转到生效的工作页面...')
    setTimeout(() => {
        router.push('/client/work-ing')
    }, 1000)
}

// 页面加载时获取项目详情
onMounted(() => {
    getProjectDetail()
})
</script>
<style scoped>
.easy {
    width: 100%;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
    position: relative;
}

.talents-container {
    width: 1360px;
    margin: 0 auto;
    padding: 40px 20px;
    max-width: 100%;
}

@media screen and (max-width: 1360px) {
    .talents-container {
        width: 1200px;
        margin: 0 auto;
        padding: 40px 20px;
        max-width: 100%;
    }
}

/* 页面头部 */
.page-header {
    text-align: center;
    margin-bottom: 40px;
    position: relative;
}

.page-header h1 {
    font-weight: 600;
    font-size: 36px;
    color: #2c3e50;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header-decoration {
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #58968B, #4a7c59);
    margin: 16px auto;
    border-radius: 2px;
}

/* 订单概览卡片 */
.order-summary-card {
    background: linear-gradient(135deg, #ffffff 0%, #f8fffe 100%);
    border-radius: 20px;
    padding: 32px;
    margin-bottom: 32px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    border: 1px solid rgba(88, 150, 139, 0.1);
    position: relative;
    overflow: hidden;
}

.order-summary-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #58968B, #4a7c59);
}

.summary-header {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
}

.summary-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #58968B, #4a7c59);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    font-size: 18px;
    color: white;
}

.title-icon {
    font-size: 20px;
    margin-right: 8px;
}

.detail-icon {
    font-size: 18px;
    margin-right: 8px;
}

.description-icon {
    font-size: 20px;
    margin-right: 12px;
}

.summary-title {
    font-size: 20px;
    font-weight: 600;
    color: #2c3e50;
}

.project-main-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.project-title {
    font-size: 24px;
    font-weight: 600;
    color: #2c3e50;
    display: flex;
    align-items: center;
    flex: 1;
    min-width: 300px;
}

.budget-display {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.budget-label {
    font-size: 14px;
    color: #7f8c8d;
    margin-bottom: 4px;
}

.budget-amount {
    font-size: 32px;
    font-weight: 700;
    color: #58968B;
    text-shadow: 0 2px 4px rgba(88, 150, 139, 0.2);
}

/* 详情网格 */
.project-details-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 32px;
}

.detail-card {
    background: white;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.08);
    border: 1px solid rgba(88, 150, 139, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.detail-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 35px rgba(0,0,0,0.15);
}

.detail-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #58968B, #4a7c59);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.detail-card:hover::before {
    transform: scaleX(1);
}

.detail-header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
}

.detail-label {
    font-size: 14px;
    font-weight: 600;
    color: #7f8c8d;
    margin-left: 8px;
}

.detail-value {
    font-size: 18px;
    font-weight: 600;
    color: #2c3e50;
}

/* 项目描述卡片 */
.project-description-card {
    background: white;
    border-radius: 20px;
    padding: 32px;
    margin-bottom: 40px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    border: 1px solid rgba(88, 150, 139, 0.1);
}

.description-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 2px solid #f8f9fa;
}

.description-title {
    font-size: 18px;
    font-weight: 600;
    color: #2c3e50;
    margin-left: 12px;
}

.description-content {
    font-size: 16px;
    line-height: 1.8;
    color: #5a6c7d;
    text-align: justify;
}

/* 按钮区域 */
.action-buttons {
    margin-top: 40px;
    padding: 32px 0;
}

.button-container {
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
}

.paid-button,
.pay-button {
    min-width: 180px;
    height: 50px;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.paid-button {
    background: rgba(88, 150, 139, 0.1);
    border: 2px solid #58968B;
    color: #58968B;
}

.paid-button:hover {
    background: rgba(88, 150, 139, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(88, 150, 139, 0.3);
}

.pay-button {
    background: linear-gradient(135deg, #58968B, #4a7c59);
    border: none;
    color: white;
    box-shadow: 0 8px 25px rgba(88, 150, 139, 0.4);
}

.pay-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(88, 150, 139, 0.5);
}

/* 响应式设计 */
@media screen and (max-width: 768px) {
    .project-main-info {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .budget-display {
        align-items: flex-start;
        width: 100%;
    }
    
    .project-details-grid {
        grid-template-columns: 1fr;
    }
    
    .button-container {
        flex-direction: column;
        align-items: center;
    }
    
    .paid-button,
    .pay-button {
        width: 100%;
        max-width: 300px;
    }
}


/* 支付模态框样式 */
.payment-modal {
    width: 600px;
    border-radius: 20px;
    overflow: hidden;
    background: linear-gradient(135deg, #ffffff 0%, #f8fffe 100%);
    border: 1px solid rgba(88, 150, 139, 0.2);
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
}

.payment-header {
    text-align: center;
    margin-bottom: 32px;
}

.payment-title {
    font-size: 28px;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 8px;
}

.payment-subtitle {
    font-size: 14px;
    color: #7f8c8d;
    line-height: 1.5;
}

.qr-container {
    text-align: center;
    margin: 32px 0;
}

.qr-code {
    margin-bottom: 20px;
}

.qr-placeholder {
    width: 250px;
    height: 250px;
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    border-radius: 16px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px dashed #58968B;
    transition: all 0.3s ease;
}

.qr-placeholder:hover {
    background: linear-gradient(135deg, #e9ecef, #dee2e6);
    transform: scale(1.05);
}

.qr-placeholder::before {
    content: '';
    font-size: 48px;
    margin-bottom: 8px;
}

.qr-placeholder span {
    font-size: 16px;
    color: #58968B;
    font-weight: 600;
}

.scan-text {
    font-size: 16px;
    color: #2c3e50;
    margin-bottom: 8px;
    font-weight: 500;
}

.support-text {
    font-size: 12px;
    color: #7f8c8d;
}

.payment-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.cancel-btn,
.confirm-btn {
    min-width: 120px;
    height: 44px;
    border-radius: 22px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.cancel-btn {
    border: 2px solid #58968B;
    color: #58968B;
}

.cancel-btn:hover {
    background: rgba(88, 150, 139, 0.1);
    transform: translateY(-2px);
}

.confirm-btn {
    background: linear-gradient(135deg, #58968B, #4a7c59);
    border: none;
    color: white;
    box-shadow: 0 4px 15px rgba(88, 150, 139, 0.3);
}

.confirm-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(88, 150, 139, 0.4);
}

@media screen and (max-width: 768px) {
    .payment-modal {
        width: 90vw;
        max-width: 500px;
    }
    
    .payment-title {
        font-size: 24px;
    }
    
    .qr-placeholder {
        width: 200px;
        height: 200px;
    }
    
    .payment-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .cancel-btn,
    .confirm-btn {
        width: 100%;
        max-width: 200px;
    }
}
</style>