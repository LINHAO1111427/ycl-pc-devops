<script setup lang="ts">
import HeaderClientTop from '@/components/Header/HeaderClientTop.vue'
import Open from '@/components/Client/Open.vue'
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
        <Open />
        <Footer></Footer>
    </div>
</template>

<style scoped>
.talents {
    background-color: #f4fbfa;
    height: 100%;
    overflow: auto;
}
</style>