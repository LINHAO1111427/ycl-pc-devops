<script setup lang="ts">
	import HeaderTop from '@/components/Header/HeaderTop.vue'
	import Layout from '@/components/Layout/Layout.vue'
	import {
		CreateOutline,
		LocationOutline,
		EllipseSharp,
	} from '@vicons/ionicons5'
	import Slider from '@/views/PersonalData/component/Slider.vue'
	import Container from '@/views/PersonalData/component/Container.vue'
	import Footer from '@/views/PersonalData/component/Footer.vue'
	import avatarUrl from '../../assets/img/avatar.png'
	import { useRoute, useRouter } from 'vue-router'
	import { watchEffect } from 'vue'
	import EditAvatar from './component/EditAvatar.vue'

	const route = useRoute()

	const router = useRouter()

	const isPreview = ref()

	const showEditAvatar = ref(false)

	function onClickTo() {
		router.push('/personal-data?preview=preview')
	}


	watchEffect(() => {
		isPreview.value = Boolean(route.query.preview)
	})
</script>

<template>
	<HeaderTop :is-work="false"></HeaderTop>
	<Layout>
		<div class="personal-data">
			<n-flex class="personal-data-header" align="center" :size="20">
				<n-avatar :size="60" round :src="avatarUrl"></n-avatar>
				<n-flex vertical :size="10">
					<n-flex class="personal-data-title" align="center">
						Jason Z.
						<n-icon :size="22" class="cursor-pointer-style main-color-size" v-if="!isPreview" @click="showEditAvatar = true">
							<CreateOutline></CreateOutline>
						</n-icon>
					</n-flex>
					<n-space align="center">
						<n-flex class="secondary-color-text-1" align="center" :size="5">
							<n-icon :size="16" class="main-color-size">
								<LocationOutline />
							</n-icon>
							天津
						</n-flex>
						<n-flex class="secondary-color-text-1" align="center" :size="5">
							<n-icon :size="10" class="main-color-size">
								<EllipseSharp />
							</n-icon>
							在线时间 9:00
						</n-flex>
					</n-space>
				</n-flex>
				<n-space style="margin-left:auto" :size="30" v-if="!isPreview">
					<n-button type="primary" ghost size="large" style="width: 178px"
						@click="onClickTo">
						<span class="naiveui-text-14">个人资料预览</span>
						</n-button>
					<n-button type="primary" size="large" style="width: 178px" @click="$router.push('/user-set/personal')">
						<span class="naiveui-text-14">资料修改</span>
						</n-button>
				</n-space>
			</n-flex>
			<n-flex :size="0" class="personal-data-container" :wrap="false">
				<Slider :edi="!isPreview" />
				<Container :edi="!isPreview" />
			</n-flex>
			<Footer :edi="!isPreview"></Footer>
		</div>
	</Layout>
	<EditAvatar v-model:show="showEditAvatar" />
</template>

<style scoped lang="scss">
	.personal-data {
		margin-top: 50px;
		border-top-left-radius: 16px;
		border-top-right-radius: 16px;
		overflow: hidden;
		margin-bottom: 180px;

		.personal-data-header {
			height: 114px;
			background: #FFFFFF;
			padding: 20px;
			box-sizing: border-box;
			border-bottom: solid 1px #e7e7e7;

			.personal-data-title {
				font-weight: 500;
				font-size: 20px;
				color: #333333;
				line-height: 23px;
			}
		}


		.personal-data-container {
			background: #FFFFFF;
		}
	}
</style>