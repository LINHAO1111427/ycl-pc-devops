// store/index.js
import { createStore } from 'vuex'

const store = createStore({
    state: {
        avatar: localStorage.getItem('avatar') || '',
        userInfo: {},
        userData:{}
    },
    mutations: {
        setAvatar(state, avatar) {
            state.avatar = avatar
            localStorage.setItem('avatar', avatar)
        },
        setUserInfo(state, info) {
            state.userInfo = info
        },
        setUserData(state, info) {
            state.userData = info
        }
    },
    actions: {
        updateAvatar({ commit }, avatar) {
            commit('setAvatar', avatar)
        },
        updateUserInfo({ commit }, userInfo) {
            commit('setUserInfo', userInfo)
        },
        updateUserData({ commit }, userInfo) {
            commit('setUserData', userInfo)
        }
    },
    getters: {
        avatar: (state) => state.avatar,
        userInfo: (state) => state.userInfo,
        userData: (state) => state.userData
    }
})

export default store
