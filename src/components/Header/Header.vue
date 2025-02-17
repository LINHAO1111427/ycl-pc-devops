<script lang="ts" setup>
import HeaderNav from '@/components/Header/HeaderNav.vue'
import HeaderTop from '@/components/Header/HeaderTop.vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
    isHeaderNav: boolean,
    isWork: boolean,
    isLogin: boolean
  }>(), {
    isHeaderNav: true,
    isWork: true,
    isLogin: true,
  },
)

const getHeaderHeight = computed(() => props.isHeaderNav ? '101px' : '64px')

</script>

<template>
  <header>
    <HeaderTop :is-work="isWork" :is-login="isLogin"  />
    <HeaderNav v-if="isHeaderNav" />
  </header>
  <div class="header_bg"></div>
</template>

<style scoped>
header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: v-bind(getHeaderHeight);
  background: #ffffff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  z-index: 100;
}

::v-deep(.n-button__content) {
  font-size: 16px;
  font-weight: 400;
}

.header_bg {
  height: v-bind(getHeaderHeight);
}
</style>

