<script setup lang="ts">
	import Layout from '@/components/Layout/Layout.vue'
	import { IconCheckBox, IconClose, RenderIcon, Text } from '@/components'
	import HeaderTop from '@/components/Header/HeaderTop.vue'
	import { createDiscreteApi } from 'naive-ui'
	const { dialog } = createDiscreteApi(['dialog'])
	function submit() {
		dialog.warning({
			actionClass: 'naiveui-dialog-action',
			showIcon: false,
			closable: false,
			title: '是否确定兑换',
			content:'',
			positiveText: '确定',
			negativeText: '取消',
			maskClosable: false,
			positiveButtonProps: {
				color: '#58968B'
			},
			negativeButtonProps: {
				quaternary: true,
				color: '#808080'
			},
		})
	}
</script>

<template>
	<HeaderTop :is-work="false"></HeaderTop>
	<Layout>
		<n-flex class="point-redemption" vertical :size="40">
			<Text :size="36">
				积分兑换
			</Text>
			<n-flex class="point-nums" align="center" vertical justify="center">
				<Text :size="48" color="#58968B">
					400
				</Text>
				<Text :size="16" color="#58968B ">
					我的积分
				</Text>
			</n-flex>
			<div>
				<div class="positions-skills-header">
					<div class="positions-skills-header-item">权益</div>
					<div class="positions-skills-header-item">积分</div>
					<div class="positions-skills-header-item">权益兑换</div>
				</div>
				<div class="positions-skills-container-price">
					<n-flex class="positions-skills-container-price-item" vertical align="center" :size="40">
						<div>每日登录</div>
						<div>提交工作申请</div>
						<div>成功收到offer</div>
						<div>交易反馈</div>
						<div>原创力会员权益3天</div>
						<div>原创力会员权益7天</div>
						<div>原创力会员权益14天</div>
					</n-flex>
					<n-flex class="positions-skills-container-price-item" vertical align="center" :size="40">
						<Text :size="16">+5</Text>
						<Text :size="16">+5</Text>
						<Text :size="16">+20</Text>
						<Text :size="16">+10</Text>
						<RenderIcon :icon="IconClose" fill="#BFC0C0" size="22" v-for="_item in 3" />
					</n-flex>
					<n-flex class="positions-skills-container-price-item" vertical align="center" :size="40">
						<RenderIcon :icon="IconClose" fill="#BFC0C0" size="22" v-for="_item in 4" />
						<n-flex align="center">
							<Text :size="16">300积分</Text>
							<n-button size="small" type="primary" @click="submit">
								兑换
							</n-button>
						</n-flex>
						<n-flex align="center">
							<Text :size="16">600积分</Text>
							<n-button size="small" type="primary" @click="submit">
								兑换
							</n-button>
						</n-flex>
						<n-flex align="center">
							<Text :size="16">1200积分</Text>
							<n-button size="small" type="primary" @click="submit">
								兑换
							</n-button>
						</n-flex>
					</n-flex>
				</div>
			</div>
		</n-flex>
	</Layout>
</template>

<style lang="scss" scoped>
	.point-redemption {
		padding: 40px 0;

		.point-nums {
			width: 100%;
			height: 180px;
			background: #BFE1DB;
			border-radius: 8px 8px 8px 8px;
			border: 2px solid #58968B;
		}

		.positions-skills-header {
			width: 1326px;
			max-width: 100%;
			height: 68px;
			background: #e1f5f2;
			border: 1px solid #ededed;
			display: flex;
			align-items: center;
			justify-content: space-around;

			.positions-skills-header-item {
				height: 28px;
				font-weight: 600;
				font-size: 20px;
				color: #26554d;
				line-height: 28px;

				border-right: solid 1px rgba(44, 98, 89, 0.3);
				width: 100%;
				text-align: center;

				&:last-child {
					border: none;
				}
			}
		}


		.positions-skills-container-price {
			margin: 20px 0 96px 0;
			width: 1326px;
			max-width: 100%;
			height: 434px;
			background: #e1f5f2;
			border-radius: 16px;
			border: 1px solid #ededed;
			display: flex;
			align-items: center;

			.positions-skills-container-price-item {
				width: 100%;

				div {
					font-weight: 600;
					font-size: 16px;
					color: #26554D;
					height: 22px;
					line-height: 22px;
				}
			}
		}
	}
</style>