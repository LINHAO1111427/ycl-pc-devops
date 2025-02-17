<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  fill?: string,
  icon: any,
  stroke?: string,
  strokeWidth?: string,
  isStroke?: boolean
}>(), {
  fill: '#000',
  strokeWidth: '1.5px',
})

const attrs = useAttrs()

const fontSize = computed(() => {
  return attrs.size + 'px'
})
</script>

<template>
  <template v-if="typeof icon === 'string'">
    <i :class="`iconfont ${icon} render-icons`"></i>
  </template>
  <n-icon v-else v-bind="$attrs">
    <component
      :is="icon"
      :class="{
        'cursor-pointer-style': true,
        'svg-color': true,
        stroke:isStroke
      }"
    />
  </n-icon>
</template>

<style scoped lang="scss">
.render-icons {
  color: v-bind('props.fill');
  font-size: v-bind(fontSize);
}

.svg-color {
  fill: v-bind('props.fill');
}

.stroke {
  stroke: v-bind('props.stroke');
  stroke-width: v-bind('props.strokeWidth');
  fill: transparent;
}
</style>