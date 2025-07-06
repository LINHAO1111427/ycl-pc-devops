<script setup lang="ts">
import {Text} from '@/components'
import {computed, onMounted, ref} from "vue";
import {getUserType, switchUserType} from '@/api/user'
import {useStore} from 'vuex'
import {useMessage} from 'naive-ui'
import {useUser} from "@/api/useUser.ts";
import {useRouter} from "vue-router";
// 创建 message 实例
const message = useMessage()
const store = useStore()
const emit = defineEmits(['update:show'])
const router = useRouter()

function close() {
  emit('update:show')
}

const userDataList = ref([])
const userData = ref(JSON.parse(localStorage.getItem('UserData') || JSON.stringify({
  userType: 0
})))
const userInfo = ref({})
const {setUserData, getUser} = useUser()

const getData = async () => {
  console.log(userInfo.value)
  console.log(userData.value)
  const res = await getUserType({
    mobile: userInfo.value.mobile,
    userType: userData.value.userType
  })
  if (res.code === -1) {
    message.error(res.msg)
    return
  }
  userDataList.value = res.data
}
const switchFunc = async (item) => {
  if (item.loginType !== 1) {
    const res = await switchUserType({
      mobile: userInfo.value.mobile, //当前登录人手机号
      userType: userData.value.userType //当前登录用户类型（0企业用户 1自由职业者）
    })
    if (res.code === -1) {
      message.error(res.msg)
      return
    }
    setUserData(res.data)
    //刷新下数据
    await getUser()
    if (res.data.userType === 1) {
      router.push("/talents");
    } else {
      router.push("/client/index");
    }
  }
  emit('update:show')
}
onMounted(async () => {
  const res = await getUser()
  userInfo.value = res.data
  await getData()
})
</script>

<template>
  <n-modal :on-mask-click="close">
    <n-card :bordered="false" size="huge" role="dialog" aria-modal="true" style="width:730px">
      <n-flex :size="70" class="work-details-modal" vertical style="padding:80px 0;">
        <n-flex justify="center">
          <Text :size="34">
            切换账号
          </Text>
        </n-flex>
        <n-flex :size="40" vertical>
          <n-flex class="list" align="center" justify="center" v-for="(item,index) in userDataList"
                  @click="switchFunc(item)" style="cursor: pointer;">
            <n-avatar round size="large" :src="item.avatar"/>
            <n-flex vertical style="gap: 0px 12px;">
              <n-flex align="center" style="width: 200px">
                <Text :size="16">{{ item.name }}</Text>
                <Text :size="12" color="#58968B">{{ item.loginType === 1 ? '当前使用' : '' }}</Text>
              </n-flex>
              <Text :size="16" color="#808080">{{ item.userId }}</Text>
            </n-flex>
          </n-flex>
        </n-flex>
        <n-flex justify="center" :size="50">
          <n-button type="primary" class="naiveui-button-16" size="large"
                    style="width: 280px;" @click="$router.push('/register')">添加账号
          </n-button>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>
<style scoped lang="scss">
.work-details-modal {
  .list.cursor {
    cursor: pointer;
  }
}
</style>
