<script setup lang="ts">
import HeaderTop from '@/components/Header/HeaderTop.vue'
import {Footer, IconStart, RenderIcon, IconFaxiangmu, IconYusuanzonge, IconJiangpai} from '@/components'
import {onMounted, ref} from 'vue'
import {getOldApplyItem} from '@/api/home'
import {useMessage} from 'naive-ui'
// 创建 message 实例
const message = useMessage()
const listData = ref([
  {
    id: 1,
    isCollection: false
  },
  {
    id: 2,
    isCollection: false
  }
])
const search = ref()
const getNowList = ref([])
const handleEnter = () => {
  getNow()
}

function handleUpdateValue() {
  showCalendar.value = false;
}

function formatTime(timestamp) {
  if (timestamp === null || timestamp === '') {
    return ''
  }
  const date = new Date(timestamp)
  return date.toLocaleString() // 例如 "2024/7/5 08:00:00"
}

const data = ref({
  userId: localStorage.getItem('userId'), search: '', pageNo: 1, pageSize: 10, startDate: null, endDate: null
})
const getNow = async () => {
  const res = await getOldApplyItem(data.value)
  if (res.code === -1) {
    message.error(res.msg)
    return
  }
  getNowList.value = res.data.list
}
onMounted(async () => {
  await getNow()
})
</script>

<template>
  <HeaderTop  :is-work="false"/>
  <div class="application">
    <div class="application-container">
      <div class="application-header-title">
        历史申请
      </div>
      <n-flex align="center" style="margin-bottom:20px;">
        <n-input round placeholder="请输入.." size="large" style="width: 516px" v-model:value="search"
                 @keydown.enter="handleEnter">
          <template #prefix>
            <div class="icon">
              <img src="../../assets/img/search.png" alt=""/>
            </div>
          </template>
        </n-input>
        <div class="hide_input">
          <RenderIcon class="cursor-pointer-style" icon="icon-rili" fill="#808080" size="25"/>
          <n-date-picker type="daterange" clearable @update-value="handleUpdateValue"/>
        </div>
      </n-flex>
      <n-flex class="application-list" vertical :size="20">
        <div class="application-list-item" v-for="(item,index) in getNowList">
          <n-flex class="application-item-tag" align="center" justify="center">
            已申请
          </n-flex>
          <div :class="`application-item-desc ${index === 1 ?'active' :''}`">
            {{ '该工作不再招聘' }}
          </div>
          <div class="application-item-title">
            {{ item.title }}
          </div>
          <n-flex justify="space-between">
            <n-space class="secondary-color-text-1">
              <span>  {{ formatTime(item.createTime) }}</span>
              <span>{{ item.district }}</span>
            </n-space>
            <n-flex>
              <n-flex
                  :class="{'start-icons-button':true,active:item.isCollection}"
                  align="center"
                  justify="center"
                  @click="item.isCollection  = !item.isCollection"
              >
                <RenderIcon :icon="IconStart" :fill="item.isCollection ? '#58968B' : '#e5e5e5'" size="20"/>
              </n-flex>
              <n-button size="large" strong secondary type="tertiary" style="width: 184px">
                <span class="naiveui-text-16">已下架</span>
              </n-button>
              <!--              <n-button type="primary" size="large" style="width: 184px" v-else-->
              <!--                        @click="$router.push('/submit-proposals')">-->
              <!--                <span class="naiveui-text-16">立即申请</span>-->
              <!--              </n-button>-->
            </n-flex>
          </n-flex>
          <div class="application-desc-text">
            {{ item.description }}
          </div>
          <n-flex class="positions-details_type" align="center" justify="space-evenly" :wrap="false">
            <div class="details_type-item">
              <RenderIcon :icon="IconFaxiangmu" fill="#808080" size="30"/>
              <n-flex vertical>
                <div class="type-item-title">
                  {{ item.deliveryType === 10 ? '一次性' : '里程碑' }}项目
                </div>
                <div class="type-item-desc">
                  项目类型
                </div>
              </n-flex>
            </div>
            <n-divider vertical style="height: 30px"/>
            <div class="details_type-item">
              <RenderIcon :icon="IconYusuanzonge" fill="#808080" size="30"/>
              <n-flex vertical>
                <div class="type-item-title">
                  ￥{{ item.totalBudget }}
                </div>
                <div class="type-item-desc">
                  总预算
                </div>
              </n-flex>
            </div>
            <n-divider vertical style="height: 30px"/>
            <div class="details_type-item">
              <RenderIcon :icon="IconJiangpai" fill="#808080" size="30"/>
              <n-flex vertical>
                <div class="type-item-title">
                  入门级
                </div>
                <div class="type-item-desc">
                  我正在寻找无经验/经验不太足的自由职业者
                </div>
              </n-flex>
            </div>
          </n-flex>
        </div>
      </n-flex>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped lang="scss">
.application {
  height: $container-height;
  background-color: $BackColor;
  overflow: auto;

  .application-container {
    width: 1326px;
    margin: 0 auto;
    max-width: 100%;

    .application-header-title {
      margin: 50px 0 30px 0;
      font-weight: 500;
      font-size: 34px;
      color: #333333;
    }

    .hide_input {
      position: relative;

      ::v-deep(.n-date-picker) {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        width: 25px;
        height: 25px;
        overflow: hidden;
      }

      ::v-deep(.n-input .n-input-wrapper) {
        cursor: pointer;
      }
    }

    .application-list {
      margin-bottom: 98px;

      .application-list-item {
        height: 514px;
        border-radius: 16px 16px 16px 16px;
        border: 1px solid $MainColor;
        padding: 20px 40px;
        box-sizing: border-box;
        background-color: #ffffff;

        .application-item-tag {
          width: 76px;
          height: 27px;
          background: $MainColor;
          border-radius: 2px 2px 2px 2px;
          color: #FFFFFF;
        }

        .application-item-desc {
          font-weight: 400;
          font-size: 16px;
          color: #808080;
          margin-top: 30px;

          &.active {
            color: $MainColor
          }
        }

        .application-item-title {
          font-weight: 500;
          font-size: 20px;
          color: #333333;
          margin-top: 15px;
          margin-bottom: 30px;
        }

        .start-icons-button {
          width: 40px;
          height: 40px;
          border-radius: 12px 12px 12px 12px;
          //justify-content: space-evenly;
          border: 2px solid #e5e5e5;

          &.active {
            border: 2px solid #58968B;

          }
        }

        .application-desc-text {
          font-weight: 400;
          font-size: 12px;
          color: #333333;
          line-height: 24px;
          margin-top: 20px;

        }

        .positions-details_type {
          width: 800px;
          height: 77px;
          background: #FCFCFC;
          border-radius: 8px;
          border: 1px solid #EDEDED;
          margin-top: 20px;

          .details_type-item {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .type-item-title {
            font-weight: 600;
            font-size: 14px;
            color: #333333;
          }

          .type-item-desc {
            color: #808080;
          }
        }
      }
    }
  }
}

@media (max-width: 1400px) {
  .application {
    .application-container {
      padding: 0 20px;
    }
  }
}
</style>
