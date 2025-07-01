<script setup lang="ts">
import HeaderClientTop from '@/components/Header/HeaderClientTop.vue'
// import WorkAll from '@/components/Client/WorkAll.vue'
import { Footer, Button as RButton } from '@/components'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import WorkApply from '@/components/Client/WorkApply.vue'
const route = useRoute()

const type = ref(1)

watchEffect(() => {
	type.value = route.query.type
})
</script>

<template>
  <HeaderClientTop :is-login="false" :is-client="true" :is-work="false" />
    <div class="talents">
        <div class="application">
            <WorkApply/>
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
