<script setup lang="ts">
	import { ref } from 'vue'

	const options = [
		{
			title: '项目市场',
			desc: '现在开始寻找擅长领域的合适工作',
		},
		{
			title: '会员权益',
			desc: '服务费折扣，专属客服，查看其他竞争者的出价区间',
		},
	]

	const current = ref('项目市场')
</script>

<template>
	<div class="header-talents">
		<div class="header-talents-slider">
			<n-flex :class="{
          'talents-slider': true,
          active: current === item.title,
        }" vertical justify="center" v-for="item in options" @click="current = item.title"
				@mouseenter="current = item.title">
				<div class="slider-text">{{ item.title }}</div>
				<div class="desc">{{ item.desc }}</div>
			</n-flex>
		</div>

		<div class="header-talents-right">
			<template v-if="current === '项目市场'">
				<n-flex vertical>
					<div class="header-talents-title">项目市场</div>
					<div class="desc secondary-color-text-1">
						现在开始寻找擅长领域的合适工作。
					</div>
				</n-flex>
				<n-button text type="default" class="router-link" @click="$router.push('/talents')">项目市场招聘</n-button>

				<!-- <n-flex style="width: 408px" :size="20">
					<n-tag v-for="item in tag" :color="{textColor: '#808080', borderColor: '#808080'}" style="border-radius: 5px;cursor: pointer;" class="secondary-color-text-1">
						{{ item }}
					</n-tag>
				</n-flex> -->
			</template>
			<template v-else>
				<n-flex vertical>
					<div class="header-talents-title">自由职业者会员权益</div>
					<div class="desc secondary-color-text-1">
						服务费折扣，专属客服，查看其他竞争者的出价区间。
					</div>
				</n-flex>
				<n-button text type="default" class="router-link" @click="$router.push('/member')">立即开通会员</n-button>
			</template>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.header-talents {
		width: 1326px;
		margin: 0 auto;
		padding: 40px 0;
		display: flex;
		max-width:100%;

		.header-talents-slider {
			padding-right: 100px;
			box-sizing: border-box;
			display: inline-flex;
			flex-direction: column;
			gap: 14px;
			border-right: solid 1px #ededed;
			margin-right: 100px;
		}

		.talents-slider {
			width: 230px;
			height: 84px;
			border-radius: 8px;
			padding: 20px 40px;
			box-sizing: border-box;
			cursor: pointer;
			color: #333333;
			border: solid 1px #ededed;

			&.active,
			&:hover {
				color: $MainColor;
				border: 1px solid $MainColor;
				background: #bfe1db;
			}

			&.active .slider-text,
			&:hover .slider-text,
			&.active .desc,
			&:hover .desc {
				color: $MainColor;
			}

			.slider-text {
				color: #333333;
			}

			.desc {
				color: #808080;
			}
		}

		.header-talents-title {
			font-size: 14px;
		}

		::v-deep(.n-button__content) {
			margin: 40px 0 68px 0;
			font-size: 12px;
		}

		.talents-image {
			width: 140px;
			height: 86px;
			border-radius: 10px;
			overflow: hidden;
		}

		.talents-text {
			font-weight: 500;
			font-size: 12px;
			color: #808080;
		}
	}
	@media (max-width: 1400px) {
	    .header-talents{
			padding-left:20px;
			padding-right:20px;
		}
	}	
</style>