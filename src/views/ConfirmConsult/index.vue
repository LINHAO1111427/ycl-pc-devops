<script setup lang="ts">
	import HeaderTop from '@/components/Header/HeaderTop.vue'
	import { Footer, IconStart, RenderIcon, IconFaxiangmu } from '@/components'
	import { ref } from 'vue'
	import { createDiscreteApi } from 'naive-ui'
	import { useRouter } from 'vue-router'

	const isCollection = ref(false)

	const { dialog } = createDiscreteApi(['dialog'])

	const router = useRouter()

	function onClickSubimt(type) {
		let title = ''
		if(type == 1){
			title = '您好，感谢您的确认，请按照约定时间开始咨询'
		}else if(type == 2){
			title = '您好，谢谢您的确认'
		}else if(type == 3){
			title = '您是否确定拉黑并屏蔽该用户'
		}
		dialog.warning({
			actionClass: 'naiveui-dialog-action',
			showIcon: false,
			closable: false,
			title: title,
			positiveText: '确定',
			negativeText: type == 3 ? '取消' : '',
			maskClosable: false,
			positiveButtonProps: {
				color: '#58968B'
			},
			negativeButtonProps:{
				quaternary:true,
				color: '#808080'
			},
		})
	}
</script>

<template>
	<HeaderTop :is-login="false" :is-work="false" />
	<div class="application">
		<div class="application-container">
			<div class="application-header-title">待确认咨询订单</div>
			<n-flex align="center" style="margin-bottom:20px;">
			  <n-input round placeholder="请输入.." size="large" style="width: 516px">
			    <template #prefix>
			      <div class="icon">
			        <img src="../../assets/img/search.png" alt="" />
			      </div>
			    </template>
			  </n-input>
			  <div class="hide_input">
				  <RenderIcon class="cursor-pointer-style" icon="icon-rili" fill="#808080" size="25" />
				  <n-date-picker type="daterange" clearable @update-value="handleUpdateValue" />
			  </div>
			</n-flex>
			<n-flex class="application-list" vertical :size="20">
				<div class="application-list-item">
					<n-flex class="application-item-tag" align="center" justify="center">
						咨询待确认
					</n-flex>
					<n-flex align="flex-end" justify="space-between">
						<div class="application-item-title" style="margin-top: 30px">
							商业网站设计与开发
						</div>
						<n-flex>
							<n-button type="primary" size="large" @click.stop="onClickSubimt(1)">
								<span class="naiveui-text-16">接受咨询</span>
							</n-button>
							<n-button type="primary" size="large" @click.stop="onClickSubimt(2)">
								<span class="naiveui-text-16">不接受咨询</span>
							</n-button>
							<n-button type="primary" size="large" @click.stop="onClickSubimt(3)">
								<span class="naiveui-text-16">屏蔽并拉黑该用户</span>
							</n-button>
						</n-flex>
					</n-flex>
					<n-flex justify="space-between">
						<n-space class="secondary-color-text-1">
							<span>2024-07-10</span>
						</n-space>
					</n-flex>

					<div class="application-desc-text">
						我们正在寻找一位技术娴熟，一丝不苟的基于Web和Word的中文演示文榜编辑加入我们充满活力的日队。理想的候选人将具备强大的中文能力和出色的辑技能，在创建、和优化网络内容和基于单词的演示文稿方面拥有丰富的经验，这个角色需要的不仅仅是语言能力:候选人必须对中国文化有深入的了解，以确保内容不仅在语言上准确，而且在文化上具有相关性和吸引力。将文化畑微差别无缝整合到内容中的能力至关重要，因为这将与我们的目标受众产生共鸣并保持真实性。
						<br />
						成功的候选人将展示对中国文化习俗、传统和社会规范的根深蒂团的了解。这种文化洞察力对于制作适合上下文和吸引人的内容至关重要，无论是理解惯用语、识别文化参考，还是使内容与文化事件和趋势保持一致，候选人的文化背景都将在他们的编辑职中发挥至关重要的作用。此外，选人必须善于驾驭中文交流中特有的语气和风格的复杂性，确保所有内容都符合我们的品牌声音，同时具有文化敏感性和吸引力。这种全面的文化意识，加上卓越的编辑技巧，将成为候选人为我们团队做出贡献的基石。
					</div>
					<n-flex class="positions-details_type" align="center" justify="space-evenly" :wrap="false">
						<div class="details_type-item">
							<RenderIcon icon="icon-customer" fill="#808080" size="30" />
							<n-flex vertical>
								<div class="type-item-title">乔安娜</div>
								<div>客户名称</div>
							</n-flex>
						</div>
						<n-divider vertical style="height: 30px" />
						<div class="details_type-item">
							<RenderIcon icon="icon-yusuanzonge" fill="#808080" size="30" />
							<n-flex vertical>
								<div class="type-item-title">￥150</div>
								<div>咨询金额</div>
							</n-flex>
						</div>
						<n-divider vertical style="height: 30px" />
						<div class="details_type-item">
							<RenderIcon icon="icon-shichang" fill="#808080" size="30" />
							<n-flex vertical>
								<div class="type-item-title">30分钟</div>
								<div>咨询时长</div>
							</n-flex>
						</div>
					</n-flex>
				</div>
			</n-flex>
		</div>
		<Footer></Footer>
	</div>
