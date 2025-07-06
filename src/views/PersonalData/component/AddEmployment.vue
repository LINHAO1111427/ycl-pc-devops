<script setup lang="ts">
import {Text} from '@/components'
import {onMounted, ref} from "vue";
import {workInfo,updateUserWork,saveUserWork} from '@/api/home'

const emit = defineEmits(['update:show'])
import {useMessage} from 'naive-ui'
// 创建 message 实例
const message = useMessage()
const props = defineProps({
  EmploymentId: {
    type: Number,
    default: () => null
  }
})
const workExperience = ref({
  userId: localStorage.getItem('userId'), // 用户id
  workName: "",         // 公司名称
  country: "",             // 国家
  city: "",                // 城市
  position: "",        // 职位名称
  startData: null, // 起始时间
  endData: null,   // 结束时间
  jobDescription: ""           // 工作内容
});
const isInit = ref(false)
const id = ref(props.EmploymentId)
const save = async () => {
  let res

  if (id.value === null) {
    res = await saveUserWork(workExperience.value)
  } else {
    res = await updateUserWork(workExperience.value)
  }
  if (res.code === 0) {
    emit('update:show', false)
    emit('success')
  } else {
    message.error(res.msg || '操作失败')
  }
}
onMounted(async () => {
  console.log(id.value)
  if (id.value !== null) {
    const res = await workInfo({id: id.value})
    if (res.code !== 0) {
      message.error(res.msg || '获取教育信息失败')
    }
    workExperience.value = res.data.workInfo
  }
  isInit.value = true
  console.log('组件 mounted')
})
</script>

<template>
  <n-modal>
    <n-card v-if="isInit"
            :bordered="false"
            size="huge"
            role="dialog"
            aria-modal="true"
            style="width:850px"
    >
      <n-flex :size="40" class="work-details-modal" vertical>
        <Text :size="34">
          添加您的工作经历
        </Text>
        <n-form class="naiveui-form-16">
          <n-grid :cols="24" :x-gap="24">
            <n-form-item-gi :span="24" label="公司" path="inputValue">
              <n-input placeholder="请输入公司" v-model:value="workExperience.workName"/>
            </n-form-item-gi>
            <n-form-item-gi :span="6" label="城市" path="inputValue">
              <n-input placeholder="请输入城市" v-model:value="workExperience.city"/>
            </n-form-item-gi>
            <n-form-item-gi :span="6" label="国家" path="inputValue">
              <n-input placeholder="列如：美国" v-model:value="workExperience.country"/>
            </n-form-item-gi>
            <n-form-item-gi :span="24" label="职位名称" path="inputValue">
              <n-input placeholder="请输入标题" v-model:value="workExperience.position"/>
            </n-form-item-gi>
            <n-form-item-gi :span="6" label="起始年月" path="inputValue">
              <n-date-picker placeholder="请选择日期" v-model:value="workExperience.startData"/>
            </n-form-item-gi>
            <n-form-item-gi :span="6" label="结束年月" path="inputValue">
              <n-date-picker placeholder="请选择日期" v-model:value="workExperience.endData"/>
            </n-form-item-gi>
            <n-form-item-gi :span="24" label="工作内容" path="inputValue">
              <n-input placeholder="请输入标题" type="textarea" v-model:value="workExperience.jobDescription"/>
            </n-form-item-gi>
          </n-grid>
        </n-form>
        <n-flex justify="flex-end" :size="50">
          <n-button type="primary" @click="emit('update:show',false)" text class="naiveui-button-16">取消</n-button>
          <n-button type="primary" @click="save" class="naiveui-button-16">确定</n-button>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>
