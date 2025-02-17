<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import { ChevronBackOutline, ChevronForwardOutline } from '@vicons/ionicons5'

withDefaults(
  defineProps<{
    options: string[]
  }>(),
  {})

const element = ref()

const count = ref(0)

const isShowArrow = computed(() => element.value?.scrollWidth > element.value?.clientWidth)

const scrollLeft = ref(0)

const showBackArrow = computed(() => {
  return count.value >= -1 && scrollLeft.value > 0
})

const showRightArrow = computed(() => {
  return count.value >= 0 && scrollLeft.value <= element.value.scrollWidth && ((count.value + 1) * element.value.clientWidth <= element.value.scrollWidth)
})

function onClickLeft() {
  if (count <= 0) {
    return
  }
  count.value--
  scrollLeft.value = element.value.clientWidth * (count.value)
  element.value.scrollLeft = scrollLeft.value
}

function onClickRight() {
  if (element.value.scrollLeft >= element.value?.scrollWidth) {
    return
  }

  count.value++
  scrollLeft.value = element.value.clientWidth * (count.value)
  element.value.scrollLeft = scrollLeft.value

}

</script>

<template>
  <div class="tag-container">
    <div class="tag-container-rolling" ref="element">
      <n-flex :wrap="false">
        <n-tag :bordered="false" round v-for="item in options" @click.stop="" style="cursor: pointer;">
          {{ item }}
        </n-tag>

      </n-flex>
      <div style="width: 150px;background-color: red;"></div>
    </div>
    <div class="arrow" v-if="isShowArrow">
      <n-icon @click.stop="onClickLeft" v-if="showBackArrow">
        <ChevronBackOutline />
      </n-icon>
      <n-icon @click.stop="onClickRight" v-if="showRightArrow">
        <ChevronForwardOutline />
      </n-icon>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.tag-container {
  width: 100%;
  overflow-x: hidden;
  position: relative;

  .tag-container-rolling {
    width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    padding-right: 200px;
    display: flex;
  }

  .arrow {
    position: absolute;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    right: 0;
    background: linear-gradient(to left, #fff 0%, #fff 30%, transparent 100%);
    color: #000000;
    width: 150px;
    padding: 0 10px;
    justify-content: flex-end;
    cursor: pointer;
  }
}
</style>