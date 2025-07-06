import {ref} from 'vue'
import {getUserInfo, smsLogin} from '@/api/home'
import {useStore} from 'vuex'

const userInfo = ref({})  // 用户详细信息，接口 getUserInfo 返回
const userData = ref({})  // 登录数据，接口 smsLogin 返回
const isLogin = ref(false)

export function useUser() {
    const store = useStore()

    // 设置登录数据（smsLogin返回）
    const setUserData = (data) => {
        userData.value = data
        isLogin.value = true
        localStorage.setItem('UserData', JSON.stringify(data))
        localStorage.setItem('token', data.accessToken)
        localStorage.setItem('userId', data.userId)
        store.dispatch('updateUserData', data)
    }

    // 设置用户详情数据（getUserInfo返回）
    const setUserInfo = (data) => {
        data.isMatch = (data.isMatch === 0)
        data.isConsulting = (data.isConsulting === 0)
        userInfo.value = data
        localStorage.setItem('avatar', data.avatar)
        store.dispatch('updateAvatar', data.avatar)
        localStorage.setItem('UserInfo', JSON.stringify(data))
        store.dispatch('updateUserInfo', data)
    }

    // 登录接口调用
    const loginAndInitUser = async ({userType, mobile, code, scene}) => {
        const params = {userType, mobile, code, scene}
        const res = await smsLogin(params)
        if (res.code === 0) {
            setUserData(res.data)
        }
        return res
    }

    // 获取用户详情接口调用
    const getUser = async () => {
        const res = await getUserInfo({userId: localStorage.getItem('userId')})
        if (res.code === 0) {
            setUserInfo(res.data)
        }
        return res
    }

    // 加载缓存数据
    const loadCache = () => {
        const cachedUserData = localStorage.getItem('UserData')
        if (cachedUserData) {
            userData.value = JSON.parse(cachedUserData)
            isLogin.value = true
            store.dispatch('updateUserData', userData.value)
        }
        const cachedUserInfo = localStorage.getItem('UserInfo')
        if (cachedUserInfo) {
            userInfo.value = JSON.parse(cachedUserInfo)
            store.dispatch('updateUserInfo', userInfo.value)
        }
    }
    const getUserData = () => {
        return userData.value
    }

    return {
        userData,
        userInfo,
        isLogin,
        setUserData,
        setUserInfo,
        loginAndInitUser,
        getUser,
        loadCache,
        getUserData
    }
}
