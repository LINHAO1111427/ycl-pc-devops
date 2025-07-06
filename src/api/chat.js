import request from '@/utils/request'


//获取好友列表
export function getUserInfoList(params) {
    return request.post('/app-api/member/online/communication/userInfo', {params})
}
