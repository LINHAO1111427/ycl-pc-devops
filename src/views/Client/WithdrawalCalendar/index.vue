<script setup lang="ts">
	import HeaderTop from '@/components/Header/HeaderClientTop.vue'
	import Layout from '@/components/Layout/Layout.vue'
	import { Text } from '@/components'
	import { ref, h } from 'vue'
	const optionsMoney = ref([
		{
			label: '100元',
			value: '100元',
		}
	])
	const moneyOptions = ref('100元')
	const checkedValue = ref('每周二')
	function handleChange(e) {
		checkedValue.value = e.target.value
	}
</script>

<template>
	<HeaderTop :is-work="false" :is-login="false" />
	<Layout>
		<div class="transaction-log-container">
			<div class="transaction-log-header-title">
				提款日历
			</div>
			<div>
				<div>
					<Text :size="24" color="#333333">
						首选的提款方式
					</Text>
				</div>
				<div>
					<Text :size="20" color="#808080">
						中国商业银行账户余额为4367元（人民币）
					</Text>
				</div>
			</div>
			<div style="margin-top:40px;">
				<div>
					<Text :size="24" color="#333333">
						费率
					</Text>
				</div>
				<div>
					<Text :size="20" color="#808080">
						每笔提现稅率6%
					</Text>
				</div>
			</div>
			<div class="money-container">
				<div>
					<Text :size="24" color="#333333">
						最低提款金额
					</Text>
				</div>
				<div>
					<Text :size="14" color="#808080">
						根据您的提款计划，我们只会在您的余额超过此金额时撤回您的付款。这可能有助于降低费用。了解更多信息
					</Text>
				</div>
				<n-select style="margin-top: 10px" :options="optionsMoney" v-model:value="moneyOptions" />
			</div>
			<div class="money-container" style="margin-top:20px;">
				<div>
					<Text :size="24" color="#333333">
						提现时间
					</Text>
				</div>
				<n-flex vertical style="margin-top: 10px;">
					<n-radio :checked="checkedValue === '每周二'" value="每周二" name="basic-demo" @change="handleChange">
						每周二
					</n-radio>
					<n-radio :checked="checkedValue === '每周四'" value="每周四" name="basic-demo" @change="handleChange">
						每周四
					</n-radio>
				</n-flex>
			</div>
			<div style="margin-top:40px;">
				<div>
					<Text :size="24" color="#333333">
						下次提款(根据您的时间表）
					</Text>
				</div>
				<div>
					<Text :size="20" color="#808080">
						2024-07-18（周二）
					</Text>
				</div>
			</div>
			<n-flex justify="end" size="large" style="margin-top: 128px;">
				<n-button type="tertiary" size="large" class="naiveui-button-16" style="width: 178px">取消</n-button>
				<n-button type="primary" size="large" class="naiveui-button-16" style="width: 178px">保存</n-button>
			</n-flex>
		</div>
	</Layout>
</template>

<style lang="scss" scoped>
	.transaction-log-container {
		background-color: $BackColor;
		padding-bottom: 98px;

		.transaction-log-header-title {
			margin: 50px 0 30px 0;
			font-weight: 500;
			font-size: 34px;
			color: #333333;
		}

		.money-container {
			padding: 40px;
			background-color: #FFFFFF;
			border-radius: 16px 16px 16px 16px;
			border: 1px solid #EDEDED;
			margin-top: 40px;
		}

		:deep(.n-radio .n-radio__label) {
			font-size: 16px;
		}

		:deep(.n-radio) {
			align-items: center;
		}
	}
</style>