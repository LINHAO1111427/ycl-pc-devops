<script setup lang="ts">
	import Cart from './Card.vue'
	import { ChevronBack } from '@vicons/ionicons5'
	import PositionsDetails from "@/components/PositionsDetails/index.vue"
	import { ref } from 'vue'
	import { useRouter } from 'vue-router'

	const props = defineProps({
	  typeValue: {
	    type: Boolean,
	    default: 1,
	  },
	})
	const active = ref(false)

	const list = ref([])
	
	function getList(value) {
		if (value == 1) {
			list.value = [
				{
					id: 1,
					isActive: false
				},
				{
					id: 2,
					isActive: false
				},
				{
					id: 3,
					isActive: false
				}
			]
		} else if (value == 2) {
			list.value = [
				{
					id: 1,
					isActive: false
				},
				{
					id: 2,
					isActive: false
				}
			]
		} else if (value == 3) {
			list.value = [
				{
					id: 1,
					isActive: true
				}
			]
		}
	}
	
	watchEffect(() => {
		getList(props.typeValue)
	})
	
	const router = useRouter()
	
	function handleUpdateValue(value){
		router.push(`/talents?type=${value}`)
	}
	function onClickUrl(){
		const routerPath = router.resolve(`/talents-detail`).href
		window.open(routerPath, '_blank')
	}
	function search(){
		router.push(`/search/position`)
	}
</script>

<template>
	<div class="resume-container">
		<div class="resume-search">
			<n-input round placeholder="请输入..." @keyup.enter="search" style="width: 360px">
				<template #prefix>
					<n-flex align="center" class="search-box">
						<span>光速匹配</span>
						<n-switch size="small" />
						<div class="icon">
							<img src="@/assets/img/search.png" alt="" />
						</div>
					</n-flex>
				</template>
			</n-input>
		</div>
		<div class="resume-tabs-item">
			<n-tabs type="line" animated :value="typeValue" @update:value="handleUpdateValue">
				<n-tab-pane name="1" tab="最佳匹配" />
				<n-tab-pane name="2" tab="最近浏览" />
				<n-tab-pane name="3" tab="我的收藏(1)" />
			</n-tabs>
			<div class="resume-body-container">
				<Cart :list="list" @click="active = true"></Cart>
			</div>
		</div>
	</div>
	<n-drawer v-model:show="active" width="1153px" placement="right">
		<n-drawer-content>
			<template #header>
				<n-flex justify="space-between" align="center">
					<n-icon :size="20" @click="active = false" class="cursor-pointer-style">
						<ChevronBack />
					</n-icon>
					<n-button size="small" type="primary" ghost @click="onClickUrl">新窗口中打开职位</n-button>
				</n-flex>
			</template>
			<PositionsDetails></PositionsDetails>
		</n-drawer-content>
	</n-drawer>
</template>

<style scoped lang="scss">
	.resume-container {
		width: 100%;
		flex: 1;
		overflow: hidden;

		.search-box {
			padding: 0 0 0 10px;
		}

		.icon {
			margin-left: 15px;
			width: 16px;
		}

		.resume-tabs-item {
			margin-top: 20px;
		}

		::v-deep(.n-tabs-tab__label) {
			font-size: 16px;
			width: 100px;
			display: flex;
			justify-content: center;
		}

		::v-deep(.n-tabs-tab) {
			color: #a8a8a8;
			border-bottom: 2px #EDEDED solid;
		}

		.resume-body-container {
			margin-top: 20px;
			width: 100%;
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 20px;
		}
	}

	::v-deep(.n-drawer-header__main) {
		width: 100%;
	}
</style>