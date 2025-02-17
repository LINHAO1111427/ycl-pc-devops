<script setup lang="ts">
	import { Text } from '@/components'

	const emit = defineEmits(['update:show'])
	
	function close(){
		emit('update:show')
	}
</script>

<template>
	<n-modal :on-mask-click="close">
		<n-card :bordered="false" size="huge" role="dialog" aria-modal="true" style="width:730px">
			<n-flex :size="70" class="work-details-modal" vertical style="padding:80px 0;">
				<n-flex justify="center">
					<Text :size="34">
						切换账号
					</Text>
				</n-flex>
				<n-flex :size="40" vertical>
					<n-flex class="list" align="center" justify="center">
						<n-avatar round size="large" />
						<n-flex vertical style="gap: 0px 12px;">
							<n-flex align="center">
								<Text :size="16">王杰</Text>
								<Text :size="12" color="#58968B">当前使用</Text>
							</n-flex>
							<Text :size="16" color="#808080">jasonfreelancer7@gmail.com</Text>
						</n-flex>
					</n-flex>
					<n-flex class="list cursor" align="center" justify="center" @click="emit('update:show')">
						<n-avatar round size="large" />
						<n-flex vertical style="gap: 0px 12px;">
							<n-flex align="center">
								<Text :size="16">王杰</Text>
							</n-flex>
							<Text :size="16" color="#808080">jasonfreelancer7@gmail.com</Text>
						</n-flex>
					</n-flex>
				</n-flex>
				<n-flex justify="center" :size="50">
					<n-button type="primary" class="naiveui-button-16" size="large"
						style="width: 280px;" @click="$router.push('/register')">添加账号</n-button>
				</n-flex>
			</n-flex>
		</n-card>
	</n-modal>
</template>
<style scoped lang="scss">
	.work-details-modal {
		.list.cursor{
			cursor: pointer;
		}
	}
</style>