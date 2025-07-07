<script setup lang="ts">
import Ellipsis from '@/components/Talents/ellipsis.vue'
import TagList from '@/components/Talents/TagList.vue'
import {IconStart, RenderIcon, IconGongZou, IconMessage, IconPingbi, IconShoucang1, IconWeiyanzheng} from '@/components'
import {ref} from 'vue'
import {createFreelancerCollect, deleteFreelancerCollect} from '@/api/home'
import {useMessage} from 'naive-ui'
// 创建 message 实例
const message = useMessage()
const props = withDefaults(defineProps<{
  list: any[]
}>(), {
  list: () => []
})

// 当 props.list 变化时执行回调
watch(
    () => props.list,
    (newVal, oldVal) => {
      console.log('list changed:', newVal)
      // 你要做的刷新逻辑，比如重新渲染、请求数据等
      refreshPage()
    },
    {deep: true, immediate: true} // 需要监听数组内部变化时加 deep
)

function refreshPage() {
  // 模拟刷新页面逻辑（比如重新请求数据）
  console.log('页面刷新逻辑执行了')
}

const tagOptions = ['文件翻译', '译本', '普通话', '方言', '英译中文', ...new Array(10).fill('翻译').map((item, index) => item + index)]

const emit = defineEmits(['click'])

const charMessageShow = ref(false)

const getHoursFromNow = (timestamp: number) => {
  const now = Date.now()
  const diffMs = now - timestamp
  const hoursDiff = Math.floor(diffMs / (1000 * 60 * 60))
  return hoursDiff
}
const collect = async (item) => {
  const isCollecting = !(item.projectCollectStatus === 0)
  const param = {
    userId: localStorage.getItem('userId'),
    itemId: item.id
  }
  const res = isCollecting ? await createFreelancerCollect(param) : await deleteFreelancerCollect(param)
  if (res.code !== 0) {
    message.error(res.msg || '操作失败')
    return
  }
  // 成功后切换收藏状态
  item.projectCollectStatus = item.projectCollectStatus === 0 ? 1 : 0
}
</script>

<template>
  <div class="cart-container" v-for="(item,index) in list" @click="emit('click',item)">
    <div class="cart-container-left">
      <n-flex align="center">
        <div class="cart-header-title">
          {{ item.title }}
        </div>
        <div class="cart-header-date">
          {{ getHoursFromNow(item.createTime) }}个小时前发布
        </div>
        <div class="cart-header-icons">
          <RenderIcon :size="18" fill="#808080" :icon="IconMessage" @click.stop="charMessageShow = true"/>
          <RenderIcon :size="18" :fill="item.isActive2 ? '#58968B' : '#808080'" :icon="IconPingbi"
                      @click.stop="item.isActive2 = !item.isActive2"/>
          <RenderIcon
              :size="18"
              :fill="item.projectCollectStatus===0 ? '#58968B' : '#808080'"
              :icon="item.projectCollectStatus===0 ? IconStart : IconShoucang1"
              @click.stop="collect(item)"
          />
        </div>
      </n-flex>
      <n-flex style="margin-top: 15px" align="center">
        <div class="cart-ver-item">
          <RenderIcon :size="15" fill="#808080" :icon="IconWeiyanzheng"/>
          <span style="margin-left: 3px;" v-if="item.status!==null">{{
              item.status === 99 ? '已取消' : ['待审核', '进行中', '已完成', '已取消'][item.status - 1]
            }}</span>
        </div>
        <!-- <div class="cart-ver-item">
          证书未验证
        </div> -->
        <div class="cart-ver-item">
          {{ item.deliveryType === 10 ? '一次性' : '里程碑' }}
          任务
        </div>
        <!-- <div class="cart-ver-item">
          中文母语
        </div> -->
        <div class="cart-ver-item">
          {{ item.district }}
        </div>
        <n-rate readonly :default-value="5" color="#F18B41" style="margin-left: auto"/>
        <span class="rate-nums">5</span>
      </n-flex>
      <div class="cart-title">项目详情：</div>
      <div class="cart-ellipsis-text">
        <ellipsis>
          {{ item.description }}
        </ellipsis>
        <div class="cart-tag-list">
          <TagList :options="item.projectSkills"></TagList>
        </div>
      </div>
    </div>
    <div class="cart-container-right">
      <n-flex class="header" justify="space-between">
        <div>固定价格</div>
        <div>共发布：268</div>
      </n-flex>
      <n-flex class="header" justify="space-between" style="margin: 10px 0">
        <div>预估预算: ￥400</div>
        <div>总花费: ￥40</div>
      </n-flex>
      <div style="margin: 10px 0">
        中级:我正在寻找价格适合的自由职业者
      </div>
      <div style="margin-top: 30px;font-size: 12px;">以下经验优先</div>
      <div class="cart-text-item-desc">
        - 英语和普通话流利
      </div>
      <div class="cart-text-item-desc">
        - 在翻译书面内容方面有丰富的经验
      </div>
      <div class="cart-text-item-desc">
        - 非常注重细节和出色的校对技巧。
      </div>
      <div class="cart-text-item-desc">
        - 能够按时完成任务，
      </div>
    </div>
  </div>
  <ChatMessage v-model:show="charMessageShow"/>
</template>

<style scoped lang="scss">
.cart-container {
  box-sizing: border-box;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  width: 100%;
  cursor: pointer;
  background-color: #ffffff;

  &:hover {
    border: solid 1px #58968B;
  }

  &:hover .cart-header-title {
    color: #58968B;
  }

  .cart-header-icons {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .cart-container-left {
    padding: 20px 20px 20px 20px;
    box-sizing: border-box;
    flex: 1;
    width: calc(100% - 250px);
  }

  .cart-container-right {
    display: none;
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
    background-color: #58968B;
    width: 250px;
    flex-shrink: 0;
    padding: 20px 10px 20px 27px;
    box-sizing: border-box;

    & div {
      font-size: 10px;
      color: #f5f5f5;
      font-weight: 400;
    }
  }


  .cart-text-item-desc {
    font-size: 12px !important;
    margin-top: 7px;
  }

  .cart-header-title {
    font-size: 20px;

    &:hover {
      text-decoration: underline;
    }
  }

  .cart-header-date {
    font-size: 12px;
    margin-top: 5px;
    color: #9b9b9b;
  }

  .cart-ver-item {
    display: flex;
    align-items: center;
    color: #afafaf;
  }

  .rate-nums {
    line-height: 10px;
    font-weight: 600;
  }

  .cart-title {
    margin-top: 25px;
  }

  .cart-ellipsis-text {
    margin-top: 5px;
    color: #afafaf;
    line-height: 1.5;
  }

  .cart-tag-list {
    margin-top: 10px;
  }
}
</style>
