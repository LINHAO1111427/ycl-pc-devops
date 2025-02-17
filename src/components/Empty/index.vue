<script setup lang="ts">
import EmptyImage from '../../assets/img/empty.png'

const props = defineProps<{
  size: number
}>()
</script>

<template>
  <div class="empty-container">
    <img :src="EmptyImage" alt="" />
  </div>
</template>

<style scoped lang="scss">
.empty-container {
  width: v-bind('props.size');
  height: v-bind('props.size');

  img {
    width: 100%;
    height: 100%;
  }
}
</style>