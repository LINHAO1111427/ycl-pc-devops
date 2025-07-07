import request from '@/utils/request'

//发布项目需求
export function createProject(params) {
    return request.post('/app-api/member/project/create', {params})
}

// 获取用户信息
export function userBest(params) {
    return request.get('/app-api/member/boss-filter/user-best', {params})
}

// 获取审核项目
export function getProject(params) {
    return request.get('/app-api/member/project/page', {params})
}

//取消项目
export function cancelProject(params) {
    return request.put('/app-api/member/project/cancel', params)
}

//商业咨询
export function orderPage(params) {
    return request.get('/app-api/member/advisory-service-order/page', {params})
}


//人才详情
export function userInfo(params) {
    return request.get('/app-api/member/boss-filter/user-info', {params})
}

//更多人才
export function userFilter(params) {
    return request.get('/app-api/member/boss-filter/user-filter', {params})
}
//急速匹配
export function userRqpid(params) {
    return request.get('/app-api/member/boss-filter/user-rqpid', {params})
}
//获取收藏列表
export function workerFavorList(params) {
    return request.get('/app-api/member/worker-favor-list/page', {params})
}
//收藏自由职业者
export function createWorkerFavor(params) {
    return request.post('/app-api/member/worker-favor-list/create', {params})
}
// 取消收藏
export function deleteWorkerFavor(params) {
    return request.delete('/app-api/member/worker-favor-list/delete', {params})
}
// 公司信息查询
export function getEmployerCompanyInfo(params) {
    return request.get('/app-api/xinyu/employer-company-info/get', {params})
}
//公司联系方式查询
export function getContact(params) {
    return request.get('/app-api/xinyu/employer-company-info/contact/get', {params})
}
