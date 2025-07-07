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

// 修改公司信息 - POST接口
export function updateEmployerCompanyInfo(params) {
    return request.post('/app-api/xinyu/employer-company-info/addOrUpdate', params)
}

// 提交保存公司联系方式 - PUT接口
export function updateCompanyContact(params) {
    return request.put('/app-api/xinyu/employer-company-info/contact/update', params)
}

// 上传图片到阿里云
export function uploadCompanyImages(params) {
    return request.post('/app-api/common/addOrUpdate', params)
}

// 保存营业执照图片
export function saveLicenseImages(params) {
    return request.post('/app-api/xinyu/employer-company-info/license-images/save', params)
}

// 查询营业执照图片
export function getLicenseImages(params) {
    return request.get('/app-api/xinyu/employer-company-info/license-images/get', {params})
}

// 个人地址接口
// 保存个人地址
export function savePersonalAddress(params) {
    return request.post('/app-api/xinyu/employer-company-info/personal-address/save', params)
}

// 获取个人地址
export function getPersonalAddress(params) {
    return request.get('/app-api/xinyu/employer-company-info/personal-address/get', {params})
}

// 企业地址接口
// 获取企业地址列表
export function getCompanyAddressList(params) {
    return request.get('/app-api/member/company-address/list', {params})
}

// 获取企业地址详情
export function getCompanyAddress(params) {
    return request.get('/app-api/member/company-address/get', {params})
}

// 创建企业地址
export function createCompanyAddress(params) {
    return request.post('/app-api/member/company-address/create', params)
}

// 更新企业地址
export function updateCompanyAddress(params) {
    return request.put('/app-api/member/company-address/update', params)
}

// 删除企业地址
export function deleteCompanyAddress(params) {
    return request.delete('/app-api/member/company-address/delete', {params})
}

// 设置默认企业地址
export function setDefaultCompanyAddress(params) {
    return request.put('/app-api/member/company-address/set-default', {params})
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
//获取中国所有城市
export function allCity(params) {
    return request.get('/app-api/system/area/all-city', {params})
}

