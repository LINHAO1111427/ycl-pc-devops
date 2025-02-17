<script setup lang="ts">
	import HeaderTop from '@/components/Header/HeaderTop.vue'
	import Layout from '@/components/Layout/Layout.vue'
	import { ref, h } from 'vue'

	const columns = [
		{
			title: '日期',
			key: 'date',
		},
		{
			title: '类型',
			key: 'type',
			className: 'hui'
		},
		{
			title: '描述',
			key: 'description',
			className: 'hui'
		},
		{
			title: '客户',
			key: 'customer',
		},
		{
			title: '数量',
			key: 'num',
			className: 'hui'
		},
		{
			title: 'ID',
			key: 'id',
			className: 'lv'
		},
	]

	const data = ref([{
		date: '2024-05-20',
		type: '提现税费',
		description: '提款手续费-直接到当地银行转账',
		customer: '乔安娜',
		num: '-¥12.00',
		id: '43567127',
	}, {
		date: '2024-05-20',
		type: '提现税费',
		description: '提款手续费-直接到当地银行转账',
		customer: '乔安娜',
		num: '-¥12.00',
		id: '43567127',
	}, {
		date: '2024-05-20',
		type: '提现税费',
		description: '提款手续费-直接到当地银行转账',
		customer: '乔安娜',
		num: '-¥12.00',
		id: '43567127',
	}, {
		date: '2024-05-20',
		type: '提现税费',
		description: '提款手续费-直接到当地银行转账',
		customer: '乔安娜',
		num: '-¥12.00',
		id: '43567127',
	}])
</script>

<template>
	<HeaderTop :is-work="false" :is-login="false" />
	<Layout>
		<div class="transaction-log-container">
			<div class="transaction-log-header-title">
				交易记录
			</div>
			<n-data-table :columns="columns" :data="data" />
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

		:deep(.n-data-table .n-data-table-td) {
			font-size: 14px;
		}

		:deep(.n-data-table .n-data-table-th) {
			background-color: #ffffff;
		}

		:deep(.n-data-table .n-data-table-td.hui) {
			color: #4B5563 !important;
		}

		:deep(.n-data-table .n-data-table-td.lv) {
			color: #58968B !important;
		}
	}
</style>