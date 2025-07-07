<script setup lang="ts">
import HeaderClientTop from '@/components/Header/HeaderClientTop.vue'
import OnlyEnd from '@/components/Client/OnlyEnd.vue'
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
            <OnlyEnd />
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
