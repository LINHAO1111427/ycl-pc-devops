<script setup lang="ts">
import { ref } from 'vue'

withDefaults(
  defineProps<
    { options: { label: string, value: string }[], value: string }
  >(),
  {
    value: '',
  },
)


const emit = defineEmits(['click'])


function onClickSwiperTabs(value: string | number) {
  emit('click', value)
}
</script>

<template>
  <n-flex :wrap="false">
    <div
      v-for="item in options"
      :class="['box-tabs-item',value === item.value ? 'active' :''] "
      @click="onClickSwiperTabs(item.value)"
    >
      <div class="box-tabs-item-text">
        {{ item.label }}
      </div>
      <div class="border-width"></div>
    </div>
  </n-flex>
</template>

<style scoped lang="scss">
.box-tabs-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;

  .border-width {
    width: 100%;
    height: 4px;
    background-color: #EDEDED;
  }

  .box-tabs-item-text {
    font-size: 14px;
    color: #808080;
  }

  &.active {
	.box-tabs-item-text{
		color: $MainColor;
	}
    .border-width {
      background-color: $MainColor;
    }
  }
}
</style>