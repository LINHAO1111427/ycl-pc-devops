<script setup lang="ts">
import { ChevronForwardOutline } from '@vicons/ionicons5'
import avatarUrl from '../../assets/img/avatar.png'
</script>

<template>
  <div class="slider-user">
    <div class="slider-user-item">
      <n-flex align="center" :size="20">
        <n-avatar
          :src="avatarUrl"
          :size="64"
          round />
        <n-flex vertical :size="10">
          <div class="user-name">Jason Z</div>
          <div class="user-desc">
            设计师
          </div>
        </n-flex>
      </n-flex>
      <div class="user-jie-sao">PS、Figma、AE、MasterGo</div>
      <n-flex class="slider-user-date" justify="space-evenly">
        <n-flex vertical align="center">
          <div class="slider-user-item-nums">124</div>
          <div class="slider-user-item-text">历史接单(单)</div>
        </n-flex>
        <n-flex vertical align="center">
          <div class="slider-user-item-nums">124000</div>
          <div class="slider-user-item-text">总收入(￥)</div>
        </n-flex>
        <n-flex vertical align="center">
          <div class="slider-user-item-nums">4.9</div>
          <div class="slider-user-item-text">评分(5.0)</div>
        </n-flex>
      </n-flex>
    </div>
    <div class="slider-user-item padding-0">
      <div class="slider-user-cell" @click="$router.push('/member')">
        <div class="name">
          会员权益
        </div>
        <n-icon :size="20">
          <component :is="ChevronForwardOutline" />
        </n-icon>
      </div>
      <div class="slider-user-cell" @click="$router.push('/application')">
        <div class="name">
          历史申请
        </div>
        <n-icon :size="20">
          <component :is="ChevronForwardOutline" />
        </n-icon>
      </div>
    </div>

   <n-flex class="slider-user-item padding-0" vertical>
   <!--  <RouterLink to="/" class="slider-item-link">
        原创力学院
      </RouterLink>
      <RouterLink to="/" class="slider-item-link">
        获得报酬
      </RouterLink>
      <RouterLink to="/" class="slider-item-link">
        社区与论坛
      </RouterLink> -->
      <RouterLink to="/" class="slider-item-link">
        帮助中心
      </RouterLink>
    </n-flex>
  </div>
</template>

<style scoped lang="scss">
.slider-user {
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-shrink: 0;

  .slider-user-item {
    padding: 32px 20px;
    background-color: #f8f8f8;
    border-radius: 13px;
    box-sizing: border-box;

    &.padding-0 {
      padding: 10px 20px;
    }

    .user-name {
      font-size: 25px;
      font-weight: 400;
    }

    .user-desc {
      font-size: 18px;
      color: #a4a4a4;
      font-weight: 400 !important;
    }
  }

  .user-jie-sao {
    margin-top: 30px;
    font-size: 16px;
    color: #a4a4a4;
    font-weight: 400 !important;
  }

  .slider-user-date {
    margin-top: 40px;
  }

  .slider-user-item-nums {
    font-size: 22px;
  }

  .slider-user-item-text {
    color: #b9b9b9;
  }

  .slider-user-cell {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 15px 0;

    .name {
      font-size: 18px;
    }
  }

  .slider-item-link {
    font-size: 18px;
    padding: 15px 0;
    cursor: pointer;
    color: rgba(105, 105, 105);
    text-decoration-line: underline;
  }
}
</style>