<script setup lang="ts">
import HeaderClientTop from '@/components/Header/HeaderClientTop.vue'
import EffectiveSubmit from '@/components/Client/EffectiveSubmit.vue'
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
    <div class="submit-proposals">
        <HeaderClientTop :is-login="false" :is-client="true" :is-work="false" />
        <EffectiveSubmit />
        <Footer></Footer>
    </div>
</template>

<style scoped>
.submit-proposals {
    height: 100%;
    overflow: auto;
}
</style>