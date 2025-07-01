<script setup lang="ts">
import HeaderTop from '@/components/Header/HeaderTop.vue'
import {Footer, IconStart, RenderIcon, IconFaxiangmu} from '@/components'
import {onMounted, ref} from 'vue'
import {createDiscreteApi} from 'naive-ui'
import {useRouter} from 'vue-router'
import {getProject, cancelProject} from '@/api/base'

const isCollection = ref(false)

const {dialog} = createDiscreteApi(['dialog'])
import {useMessage} from 'naive-ui'
// 创建 message 实例
const message = useMessage()
const router = useRouter()
const projectData = ref([])
const props = defineProps({
  status: {
    type: Number,
    default: 100,
  },
  title: {
    type: String,
    default: '所有工作',
  },
})
onMounted(() => {
  getProjectFunc()
})
const getProjectFunc = async () => {
  const param = {
    pageNo: 1,
    pageSize: 10
  }
  if (props.status !== 100) {
    param.status = props.status
  }
  const res = await getProject(param)
  projectData.value = res.data.list || []
}

function onClickCancel() {
  dialog.warning({
    actionClass: 'naiveui-dialog-action',
    showIcon: false,
    closable: false,
    title: '是否确认取消',
    content: () => h('div', {}, [
      h('p',
          {
            style: {
              cursor: 'pointer',
            },
            onClick() {
              let routeData = router.resolve({path: '/article-detail'})
              window.open(routeData.href, '_blank')
            },
          },
          {default: () => '单刻达平台订单取消协议'}),
    ]),
    positiveText: '是',
    negativeText: '否',
    maskClosable: false,
    positiveButtonProps: {
      color: '#58968B'
    },
  })
}

function cancel_order(projectId) {
  dialog.warning({
    actionClass: 'naiveui-dialog-action',
    showIcon: false,
    closable: false,
    title: '您是否确定取消订单',
    content: () => h('div', {}, [
      h('p',
          {
            style: {
              cursor: 'pointer',
            },
            onClick: () => {

              console.log("11111")
            },
          },
          {default: () => ''}),
    ]),
    positiveText: '确定',
    negativeText: '取消',
    maskClosable: false,
    positiveButtonProps: {
      color: '#58968B'
    },
    negativeButtonProps: {
      quaternary: true,
      color: '#808080'
    },
    onPositiveClick() {
      cancel_order_success(projectId)
    }
  })
}

const cancel_order_success = async (projectId) => {
  const res = await cancelProject({projectId: projectId})
  if (res.code !== 0) {
    message.error(res.msg)
    return
  }
  dialog.warning({
    actionClass: 'naiveui-dialog-action',
    showIcon: false,
    closable: false,
    title: '您的订单已取消，谢谢！',
    content: () => h('div', {}, [
      h('p',
          {
            style: {
              cursor: 'pointer',
            },
            onClick() {
              console.log("11111")
            },
          },
          {default: () => ''}),
    ]),
    positiveText: '确定',
    negativeText: '',
    maskClosable: false,
    positiveButtonProps: {
      color: '#58968B'
    }
  })
  await getProjectFunc()
}

const showCalendar = ref(false);

function handleUpdateValue() {
  showCalendar.value = false;
}
</script>


<template>
  <div class="application">
    <div class="application-container">
      <div class="application-header-title">{{ title }}</div>
      <n-flex align="center" style="margin-bottom:20px;">
        <n-input round placeholder="搜索项目名称" size="large" style="width: 516px">
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
      <!-- @click.stop="$router.push('/client/submit-consult')" -->
      <n-flex class="application-list" vertical :size="20">
        <div class="application-list-item" @click="$router.push('/client/order-details')"
             v-for="(item,index) in projectData">

          <n-flex class="application-item-tag" align="center" justify="center">
            项目审核中
          </n-flex>
          <n-flex align="flex-end" justify="space-between">
            <div class="application-item-title" style="margin-top: 30px">
              {{ item.title }}
            </div>
            <div class="application-item-title" style="margin-top: 30px">
              <n-button type="primary" size="large" @click.stop="cancel_order(item.id)">
                取消订单
              </n-button>
            </div>
          </n-flex>
          <n-flex justify="space-between">
            <n-space class="secondary-color-text-1"
                     style="position: absolute;right: 40px;top:20px;line-height:40px">
              <span>2024-07-10</span>
            </n-space>
          </n-flex>

          <div class="application-desc-text">
            {{ item.description }}
          </div>
          <n-flex class="positions-details_type" align="center" justify="space-evenly" :wrap="false">
            <div class="details_type-item">
              <!-- <RenderIcon icon="icon-faxiangmu" fill="#808080" size="30" /> -->
              <RenderIcon :icon="IconFaxiangmu" fill="#808080" size="30"/>
              <n-flex vertical>
                <div class="type-item-title">一次性项目</div>
                <div>项目类型</div>
              </n-flex>
            </div>
            <n-divider vertical style="height: 30px"/>
            <div class="details_type-item">
              <RenderIcon icon="icon-yusuanzonge" fill="#808080" size="30"/>
              <n-flex vertical>
                <div class="type-item-title">￥{{ item.totalBudget }}</div>
                <div>总预算</div>
              </n-flex>
            </div>
            <n-divider vertical style="height: 30px"/>
            <div class="details_type-item">
              <RenderIcon icon="icon-jiangpai" fill="#808080" size="30"/>
              <n-flex vertical>
                <div class="type-item-title">{{ ['入门级', '中级', '专家'][item.experienceLevel - 1] }}</div>
                <div>{{ item.preferredQualification }}</div>
              </n-flex>
            </div>
          </n-flex>
        </div>
      </n-flex>
    </div>
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
        // height: 514px;
        border-radius: 16px 16px 16px 16px;
        border: 1px solid $MainColor;
        padding: 20px 40px;
        padding-bottom: 50px;
        box-sizing: border-box;
        background-color: #ffffff;
        cursor: pointer;
        position: relative;

        .application-item-tag {
          width: 76px;
          height: 27px;
          background: #F4FBFA;
          color: #58968B;
          border-radius: 2px 2px 2px 2px;
        }

        .application-item-desc {
          font-weight: 400;
          font-size: 16px;
          color: #808080;
          margin-top: 30px;

          &.active {
            color: $MainColor;
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
            border: 2px solid #58968b;
          }
        }

        .application-desc-text {
          font-weight: 400;
          font-size: 12px;
          color: $SecondaryColor-1;
          line-height: 24px;
          margin-top: 20px;
        }

        .positions-details_type {
          width: 800px;
          height: 77px;
          background: #fcfcfc;
          border-radius: 8px;
          border: 1px solid #ededed;
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


@media screen and (max-width: 1360px) {

  /* 在此处添加适用于宽度小于1360像素的设备的样式 */
  .application {
    .application-container {
      width: 1200px;
      margin: 0 auto;
      max-width: 100%;
    }
  }
}
</style>
