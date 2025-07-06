import axios from 'axios'
import {useMessage} from 'naive-ui'

// API 基础地址
const BASE_URL = import.meta.env.VITE_API_BASE_URL // || 'http://47.120.73.189:48080/dkd_api'//正式 http://39.96.170.33/dkd_api

// 创建 Axios 实例
const service = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {'Content-Type': 'application/json', 'tenant-id': '1'}
})

service.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }

        const method = config.method?.toLowerCase()
        if (method === 'post') {
            config.data = config.data.params
        }

        return config
    },
    error => {
        return Promise.reject(error)
    }
)


// 响应拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        const message = useMessage()
        const {response} = error
        if (response) {
            const {status, data} = response
            let msg = data.message || '请求出错'
            switch (status) {
                case 400:
                    msg = '请求参数错误'
                    break
                case 401:
                    msg = '未授权，请重新登录'
                    localStorage.removeItem('token')
                    break
                case 403:
                    msg = '无权限访问'
                    break
                case 404:
                    msg = '请求地址不存在'
                    break
                case 500:
                    msg = '服务器错误'
                    break
            }
            message.error(msg)
        }
        return Promise.reject(error)
    }
)

export default service
