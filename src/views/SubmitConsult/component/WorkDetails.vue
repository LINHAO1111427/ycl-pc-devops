<script setup lang="ts">
import { ref } from 'vue'
import { RenderIcon, IconCrown, Text, IconLink } from '@/components'
import { CloseCircleOutline, ReturnDownBackSharp } from '@vicons/ionicons5'
import { createDiscreteApi } from 'naive-ui'

const props = defineProps({
  status: {
	type: Boolean,
	default: 0,
  },
})

const { dialog } = createDiscreteApi(['dialog'])

function submit(){
	dialog.success({
	  actionClass:'naiveui-dialog-action',
	  showIcon: false,
	  closable: false,
	  // title:'提示信息',
	  content: '您的咨询项目已经提交成功，谢谢',
	  positiveText: '确定',
	  maskClosable: false,
	  positiveButtonProps:{
		color:'#58968B'  
	  },
	  onPositiveClick: () => {
		  
	  }
	})
}
</script>

<template>
  <div class="work-details">
    <div class="project-described">
      <n-flex vertical align="flex-start" style="gap: 15px 12px;">
        <Text :size="24" weight="600">项目名称</Text>
        <Text :size="20" color="#808080">王杰与乔安娜的商业咨询</Text>
        <Text :size="18" weight="600">咨询时长</Text>
        <Text :size="16" color="#808080">30分钟</Text>
		<Text :size="18" weight="600">咨询金额</Text>
		<Text :size="16" color="#808080">¥150</Text>
      </n-flex>
    </div>
	<div class="project-described">
		<n-flex vertical :size="20">
		  <Text :size="24">附件</Text>
		  <n-space>
			<n-upload :show-file-list="false" :disabled="status != 0">
				<n-input placeholder="" readonly :disabled="status != 0" style="width:300px">
				  <template #prefix>
					<RenderIcon fill="#58968B" :icon="IconLink"></RenderIcon>
				  </template>
				</n-input>
			</n-upload>
			<n-upload :show-file-list="false" :disabled="status != 0">
				<n-input placeholder="" readonly :disabled="status != 0" style="width:300px">
				  <template #prefix>
					<RenderIcon fill="#58968B" :icon="IconLink"></RenderIcon>
				  </template>
				</n-input>
			</n-upload>
		  </n-space>
		</n-flex>
	</div>
    <div class="terms">
	  <div class="professional-title">留言板</div>
	  <div class="content-textarea">
		  <n-input placeholder="请输入" type="textarea" style="height:400px;" :disabled="status != 0" />
	  </div>
	  <div class="contract-detail">
		  <div class="professional-title">合同细节</div>
		  <!-- <div class="terms-desc secondary-color-text-1">
			服务费折扣20%降到15%;专属客服，以及其他竞争者的出价区间
			<RouterLink to="/member">
			  <n-button type="primary" text>
				开通会员
			  </n-button>
			</RouterLink>
		  </div> -->
		  <div class="secondary-color-text-1 ">
			扣除平台服务费20%;专属客服，
			<RouterLink to="/member" class="router-link" style="font-size: 14px;">开通原创力会员</RouterLink>
			尊享服务费折扣15%
		  </div>
		  <div class="project-table">
			<n-flex justify="space-between" align="center" class="project-table-item">
			  <n-flex vertical>
				<div class="project-item-title">
				  出价
				</div>
				<div class="project-item-desc">
				  客户将在您的项目简历中看到的总金额
				</div>
			  </n-flex>
			  <div class="project-item-title">
				￥200
			  </div>
			</n-flex>
			<n-flex justify="space-between" align="center" class="project-table-item">
			  <n-flex vertical>
				<div class="project-item-title">
				  自由职业者服务费
				</div>
			  </n-flex>
			  <div class="project-item-title secondary-color-text-1">
				￥40
			  </div>
			</n-flex>

			<n-flex justify="space-between" align="center" class="project-table-item">
			  <n-flex vertical>
				<div class="project-item-title">
				  您将收到
				</div>
				<div class="project-item-desc">
				  您的预估收款(扣除服务费)
				</div>
			  </n-flex>
			  <div class="project-item-title" style="font-weight:400">
				￥160
			  </div>
			</n-flex>

			<div class="project-tip">
			  包括原创力固定价格保护。
			  <RouterLink to="/article-detail" target="_blank" class="router-link">
				了解更多信息
			  </RouterLink>
			</div>
		</div>
      </div>
    </div>
    <div class="tow-footer" v-if="status == 0">
      <n-flex justify="flex-end" :size="40">
        <n-button type="primary" text>取消</n-button>
        <n-button type="primary" @click="submit">确认提交项目</n-button>
      </n-flex>
    </div>
  </div>
