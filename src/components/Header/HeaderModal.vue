<script setup lang="ts">
withDefaults(defineProps<{ visual?: boolean }>(), {})

const emit = defineEmits(['close', 'open'])

function onMouseout() {
  emit('open')
}

function onMouseenter() {
  emit('close')
}
</script>

<template>
  <div
    class="header-modal"
    v-show="visual"
    @mouseenter="onMouseout"
    @mouseleave ="onMouseenter()"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.header-modal {
  position: absolute;
  width: 100%;
  z-index: 1000;
  background: #ffffff;
  box-shadow: 0px 4px 20px 0px rgba(153, 153, 153, 0.1);
  border-radius: 0px 0px 0px 0px;
}
</style>
