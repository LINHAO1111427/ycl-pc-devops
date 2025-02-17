<script setup lang="ts">

import { TrellisCipher } from '@/components'

const emit = defineEmits(['back', 'confirm'])

function onClickBack() {
  emit('back')
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
        输入验证码
      </div>
      <div class="password_body_ema">
        输入邮箱后，点击发送验证码，输入验证码后即可更改密码
      </div>
      <div class="password_body_ema" style="margin-top: 20px;font-size: 16px">
        jasonfreelancer7@gmail.com
      </div>
      <div class="password_body_form" style="margin-top: 10px">
        <n-form style="margin-top: 0">
          <n-form-item label="验证码">
            <TrellisCipher></TrellisCipher>
          </n-form-item>
        </n-form>
        <div class="password_body_form_submit">
          <n-button block type="primary" size="large" @click="emit('confirm')">确定</n-button>
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
