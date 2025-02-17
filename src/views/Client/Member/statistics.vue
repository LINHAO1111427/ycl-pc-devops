<script setup lang="ts">
import HeaderClientTop from '@/components/Header/HeaderClientTop.vue'
import MemberStatistics from '@/components/Client/MemberStatistics.vue'
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
        <div class="easy">
            <div class="easy-view">
                <MemberStatistics />
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

.easy {
    background-color: #F4FBFA;
}

.easy-view {
    width: 1360px;
    margin: 0 auto;
    padding: 20px 0;
    max-width: 100%;
}

@media screen and (max-width: 1360px) {

    /* 在此处添加适用于宽度小于1360像素的设备的样式 */
    .easy-view {
        width: 1200px;
        margin: 0 auto;
        padding: 20px 0;
        max-width: 100%;
    }
}
</style>