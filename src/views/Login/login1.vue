<template>
  <div>
    <div v-if="!isMobileByWidth()" class="logo">单刻达</div>
    <div class="page-container">
      <div class="card">
        <n-icon v-if="!isMobileByWidth()" size="24" class="back-icon" @click="goBack(false)">
          <arrow-back/>
        </n-icon>
        <!-- 绑定 key，tabType 变化时强制重新渲染 -->
        <n-tabs v-model:value="activeTab" :key="tabKey" type="line" justify-content="center">
          <n-tab-pane name="setPassword" tab="设置密码" v-if="tabType === 4">
            <n-input v-model:value="password" placeholder="请输入密码" type="password" class="verify-input"/>
            <n-input v-model:value="newPassword" placeholder="请再次输入密码" type="password" class="verify-input"/>
            <n-button type="primary" class="submit-btn" @click="updatePassword">确认</n-button>
            <div class="restPassword" style="margin-bottom: 40px;">
              想起密码了？
              <span class="register-link" @click="goBack(true)">去登录</span>
            </div>
          </n-tab-pane>
          <n-tab-pane name="sendCode" tab="输入验证码" v-if="tabType === 3">
            <div class="verify-container">
              <p class="verify-text">已发送验证码到 {{ email || phone }}</p>
              <n-input-group>
                <n-input
                    placeholder=""
                    v-for="(num, index) in codeArray"
                    :key="index"
                    v-model:value="codeArray[index]"
                    maxlength="1"
                    class="verify-input1"
                    @input="handleInput(index)"
                    @keydown.backspace="handleBackspace(index)"
                    @paste="handlePaste"
                    ref="inputs"
                />
              </n-input-group>
              <n-button type="primary" class="submit-btn" @click="nextTabFunc('setPassword')">
                确认
              </n-button>
              <div class="restPassword">
                没收到验证码？
                <span class="register-link" @click="resendCode">重新发送</span>
              </div>
            </div>
          </n-tab-pane>
          <n-tab-pane name="recoverPassword" tab="找回密码" v-if="tabType === 2">
            <n-input v-model:value="phone" :placeholder="(backActiveTab === 'register')?'请输入手机号':'请输入邮箱'"
                     class="verify-input"/>
            <n-button type="primary" class="submit-btn" @click="nextTabFunc('sendCode')">发送验证码</n-button>
            <div class="restPassword" style="margin-bottom: 40px;">
              想起密码了？
              <span class="register-link" @click="goBack(true)">去登录</span>
            </div>
          </n-tab-pane>
          <n-tab-pane name="register" tab="自由职业者" v-if="tabType === 1">
            <n-input v-model:value="phone" placeholder="请输入手机号" class="verify-input"/>
            <n-input v-model:value="password" placeholder="请输入密码" type="password" class="verify-input"/>
            <div class="restPassword" @click="nextTabFunc('recoverPassword')">忘记密码？</div>
            <n-button type="primary" class="submit-btn" @click="login">登录</n-button>
            <div class="restPassword">
              没有账号？
              <RouterLink to="/register" class="register-link">去注册</RouterLink>
            </div>
          </n-tab-pane>
          <n-tab-pane name="login" tab="企业" v-if="tabType === 1">
            <n-input v-model:value="phone" placeholder="请输入手机号" class="verify-input"/>
            <n-input v-model:value="password" placeholder="请输入密码" type="password" class="verify-input"/>
            <div class="restPassword" @click="nextTabFunc('recoverPassword')">忘记密码？</div>
            <n-button type="primary" class="submit-btn" @click="login">登录</n-button>
            <div class="restPassword">
              没有账号？
              <RouterLink to="/register" class="register-link">去注册</RouterLink>
            </div>
          </n-tab-pane>
        </n-tabs>
<!--        <n-button text class="wechat-btn" v-if="tabType === 1">微信登录</n-button>-->
        <div class="footer-text" v-if="tabType === 1">
          通过手机注册，即表示您同意接受我们的
          <a href="#">《用户服务协议》</a> 和 <a href="#">《隐私政策》</a>
        </div>
      </div>
    </div>
    <footer v-if="!isMobileByWidth()">
      单刻达 © 2024 京ICP备18053355号-2 京公网安备 11010420247559号 版权声明 问题反馈 在线沟通
    </footer>
  </div>
</template>

<script setup>
import {NButton, NInput, NTabs, NTabPane, NIcon} from "naive-ui";
import {ArrowBack} from "@vicons/ionicons5";
import {useRouter} from "vue-router";

const router = useRouter();

const activeTab = ref("register");
const backActiveTab = ref("");
const phone = ref("");
const email = ref("");
const password = ref("");
const newPassword = ref("");
const tabType = ref(1);
const tabKey = ref(0); // 关键点：每次切换 tabType 都更新 tabKey
import {ref, watch, nextTick} from 'vue'

const codeArray = ref(Array(4).fill('')) // 6位验证码
const inputs = ref([]) // 绑定输入框
const isCodeComplete = ref(false) // 验证码是否填满
const userType= ref(1)

