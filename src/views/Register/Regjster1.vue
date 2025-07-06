<template>
  <div>
    <div v-if="!isMobileByWidth()" class="logo">单刻达</div>
    <div class="page-container">
      <div class="card">
        <n-icon v-if="!isMobileByWidth()" size="24" class="back-icon" @click="goBack">
          <arrow-back/>
        </n-icon>
        <n-tabs v-model:value="activeTab" type="line" justify-content="center">
          <n-tab-pane name="register" tab="我要找工作">
            <n-input v-model:value="phone" placeholder="请输入手机号" class="verify-input"/>
            <n-input v-model:value="code" placeholder="请输入验证码" class="verify-input">
              <template #suffix>
                <n-button
                    text
                    class="verify-button"
                    @click="sendCodeFunc"
                    :disabled="phone==='' || countdown > 0">
                  {{ countdown > 0 ? countdown + '秒后重试' : '获取验证码' }}
                </n-button>
              </template>
            </n-input>
            <n-input v-model:value="inviteMobile" placeholder="请输入邀请人手机号(非必填)" class="verify-input"/>

            <!--            <n-input-->
            <!--                v-model:value="password"-->
            <!--                :type="showPassword ? 'text' : 'password'"-->
            <!--                placeholder="请设置密码"-->
            <!--                class="verify-input"-->
            <!--            >-->
            <!--              <template #suffix>-->
            <!--                <n-icon @click="togglePassword" class="toggle-icon" style="font-size: 20px;cursor: pointer;">-->
            <!--                  <component :is="showPassword ? EyeOutline : EyeOffOutline"/>-->
            <!--                </n-icon>-->
            <!--              </template>-->
            <!--            </n-input>-->
            <n-button type="primary" class="submit-btn" @click="register">注册</n-button>
          </n-tab-pane>
          <n-tab-pane name="login" tab="我要招人">
            <n-input v-model:value="phone" placeholder="请输入手机号" class="verify-input"/>
            <n-input v-model:value="code" placeholder="请输入验证码" class="verify-input">
              <template #suffix>
                <n-button
                    text
                    class="verify-button"
                    @click="sendCodeFunc"
                    :disabled="phone==='' || countdown > 0">
                  {{ countdown > 0 ? countdown + '秒后重试' : '获取验证码' }}
                </n-button>
              </template>
            </n-input>
            <n-input v-model:value="inviteMobile" placeholder="请输入邀请人手机号(非必填)" class="verify-input"/>
            <!--            <n-input-->
            <!--                v-model:value="password"-->
            <!--                :type="showPassword ? 'text' : 'password'"-->
            <!--                placeholder="请设置密码"-->
            <!--                class="verify-input"-->
            <!--            >-->
            <!--              <template #suffix>-->
            <!--                <n-icon @click="togglePassword" class="toggle-icon" style="font-size: 20px;cursor: pointer;">-->
            <!--                  <component :is="showPassword ? EyeOutline : EyeOffOutline"/>-->
            <!--                </n-icon>-->
            <!--              </template>-->
            <!--            </n-input>-->
            <n-button type="primary" class="submit-btn" @click="register">注册</n-button>
          </n-tab-pane>
        </n-tabs>
        <!--        <n-button text class="wechat-btn">微信登录</n-button>-->
        <div class="footer-text">
          通过手机注册，即表示您同意接受我们的
          <a href="#">《用户服务协议》</a> 和 <a href="#">《隐私政策》</a>
        </div>
      </div>
    </div>
    <footer v-if="!isMobileByWidth()">
      单刻达 © 2025 津ICP备2025033117号 -1 版权声明 问题反馈 在线沟通
    </footer>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {NButton, NInput, NTabs, NTabPane, NIcon} from "naive-ui";
import {ArrowBack} from "@vicons/ionicons5";
import {useRouter} from "vue-router";
import {addUser, sendCode} from '@/api/user'
import {useMessage} from 'naive-ui'

// 创建 message 实例
const message = useMessage()
const activeTab = ref("register");
const inviteMobile = ref("");
const phone = ref("");
const email = ref("");
const code = ref("");
const router = useRouter();
import {EyeOutline, EyeOffOutline} from "@vicons/ionicons5";
import {useStore} from 'vuex'
import {getUserInfo} from "@/api/home.js";
import {useUser} from '@/api/useUser'

