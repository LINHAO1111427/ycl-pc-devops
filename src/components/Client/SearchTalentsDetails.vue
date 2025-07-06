<script setup lang="ts">
import Ellipsis from '@/components/Talents/ellipsis.vue'
import TagList from '@/components/Talents/TagList.vue'
import {IconStart, RenderIcon, IconPingbi, IconMessage, IconWeiyanzheng, IconShipin} from '@/components'
import {ref} from 'vue'
import {createWorkerFavor, deleteWorkerFavor} from '@/api/base'
import {useMessage} from 'naive-ui'
// 创建 message 实例
const message = useMessage()
const props = defineProps({
  isConsult: {
    type: Boolean,
    default: 0,
  },
  userList: {
    type: Array,
    default: [],
  }
})

const tagOptions = ['文件翻译', '译本', '普通话', '方言', '英译中文', ...new Array(10).fill('翻译').map((item, index) => item + index)]


const emit = defineEmits(['click'])

function onClickUrl(item) {
  emit("click", item, "1");
}

const isActive = ref(false)

const isActive2 = ref(false)

const charMessageShow = ref(false)
const collect = async (item) => {
  let res
  if (!isActive.value) {
    res = await createWorkerFavor({workerId: item.userId})
  } else {
    res = await deleteWorkerFavor({id: item.userId})
  }
  if (res.code !== 0) {
    message.error(res.msg)
    return
  }
  isActive.value = !isActive.value

}

</script>

<template>
  <div class="talents-cart-container" v-for="(item,index) in userList">
    <div class="talents-cart-container-left">
      <n-flex :wrap="false" align="center">
        <n-badge dot type="success" :offset="[-45, 8]">
          <n-avatar :size="55" round style="flex-shrink: 0" :src="item.avatar" @click="emit('click',item)"/>
        </n-badge>
        <n-flex vertical style="width: 100%" :size="0">
          <n-flex align="center">
            <n-space>
              <div class="cart-header-title" @click="emit('click',item)">
                {{ item.name }}
              </div>
              <!--              <div class="cart-header-date">-->
              <!--                7个小时前发布-->
              <!--              </div>-->
            </n-space>
            <div class="cart-header-icons">
              <RenderIcon :size="18" fill="#898989" :icon="IconMessage" @click.stop="charMessageShow=true"/>
              <RenderIcon :size="18" :fill="isActive2 ? '#58968B' : '#808080'" :icon="IconPingbi"
                          @click.stop="isActive2 = !isActive2"/>
              <RenderIcon :size="18" :fill="isActive ? '#58968B' :'#898989'" :icon="IconStart"
                          @click="collect(item)"/>
            </div>
          </n-flex>
          <n-flex style="margin-top: 15px" align="center" @click="emit('click',item)">
            <div class="cart-ver-item">
              <RenderIcon :size="15" fill="#808080" :icon="IconWeiyanzheng"/>
              证书{{ item.isUpCertificate === 0 ? '已上传' : '未上传' }}
            </div>
            <div class="cart-ver-item">
              接单总量:{{ item.orderCount }}
            </div>
            <div class="cart-ver-item">
              收入合计：{{ item.totalAmount }}
            </div>
            <div class="cart-ver-item">
              {{ item.itemHobby === 0 ? '一次性' : '里程碑' }}任务
            </div>
            <div class="cart-ver-item">
              {{ item.loginCity }}
            </div>
            <div class="cart-ver-item" v-if="item.isConsultType===0">
              <n-button size="small" :type="isConsult == 1 || index > 1 ? 'primary' : 'tertiary'"
                        :secondary="isConsult == 1 || index > 1 ? false : true" @click="onClickUrl(item)">
                <RenderIcon :size="15" :fill="isConsult == 1 || index > 1? '#ffffff' : '#8A8A8A'" :icon="IconShipin"
                            style="margin-right:5px;"/>
                商业咨询
              </n-button>
            </div>
            <n-rate readonly :default-value="item.assess" color="#F18B41" style="margin-left: auto"/>
            <span class="rate-nums">{{ item.assess }}</span>
          </n-flex>
        </n-flex>
      </n-flex>
      <div class="cart-title">个人简介：</div>
      <div class="cart-ellipsis-text" @click="emit('click')">
        <ellipsis>
          {{ item.selfIntroduction }}
        </ellipsis>
        <div class="cart-tag-list">
          <TagList :options="tagOptions"></TagList>
        </div>
      </div>
    </div>
  </div>
  <ChatMessage v-model:show="charMessageShow"/>
</template>

<style scoped lang="scss">
.talents-cart-container {
  border: solid 1px #58968B;
  box-sizing: border-box;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  width: 100%;
  cursor: pointer;
  background-color: #ffffff;

  .cart-header-icons {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .talents-cart-container-left {
    padding: 20px;
    box-sizing: border-box;
    flex: 1;
    width: calc(100% - 250px);
  }

  .cart-text-item-desc {
    font-size: 12px !important;
    margin-top: 7px;
  }

  .cart-header-title {
    font-size: 20px;
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

::v-deep(.n-base-icon svg),
::v-deep(.n-base-icon) {
  //color: #F18B41;
}
</style>
