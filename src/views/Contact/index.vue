<script setup lang="ts">
	import HeaderTop from '@/components/Header/HeaderTop.vue'
	import { IconCashLine, RenderIcon, Text, Footer, IconWodekefu } from '@/components'
	import { SettingsOutline } from '@vicons/ionicons5'
	import Layout from '@/components/Layout/Layout.vue'
	const charMessageShow = ref(false)
</script>

<template>
	<HeaderTop :is-work="true" :is-login="true"></HeaderTop>

	<div class="contact">
		<div class="contact-banner">
			<img src="../../assets/img/contact-banner.jpg" alt="">
		</div>
		<div  class="contact-main">
			<n-flex justify="space-between">
				<n-flex vertical :size="60">
					<n-flex align="center">
						<RenderIcon :icon="IconWodekefu" :size="23"  @click="charMessageShow=true" />
						<Text size="24">在线客服</Text>
					</n-flex>
					<Text size="24">公司地址：天津市滨海新区中新生态城研发大厦3F</Text>
					<Text size="24">公司公共咨询电话：18920956500</Text>
					<Text size="24">邮箱：jasonfreelancer7@gmail.com</Text>
				</n-flex>
				<n-flex>
					<img src="../../assets/img/contact-bottom.png" alt="">
				</n-flex>
			</n-flex>
		</div>
		<Footer />
	</div>
	<ChatMessage v-model:show="charMessageShow" />
</template>

<style scoped lang="scss">
	.contact {
		height: $container-height;
		overflow: auto;
		background-color: $BackColor;

		.contact-banner {
			img {
				width: 100%;
			}
		}
		.contact-main{
			width: 1326px;
			margin: 126px auto;
			max-width: 100%;
		}
	}
	@media (max-width: 1400px) {
		.contact {
		  .contact-main {
		    padding: 20px;
		  }
		}
	}
</style>