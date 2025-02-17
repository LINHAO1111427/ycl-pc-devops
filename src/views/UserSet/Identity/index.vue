<script setup lang="ts">
import { RenderIcon, Text } from '@/components'
import { CreateOutline } from '@vicons/ionicons5'
import { ref } from 'vue'
import EditPersonalInfo from './component/EditPersonalInfo.vue'

const current = ref('account')

const showModal = ref(false)

const showEditPersonalInfo = ref(false)

const slider = [
  {
    title: '个人信息',
    to: 'account',
  },
  {
    title: '身份证验证',
    to: 'city',
  },
]


function onMouseenter(key: string) {
  current.value = key
  window.location.hash = key
}
</script>

<template>
  <div class="identity-container">
    <div class="contact-slider">
      <div
        v-for="item in slider"
        class="contact-slider-item"
        :class="current === item.to && 'active'"
        @click="onMouseenter(item.to)"
      >
        <Text color="#000" :size="16">
          {{ item.title }}
        </Text>
      </div>
    </div>
    <div class="contact-main">
      <div class="withdrawal-methods-header">身份认证</div>
      <div class="user-contact-container" id="account">
        <n-flex align="center" justify="space-between">
          <Text color="#333333" :size="24">个人信息</Text>
          <n-icon :size="22" class="cursor-pointer-style main-color-size" @click="showEditPersonalInfo = true">
            <CreateOutline />
          </n-icon>
        </n-flex>
        <div class="contact-container-cell">
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              名字
            </Text>
            <Text :size="16" color="#808080">
              郑盈
            </Text>
          </n-flex>
          <n-flex justify="space-between" align="center" class="contact-container-item">
            <Text :size="16" color="#808080">
              身份证
            </Text>
            <Text :size="16" color="#808080">
              12345678900000000
            </Text>
          </n-flex>
        </div>
      </div>
      <div class="user-contact-container" id="city">
        <n-flex align="center" justify="space-between">
          <Text color="#333333" :size="24">身份证验证</Text>
        <!--  <n-icon :size="22" class="cursor-pointer-style main-color-size">
            <CreateOutline />
          </n-icon> -->
        </n-flex>
        <n-flex :wrap="false" align="center" justify="center" style="margin: 40px 0" :size="40">
          <n-flex class="user-identity" vertical align="center">
			<n-upload :show-file-list="false">
				<n-image :width="285" :height="285">
				  <template #placeholder>
					<div class="ide-placeholder">
					</div>
				  </template>
				</n-image>
			</n-upload>
            <Text class="secondary-color-text-1">正面</Text>
          </n-flex>
          <n-flex class="user-identity" vertical align="center">
			<n-upload :show-file-list="false">
				<n-image :width="285" :height="285">
				  <template #placeholder>
					<div class="ide-placeholder">
					</div>
				  </template>
				</n-image>
			</n-upload>
            <Text class="secondary-color-text-1">反面</Text>
          </n-flex>
        </n-flex>
      </div>
    </div>
  </div>
  <EditPersonalInfo v-model:show="showEditPersonalInfo"></EditPersonalInfo>
</template>

<style scoped lang="scss">
.identity-container {
  margin-top: 20px;
  display: flex;
  flex-shrink: 0;
  gap: 20px;
  padding-bottom: 70px;

  .contact-slider {
    width: 179px;
    height: 160px;
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


  .contact-container-cell {
    background-color: #f8f8f8;
    margin-top: 40px;
    border-radius: 16px;
    padding: 20px;
    box-sizing: border-box;
  }

  .ide-placeholder {
    width: 285px;
    height: 285px;
    background: #EDEDED;
    border-radius: 8px 8px 8px 8px;
  }
}
</style>
