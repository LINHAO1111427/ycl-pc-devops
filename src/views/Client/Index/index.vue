<script setup lang="ts">
import HeaderClientTop from '@/components/Header/HeaderClientTop.vue'
import Index from '@/components/Client/Index.vue'
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
    <div class="talents">
        <HeaderClientTop :is-login="false" :is-work="false" />
        <Index />
        <Footer></Footer>
    </div>
</template>

<style scoped>
.talents {
    height: 100%;
    overflow: auto;
}
</style>