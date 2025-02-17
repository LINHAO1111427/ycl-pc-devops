<script setup lang="ts">
	import HeaderTop from '@/components/Header/HeaderTop.vue'
	import Layout from '@/components/Layout/Layout.vue'
	import { Text } from '@/components'
	import { ref, h } from 'vue'
	import avatarUrl from '../../assets/img/avatar.png'
</script>

<template>
	<HeaderTop :is-work="false" :is-login="false" />
	<Layout>
		<div class="transaction-log-container">
			<div class="top">
				<n-flex align="center">
					<n-avatar :src="avatarUrl" :size="64" round />
					<Text :size="20" color="#333333">
						乔安娜发起的合同
					</Text>
				</n-flex>
				<Text :size="16" style="margin-top: 30px;">
					蒙古伊利实业集团将于美国东部时间2021年10月28日星期四21：00（北京时间2021年10月29日星期五上午9：00）召开财报电话会议。我希望您在翻译通话时收听并录制通话。我希望在通话后3-5小时内提供笔录和通话录音。该公司的网站位于此处：www.yili.com（出于某种原因，我无法访问美国的该网站）。如果有电话演示材料，请下载并发送给我。电话的拨入在这里：国内电话号码：4008
					063 263国际电话号码：+86-23-6273 7100 Pin：998918870请给我您的固定费率价格，而不是小时费率。谢谢！
				</Text>
			</div>
			<div class="main">
				<Text :size="32">
					合同详情
				</Text>
				<div class="list">
					<Text :size="18">
						客户
					</Text>
					<Text class="content" :size="16" color="#808080">
						乔安娜
					</Text>
				</div>
				<div class="list">
					<Text :size="18">
						自由职业者
					</Text>
					<Text class="content" :size="16" color="#808080">
						杰森
					</Text>
				</div>
				<div class="list">
					<Text :size="18">
						职位发布
					</Text>
					<Text class="content" :size="16" color="#808080">
						普通话翻译成英语
					</Text>
				</div>
				<div class="list">
					<Text :size="18">
						合同标题
					</Text>
					<Text class="content" :size="16" color="#808080">
						普通话翻译成英语
					</Text>
				</div>
				<div class="list">
					<Text :size="18">
						预算估计数
					</Text>
					<Text class="content" :size="16" color="#808080">
						¥200
					</Text>
				</div>
			</div>
			<div class="bottom">
				<n-flex vertical size="large">
					<Text :size="20">
						里程碑1：“将普通话翻译成英语”–$60.00–截止日期2021年10月29日
					</Text>
					<Text :size="20">
						此优惠将于2021年11月4日（星期四）到期。
					</Text>
					<n-flex style="gap:0">
						<Text class="underline" :size="20" color="#58968B">
							审查和接受
						</Text>
						<Text :size="20">
							此合同现在就开始工作！
						</Text>
					</n-flex>
				</n-flex>
				<n-flex vertical size="large" style="margin-top: 36px;">
					<Text :size="20">
						顺祝商祺
					</Text>
					<Text :size="20" color="#666666">
						原创力团队
					</Text>
				</n-flex>
			</div>
		</div>
	</Layout>
</template>

<style lang="scss" scoped>
	.transaction-log-container {
		background-color: $BackColor;
		padding-bottom: 98px;

		.top {
			background: #F9F9F9;
			border-radius: 8px 8px 8px 8px;
			padding: 40px;
			padding-bottom: 80px;
			margin-top: 30px;
		}

		.main {
			background: #FFFFFF;
			border-radius: 8px 8px 8px 8px;
			margin-top: 20px;
			padding: 40px;

			.list {
				margin-top: 20px;

				.content {
					margin-top: 8px;
				}
			}
		}

		.bottom {
			margin-top: 27px;

			.underline {
				text-decoration: underline;
			}
		}
	}
</style>