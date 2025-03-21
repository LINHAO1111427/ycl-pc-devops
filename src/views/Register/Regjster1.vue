<template>
  <div>
    <div class="logo">原创力</div>
    <div class="page-container">
      <div class="card">
        <n-icon size="24" class="back-icon" @click="goBack">
          <arrow-back/>
        </n-icon>
        <n-tabs v-model:value="activeTab" type="line" justify-content="center">
          <n-tab-pane name="register" tab="我要找工作">
            <n-input v-model:value="phone" placeholder="请输入手机号" class="verify-input"/>
            <n-input v-model:value="code" placeholder="请输入验证码" class="verify-input">
              <template #suffix>
                <n-button text class="verify-button">获取验证码</n-button>
              </template>
            </n-input>
            <n-input v-model:value="password" placeholder="请设置密码" type="password" class="verify-input"/>
            <n-button type="primary" class="submit-btn" @click="register">注册</n-button>
          </n-tab-pane>
          <n-tab-pane name="login" tab="我要招人">
            <n-input v-model:value="phone" placeholder="请输入手机号" class="verify-input"/>
            <n-input v-model:value="code" placeholder="请输入验证码" class="verify-input">
              <template #suffix>
                <n-button text class="verify-button">获取验证码</n-button>
              </template>
            </n-input>
            <n-input
                v-model:value="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="请设置密码"
                class="verify-input"
            >
              <template #suffix>
                <n-icon @click="togglePassword" class="toggle-icon" style="font-size: 20px;cursor: pointer;">
                  <component :is="showPassword ? EyeOutline : EyeOffOutline"/>
                </n-icon>
              </template>
            </n-input>
            <n-button type="primary" class="submit-btn" @click="register">注册</n-button>
          </n-tab-pane>
        </n-tabs>
        <n-button text class="wechat-btn">微信登录</n-button>
        <div class="footer-text">
          通过手机号、微信、QQ 注册，即表示您同意接受我们的
          <a href="#">《用户服务协议》</a> 和 <a href="#">《隐私政策》</a>
        </div>
      </div>
    </div>
    <footer>
      原创力 © 2024 京ICP备18053355号-2 京公网安备 11010420247559号 版权声明 问题反馈 在线沟通
    </footer>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {NButton, NInput, NTabs, NTabPane, NIcon} from "naive-ui";
import {ArrowBack} from "@vicons/ionicons5";
import {useRouter} from "vue-router";
import { addUser } from '@/api/user'
const activeTab = ref("register");
const phone = ref("");
const email = ref("");
const code = ref("");
const router = useRouter();
import {EyeOutline, EyeOffOutline} from "@vicons/ionicons5";

const goBack = () => {
  router.back();
};
const password = ref("");
const showPassword = ref(false);
const isUserAuthentication = ref(true);//是否填写了注册引导

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const register = async ()=> {

  try {
    const parem={
      userType:'0',
      mobile:'13580985387',
      code:'123456',
      scene:'1',
      email:'1021246894@qq.com',
      password:'123456'
    }
    const res = await addUser(parem)
    console.log(res)
  } catch (error) {
    console.error('获取用户失败', error)
  }

  debugger
  if (isUserAuthentication) {
    const type = ((activeTab.value === 'register') ? 1 : 2)
    router.push(`/userAuthentication/${type}`)
  } else {
    if (activeTab.value === 'register') {
      router.push('/talents')
    } else {
      router.push('/client/index')
    }
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
  margin: 0px 360px;
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
</style>