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
