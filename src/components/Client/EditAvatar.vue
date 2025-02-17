<script setup lang="ts">
import { Text } from '@/components'
import { createDiscreteApi } from 'naive-ui'

const emit = defineEmits(['update:show'])

const { dialog } = createDiscreteApi(['dialog'])

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
			  <n-upload :show-file-list="false" :trigger-style="{cursor: 'pointer'}">
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
