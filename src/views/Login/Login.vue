<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Tabs } from '@/components'

const currentTabs = ref('email')

const router = useRouter()

const options = [
  {
    label: '邮箱登录',
    value: 'email',
  },
  {
    label: '手机号登录',
    value: 'phone',
  },
]


function onClickSwiperTabs(value: string) {
  currentTabs.value = value
}

function onClickLogin() {
  router.push('/password')
}
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <div class="box-left">
        <div class="box-title">
          原创力
        </div>
        <img src="../../assets/img/login-back.png" alt="">
      </div>
      <div class="box-right">
        <div class="box-right-container">
          <div class="box-right-title">
            欢迎登录原创力
          </div>
          <Tabs :options="options" :value="currentTabs" @click="onClickSwiperTabs" />
          <div class="form-tabs-container">
            <n-form>
              <n-form-item :label="currentTabs === 'email' ? '邮箱' :'手机号'">
                <n-input :placeholder="`请输入${currentTabs === 'email' ? '邮箱' :'手机号'}`" />
              </n-form-item>
            </n-form>
            <div class="form-submitted">
              <n-button type="primary" block size="large" @click="onClickLogin">登录</n-button>
            </div>
            <div class="form-prompt">
              没有原创力账号？
              <RouterLink to="/register">
                <n-button type="primary" text>去注册</n-button>
              </RouterLink>
			</div>
          </div>
          <n-divider>
            <span class="divider-text">
              or
            </span>
          </n-divider>
          <div class="form-footer-icons">
            <div class="footer-icons-item">
              <img src="../../assets/img/weixin-logo.png" alt="">
              <div>微信</div>
            </div>
            <!-- <div class="footer-icons-item">
              <img src="../../assets/img/phone-logo.png" alt="">
              <div>Apple</div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/public.scss";


.login-container {
  background-color: #D7E8E5;
  width: 100%;
  height: 100%;
  padding: 70px 119px;
  box-sizing: border-box;

  @include media-max-height-size(800px) {
  }

  .login-box {
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    overflow: hidden;

    @include media-max-height-size(800px) {
      transform: scale(0.9);
    }
  }

  .box-left {
    width: 50%;
    height: 100%;
    position: relative;
    flex-shrink: 0;

    .box-title {
      position: absolute;
      top: 20px;
      left: 20px;
      font-size: 16px;
      color: $MainColor;
    }

    & img {
      height: 100%;
    }
  }

  .box-right {
    width: 100%;
    @include media-max-height-size(800px) {
      transform: scale(0.9);
    }

    @include media-max-height-size(646px) {
      transform: scale(0.8);
    }

    .box-right-container {
      width: 380px;
      margin: 0 auto;
    }

    .box-right-title {
      height: 48px;
      font-weight: 800;
      font-size: 32px;
      color: #333333;
      line-height: 40px;
      text-align: center;
      font-style: normal;
      text-transform: none;
      margin-bottom: 60px;
    }


    .box-tabs-item {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      cursor: pointer;

      .border-width {
        width: 100%;
        height: 4px;
        background-color: #EDEDED;
      }

      .box-tabs-item-text {
        font-size: 16px;
        color: $SecondaryColor-1;
      }

      &.active {
        .border-width {
          background-color: $MainColor;
        }

        .box-tabs-item-text {
          color: #333333;
        }
      }
    }


    .form-tabs-container {
      margin: 40px 0 60px 0;

      .form-prompt {
        text-align: center;
        margin-top: 10px;
        color: $SecondaryColor-1;
      }
    }

    .divider-text {
      color: $SecondaryColor-1;
      font-family: sans-serif !important;
    }

    .form-other {
      border: solid 1px red;
    }

    .form-footer-icons {
      display: flex;
      justify-content: space-evenly;
      margin-top: 40px;

      .footer-icons-item {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
		cursor: pointer;

        & img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  .form-submitted {
    ::v-deep(.n-button__content ) {
      font-size: 16px !important;
    }
  }

}
</style>