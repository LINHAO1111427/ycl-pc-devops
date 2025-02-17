<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  round: {
    type: Number,
    default: 8,
  },
  size: {
    type: [Number, String],
    default: '14px',
  },
  fontColor: {
    type: String,
    default: '#fff',
  },
})

const getSize = computed(() => String(props.size).indexOf('px') !== -1 ? props.size : props.size + 'px')

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <n-config-provider :theme-overrides="{

    Button:{
      borderRadiusLarge: round + 'px',
    }
  }">
    <n-button block type="primary" size="large" v-bind="$attrs">
      <slot></slot>
    </n-button>
  </n-config-provider>
</template>


<style lang="scss" scoped>
::v-deep(.n-button__content) {
  font-size: v-bind(getSize);
  color: v-bind('props.fontColor');
}
</style>