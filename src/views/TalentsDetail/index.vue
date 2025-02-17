<script setup lang="ts">
	import HeaderTop from '@/components/Header/HeaderTop.vue'
	import { Footer, Button as RButton } from '@/components'
	import PositionsDetails from "@/components/PositionsDetails/index.vue"
	import { ref, watchEffect } from 'vue'
	import { useRoute } from 'vue-router'

	const route = useRoute()
</script>

<template>
	<div class="talents">
		<HeaderTop :is-login="false" :is-work="false" />
		<div class="talents-container">
			<PositionsDetails></PositionsDetails>
		</div>
		<Footer></Footer>
	</div>
</template>

<style scoped lang="scss">
	.talents {
		height: 100%;
		overflow: auto;
	}

	.talents-container {
		width: 1360px;
		margin: 0 auto;
		padding: 20px 0;
		max-width: 100%;
		line-height: normal;
	}

	@media (max-width: 1400px) {
		.talents-container {
			padding: 20px;
		}
	}
</style>