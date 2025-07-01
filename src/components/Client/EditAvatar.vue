<script setup lang="ts">
import { Text } from '@/components'
import { createDiscreteApi } from 'naive-ui'

const emit = defineEmits(['update:show'])

const { dialog } = createDiscreteApi(['dialog'])
const uploadUrl = 'http://47.120.73.189:48080/app-api/common/addOrUpdate' // 替换为你的真实上传地址

function handleUploadFinish({ file, event, fileList }) {
  // 上传成功后的响应
  const response = JSON.parse(event?.target?.response || '{}')
  console.log('上传成功：', response)

  // 你可以从 response 中取出图片 URL
  const imageUrl = response.url || response.data?.url
  console.log('图片 URL:', imageUrl)

  // TODO: 你可以把 imageUrl 存到某个变量或者传给父组件
}
function submit(){
	dialog.success({
	  actionClass:'naiveui-dialog-action',
	  showIcon: false,
	  closable: false,
	  // title:'提示信息',
	  content: '您的头像正在审核中，辛苦耐心等待，谢谢',
	  positiveText: '确定',
	  maskClosable: false,
	  positiveButtonProps:{
		color:'#58968B'
	  },
	  onPositiveClick: () => {
		emit('update:show',false)
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
			向自由职业者展示最好的自己
		</Text>
        <n-flex vertical align="center">
        	<n-avatar round :size="266" />
        	<Text :size="18">
        		一定是你的真实照片
        	</Text>
        </n-flex>
        <n-flex justify="flex-end" :size="30" style="margin-top: 20px;">
          <n-button type="primary" @click="emit('update:show',false)" text>取消</n-button>
		  <div>
			  <n-upload :show-file-list="false" :trigger-style="{cursor: 'pointer'}" :action="uploadUrl"
                  :on-finish="handleUploadFinish" >
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
