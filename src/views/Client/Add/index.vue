<script setup lang="ts">
import HeaderClientTop from '@/components/Header/HeaderClientTop.vue'
import AddClient from '@/components/Client/AddClient.vue'
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
  <HeaderClientTop :is-login="false" :is-work="false" />
    <div class="talents">
        <AddClient />
        <Footer></Footer>
    </div>
</template>

<style scoped>
.talents {
    height: calc(100% - 60px);
    overflow: auto;
}
</style>
