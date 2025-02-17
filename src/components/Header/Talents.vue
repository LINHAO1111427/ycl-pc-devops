<script setup lang="ts">
	import { ref } from 'vue'

	const options = [
		{
			title: '人才市场',
			desc: '发布工作，雇佣人才',
		},
		{
			title: '咨询服务',
			desc: '从行业专家那里获得建议',
		},
	]

	const current = ref('人才市场')

	const tag = [
		'开发与IT',
		'设计与创意',
		'销售&市场营销',
		'写作与翻译',
		'汽车设计',
		'财务与会计',
		'工程与建筑',
		'人力资源与培训',
		'管理和客户支持',
	]
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
			<template v-if="current === '人才市场'">
				<n-flex vertical>
					<div class="header-talents-title">人才市场</div>
					<div class="desc secondary-color-text-1">
						了解如何与人才合作，或探索您的特定招聘需求。
					</div>
				</n-flex>
				<n-button text type="default" class="router-link" @click="$router.push('/client/search-talents')">人才市场招聘</n-button>

				<!-- <n-flex style="width: 408px" :size="20">
					<n-tag v-for="item in tag" :color="{textColor: '#808080', borderColor: '#808080'}" style="border-radius: 5px;cursor: pointer;" class="secondary-color-text-1">
						{{ item }}
					</n-tag>
				</n-flex> -->
			</template>
			<template v-else>
				<n-flex vertical>
					<div class="header-talents-title">咨询服务</div>
					<div class="desc secondary-color-text-1">
						与行业专家一起探索可能性。查看他们的可用性，并预订适合您的时间。
					</div>
				</n-flex>
				<n-button text type="default" class="router-link" @click="$router.push('/client/search-talents?is_consult=1')">浏览所有类别</n-button>
				<n-flex :size="20">
					<n-flex vertical align="center" class="cursor-pointer-style">
						<img src="../../assets/img/nav1.jpg"
							class="talents-image" alt="" />
						<span class="talents-text">程序代码工程师</span>
					</n-flex>
					<n-flex vertical align="center" class="cursor-pointer-style">
						<img src="../../assets/img/nav2.jpg"
							class="talents-image" alt="" />
						<span class="talents-text">市场营销</span>
					</n-flex>
					<n-flex vertical align="center" class="cursor-pointer-style">
						<img src="../../assets/img/nav3.jpg"
							class="talents-image" alt="" />
						<span class="talents-text">AIAI与机器学习</span>
					</n-flex>
				</n-flex>
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