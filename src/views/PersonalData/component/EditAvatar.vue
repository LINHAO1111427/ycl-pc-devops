<script setup lang="ts">
import {Text} from '@/components'
import {createDiscreteApi} from 'naive-ui'
import {upUserAvatar} from '@/api/user'

const emit = defineEmits(['update:show','success'])

const {dialog} = createDiscreteApi(['dialog'])
const uploadUrl = `${import.meta.env.VITE_API_BASE_URL}/app-api/common/addOrUpdate` // 替换为你的真实上传地址
// 假设 token 来自 localStorage 或其他状态管理
const token = localStorage.getItem('token')
const userId = localStorage.getItem('userId')
const avatar = ref(localStorage.getItem('avatar') || '')
const imageUrl = ref('null')
import { useStore } from 'vuex'

const store = useStore()
// 设置 headers
const uploadHeaders = {
  Authorization: `Bearer ${token}`, // 或其他自定义 key，比如 'token': token
}

function handleUploadFinish({file, event, fileList}) {
  // 上传成功后的响应
  const response = JSON.parse(event?.target?.response || '{}')
  console.log('上传成功：', response)

  // 你可以从 response 中取出图片 URL
  avatar.value = response.url || response.data?.url
  console.log('图片 URL:', imageUrl)

  // TODO: 你可以把 imageUrl 存到某个变量或者传给父组件
}

const submit = async () => {
  await upUserAvatar({
    userId: userId, //用户id
    avatar: avatar.value
  })
  store.dispatch('updateAvatar', avatar.value)
  localStorage.setItem('avatar', avatar.value)
  dialog.success({
    actionClass: 'naiveui-dialog-action',
    showIcon: false,
    closable: false,
    // title:'提示信息',
    content: '您的头像正在审核中，辛苦耐心等待，谢谢',
    positiveText: '确定',
    maskClosable: false,
    positiveButtonProps: {
      color: '#58968B'
    },
    onPositiveClick: () => {
      emit('update:show', false)
      emit('success')
    }
  })
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
          编辑照片
        </Text>
        <Text :size="18">
          向客户展示最好的自己
        </Text>
        <n-flex vertical align="center">
          <n-avatar round :size="266" :src="avatar"/>
          <Text :size="18">
            一定是你的真实照片
          </Text>
        </n-flex>
        <n-flex justify="flex-end" :size="30" style="margin-top: 20px;">
          <n-button type="primary" @click="emit('update:show',false)" text>取消</n-button>
          <div>
            <n-upload :show-file-list="false" :trigger-style="{cursor: 'pointer'}" :action="uploadUrl"
                      :headers="uploadHeaders"
                      :on-finish="handleUploadFinish">
              <n-button type="primary">
                上传照片
              </n-button>
            </n-upload>
          </div>
          <n-button type="primary" @click="submit">
            确定上传照片
          </n-button>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>
