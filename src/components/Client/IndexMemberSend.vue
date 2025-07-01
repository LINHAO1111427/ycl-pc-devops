<template>
  <n-modal v-model:show="showModal">
    <n-card style="width: 800px" :bordered="false" size="huge" role="dialog" aria-modal="true">
      <div class="header-title" v-if="typeValue === 1" style="text-align: center;">
        {{  'offer预览'  }}
      </div>
      <div class="header-title" v-else>
        {{ '请选择您的项目' }}
      </div>
      <template v-if="typeValue === 1">
        <div class="radio-item-cn">
          <p>张三您好，恭喜您收到一个UI设计师的offer</p>
          <p>UI设计师：</p>
          <span>1、负责产业SaaS系统产品的视觉设计、交互设计，把握视觉设计趋势，分析产品特点，确定产品整体设计思路和规范。</span>
          <span>2、负责产业SaaS数据可视化、移动端APP及小程序、活动页面等具体产品形态项目的web、UI的设计和实现，协同产品经理、前端工程师共同把握移动产品的用户体验。</span>
          <span>3、负责设计分析与视觉风格设定，制定视觉规范，交互规范，全面提升用户体验。</span>
          <span>4、为产品的未来发展提供前瞻性的创意设计。</span>
          <n-flex style="height: 34px;">
            <n-flex>
              <span>项目金额 :</span>
              <n-input placeholder="请输入金额" style="width: 200px" v-model:value="money1">
                <template #prefix>
                  <Text :size="20">￥</Text>
                </template>
              </n-input>
            </n-flex>
            <!--            <n-flex>-->
            <!--              <span>开始时间 :</span>-->
            <!--              <n-date-picker-->
            <!--                  type="date"-->
            <!--                  placeholder="请选择开始时间"-->
            <!--                  :style="{ '&#45;&#45;n-input-height': '50px' }"-->
            <!--                  :is-date-disabled="disablePastDates1"-->
            <!--              />-->
            <!--            </n-flex>-->
          </n-flex>
          <n-flex style="margin-top: 20px;height: 34px;">
            <n-flex>
              <div>项目周期 :</div>
              <n-date-picker
                  type="datetimerange"
                  format="yyyy-MM-dd HH:mm"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  clearable
                  :shortcuts="shortcuts"
                  :is-date-disabled="disablePastDates"
                  style="width: 300px"
                  placeholder="请选择起止时间"
              />
            </n-flex>
          </n-flex>
        </div>
      </template>
      <template v-else>
        <div class="radio-item" @click="checkedValue = 'id1'">
          <div class="radio-item-radio">
            <n-radio value="id1" :checked="checkedValue === 'id1'" size="large" name="basic-demo"></n-radio>
          </div>
          <div class="radio-item-cn">
            <p>UI设计师</p>
            <span>1、负责产业SaaS系统产品的视觉设计、交互设计，把握视觉设计趋势，分析产品特点，确定产品整体设计思路和规范。</span>
            <span>2、负责产业SaaS数据可视化、移动端APP及小程序、活动页面等具体产品形态项目的web、UI的设计和实现，协同产品经理、前端工程师共同把握移动产品的用户体验。</span>
            <span>3、负责设计分析与视觉风格设定，制定视觉规范，交互规范，全面提升用户体验。</span>
            <span>4、为产品的未来发展提供前瞻性的创意设计。</span>
            <n-flex style="height: 34px;">
              <n-flex>
                <span>项目金额 :</span>
                <n-input placeholder="请输入金额" style="width: 200px" v-model:value="money1">
                  <template #prefix>
                    <Text :size="20">￥</Text>
                  </template>
                </n-input>
              </n-flex>
              <!--            <n-flex>-->
              <!--              <span>开始时间 :</span>-->
              <!--              <n-date-picker-->
              <!--                  type="date"-->
              <!--                  placeholder="请选择开始时间"-->
              <!--                  :style="{ '&#45;&#45;n-input-height': '50px' }"-->
              <!--                  :is-date-disabled="disablePastDates1"-->
              <!--              />-->
              <!--            </n-flex>-->
            </n-flex>
            <n-flex style="margin-top: 20px;height: 34px;">
              <n-flex>
                <div>项目周期 :</div>
                <n-date-picker
                    type="datetimerange"
                    format="yyyy-MM-dd HH:mm"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    clearable
                    :shortcuts="shortcuts"
                    :is-date-disabled="disablePastDates"
                    style="width: 300px"
                    placeholder="请选择起止时间"
                />
              </n-flex>
            </n-flex>
          </div>
        </div>
        <div class="radio-item" @click="checkedValue = 'id2'">
          <div class="radio-item-radio">
            <n-radio value="id2" :checked="checkedValue === 'id2'" size="large" name="basic-demo"></n-radio>
          </div>
          <div class="radio-item-cn">
            <p>翻译</p>
            <span>1. 个人每周能承接自己承担语种2部每部100集左右的纯翻译+审校，只做审校每周5部100集左右;</span>
            <span>2. 工作及工作量要求:</span>
            <span
                style="text-indent: 1rem;">a. 个人兼职至少要大三及以上，且需要有大学四级或以上/雅思/托福英语成绩，对应的小语种要有证书</span>
            <span
                style="text-indent: 1rem;">b. 个人每周能承接自己承担语种2部每部100集左右的翻译+审校，只做审校每周5部每部100集</span>
            <n-flex style="height: 34px;">
              <n-flex>
                <span>项目金额 :</span>
                <n-input placeholder="请输入金额" style="width: 200px" v-model:value="money2">
                  <template #prefix>
                    <Text :size="20">￥</Text>
                  </template>
                </n-input>
              </n-flex>
              <!--            <n-flex>-->
              <!--              <span>开始时间 :</span>-->
              <!--              <n-date-picker-->
              <!--                  type="date"-->
              <!--                  placeholder="请选择开始时间"-->
              <!--                  :style="{ '&#45;&#45;n-input-height': '50px' }"-->
              <!--                  :is-date-disabled="disablePastDates1"-->
              <!--              />-->
              <!--            </n-flex>-->
            </n-flex>
            <n-flex style="margin-top: 20px;height: 34px;">
              <n-flex>
                <div>项目周期 :</div>
                <n-date-picker
                    type="datetimerange"
                    format="yyyy-MM-dd HH:mm"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    clearable
                    :shortcuts="shortcuts"
                    :is-date-disabled="disablePastDates"
                    style="width: 300px"
                    placeholder="请选择起止时间"
                />
              </n-flex>
            </n-flex>
          </div>
        </div>
        <div class="radio-item" @click="checkedValue = 'id3'">
          <div class="radio-item-radio">
            <n-radio value="id3" :checked="checkedValue === 'id3'" size="large" name="basic-demo"></n-radio>
          </div>
          <div class="radio-item-cn">
            <p>前端开发</p>
            <span>1、计算机本科及以上学历</span>
            <span>2、熟悉VUE和React等前端框架</span>
            <span>3、有3年以上Web及移动Web开发经验</span>
            <n-flex style="height: 34px;">
              <n-flex>
                <span>项目金额 :</span>
                <n-input placeholder="请输入金额" style="width: 200px" v-model:value="money3">
                  <template #prefix>
                    <Text :size="20">￥</Text>
                  </template>
                </n-input>
              </n-flex>
              <!--            <n-flex>-->
              <!--              <span>开始时间 :</span>-->
              <!--              <n-date-picker-->
              <!--                  type="date"-->
              <!--                  placeholder="请选择开始时间"-->
              <!--                  :style="{ '&#45;&#45;n-input-height': '50px' }"-->
              <!--                  :is-date-disabled="disablePastDates1"-->
              <!--              />-->
              <!--            </n-flex>-->
            </n-flex>
            <n-flex style="margin-top: 20px;height: 34px;">
              <n-flex>
                <div>项目周期 :</div>
                <n-date-picker
                    type="datetimerange"
                    format="yyyy-MM-dd HH:mm"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    clearable
                    :shortcuts="shortcuts"
                    :is-date-disabled="disablePastDates"
                    style="width: 300px"
                    placeholder="请选择起止时间"
                />
              </n-flex>
            </n-flex>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="btns">
          <n-button quaternary type="primary" @click="emit('update:show',false)">
            取消
          </n-button>
          <n-button type="primary" @click="confirm">
            {{ typeValue == 1 ? '发送offer' : '继续付款' }}
          </n-button>
        </div>
      </template>
    </n-card>
  </n-modal>
