<script setup lang="ts">
import HeaderClientTop from '@/components/Header/HeaderClientTop.vue'
import JobIndex from '@/components/Client/JobIndex.vue'
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
        <HeaderClientTop :is-login="false" :is-client="true" :is-work="false" />
        <div class="application">
            <JobIndex />
        </div>
        <Footer></Footer>
    </div>
</template>

<style scoped>
.talents {
    height: 100%;
    overflow: auto;
}

.application {
    width: 100%;
    background-color: #F4FBFA;
}
</style>