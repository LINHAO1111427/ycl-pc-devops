<script setup lang="ts">
import { Text } from '../'
import { ChevronDownOutline } from '@vicons/ionicons5'

const props = defineProps({
  options: {
    type: Array,
    default: [],
  },
})

const value = ref(props.options.reduce((it, item) => {
  it[item.key] = {
    value: item.value ?? [],
    show: true,
  }
  return it
}, {}))

function onClickShoHeader(item) {
  if (!(value.value[item.key] instanceof Object)) {
    value.value[item.key] = {}
  }
  value.value[item.key] = {
    show: !value.value[item.key].show,
  }
}
</script>

<template>
  <div class="search-category">
    <n-space vertical :size="20">
      <Text :size="20">类别</Text>
      <div>
        <n-flex class="search-category-item" vertical v-for="item in options">
          <n-flex class="search-category-item-header" align="center" justify="space-between"
                  @click="onClickShoHeader(item)">
            <Text :size="16">{{ item.header }}</Text>
            <n-icon :size="16" :class="{'search-category-item-header-icon':true,'close':value[item.key]?.show}">
              <ChevronDownOutline></ChevronDownOutline>
            </n-icon>
          </n-flex>
          <div :class="{'search-category-item-container':true,'show':value[item.key]?.show}">
            <n-checkbox-group v-model:value="value[item.key].value">
              <n-space vertical :size="10">
                <n-checkbox v-for="it in item.children" :value="it.value">{{ it.item }}</n-checkbox>
              </n-space>
            </n-checkbox-group>
          </div>
        </n-flex>
      </div>
    </n-space>
  </div>
</template>

<style scoped lang="scss">
.search-category {
  width: 278px;
  background: #FFFFFF;
  border-radius: 12px 12px 12px 12px;
  border: 1px solid #E4E9EE;
  padding: 24px;
  box-sizing: border-box;

  .search-category-item-header {
    cursor: pointer;
  }

  .search-category-item-header-icon {
    transform: rotate(180deg);

    &.close {
      transform: rotate(0);
    }
  }

  .search-category-item-container {
    display: none;

    &.show {
      display: block;
    }
  }

  .search-category-item {
    padding: 24px 0;
    border-top: solid 1px #E4E9EE;
  }
}
</style>