</template>
<script setup>
import {ref} from 'vue'
import {createDiscreteApi} from 'naive-ui'
import {Text} from '@/components'

const props = defineProps({
  typeValue: {
    type: Boolean,
    default: 1,
  },
})
const disablePastDates1 = (ts) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // 清除时分秒，只保留日期
  return ts < today.getTime(); // 禁用今天0点之前的所有日期
};

const disablePastDates = (ts) => {
  const now = Date.now();
  return ts < now; // 禁用所有小于当前时间的时间戳
};
const money1 = ref('200')
const money2 = ref('300')
const money3 = ref('400')
const {dialog} = createDiscreteApi(['dialog'])
var showModal = true
const emit = defineEmits(['update:show'])
const checkedValue = ref('id1')

function confirm() {
  let typeValue = props.typeValue
  let content = ''
  if (typeValue == 1) {
    content = '恭喜您，已成功发送offer，谢谢'
  } else if (typeValue == 2) {
    content = '恭喜您，已成功邀请发送项目简历，谢谢'
  } else if (typeValue == 3) {
    content = '恭喜您，已成功付款'
    emit('updateFunc', '这是子组件传来的数据')
  }
  dialog.success({
    actionClass: 'naiveui-dialog-action',
    showIcon: false,
    closable: false,
    // title:'提示信息',
    content: content,
    positiveText: '确定',
    maskClosable: false,
    positiveButtonProps: {
      color: '#58968B'
    },
    onPositiveClick: () => {
      emit('update:show', false)
    }
  })
}
</script>
<style scoped>
::v-deep(.n-date-picker .n-input) {
  height: 34px !important;
}

::v-deep(.n-input) {
  height: 34px;
}

::v-deep(.n-base-icon) {
  font-size: 16px;
}

.work-details-slider-container {
  width: 258px;
}

.work-details-right-box {
  width: 358px;
}

.header-title {
  font-weight: 400;
  font-size: 27px;
  color: #000000;
}

.radio-item {
  display: flex;
  align-items: baseline;
  margin: 30px 0;
}

.radio-item-radio {
  padding-right: 15px;
}

.radio-item-cn p {
  font-size: 16px;
  color: #333333;
}

.radio-item-cn span {
  display: flex;
  line-height: 25px;
}

.btns {
  text-align: right;
}

.btns button {
  margin-left: 60px;
}
</style>
