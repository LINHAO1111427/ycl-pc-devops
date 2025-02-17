<script setup lang="ts">
import * as from from '@vicons/ionicons5'
</script>

<template>
  <n-flex style="overflow:auto;height: 100%">
    <template v-for="(item,index) in from">
      <n-flex align="center">
        <n-icon size="30">
          <component :is="item" />
        </n-icon>
        {{ index }}
      </n-flex>
    </template>
  </n-flex>

</template>

<style scoped lang="scss">

</style>