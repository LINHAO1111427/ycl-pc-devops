<script setup lang="ts">
import { ChevronDown } from '@vicons/ionicons5'
import { merge, cloneDeep } from 'lodash'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

type Options = any[] | ((value: any[]) => any[])

const props = withDefaults(defineProps<{ options: Options }>(), {
  // @ts-ignore
  options: [],
})

const currentOptions = [
  {
    title: '工作',
    key: '工作',
    children: [
	 {
		  label: '您的仪表板',
		  key: '/client/index',
	  },
      {
        label: '审核中的工作',
        key: '/client/work-apply',
      },
      {
        label: '生效的工作',
        key: '/client/work-ing',
      },
      {
        label: '所有工作',
        key: '/client/work-all',
      },
    ],
  },
  {
    title: '职位',
    key: '职位',
    children: [
      {
        label: '发现人才',
        key: '/client/talent',
      },
      {
        label: '我的雇佣',
        key: '/client/hire',
      },
      {
        label: '收藏的人才',
        key: '/client/collect',
      },
    ],
  },
  {
    title: '商业咨询',
    key: '商业咨询',
    children: [
      {
        label: '正在生效的商业咨询',
        key: '/client/effective-consult',
      },
      {
        label: '历史商业咨询',
        key: '/client/historical-consult',
      },
    ],
  },
  {
    title: '信息',
    key: 'message',
  },
]

const key = ref('')

const getOptions = computed(() => props.options instanceof Function ? props.options(cloneDeep(currentOptions)) : merge(currentOptions, props.options))

function onMouseenter(value: string) {
  key.value = value
}

const charMessageShow = ref(false)

function onClickSelect(value: string){
	console.log(value)
	if(value == 'message'){
		charMessageShow.value = true
	}else{
		router.push(value)
	}
}
</script>

<template>
  <n-flex :size="40">
    <template v-for="item in getOptions">
      <n-dropdown trigger="hover" :options="item.children" size="huge" style="width: 318px" placement="bottom-start"
        show-arrow @select="onClickSelect" v-if="Array.isArray(item.children) && item.children.length > 0">
        <n-flex align="center" :size="5" @mouseenter="onMouseenter(item.key)" @mouseleave="onMouseenter(null)"
          class="nav-container-item padding-2">
          {{ item.title }}
          <n-icon :class="{
            'nav-arrow': true,
            active: key === item.key,
          }">
            <ChevronDown></ChevronDown>
          </n-icon>
        </n-flex>
      </n-dropdown>
      <div class="nav-container-item padding-2" v-else @click="onClickSelect(item.key)">{{ item.title }}</div>
    </template>
  </n-flex>
  <ChatMessage v-model:show="charMessageShow" />
</template>

<style scoped lang="scss">
.nav-container-item {
  font-weight: 500;
  padding: 0 0 0 40px;
  font-size: 14px;
  color: #333333;
  display: flex;
  align-items: center;

  &.padding-2 {
    padding: 0 0 0 10px;
  }

  &:hover {
    color: #58968b;
    cursor: pointer;
  }
}

.nav-arrow {
  margin-left: 5px;
  transition: all 0.3s;

  &.active {
    transform: rotate(180deg);
  }
}
</style>
