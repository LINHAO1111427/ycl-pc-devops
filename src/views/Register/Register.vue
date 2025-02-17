<script setup lang="ts">
import { Button, RenderIcon } from '@/components'
import { IconEnterprises, IconComputer, Tabs } from '@/components'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const current = ref('我是企业')

const isRegister = ref(false)

const tabsValue = ref('email')

const options = [
  {
    title: '我是企业',
    desc: '我有一个项目正在招募有能力的人',
    image: IconEnterprises,
  },
  {
    title: '我是自由职业者',
    desc: '我在寻找一个适合我的工作机会',
    image: IconComputer,
  },
]

const tabsOptions = [
  {
    label: '邮箱注册',
    value: 'email',
  },
  {
    label: '手机注册',
    value: 'mobile',
  },
]

const cityOptions = [
  {
    label: '北京',
    value: '北京',
  },
  {
    label: '上海',
    value: '上海',
  },
]

function onClickSelect(value: string) {
  current.value = value
}

function onClickSelectTabs(value: string) {
  tabsValue.value = value
}

function register(){
	if(current.value == '我是自由职业者'){
		router.push('/talents')
	}else{
		router.push('/client/index')
	}	
}
</script>

<template>
  <div class="register-container">
    <div class="register-container_body">
      <n-flex class="password_header">
        <div
          class="password_header-back"
          style="font-size: 16px"
          v-if="isRegister"
          @click="isRegister = false"
        >
          <img src="../../assets/img/back-image.png" alt="" />
          返回
        </div>
        <div class="password_header-logo">原创力</div>
      </n-flex>
      <template v-if="!isRegister">
        <div class="register-body">
          <div class="password_body_header">请选择您账号的身份</div>
          <n-flex vertical :size="40" style="margin-top: 60px">
            <n-flex
              v-for="item in options"
              align="center"
              :class="{
                'items-box-item': true,
                active: item.title === current,
              }"
              justify="center"
              @click="onClickSelect(item.title)"
            >
              <div>
                <RenderIcon
                  :icon="item.image"
                  :fill="item.title === current ? '#337D70' : ''"
                  size="40"
                />
              </div>
              <n-flex vertical>
                <div class="register-item-title">
                  {{ item.title }}
                </div>
                <div class="register-item-desc">
                  {{ item.desc }}
                </div>
              </n-flex>
            </n-flex>
          </n-flex>
          <div class="footer-container">
            <Button @click="isRegister = !isRegister">创建用户</Button>
            <div class="form-prompt">
              已拥有原创力账号？
              <RouterLink to="/login">
                <n-button type="primary" text>登录</n-button>
              </RouterLink>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="register-form-container">
          <Tabs
            :options="tabsOptions"
            :value="tabsValue"
            @click="onClickSelectTabs"
          ></Tabs>
          <n-form style="margin-top: 20px">
            <n-form-item :label="tabsValue == 'email' ? '邮箱' : '手机号'">
              <n-input :placeholder="tabsValue == 'email' ? '请输入邮箱' : '请输入手机号'" />
            </n-form-item>
            <n-form-item label="密码">
              <n-input placeholder="请输入密码" />
            </n-form-item>
            <n-form-item label="地区">
              <n-select placeholder="请选择地区" :options="cityOptions" />
            </n-form-item>
            <n-flex vertical :size="33">
              <n-checkbox>
                给我发有用的电子邮件，以找到有价值的工作和工作线索。
              </n-checkbox>
              <n-checkbox>
                我理解并同意原创力
                <n-button text type="primary" class="router-link">
                  服务条款
                </n-button>
                ，包括
                <n-button text type="primary" class="router-link">
                  用户协议
                </n-button>
				。
                <!-- 和
                <n-button text type="primary" class="router-link">
                  隐私政策
                </n-button> -->
              </n-checkbox>
            </n-flex>
            <n-button type="primary" block style="margin-top: 40px" @click="register">
              注册
            </n-button>
            <div class="form-prompt">
              已注册原创力账号?
              <RouterLink to="/login">
                <n-button type="primary" text>前往登录</n-button>
              </RouterLink>
            </div>
            <n-divider>
              <span class="divider-text">or</span>
            </n-divider>
            <div class="form-footer-icons">
              <div class="footer-icons-item">
                <img src="../../assets/img/weixin-logo.png" alt="" />
                <div>微信</div>
              </div>
              <!-- <div class="footer-icons-item">
                <img src="../../assets/img/phone-logo.png" alt="" />
                <div>Apple</div>
              </div> -->
            </div>
          </n-form>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/public.scss";


.register-container {
  height: 100%;
  background-color: #d7e8e5;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 70px;
  overflow: auto;

  .register-container_body {
    width: 814px;
    height: 100%;
    background: #ffffff;
    box-shadow: 0 0 30px 0 rgba(0, 101, 83, 0.1);
    border-radius: 16px 16px 16px 16px;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 500px;

    .password_header {
      position: absolute;
      top: 0;
      left: 0;
      padding: 20px;
      width: 100%;
    }

    .password_header-back {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      color: $SecondaryColor-1;
      margin-right: auto;

      @include media-max-height-size(800px) {
        transform: scale(0.6);
      }

      @include media-max-height-size(660px) {
        transform: scale(0.6);
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
        transform: scale(0.6);
      }

      @include media-max-height-size(660px) {
        transform: scale(0.6);
      }
    }
  }

  .password_body_header {
    width: 100%;
    height: 48px;
    font-family: PingFang SC, PingFang SC;
    font-weight: 800;
    font-size: 34px;
    color: #333333;
    line-height: 40px;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }

  .register-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    @include media-max-height-size(800px) {
      transform: scale(0.8);
    }

    @include media-max-height-size(660px) {
      transform: scale(0.7);
    }
  }

  .items-box-item {
    width: 350px;
    height: 98px;
    cursor: pointer;
    border-radius: 16px 16px 16px 16px;
    border: 2px solid #ededed;

    .register-item-title {
      width: 210px;
      height: 28px;
      font-weight: 500;
      font-size: 20px;
      line-height: 23px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      color: #333333;
    }

    .register-item-desc {
      width: 210px;
      height: 20px;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      color: #808080;
    }

    &.active {
      border: 2px solid #669d93;
      background: #84ccbf;
      cursor: pointer;

      .register-item-title {
        color: #337d70;
      }

      .register-item-desc {
        color: #337d70;
      }
    }
  }

  .footer-container {
    margin-top: 60px;
    width: 350px;
  }

  .form-prompt {
    margin-top: 10px;
    text-align: center;
    color: #333333;
  }

  .register-form-container {
    width: 396px;
    min-height: 500px;
    @include media-max-height-size(800px) {
      transform: scale(0.85);
    }

    @include media-max-height-size(660px) {
      transform: scale(0.7);
    }

    ::v-deep(.n-checkbox__label) {
      font-size: 13.5px !important;
    }

    ::v-deep(.n-button__content) {
      font-size: 13.5px;
    }

    ::v-deep(.n-checkbox__label) {
      padding-right: 0px !important;
    }

    .form-prompt {
      text-align: center;
      margin-top: 10px;
      color: $SecondaryColor-1;
    }

    .divider-text {
      color: $SecondaryColor-1;
      font-family: sans-serif !important;
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
}
</style>
