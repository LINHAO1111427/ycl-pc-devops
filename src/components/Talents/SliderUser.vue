<script setup lang="ts">
import {ChevronForwardOutline} from '@vicons/ionicons5'
import avatarUrl from '../../assets/img/avatar.png'
import {computed, onMounted, ref, watch} from 'vue'
import {useUser} from "@/api/useUser.ts";
import {useStore} from 'vuex'

const store = useStore()
const emit = defineEmits(["openCharMessageShow"]);
const avatar = computed(() => store.getters.avatar)
const openCharMessageShow = () => {
  emit("openCharMessageShow", "这是子组件的数据");
};
const skillList = ref([])
const {getUser} = useUser()
const userData = ref({})
onMounted(async () => {
  const res = await getUser()
  userData.value = res.data
})
watch(
    () => userData?.skill,
    (newVal) => {
      if (newVal) {
        skillList.value = newVal.split(',').map(item => item.trim())
      }
    },
    { immediate: true }
)
</script>

<template>
  <div class="slider-user">
    <div class="slider-user-item">
      <n-flex align="center" :size="20">
        <n-avatar
            :src="avatar"
            :size="64"
            round/>
        <n-flex vertical :size="10">
          <div class="user-name">{{ userData.name }}</div>
          <div class="user-desc">
            {{ userData.expectedPosition }}
          </div>
        </n-flex>
      </n-flex>
      <div class="user-jie-sao">
        <div v-for="item in skillList" :key="item">
          {{ item }}
        </div>
      </div>
      <n-flex class="slider-user-date" justify="space-between">
        <n-flex vertical align="center">
          <div class="slider-user-item-nums">{{ userData.orderCount }}</div>
          <div class="slider-user-item-text">历史接单(单)</div>
        </n-flex>
        <n-flex vertical align="center">
          <div class="slider-user-item-nums">{{ userData.totalIncome }}</div>
          <div class="slider-user-item-text">总收入(￥)</div>
        </n-flex>
        <n-flex vertical align="center">
          <div class="slider-user-item-nums">{{ userData.score }}</div>
          <div class="slider-user-item-text">评分(5.0)</div>
        </n-flex>
      </n-flex>
      <n-flex style="margin-top: 25px;cursor: pointer" @click="$router.push('/personal-data')">
        <div class="s-t1">完善你的个人资料</div>
        <n-progress type="line" color="#3BC8B4" :percentage="userData.dataCompletionRate"/>
      </n-flex>
    </div>
    <div class="slider-user-item padding-0">
      <div class="slider-user-cell" @click="$router.push('/member')">
        <div class="name">
          会员权益
        </div>
        <n-icon :size="20">
          <component :is="ChevronForwardOutline"/>
        </n-icon>
      </div>
      <div class="slider-user-cell" @click="$router.push('/application')">
        <div class="name">
          历史申请
        </div>
        <n-icon :size="20">
          <component :is="ChevronForwardOutline"/>
        </n-icon>
      </div>
    </div>

    <n-flex class="slider-user-item padding-0" vertical>
      <!--  <RouterLink to="/" class="slider-item-link">
           单刻达学院
         </RouterLink>
         <RouterLink to="/" class="slider-item-link">
           获得报酬
         </RouterLink>
         <RouterLink to="/" class="slider-item-link">
           社区与论坛
         </RouterLink> -->
      <span class="slider-item-link" @click="openCharMessageShow">
        帮助中心
      </span>
    </n-flex>
  </div>
</template>

<style scoped lang="scss">
.slider-user {
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-shrink: 0;

  .s-t1 {
    font-weight: 400;
    font-size: 14px;
    color: #3BC8B4;
    line-height: 20px;
  }

  .slider-user-item {
    padding: 32px 20px;
    background-color: #f8f8f8;
    border-radius: 13px;
    box-sizing: border-box;

    &.padding-0 {
      padding: 10px 20px;
    }

    .user-name {
      font-size: 25px;
      font-weight: 400;
    }

    .user-desc {
      font-size: 18px;
      color: #a4a4a4;
      font-weight: 400 !important;
    }
  }

  .user-jie-sao {
    display: flex;
    margin-top: 14px;
    font-size: 16px;
    color: #a4a4a4;
    font-weight: 400 !important;

    div {
      background: #EEEEEE;
      border-radius: 13px;
      padding: 5px 12px;
      margin-right: 15px;
      font-size: 12px;
    }
  }

  .slider-user-date {
    margin-top: 20px;
  }

  .slider-user-item-nums {
    font-size: 22px;
  }

  .slider-user-item-text {
    color: #b9b9b9;
  }

  .slider-user-cell {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 15px 0;

    .name {
      font-size: 18px;
    }
  }

  .slider-item-link {
    font-size: 18px;
    padding: 15px 0;
    cursor: pointer;
    color: rgba(105, 105, 105);
    text-decoration-line: underline;
  }
}
</style>
