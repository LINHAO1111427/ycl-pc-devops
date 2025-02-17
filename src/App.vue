<script setup lang="ts">
import { RouterView } from 'vue-router'
import themeOverrides from './theme/theme'
import { zhCN,dateZhCN } from "naive-ui";

</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" abstract :theme-overrides="themeOverrides">
    <n-message-provider>
      <RouterView />
    </n-message-provider>
  </n-config-provider>
</template>
