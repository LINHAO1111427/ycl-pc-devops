<script setup lang="ts">
import { RenderIcon, Text } from '@/components'
import { CreateOutline } from '@vicons/ionicons5'
import { ref } from 'vue'
import Problem from '@/views/UserSet/Security/component/Problem.vue'
import ModifyProblem from '@/views/UserSet/Security/component/ModifyProblem.vue'
import EditPassword from '@/views/UserSet/Security/component/EditPassword.vue'

const current = ref('account')

const showModal = ref(false)

const showUpdate = ref(false)

const showEditPassword = ref(false)

const slider = [
  {
    title: '身份验证',
    to: 'account',
  },
  {
    title: '两步验证',
    to: 'auto',
  },
  {
    title: '安全问题',
    to: 'security',
  },
]


function onMouseenter(key: string) {
  current.value = key
  window.location.hash = key
}


</script>

<template>
    <div class="contact-container">
        <div class="contact-slider">
            <div v-for="item in slider" class="contact-slider-item" :class="current === item.to && 'active'"
                @click="onMouseenter(item.to)">
                <Text color="#000" :size="16">
                    {{ item.title }}
                </Text>
            </div>
        </div>
        <div class="contact-main">
            <div class="withdrawal-methods-header">密码和安全</div>
            <div class="user-contact-container" id="account">
                <n-flex align="center" justify="space-between">
                    <Text color="#333333" :size="24">身份验证</Text>
                </n-flex>
                <n-flex style="margin-top: 40px" align="center" justify="space-between">
                    <n-space align="center">
                        <RenderIcon icon="icon-wancheng" fill="#58968B" size="20" />
                        <Text :size="20">密码</Text>
                    </n-space>
                    <n-icon :size="22" class="cursor-pointer-style main-color-size" @click="showEditPassword = true">
                        <CreateOutline />
                    </n-icon>
                </n-flex>
                <Text style="margin-left: 32px; margin-top: 10px" class="secondary-color-text-1" :size="16">
                    选择长度至少为8个字符的强唯一密码。
                </Text>
            </div>
            <!-- <div class="user-contact-container" id="city">
        <n-flex align="center" justify="space-between">
          <Text color="#333333" :size="24">两步验证</Text>
          <n-icon :size="22" class="cursor-pointer-style main-color-size">
            <CreateOutline />
          </n-icon>
        </n-flex>
        <Text color="#808080" :size="16" style="margin-top: 10px">
          添加额外的安全层以阻止未经授权的访问并保护您的账户。
        </Text>
      </div> -->
            <n-flex class="user-contact-container" id="auto" :size="40" vertical>
                <n-flex vertical>
                    <Text color="#333333" :size="24">两步验证</Text>
                    <Text color="#808080" :size="16">
                        添加额外的安全层以阻止未经授权的访问并保护您的账户。
                    </Text>
                </n-flex>
                <n-flex align="center" justify="space-between">
                    <n-flex vertical>
                        <Text :size="16">移动应用提示</Text>
                        <Text :size="14" color="#808080">
                            从您的移动应用程序接受提示，以确认是您的身份。
                        </Text>
                    </n-flex>
                    <n-switch />
                </n-flex>
                <n-flex align="center" justify="space-between">
                    <n-flex vertical>
                        <Text :size="16">短信</Text>
                        <Text :size="14" color="#808080">
                            通过短信接收6位数验证码以确认身份。
                        </Text>
                    </n-flex>
                    <n-switch />
                </n-flex>
            </n-flex>
            <div class="user-contact-container" id="security" style="margin-bottom: 158px">
                <n-flex align="center" justify="space-between">
                    <n-space align="center">
                        <RenderIcon icon="icon-wancheng" fill="#58968B" size="20" />
                        <Text :size="20">安全问题</Text>
                    </n-space>
                    <n-icon :size="22" class="cursor-pointer-style main-color-size" @click="showModal = true">
                        <CreateOutline />
                    </n-icon>
                </n-flex>
                <Text style="margin-left: 32px; margin-top: 10px" class="secondary-color-text-1" :size="16">
                    回答您选择的问题以确认身份。
                </Text>
            </div>
        </div>
        <template v-if="!showUpdate">
            <Problem v-model:show="showModal" @confirm="showUpdate = true"></Problem>
        </template>
        <template v-else>
            <ModifyProblem v-model:show="showModal"></ModifyProblem>
        </template>
        <EditPassword v-model:show="showEditPassword"></EditPassword>
    </div>
</template>

<style scoped lang="scss">
.contact-container {
    margin-top: 20px;
    display: flex;
    flex-shrink: 0;
    gap: 20px;

    .contact-slider {
        width: 179px;
        height: 226px;
        background: #ffffff;
        border-radius: 16px 16px 16px 16px;
        box-sizing: border-box;
        padding: 20px;
    }

    .contact-slider-item {
        font-size: 16px;
        color: #ffffff;
        cursor: pointer;
        padding: 16px 10px;
        margin-bottom: 10px;

        &:hover,
        &.active {
            background-color: $MainColor;
            border-radius: 8px;

            & div {
                color: #ffffff !important;
            }
        }
    }

    .contact-main {
        width: 100%;

        .withdrawal-methods-header {
            margin-top: 20px;
            width: 100%;
            height: 80px;
            background: #ffffff;
            border-radius: 16px;
            border: 1px solid #ededed;
            display: flex;
            align-items: center;
            padding: 0 40px;
            font-size: 28px;
            color: #333333;
        }

        .user-contact-container {
            background: #ffffff;
            border-radius: 16px;
            border: 1px solid #ededed;
            margin-top: 20px;
            padding: 40px;
            box-sizing: border-box;
        }
    }

    .contact-container-item {
        padding: 10px 20px;
        box-sizing: border-box;
        border-bottom: 1px solid #ededed;

        &:last-child {
            border: none;
        }
    }
}
</style>
