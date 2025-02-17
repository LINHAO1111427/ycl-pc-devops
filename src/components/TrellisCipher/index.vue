<script setup lang="ts">
import { ref } from 'vue'

withDefaults(
  defineProps<{
    nums: number
  }>(),
  {
    nums: 5,
  },
)

const inputInstalls = ref()
</script>

<template>
  <n-config-provider abstract :theme-overrides="{
        Input:{
          heightMedium:'60px',
        }
    }">
    <n-flex justify="space-between">

      <template v-for="_item in 5">
        <n-input style="width: 60px" maxlength="1" placeholder="" ref="inputInstalls" />
      </template>
    </n-flex>
  </n-config-provider>
</template>

<style lang="scss" scoped>

::v-deep(.n-input__input-el) {
  font-size: 20px !important;
  text-align: center;
}

</style>
