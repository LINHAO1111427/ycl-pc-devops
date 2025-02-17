<script setup lang="ts">
import { useRouter } from 'vue-router'

const emit = defineEmits(['back'])
const router = useRouter()

function onClickBack() {
  emit('back')
}

function reset(){
	router.push('/login')
}
</script>

<template>
  <div class="password-container-box">
    <n-flex class="password_header" justify="space-between">
      <div class="password_header-back" @click="onClickBack">
        <img src="../../../assets/img/back-image.png" alt="" /> 返回
      </div>
      <div class="password_header-logo">原创力</div>
    </n-flex>
    <div class="container-box-data">
      <div class="password_body_header">
        更改密码
      </div>
      <div class="password_body_ema">
        输入邮箱后，点击发送验证码，输入验证码后即可更改密码
      </div>
      <div class="password_body_ema" style="margin-top: 20px;font-size: 16px">
        jasonfreelancer7@gmail.com
      </div>
      <div class="password_body_form" style="margin-top: 10px">
        <n-form style="margin-top: 0">
          <n-form-item label="请输入新密码">
            <n-input
              type="password"
              show-password-on="mousedown"
              placeholder="请输入新密码"
            />
          </n-form-item>
          <n-form-item label="确认密码">
            <n-input
              type="password"
              show-password-on="mousedown"
              placeholder="请输入密码"
            />
          </n-form-item>
        </n-form>
        <div class="password_body_form_submit">
          <n-button block type="primary" size="large" @click="reset">重置密码</n-button>
          <div class="form-prompt">
            想起密码了？
            <RouterLink to="/login">
              <n-button type="primary" text>登录</n-button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
