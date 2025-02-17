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
    title: '找工作',
    key: '找工作',
    children: [
      {
        label: '找工作',
        key: '/talents?type=1',
      },
      {
        label: '收藏的工作',
        key: '/talents?type=3',
      },
      {
        label: '会员权益',
        key: '/member',
      },
    ],
  },
  {
    title: '工作交付',
    key: '工作交付',
    children: [
      {
        label: '正在生效的工作',
        key: '/work/effective',
      },
      {
        label: '历史申请',
        key: '/application',
      },
      {
        label: '历史工作',
        key: '/work/historical',
      },
    ],
  },
  {
    title: '商业咨询',
    key: '商业咨询',
    children: [
	  {
		  label: '待确认咨询订单',
		  key: '/confirm-consult',
	  },
      {
        label: '正在生效的商业咨询',
        key: '/effective-consult',
      },
      {
        label: '历史商业咨询',
        key: '/historical-consult',
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
      <n-dropdown
        trigger="hover"
        :options="item.children"
        size="huge"
        style="width: 318px"
        placement="bottom-start"
        show-arrow
		@select="onClickSelect"
        v-if="Array.isArray(item.children) && item.children.length > 0"
      >
        <n-flex
          align="center"
          :size="5"
          @mouseenter="onMouseenter(item.key)"
          @mouseleave="onMouseenter(null)"
          class="nav-container-item padding-2"
        >
          {{ item.title }}
          <n-icon
            :class="{
            'nav-arrow': true,
            active: key === item.key,
          }"
          >
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
