<script setup lang="ts">
import {ref} from 'vue'

const isShow = ref(false)
</script>

<template>
  <n-ellipsis :line-clamp="isShow ? 9999 : 2" :tooltip="false">
    <slot></slot>
  </n-ellipsis>
  <n-button size="small" text type="primary" @click.stop="isShow = !isShow" v-if="false">
    {{ isShow ? '收起全部' : '查看全部' }}
  </n-button>
</template>

<style scoped lang="scss">

</style>
