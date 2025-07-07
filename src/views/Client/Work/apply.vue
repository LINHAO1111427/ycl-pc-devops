<script setup lang="ts">
import HeaderClientTop from '@/components/Header/HeaderClientTop.vue'
import WorkApply from '@/components/Client/WorkApply.vue'
import { Footer, Button as RButton } from '@/components'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const type = ref(1)

watchEffect(() => {
	type.value = route.query.type
})
</script>

<template>
  <HeaderClientTop  :is-client="true" :is-work="false" />
    <div class="talents">
        <div class="application">
            <WorkApply :status="2"/>
        </div>
        <Footer></Footer>
    </div>
</template>

<style scoped>
.talents {
    height: 100%;
    overflow: auto;
}
</style>