const store = useStore()
const isMobileByWidth = () => {
  return window.innerWidth < 768
}
const goBack = () => {
  router.back();
};
const password = ref("");
const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
const sendCodeFunc = async () => {
  if (phone.value === '') {
    message.warning('请输入手机号')
    return
  }
  try {
    const parem = {
      mobile: phone.value,
      scene: 0
    }
    const res = await sendCode(parem)
    if (res.code === 0) {
      message.success('验证码已发送！')
    } else {
      message.error(res.msg)
    }
  } catch (error) {
    message.error('验证发送失败')
  }
  // 这里写实际的发送验证码逻辑
  startCountdown()
}

// 60秒倒计时逻辑
const countdown = ref(0)
let timer = null

const startCountdown = () => {
  countdown.value = 60
  timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
      timer = null
    }
  }, 1000)
}
const {loginAndInitUser, getUser, setUserData} = useUser()
const login = async () => {
  // if (activeTab.value === "register") {
  try {
    const parem = {
      userType: (activeTab.value === "register" ? 1 : 0),
      mobile: phone.value,
      code: code.value,
      scene: 1
    }
    const res = await loginAndInitUser(parem)
    if (res.code === 0) {
      await getUser()
      message.success('注册成功')
      router.push(`/userAuthentication/${res.data.userType}`)
    } else {
      message.error(res.msg)
    }
  } catch (error) {
    message.error('登录失败')
  }
};
const register = async () => {

  try {
    const parem = {
      userType: ((activeTab.value === 'register') ? 1 : 0),
      mobile: phone.value,
      code: code.value,
      scene: 0,
      email: '',
      inviteMobile: inviteMobile.value
    }
    const res = await addUser(parem)
    if (res.code === 0) {
      setUserData(res.data)
      await getUser()
      message.success('注册成功')
      router.push(`/userAuthentication/${res.data.userType}`)
      // await login()
    } else {
      message.error(res.msg)
    }
    console.log(res)

    console.log(res)
  } catch (error) {
    console.error('获取用户失败', error)
  }
}
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown)
})

function handleKeyDown(e) {
  if (e.key === 'Enter') {
    register()
    // 执行你的逻辑
  }
}
</script>

<style scoped>
::v-deep(.n-tabs-tab__label) {
  display: flex;
  align-items: center;
  z-index: 1;
  font-weight: 400;
  font-size: 22px !important;
  line-height: 30px;
  text-align: left;
  font-style: normal;
}

::v-deep(.n-tab-pane) {
  padding-top: 24px !important;
}

::v-deep(.n-input) {
  height: 54px !important;
  line-height: 54px !important;
}

.verify-input {
  margin-top: 16px;
  background: #ebf1f6;
  border-radius: 6px;
  height: 54px;
}

:deep(.n-input__suffix) {
  display: flex;
  align-items: center;
}

.verify-button {
  color: #53b1e6;
  font-size: 14px;
}

.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  //margin: 0px 360px;
  align-items: center;
}

.logo {
  position: absolute;
  margin: 32px 360px 0px;
  width: 100%;
  font-size: 24px;
  color: #00b4aa;
  font-weight: bold;
}

.card {
  width: 520px;
  padding: 40px 60px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
}

.back-icon {
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
}

.code-box {
  display: flex;
  gap: 10px;
  margin: 10px 0;
}

.code-btn {
  color: #00b4aa;
}

.submit-btn {
  width: 100%;
  height: 40px;
  background: #00b4aa;
  color: white;
  font-size: 16px;
  margin-top: 15px;
}

.extra-options {
  text-align: right;
  margin-top: 5px;
  font-size: 14px;
}

.register-box {
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
}

.wechat-btn {
  background: #f5f5f5;
  width: 100%;
  height: 40px;
  margin-top: 10px;
  font-size: 16px;
}

.footer-text {
  height: 44px;
  font-weight: 400;
  font-size: 14px;
  color: #999999;
  line-height: 22px;
  text-align: center;
  font-style: normal;
  margin-top: 32px;
}

footer {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #666;
}

@media (max-width: 768px) {
  .card {
    width: 100%;
    padding: 40px 60px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px white;
    position: relative;
  }
}
</style>
