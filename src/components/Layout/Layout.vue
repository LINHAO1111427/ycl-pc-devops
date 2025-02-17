<script setup lang="ts">
import { Footer } from '@/components'
</script>

<template>
  <div class="layout">
    <div class="layout-container">
      <slot></slot>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped lang="scss">
.layout {
  background-color: $BackColor;
  height: $container-height;
  overflow: auto;

  .layout-container {
    width: 1326px;
    margin: 0 auto;
	max-width: 100%;
  }
}
@media (max-width: 1400px) {
	.layout {
	  .layout-container {
	    padding: 20px;
	  }
	}
}
</style>