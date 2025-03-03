<template>
  <div class="page-container">
    <div class="logo">原创力</div>
    <div class="card">
      <n-icon size="24" class="back-icon" @click="goBack"><arrow-back /></n-icon>
      <n-tabs v-model:value="activeTab" type="line" justify-content="center">
        <n-tab-pane name="register" tab="我要招聘">
          <n-input v-model:value="phone" placeholder="请输入手机号 / 邮箱" />
          <div class="code-box">
            <n-input v-model:value="code" placeholder="请输入验证码" />
            <n-button text class="code-btn">获取验证码</n-button>
          </div>
          <n-input v-model:value="password" placeholder="请设置密码" type="password" />
          <n-button type="primary" class="submit-btn">注册</n-button>
        </n-tab-pane>
        <n-tab-pane name="login" tab="手机登录">
          <n-input v-model:value="phone" placeholder="请输入手机号" />
          <n-input v-model:value="password" placeholder="请输入密码" type="password" />
          <div class="extra-options">
            <a href="#">忘记密码？</a>
          </div>
          <n-button type="primary" class="submit-btn">登录</n-button>
          <div class="register-box">
            <span>没有账号？</span> <a href="#" @click="activeTab = 'register'">去注册</a>
          </div>
        </n-tab-pane>
      </n-tabs>
      <n-button text class="wechat-btn">微信登录</n-button>
      <div class="footer-text">
        通过手机号、微信、QQ 注册，即表示您同意接受我们的
        <a href="#">《用户服务协议》</a> 和 <a href="#">《隐私政策》</a>
      </div>
    </div>
    <footer>
      原创力 © 2024 京ICP备18053355号-2 京公网安备 11010420247559号 版权声明 问题反馈 在线沟通
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { NButton, NInput, NTabs, NTabPane, NIcon } from "naive-ui";
import { ArrowBack } from "@vicons/ionicons5";
import { useRouter } from "vue-router";

const activeTab = ref("login");
const phone = ref("");
const email = ref("");
const password = ref("");
const code = ref("");
const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #ffffff, #f5f5f5);
}

.logo {
  font-size: 24px;
  color: #00b4aa;
  margin-bottom: 20px;
  font-weight: bold;
}

.card {
  width: 400px;
  padding: 30px;
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
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
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