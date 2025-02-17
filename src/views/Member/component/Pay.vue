<script setup lang="ts">
	import { Text } from '@/components'

	const emit = defineEmits(['update:show'])
</script>

<template>
	<n-modal>
		<n-card :bordered="false" size="huge" role="dialog" aria-modal="true" style="width:850px">
			<Text :size="34">
				付款
			</Text>
			<n-flex :size="15" align="center" class="pay-modal" vertical>
				<div class="code">
					
				</div>
				<Text :size="16">
					扫描二维码付款
				</Text>
				<Text :size="16" color="#808080">
					支持微信支付、支付宝支付、信用卡支付
				</Text>
				<n-button type="primary" size="large" @click="emit('update:show',false)" class="naiveui-button-16" style="margin-top: 29px;width: 263px;">已完成付款</n-button>
			</n-flex>
		</n-card>
	</n-modal>
</template>
<style scoped lang="scss">
	.pay-modal{
		.code {
			width: 319px;
			height: 319px;
			margin: 0 auto;
			background: #D9D9D9;
			border-radius: 12px 12px 12px 12px;
		}
	}
</style>