</template>

<style scoped lang="scss">
.work-details {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom:140px;

  .project-described {
    padding: 40px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 16px 16px 16px 16px;
    border: 1px solid #EDEDED;
  }

  .header {
    padding: 40px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 16px 16px 16px 16px;
    border: 1px solid #EDEDED;

    .header-left {
      width: 100%;
      height: 180px;
      border-right: solid 1px #EDEDED;
      justify-content: space-around;

      .header-title {
        font-weight: 600;
        font-size: 24px;
        color: #333333;
      }

      .header-desc {
        font-weight: 400;
        font-size: 16px;
        color: #808080;
        margin-top: 10px;
        margin-bottom: 20px;
      }
    }

    .header-right {
      width: 100%;

      .text-title {
        font-weight: bold;
        font-size: 14px;
        color: #333333;
      }

    }

    .header-select {
      margin-top: 40px;

      .header-select-title {
        font-size: 18px;
        color: #333333;
        line-height: 21px;
        margin-bottom: 10px;
      }

    }
  }


  .professional, .terms, .cover-letter, .two-points, .tow-footer {
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #EDEDED;
    border-radius: 16px 16px 16px 16px;
    box-sizing: border-box;
	padding: 20px 40px;
  }

  .professional-title {
    font-weight: 600;
    font-size: 24px;
    color: #333333;
    margin-bottom: 20px;

    &.title-2 {
      font-size: 18px;
      font-weight: 400;
    }
  }
  
  .content-textarea{
	  margin-bottom: 20px;
  }

  .terms-desc {
    font-size: 16px;
    margin-bottom: 20px;

    ::v-deep(.n-button__content) {
      font-size: 16px;
      text-decoration: underline;
    }
  }

  .terms-type {
    display: flex;
    gap: 20px;
  }

  .terms-type-item {
    padding: 20px;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #EDEDED;
    width: 100%;
    cursor: pointer;

    &.active {
      border: 1px solid #58968B;
      color: #58968B;
      background: #BFE1DB;
    }

    .terms-item-title {
      font-weight: bold;
      font-size: 18px;
    }

    .terms-item-desc {
      font-weight: 500;
      font-size: 12px;
      margin-top: 10px;
    }
  }

  .add-header {
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
    align-items: center;

    .add-header-title {
      font-weight: bold;
      font-size: 18px;
      color: #333333;
    }
  }

  .add-form-item {
    margin-top: 20px;

    ::v-deep(.n-form-item-label__text) {
      font-size: 14px;
    }
  }

  .server-desc {
    margin-top: 40px;
    font-size: 14px;
    margin-bottom: 10px;
  }


  .project-table-item {
    width: 100%;
    height: 86px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    .project-item-title {
      font-weight: bold;
      font-size: 18px;
      color: #333333;
    }

    .project-item-desc {
      font-weight: 500;
      font-size: 14px;
      color: #808080;
    }
  }

  .project-tip {
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    color: $SecondaryColor-1;

    a {
      font-size: 14px;
    }
  }

  .letter-header-title {
    width: 100%;
    height: 73px;
    background: #FFFFFF;
    border-radius: 16px;
    border: 1px solid #EDEDED;
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 20px;

    .title-text {
      font-size: 18px;
      color: #727272;
      margin-right: auto;
    }
  }

  .annex {
    width: 100%;
    height: 249px;
    background: #FFFFFF;
    border-radius: 16px 16px 16px 16px;
    border: 1px solid #EDEDED;
    margin-top: 20px;
    padding: 20px;
    box-sizing: border-box;

    .annex-title {
      font-size: 18px;
      color: #333333;
      margin-bottom: 20px;
    }

    .annex-desc, .annex-value {
      font-size: 14px;
      margin-top: 20px;
      color: #818181;
    }

    .annex-value {
      margin-top: 10px;
      line-height: 16px;
    }
  }

  ::v-deep(.n-form-item-label__text) {
    font-size: 14px;
  }

  .tow-tag {
    margin-bottom: 20px;
  }
  
  .contract-detail{
	  padding:40px;
	  border: 1px solid #EDEDED;
	  border-radius: 16px 16px 16px 16px;
  }
}
</style>