watch(activeTab, (newVal, oldVal) => {
  if(newVal==='register'){
    userType.value=1
  }
  if(newVal==='login'){
    userType.value=0
  }
})
import {mobileLogin, isMobile, sendCode, validateSmsCode, updatePasswordSms} from '@/api/user'
import {useMessage} from 'naive-ui'
// 创建 message 实例
const message = useMessage()
// 监听输入框，判断是否填满
localStorage.clear();
watch(codeArray, (newVal) => {
  isCodeComplete.value = newVal.every((char) => char !== '')
})
const isMobileByWidth = () => {
  return window.innerWidth < 768
}

// 输入后自动跳转
const handleInput = (index) => {
  if (codeArray.value[index] && index < 5) {
    nextTick(() => inputs.value[index + 1].focus())
  }
}

// 退格自动回退
const handleBackspace = (index) => {
  if (!codeArray.value[index] && index > 0) {
    nextTick(() => inputs.value[index - 1].focus())
  }
}

// 支持粘贴验证码
const handlePaste = (event) => {
  const pasteData = event.clipboardData.getData('text').slice(0, 4).split('')
  pasteData.forEach((char, index) => {
    if (inputs.value[index]) codeArray.value[index] = char
  })
}

// 确认验证码
const confirmCode = () => {
  console.log('验证码:', codeArray.value.join(''))
}

// 重新发送验证码
const resendCode = () => {
  console.log('重新发送验证码')
}
const goBack = (type) => {
  if (tabType.value !== 1) {
    if (tabType.value === 2 || type) {
      activeTab.value = backActiveTab.value
      tabType.value = 1
    } else {
      activeTab.value = ["recoverPassword", "sendCode", "setPassword"][tabType.value - 3]
      tabType.value--
    }
    tabKey.value++
  } else {
    router.back();
  }
};

// 切换 tabType 并更新 key，强制 tabs 重新渲染
const nextTabFunc = async (tabName) => {
  if (tabType.value === 1) {
    backActiveTab.value = activeTab.value
  }
  if (tabName === 'sendCode') {
    try {
      const res = await isMobile({mobile: phone.value})
      if (res.code !== 0) {
        message.error(res.msg)
        return
      }
      const res1 = await sendCode({
        mobile: phone.value,
        scene: 0
      })
      if (res1.code === 0) {
        message.success('验证码已发送！')
      } else {
        message.error(res1.msg)
        // return
      }
    } catch (error) {
      message.error('系统异常')
      return
    }
  }
  if (tabName === 'setPassword') {
    try {
      const res = await validateSmsCode({
        mobile: phone.value,
        scene: 2,
        code: codeArray.value.join('')
      })
      if (res.code !== 0) {
        message.error(res1.msg)
        return
      }
    } catch (error) {
      message.error('系统异常')
      return
    }
  }
  tabType.value++;
  activeTab.value = tabName; // 关键点：确保 activeTab 与 tabType 一致
  tabKey.value++; // 强制重新渲染 tabs
};
const updatePassword = async () => {
  try {
    const parem = {
      newPassword: newPassword.value,
      mobile: phone.value,
      password: password.value
    }
    const res = await updatePasswordSms(parem)
    if (res.code === 0) {
      await login()
      // router.push("/talents");
    } else {
      message.error(res.msg)
    }
  } catch (error) {
    message.error('系统异常')
  }
}
const login = async () => {
  // if (activeTab.value === "register") {
  try {
    const parem = {
      userType:userType.value,
      mobile: phone.value,
      password: password.value
    }
    const res = await mobileLogin(parem)
    if (res.code === 0) {
      localStorage.setItem('LoginData', JSON.stringify({userType: res.data.userType, isLogin: true}))
      localStorage.setItem('token', res.data.accessToken)
      localStorage.setItem('userId', res.data.userId)
      if(res.data.isGuideStatus===1){
        router.push(`/userAuthentication/${res.data.userType}`)
        return
      }
      if (res.data.userType === 1) {
        router.push("/talents");
      } else {
        router.push("/client/index");
      }
    } else {
      message.error(res.msg)
    }
  } catch (error) {
    message.error('登录失败')
  }
  // } else {
  //   router.push("/client/index");
  // }
};
</script>

<style scoped>
.verify-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.verify-text {
  font-size: 16px;
  color: #666;
}

.n-input-group {
  color: #000000;
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: space-evenly;
}

.verify-input1 {
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  border-radius: 6px;
  background: #ebf1f6;
}

.submit-btn {
  width: 100%;
  margin-top: 10px;
}

.restPassword {
  font-size: 14px;
  color: #666;
}

.register-link {
  color: #3BC8B4;
  cursor: pointer;
}


.restPassword {
  cursor: pointer;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  color: #333;
  line-height: 22px;
  text-align: right;
  margin-top: 10px;
}

.register-link {
  color: #3BC8B4;
  font-size: 16px;
  cursor: pointer;
}

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

.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  //margin: 0 360px;
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

.submit-btn {
  width: 100%;
  height: 40px;
  background: #00b4aa;
  color: white;
  font-size: 16px;
  margin-top: 15px;
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
  color: #999;
  line-height: 22px;
  text-align: center;
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
