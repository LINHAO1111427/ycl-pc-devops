<script setup lang="ts">
import {Text} from '@/components'
import {saveUserSchool, updateUserSchool, schoolInfo} from '@/api/user'
import {useMessage} from 'naive-ui'
import {onMounted, ref} from "vue";
// 创建 message 实例
const message = useMessage()
const emit = defineEmits(['update:show', 'success'])
const qualification = ref({
  userId: localStorage.getItem('userId'),
  schoolName: "",              // 学校名称
  educationSystem: "",           // 学制类型
  degree: "",                     // 学历
  major: "",                        // 专业
  startDate: null,           // 入学时间（格式化后）
  graduationDate: null,      // 毕业时间（格式化后）
  certificatePhotoUrl: "" // 证书照片 URL
})
const isInit = ref(false)
const props = defineProps({
  educationId: {
    type: Number,
    default: () => null
  }
})
const eduId = ref(props.educationId)
onMounted(async () => {
  console.log(eduId)
  if (eduId.value !== null) {
    const res = await schoolInfo({id: eduId.value})
    if (res.code !== 0) {
      message.error(res.msg || '获取教育信息失败')
    }
    qualification.value = res.data.info
  }
  isInit.value = true
  console.log('组件 mounted')
})

const save = async () => {
  let res

  if (eduId.value === null) {
    res = await saveUserSchool(qualification.value)
  } else {
    res = await updateUserSchool(qualification.value)
  }
  if (res.code === 0) {
    emit('update:show', false)
    emit('success')
  } else {
    message.error(res.msg || '操作失败')
  }
}

</script>

<template>
  <n-modal>
    <n-card
        v-if="isInit"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
        style="width:850px"
    >
      <n-flex :size="40" class="work-details-modal" vertical>
        <Text :size="34">
          学历认证
        </Text>
        <n-form class="naiveui-form-16">
          <n-grid :cols="24" :x-gap="24">
            <n-form-item-gi :span="24" label="学校" path="inputValue">
              <n-input placeholder="例如：西北大学" v-model:value="qualification.schoolName"/>
            </n-form-item-gi>
            <n-form-item-gi :span="6" label="入学日期" path="inputValue">
              <n-date-picker type="date" placeholder="请选择日期" v-model:value="qualification.startDate"
                             style="width: 100%"/>
            </n-form-item-gi>
            <n-form-item-gi :span="6" label="毕业日期" path="inputValue">
              <n-date-picker type="date" placeholder="请选择日期" v-model:value="qualification.graduationDate"
                             style="width: 100%"/>
            </n-form-item-gi>
            <n-form-item-gi :span="24" label="学位" path="inputValue">
              <n-input placeholder="请输入标题" v-model:value="qualification.degree"/>
            </n-form-item-gi>
            <n-form-item-gi :span="24" label="学制类型" path="inputValue">
              <n-input placeholder="请输入标题" v-model:value="qualification.educationSystem" type="textarea"/>
            </n-form-item-gi>
          </n-grid>
        </n-form>
        <n-flex justify="flex-end" :size="50">
          <n-button type="primary" @click="emit('update:show',false)" text class="naiveui-button-16">取消</n-button>
          <n-button type="primary" @click="save" class="naiveui-button-16">保存</n-button>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>
