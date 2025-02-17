<script setup lang="ts">
import HeaderClientTop from '@/components/Header/HeaderClientTop.vue'
import MemberWithdrawal from '@/components/Client/MemberWithdrawal.vue'
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
    <MemberWithdrawal />
</template>

<style scoped></style>