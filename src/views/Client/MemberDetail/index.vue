<script setup lang="ts">
import HeaderClientTop from '@/components/Header/HeaderClientTop.vue'
import Talent from '@/components/Client/Talent.vue'
import { Footer, Button as RButton } from '@/components'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
const IndexMember = defineAsyncComponent(() => import('@/components/Client/IndexMember.vue'))
const route = useRoute()

const type = ref(1)

watchEffect(() => {
	type.value = route.query.type
})
</script>

<template>
    <HeaderClientTop :is-login="false" :is-work="false" />
    <div class="layout">
    	<div class="layout-container">
    		<IndexMember />
    	</div>
		<Footer></Footer>
    </div>
</template>

<style scoped lang="scss">
.layout {
  background-color: $BackColor;
  height: $container-height;
  overflow: auto;

  .layout-container {
    width: 1326px;
    margin: 0 auto;
	max-width: 100%;
  }
}
@media (max-width: 1400px) {
	.layout {
	  .layout-container {
	    padding: 20px;
	  }
	}
}
</style>