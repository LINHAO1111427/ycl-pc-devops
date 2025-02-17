<script setup lang="ts">
import HeaderClientTop from '@/components/Header/HeaderClientTop.vue'
import MemberSecurity from '@/components/Client/MemberSecurity.vue'
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
    <MemberSecurity />
</template>

<style scoped></style>