<script setup lang="ts">
import HeaderClientTop from '@/components/Header/HeaderClientTop.vue'
import SearchTalents from '@/components/Client/SearchTalents.vue'
import { Footer, Button as RButton } from '@/components'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isConsult = ref(0)

watchEffect(() => {
	isConsult.value = route.query.is_consult
})
</script>

<template>
    <div class="talents">
        <HeaderClientTop :is-login="false" :is-client="true" :is-work="false" />
        <div class="easy-search">
            <div class="easy-search-view">
                <SearchTalents :isConsult="isConsult" />
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<style scoped>
.talents {
    height: 100%;
    overflow: auto;
}

.easy-search {
    background-color: #f4fbfa;
}

.easy-search-view {
    width: 1360px;
    margin: 0 auto;
    padding: 20px 0;
    max-width: 100%;
}

@media screen and (max-width: 1360px) {

    /* 在此处添加适用于宽度小于1360像素的设备的样式 */
    .easy-search-view {
        width: 1200px;
        margin: 0 auto;
        padding: 20px 0;
        max-width: 100%;
    }
}
</style>