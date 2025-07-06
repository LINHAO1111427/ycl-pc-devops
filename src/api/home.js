import request from '@/utils/request'

// 获取用户信息
export function getUserInfo(params) {
    return request.get('/app-api/member/square-freelancer/getUserInfo', {params})
}
//验证码登录
export function smsLogin(params) {
    return request.post('/app-api/member/auth/sms-login', {params})
}
//浏览 - 最佳匹配&最近浏览&我的收藏
export function squareFreelancerItem(params) {
    return request.get('/app-api/member/square-freelancer/item', {params})
}

// 获取工作详情信息
export function workInfo(params) {
    return request.get('/app-api/center-menber-info/work-info', {params})
}

//修改工作经历
export function updateUserWork(params) {
    return request.put('/app-api/center-menber-info/update-user-work', params)
}

//新增用户工作经理
export function saveUserWork(params) {
    return request.post('/app-api/center-menber-info/save-user-work', {params})
}

//删除工作经历
export function deleteUserWork(params) {
    return request.delete('/app-api/center-menber-info/delete-user-work', {params})
}

//收藏项目
export function createFreelancerCollect(params) {
    return request.post('/app-api/member/square-freelancer/create-freelancer-collect', {params})
}

//取消收藏项目
export function deleteFreelancerCollect(params) {
    return request.post('/app-api/member/square-freelancer/delete-freelancer-collect', {params})
}

//正在生效的工作
export function getNowItem(params) {
    return request.get('/app-api/member/afoot-job/get-now-item', {params})
}

//查询历史申请项目
export function getOldApplyItem(params) {
    return request.get('/app-api/member/afoot-job/get-old-apply-item', {params})
}

//查询历史工作项目
export function getOldItem(params) {
    return request.get('/app-api/member/afoot-job/get-old-item', {params})
}

//待确认咨询订单
export function pageConfirm(params) {
    return request.get('/app-api/member/square-consultation/page-confirm', {params})
}

//正在生效咨询订单
export function pageNow(params) {
    return request.get('/app-api/member/square-consultation/page-now', {params})
}

//历史商业咨询订单
export function pageOld(params) {
    return request.get('/app-api/member/square-consultation/page-old', {params})
}

//获取项目详情
export function getProject(params) {
    return request.get('/app-api/member/project/get', {params})
}
//获得人才统计 - 分页
export function freelancerCountPage(params) {
    return request.get('/app-api/system/home/freelancer-count-page', {params})
}
//获得人才统计 - 分页
export function getUserCount(params) {
    return request.get('/app-api/member/user-count/get', {params})
}
//查询交易流水分页
export function pageUserCount(params) {
    return request.get('/app-api/member/user-count/page', {params})
}