</template>

<style scoped lang="scss">
	.application {
		height: $container-height;
		background-color: $BackColor;
		overflow: auto;

		.application-container {
			width: 1326px;
			margin: 0 auto;
			max-width: 100%;

			.application-header-title {
				margin: 50px 0 30px 0;
				font-weight: 500;
				font-size: 34px;
				color: #333333;
			}
			
			.hide_input{
				position: relative;
				::v-deep(.n-date-picker){
					position: absolute;
					top: 0;
					left: 0;
					opacity: 0;
					width: 25px;
					height: 25px;
					overflow: hidden;
				}
				::v-deep(.n-input .n-input-wrapper){
					cursor: pointer;
				}
			}

			.application-list {
				margin-bottom: 98px;

				.application-list-item {
					// height: 514px;
					border-radius: 16px 16px 16px 16px;
					border: 1px solid $MainColor;
					padding: 20px 40px;
					padding-bottom: 50px;
					box-sizing: border-box;
					background-color: #ffffff;
					cursor: pointer;

					.application-item-tag {
						width: 76px;
						height: 27px;
						background: #F4FBFA;
						color: #58968B;
						border-radius: 2px 2px 2px 2px;
					}

					.application-item-desc {
						font-weight: 400;
						font-size: 16px;
						color: #808080;
						margin-top: 30px;

						&.active {
							color: $MainColor;
						}
					}

					.application-item-title {
						font-weight: 500;
						font-size: 20px;
						color: #333333;
						margin-top: 15px;
						margin-bottom: 30px;
					}

					.start-icons-button {
						width: 40px;
						height: 40px;
						border-radius: 12px 12px 12px 12px;
						//justify-content: space-evenly;
						border: 2px solid #e5e5e5;

						&.active {
							border: 2px solid #58968b;
						}
					}

					.application-desc-text {
						font-weight: 400;
						font-size: 12px;
						color: $SecondaryColor-1;
						line-height: 24px;
						margin-top: 20px;
					}

					.positions-details_type {
						width: 800px;
						height: 77px;
						background: #fcfcfc;
						border-radius: 8px;
						border: 1px solid #ededed;
						margin-top: 20px;

						.details_type-item {
							display: flex;
							align-items: center;
							gap: 10px;
						}

						.type-item-title {
							font-weight: 600;
							font-size: 14px;
							color: #333333;
						}
					}
				}
			}
		}
	}

	@media (max-width: 1400px) {
		.application {
			.application-container {
				padding: 0 20px;
			}
		}
	}
</style>