<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<Partial<{
  size: number,
  color: string,
  weight: number | string,
  align: string
}>>(), { size: 12, align: 'left' })

const getStyles = computed(() => {
  return {
    fontSize: `${props.size}px`,
    color: props.color,
    weight: props.weight,
    lineHeight: `${props.size * 1.5}px`,
    'text-align': props.align,
  }
})
</script>

<template>
  <div :style="getStyles">
    <slot></slot>
  </div>
</template>

