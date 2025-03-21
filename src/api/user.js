import request from '@/utils/request'

export function addUser(params) {
    return request.post('/app-api/member/auth/add', { params })
}

export function mobileLogin(data) {
    return request.post('/app-api/member/auth/login', data)
}
