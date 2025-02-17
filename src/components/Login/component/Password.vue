<script setup lang="ts">

import { Tabs } from '@/components'
import { ref } from 'vue'

const currentTabs = ref('email')

const options = [
  {
    label: '邮箱验证',
    value: 'email',
  },
  {
    label: '手机号验证',
    value: 'phone',
  },
]

const emit = defineEmits(['send'])

function onClickSwiperTabs(value: string) {
  currentTabs.value = value
}

function onClickSendCode() {
  emit('send')
}
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
        重置密码
      </div>
      <div class="password_body_ema">
        输入邮箱后，点击发送验证码，输入验证码后即可更改密码
      </div>
      <div class="password_body_form">
        <Tabs :options="options" :value="currentTabs" @click="onClickSwiperTabs" />
        <n-form style="margin-top: 40px">
          <n-form-item :label="currentTabs === 'email' ? '邮箱' :'手机号'">
            <n-input :placeholder="currentTabs === 'email' ? '请输入邮箱' :'请输入手机号'" />
          </n-form-item>
        </n-form>
		<n-flex vertical :size="33">
		  <n-checkbox>
		    <span class="secondary-color-text-1">我理解并同意原创力</span>
		    <n-button text type="primary" class="router-link">
		      <span>服务条款</span>
		    </n-button>
		    ，包括
		    <n-button text type="primary" class="router-link">
		      <span>用户协议</span>
		    </n-button>
		  </n-checkbox>
		</n-flex>
        <div class="password_body_form_submit">
          <n-button block type="primary" size="large" @click="onClickSendCode">发送验证码</n-button>
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
