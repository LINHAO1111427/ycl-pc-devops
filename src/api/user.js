import request from '@/utils/request'

export function addUser(params) {
    return request.post('/app-api/member/auth/add', {params})
}

export function sendCode(params) {
    return request.post('/app-api/member/auth/send-sms-code', {params})
}

export function validateSmsCode(params) {
    return request.post('/app-api/member/auth/validate-sms-code', {params})
}

export function mobileLogin(params) {
    return request.post('/app-api/member/auth/login', {params})
}

export function isMobile(params) {
    return request.get('/app-api/member/auth/isMobile', {params})
}
//查询技能和专业知识
export function getUserSkill(params) {
    return request.get('/app-api/center-menber-info/getUserSkill', {params})
}


export function guideUserInfo(params) {
    return request.post('/app-api/member/guide/guideUserInfo', {params})
}

export function updatePasswordSms(params) {
    return request.post('/app-api/member/auth/update-password-sms', {params})
}

export function setTitle(params) {
    return request.post('/app-api/member/employer-guide/setTitle', {params})
}

export function setDescribe(params) {
    return request.put('/app-api/member/employer-guide/setDescribe', params)
}

export function setPreferredQualification(params) {
    return request.put('/app-api/member/employer-guide/setPreferredQualification', params)
}

export function setExperienceLevel(params) {
    return request.put('/app-api/member/employer-guide/setExperienceLevel', params)
}

export function setBudget(params) {
    return request.put('/app-api/member/employer-guide/setBudget', params)
}
//上传用户图片
export function upUserAvatar(params) {
    return request.post('/app-api/center/menber/up-user-avatar', {params})
}
//修改用户极速匹配和商业咨询状态
export function updateUserMatchOrConsulting(params) {
    return request.post('/app-api/center/menber/update-user-matchOrConsulting', {params})
}

