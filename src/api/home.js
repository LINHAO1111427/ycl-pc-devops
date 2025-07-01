import request from '@/utils/request'

export function createFreelancerCollect(params) {
    return request.post('/app-api/member/square-freelancer/create-freelancer-collect', {params})
}
// 获取用户信息
export function getUserInfo(params) {
    return request.get('/app-api/member/square-freelancer/getUserInfo', {params})
}
//浏览 - 最佳匹配&最近浏览&我的收藏
export function squareFreelancerItem(params) {
    return request.get('/app-api/member/square-freelancer/item', {params})
}

