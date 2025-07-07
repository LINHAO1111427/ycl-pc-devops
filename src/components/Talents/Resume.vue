<script setup lang="ts">
import Cart from './Card.vue'
import {ChevronBack} from '@vicons/ionicons5'
import PositionsDetails from "@/components/PositionsDetails/index.vue"
import {onMounted, ref} from 'vue'
import {useRouter} from 'vue-router'
import {squareFreelancerItem} from '@/api/home'
import {useMessage} from 'naive-ui'
// 创建 message 实例
const message = useMessage()
const props = defineProps({
  typeValue: {
    type: Boolean,
    default: 1,
  },
})
onMounted(async () => {
  // await getProjectList()
});
const active = ref(false)

const list = ref([])


const router = useRouter()
const emit = defineEmits(["openVip"]);
const searchContent = ref('')
const projectId = ref('')
const openVip = () => {
  emit("openVip", "这是子组件的数据");
};

function handleUpdateValue(value) {
  // getProjectList(props.typeValue - 1)
  router.push(`/talents?type=${value}`)
}

const getProjectList = async () => {
  const perem = {
    userId: localStorage.getItem('userId'),
    search: searchContent.value,
    itemType: props.typeValue - 1,
    pageNo: 1,
    pageSize: 10
  }
  const res = await squareFreelancerItem(perem)
  if (res.code !== 0) {
    message.error(res.msg)
    return
  }
  list.value = res.data.itemPage.list
}

function onClickUrl() {
  const routerPath = router.resolve(`/talents-detail`).href
  window.open(routerPath, '_blank')
}

const search = async () => {
  await getProjectList()
  // router.push(`/search/position`)
}
const openProject = (item) => {
  console.log(item.id)
  projectId.value = item.id
  active.value = true
}
watchEffect(async () => {
  await getProjectList()
  // getList(props.typeValue)
})
</script>

<template>
  <div class="resume-container">
    <div style="margin-bottom: 20px;" @click="openVip">
      <img src="../../assets/img/vip.png" style="cursor: pointer;"/>
    </div>
    <div class="resume-search">
      <n-input placeholder="请输入..." @keyup.enter="search" style="width: 100%" v-model:value='searchContent'>
        <!--				<template #prefix>-->
        <!--					<n-flex align="center" class="search-box">-->
        <!--						<span>光速匹配</span>-->
        <!--						<n-switch size="small" />-->
        <!--						<div class="icon">-->
        <!--							<img src="@/assets/img/search.png" alt="" />-->
        <!--						</div>-->
        <!--					</n-flex>-->
        <!--				</template>-->
      </n-input>
    </div>
    <div class="resume-tabs-item">
      <n-tabs type="line" animated :value="typeValue" @update:value="handleUpdateValue">
        <n-tab-pane name="1" tab="最佳匹配"/>
        <n-tab-pane name="2" tab="最近浏览"/>
        <n-tab-pane name="3" tab="我的收藏"/>
      </n-tabs>
      <div class="resume-body-container">
        <Cart :list="list" @click="openProject"></Cart>
      </div>
    </div>
  </div>
  <n-drawer v-model:show="active" width="1153px" placement="right" v-if="active">
    <n-drawer-content>
      <template #header>
        <n-flex justify="space-between" align="center">
          <n-icon :size="20" @click="active = false" class="cursor-pointer-style">
            <ChevronBack/>
          </n-icon>
          <n-button size="small" type="primary" ghost @click="onClickUrl">新窗口中打开职位</n-button>
        </n-flex>
      </template>
      <PositionsDetails :projectId="projectId"></PositionsDetails>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped lang="scss">
.resume-container {
  width: 100%;
  flex: 1;
  overflow: hidden;

  .search-box {
    padding: 0 0 0 10px;
  }

  .icon {
    margin-left: 15px;
    width: 16px;
  }

  .resume-tabs-item {
    margin-top: 20px;
  }

  ::v-deep(.n-tabs-tab__label) {
    font-size: 16px;
    width: 100px;
    display: flex;
    justify-content: center;
  }

  ::v-deep(.n-tabs-tab) {
    color: #a8a8a8;
    border-bottom: 2px #EDEDED solid;
  }

  .resume-body-container {
    margin-top: 20px;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

::v-deep(.n-input .n-input__input-el) {
  height: 50px !important;;
}

::v-deep(.n-drawer-header__main) {
  width: 100%;
}
</style>
