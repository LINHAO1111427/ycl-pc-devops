<script setup lang="ts">
import HeaderClientTop from '@/components/Header/HeaderClientTop.vue'
import OrderPay from '@/components/Client/OrderPay.vue'
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
        <OrderPay />
        <Footer></Footer>
    </div>
</template>

<style scoped>
.talents {
    background-color: #ffffff;
    height: 100%;
    overflow: auto;
}
</style>
