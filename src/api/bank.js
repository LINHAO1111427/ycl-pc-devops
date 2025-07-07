import request from '@/utils/request'

//新增用户银行卡信息
export function addCenterMenberAccountBank(params) {
    return request.post('/app-api/center-menber-account-bank/add', {params})
}

// 查询用户银行卡信息
export function getBankInfo(params) {
    return request.get('/app-api/center-menber-account-bank/list', {params})
}

//新增银行卡
export function addBank(params) {
    return request.post('/app-api/center-menber-account-bank/add', {params})
}

//删除银行卡
export function delBank(params) {
    return request.post('/app-api/center-menber-account-bank/delect', {params})
}
