<script setup lang="ts">
import {Text} from '@/components'
import {deleteUserDuction, addUserDuction} from '@/api/user'
import {ref} from "vue";

const emit = defineEmits(['update:show', 'success'])
import {useMessage} from 'naive-ui'
// 创建 message 实例
const message = useMessage()
const props = defineProps({
  resume: {
    type: Object,
    default: () => null
  },

})
const resumeId = ref(props.resume.resumeId)
const selfIntroduction = ref(props.resume.selfIntroduction)
const save = async () => {
  const delRes = await deleteUserDuction({resumeId: resumeId.value})
  if (delRes.code !== 0) {
    message.error(delRes.msg)
    return
  }
  const addRes = await addUserDuction({
    userId: localStorage.getItem('userId'),
    selfIntroduction: selfIntroduction.value
  })
  if (addRes.code !== 0) {
    message.error(addRes.msg)
    return
  }
  emit('success')
  emit('update:show', false)
}
</script>

<template>
  <n-modal>
    <n-card
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
        style="width:750px"
    >
      <n-flex :size="10" class="work-details-modal" vertical>
        <Text :size="34">
          自我简介
        </Text>
        <n-form>
          <n-grid :cols="24" :x-gap="24">
            <n-form-item-gi :span="24" label="" path="inputValue">
              <n-input type="textarea" placeholder="" v-model:value="selfIntroduction"/>
            </n-form-item-gi>
          </n-grid>
        </n-form>
        <n-flex justify="flex-end" :size="50">
          <n-button type="primary" @click="emit('update:show',false)" text>取消</n-button>
          <n-button type="primary" @click="save()">保存</n-button>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>
