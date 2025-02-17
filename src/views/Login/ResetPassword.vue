<script setup lang="ts">
import Password from '@/components/Login/component/Password.vue'
import Captcha from '@/components/Login/component/Captcha.vue'
import PasswordReset from '@/components/Login/component/PasswordReset.vue'
import { ref } from 'vue'

const isCaptcha = ref('password')

</script>

<template>
  <div class="reset-password-container">
    <Password v-show="isCaptcha === 'password'" @send="isCaptcha = 'code'" @back="$router.back()" />
    <Captcha v-show="isCaptcha  === 'code'" @back="isCaptcha = 'password'" @confirm="isCaptcha = 'reset'" />
    <PasswordReset v-show="isCaptcha  === 'reset' " @back="isCaptcha = 'password'" />
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/public.scss";


.reset-password-container {
  height: 100%;
  width: 100%;
  background-color: #D7E8E5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 70px;

  .password-container-box {
    width: 814px;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 0 0 30px 0 rgba(0, 101, 83, 0.1);
    border-radius: 16px 16px 16px 16px;
    padding: 20px;
    box-sizing: border-box;
    position: relative;

    @include media-max-height-size(650px) {
      min-height: 500px;
    }


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


  .container-box-data {
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @include media-max-height-size(800px) {
      transform: scale(0.8);
    }

    @include media-max-height-size(650px) {
      transform: scale(0.65);
    }

  }

  .password_body_header {
    height: 48px;
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
    width: 100%;
    height: 28px;
    font-weight: 400;
    font-size: 20px;
    color: #606060;
    line-height: 23px;
    text-align: center;
    font-style: normal;
    text-transform: none;
    margin: 40px 0;
  }

  .password_body_form {
    width: 380px;
    margin: 80px auto 0 auto;
  }

  .password_body_form_submit {
    margin-top: 20px;
  }

  .form-prompt {
    margin-top: 10px;
    text-align: center;
    color: $SecondaryColor-1;
  }
}
</style>