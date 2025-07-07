import request from '@/utils/request'


//获取好友列表
export function friendList(params) {
    return request.get('/app-api/online/service/friend-list', {params})
}
