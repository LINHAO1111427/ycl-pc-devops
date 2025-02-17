<script setup lang="ts">
import Layout from '@/components/Layout/Layout.vue'
import { Text } from '@/components'
import HeaderTop from '@/components/Header/HeaderTop.vue'
import { h } from 'vue'
</script>

<template>
  <HeaderTop :is-work="false"></HeaderTop>
  <Layout>
    <div class="article-body"></div>
  </Layout>
</template>

<style scoped lang="scss">
	.article-body{
		min-height:500px;
	}
</style>