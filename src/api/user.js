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

//查询用户信息
export function getUserMenberInfo(params) {
    return request.get('/app-api/center-menber-info/one', {params})
}

//新增用户语言等级
export function saveUserLanguageLeve(params) {
    return request.post('/app-api/center-menber-info/save-user-language-leve', {params})
}

//删除用户语言等级
export function deleteUserLanguageLeve(params) {
    return request.delete('/app-api/center-menber-info/delete-user-language-leve', {params})
}

//修改用户工作时长
export function updateWeeklyWorkHours(params) {
    return request.put('/app-api/center-menber-info/update-weekly-work-hours', params)
}

//新增用户教育信息
export function saveUserSchool(params) {
    return request.post('/app-api/center-menber-info/save-user-school', {params})
}

//删除大学信息
export function deleteUserSchool(params) {
    return request.delete('/app-api/center-menber-info/delete-user-school', {params})
}

//修改用户教育信息
export function updateUserSchool(params) {
    return request.put('/app-api/center-menber-info/update-user-school', params)
}

//查询用户教育信息
export function schoolInfo(params) {
    return request.get('/app-api/center-menber-info/school-info', {params})
}


//删除用户简介
export function deleteUserDuction(params) {
    return request.put('/app-api/center-menber-info/delete-user-selfIntroduction', params)
}

//新增用户简介
export function addUserDuction(params) {
    return request.post('/app-api/center-menber-info/save-user-selfIntroduction', {params})
}

//创建用户推荐
export function createUserRecommendation(params) {
    return request.post('/app-api/member/user-recommendation/create', {params})
}

//更新skill
export function saveUserSkill(params) {
    return request.put('/app-api/center-menber-info/update-user-skill', params)
}

//获取用户推荐分页
export function userRecommendationPage(params) {
    return request.get('/app-api/member/user-recommendation/page', {params})
}

// 查询用户已完成订单
export function userOrderPage(params) {
    return request.get('/app-api/member/user-order/page', {params})
}

//新增其他认证
export function saveUserCertificationsUrl(params) {
    return request.post('/app-api/center-menber-info/save-user-certificationsUrl', {params})
}

//删除其他认证
export function deleteUserCertificationsUrl(params) {
    return request.put('/app-api/center-menber-info/delete-user-certificationsUrl', params)
}

//创建用户商业咨询
export function createConsultation(params) {
    return request.post('/app-api/member/user-business-consultation/create', {params})
}

//
//用户商业咨询分页
export function userBusinessConsultationPage(params) {
    return request.get('/app-api/member/user-business-consultation/page', {params})
}

//获取用户商业咨询详情
export function getUserBusinessConsultation(params) {
    return request.get('/app-api/member/user-business-consultation/get', {params})
}

//更新商业咨询
export function updateUserBusinessConsultation(params) {
    return request.put('/app-api/member/user-business-consultation/update', params)
}
//查询当前用户身份信息
export function getUserType(params) {
    return request.get('/app-api/member/auth/select-switch-user-type', {params})
}
//
//切换用户
export function switchUserType(params) {
    return request.post('/app-api/member/auth/switch-user-type', {params})
}

