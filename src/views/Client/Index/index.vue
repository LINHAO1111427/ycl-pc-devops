<script setup lang="ts">
import HeaderClientTop from '@/components/Header/HeaderClientTop.vue'
import Index from '@/components/Client/Index.vue'
import {Footer, Button as RButton} from '@/components'
import {onMounted, ref, watchEffect} from 'vue'
import {useRoute} from 'vue-router'
import {getUserInfo} from '@/api/home'
import {useStore} from 'vuex'

const store = useStore()
import {useMessage} from 'naive-ui'
// 创建 message 实例
const message = useMessage()


const route = useRoute()

const type = ref(1)
const isInit = ref(false)
const userData = ref(JSON.parse(localStorage.getItem('UserInfo') || JSON.stringify({
  mobile: 0
})))
watchEffect(() => {
  type.value = route.query.type
})
const getUserInfoFunc = async () => {
  const data = userData.value
  data.isMatch = (data.isMatch === 0)
  data.isConsulting = (data.isConsulting === 0)
  store.dispatch('updateAvatar', data.avatar)
  store.dispatch('updateUserInfo', data)
}
onMounted(async () => {
  await getUserInfoFunc()
  isInit.value = true
  console.log(userData)
})
</script>

<template>
  <HeaderClientTop :is-login="false" :is-work="false"/>
  <div class="talents" v-if="isInit">
    <Index :userData="userData"/>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.talents {
  height: 100%;
  overflow: auto;
}
</style>
