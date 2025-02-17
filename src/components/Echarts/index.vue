<script setup lang="ts">
import { ref, onMounted, shallowRef, watch, toRefs } from 'vue'
import * as echarts from 'echarts'

const props = withDefaults(defineProps<{ options: Record<string, any> }>(), {})

const { options } = toRefs(props)

const element = ref()

const chart = shallowRef()

onMounted(() => {
  chart.value = echarts.init(element.value)
  chart.value.setOption(options.value)
})


watch(options, (newValue) => {
  if (chart.value) {
    chart.value.setOption(newValue)
  }
})

</script>

<template>
  <div class="echarts" ref="element">

  </div>
</template>

<style scoped lang="scss">
.echarts {
  width: 100%;
  height: 100%;
}
</style>