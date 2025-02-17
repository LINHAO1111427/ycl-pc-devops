<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Tabs } from '@/components'

const router = useRouter()

const currentTabs = ref('password')

const options = [
  {
    label: '密码登录',
    value: 'password',
  },
  {
    label: '验证码登录',
    value: 'code',
  },
]

function onClickSwiperTabs(value: string) {
  currentTabs.value = value
}

function onClickBack() {
  router.back()
}

function login(){
	router.push('/talents')
}

const countdown = ref(0);
 
function startCountdown() {
  if (countdown.value === 0) {
	countdown.value = 60
	setInterval(() => {
	  if (countdown.value > 0) {
		countdown.value--
	  }
	}, 1000)
  }
};
</script>

<template>
  <div class="password_container">
    <div class="password_container_body">
      <n-flex class="password_header">
        <div class="password_header-back" @click="onClickBack">
          <img src="../../assets/img/back-image.png" alt="" /> 返回
        </div>
        <div class="password_header-logo">原创力</div>
      </n-flex>
      <div class="password_body">
        <div class="password_body_header">
          欢迎登录，请输入密码
        </div>
        <div class="password_body_ema">
          jasonfreelancer7@gmail.com
        </div>
		<Tabs :options="options" :value="currentTabs" @click="onClickSwiperTabs" style="width:100%;" />
        <div class="password_body_form">
          <n-form>
            <n-form-item :label="currentTabs == 'password' ? '密码' : '验证码'">
              <n-input :type="currentTabs == 'password' ? 'password' : 'text'" :placeholder="`请输入`" show-password-on="mousedown" />
			  <n-button secondary type="primary" style="margin-left: 10px;" :disabled="countdown > 0" @click="startCountdown" v-if="currentTabs == 'code'">
				  <span>{{ countdown > 0 ? `${countdown} 秒后重新获取` : '获取验证码' }}</span>
			  </n-button>
            </n-form-item>
          </n-form>
        </div>
        <n-flex style="width: 100%" justify="space-between" align="center">
          <n-checkbox>
            <span class="secondary-color-text-1">4小时内自动登录</span>
          </n-checkbox>
          <RouterLink to="/reset-password">
            忘记密码
          </RouterLink>
        </n-flex>
		<n-flex style="width: 100%;margin-top: 60px;" vertical :size="33">
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
        <n-button type="primary" block style="margin-top: 20px" size="large" @click="login">登录</n-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/public.scss";

.password_container {
  height: 100%;
  width: 100%;
  background-color: #D7E8E5;
  padding: 70px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.password_container_body {
  width: 814px;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0 0 30px 0 rgba(0, 101, 83, 0.1);
  border-radius: 16px 16px 16px 16px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;

  .password_header {
    position: absolute;
    width: 100%;
    padding: 20px;
    top: 0;
    left: 0;
  }

  .password_header-back {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;
    color: #333333;
    @include media-max-height-size(800px) {
      transform: scale(0.8);
    }

    @include media-max-height-size(650px) {
      transform: scale(0.65);
    }

    & img {
      width: 14px;
      height: 14px;
    }
  }

  .password_header-logo {
    margin-left: auto;
    font-size: 20px;
    color: $MainColor;
    @include media-max-height-size(800px) {
      transform: scale(0.8);
    }

    @include media-max-height-size(650px) {
      transform: scale(0.65);
    }
  }
}


.password_body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 100%;
  margin: 0 auto 0 auto;
  justify-content: center;
  @include media-max-height-size(800px) {
    transform: scale(0.8);
  }

  @include media-max-height-size(650px) {
    transform: scale(0.65);
  }

  ::v-deep(.n-button__content) {
    font-size: 16px !important;
  }
}

.password_body_header {
  height: 48px;
  font-family: PingFang SC, PingFang SC;
  font-weight: 800;
  font-size: 34px;
  color: #333333;
  line-height: 40px;
  text-align: center;
  font-style: normal;
  text-transform: none;
  width: 100%;
}

.password_body_ema {
  width: 218px;
  height: 22px;
  font-family: PingFang SC, PingFang SC;
  font-weight: 500;
  font-size: 16px;
  color: #606060;
  line-height: 19px;
  text-align: center;
  font-style: normal;
  text-transform: none;
  margin: 40px 0;
}

.password_body_form {
  width: 100%;
  margin-top:30px;
}

::v-deep(.n-form-item-label__text) {
  font-size: 14px;
}

</style>