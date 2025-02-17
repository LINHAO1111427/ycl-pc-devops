<script setup lang="ts">
import { ref } from 'vue'
import { RenderIcon, IconCrown, Text, IconLink } from '@/components'
import { CloseCircleOutline, ReturnDownBackSharp } from '@vicons/ionicons5'
import Evaluation from './Evaluation.vue'
import { createDiscreteApi } from 'naive-ui'

const props = defineProps({
  type: {
	type: Boolean,
	default: 1,
  },
})

const selectOptions = [{ label: '一周', value: 1 },{ label: '半个月', value: 2 },{ label: '一个月', value: 3 },{ label: '两个月', value: 4 },{ label: '三个月', value: 5 }]

const options = [
  {
    title: '里程碑',
    desc: '将项目划分为更小的部分，称为里程碑，里程碑完成并获得批准后，您将获得报酬。',
	type: 1
  },
  {
    title: '一次性工作',
    desc: ' 当所有工作都交付完毕时，再获得全部付款。',
	type: 2
  },
]

const formValue = ref([{}])

const isShowViewText = ref(false)

const userInput = ref({
  hig: ['荷兰语'],
  higInput: '',
})


function onClickAdd() {
  userInput.value.hig.push(userInput.value.higInput)
  userInput.value.higInput = ''
}

function add() {
  formValue.value.push({})
}

const show = ref(false)

const checkedValue = ref(1)

function handleChange(e) {
	checkedValue.value = e.target.value
}

const { dialog } = createDiscreteApi(['dialog'])

function onClickSubmit(type){
	let contentText = ''
	if(type == 2){
		contentText = '是否确定提交全部工作'
	}else{
		contentText = '是否确定提交该里程碑工作'
	}
	dialog.success({
	  actionClass:'naiveui-dialog-action',
	  showIcon: false,
	  closable: false,
	  // title:'提示信息',
	  content: contentText,
	  positiveText: '确定',
	  negativeText: '取消',
	  maskClosable: false,
	  positiveButtonProps:{
		color:'#58968B'
	  },
	  negativeButtonProps:{
		 quaternary:true,
		 color:'#58968B'
	  },
	  onPositiveClick: () => {
		  dialog.success({
		    actionClass:'naiveui-dialog-action',
		    showIcon: false,
		    closable: false,
		    // title:'提示信息',
		    content: '该工作提交成功，我们已经通知客户查看，您可以从”正在生效的工作“查看更多详情',
		    positiveText: '确定',
		    maskClosable: false,
		    positiveButtonProps:{
		  	color:'#58968B'
		    },
		    onPositiveClick: () => {
				if(type == 2){
					show.value = true
				}
		    }
		  })
	  }
	})
}
</script>

<template>
  <div class="work-details">
    <Text :size="36">设计师</Text>
    <div class="project-described">
      <n-flex vertical align="flex-start">
        <Text :size="24" weight="600">项目描述</Text>
        <n-ellipsis :line-clamp="!isShowViewText ? 1 : 99999" :tooltip="false">
          <Text class="secondary-color-text-1">
            内蒙古伊利实业集团将于美国东部时间2021年10月28日星期四21：00（北京时间2021年10月29日星期五上午9：00）举行财报电话会议。我希望你能听听电话会议内蒙古伊利实业集团将于美国东部时间2021年10月28日星期四21：00（北京时间2021年10月29日星期五上午9：00）举行财报电话会议。我希望你能听听电话会议...
          </Text>
        </n-ellipsis>
        <n-button type="primary" text @click="isShowViewText = !isShowViewText">查看更多</n-button>
      </n-flex>
    </div>
    <div class="header">
      <n-flex :wrap="false">
        <div class="header-left">
          <div class="header-title">工作细节</div>
          <div class="header-desc secondary-color-text-1">
            发布于2024-09-09
          </div>
          <n-button round secondary color="#808080">技术文档翻译</n-button>
          <div class="header-desc secondary-color-text-1">
            中文翻译审核与更正
          </div>
          <div class="header-desc secondary-color-text-1" style="font-size: 14px">
            翻译审查和更正，加强提供的信息。
            <n-button text type="primary" style="text-decoration: underline">查看招聘信息</n-button>
          </div>
        </div>
        <n-flex vertical align="center" class="header-right" justify="center" :size="40">
          <n-flex class="header-icon-item" align="center">
            <div class="icon">
              <RenderIcon icon="icon-jiangpai" :size="30" fill="#808080" />
            </div>
            <n-flex vertical class="icon-item-text" :size="5">
              <div class="text-title">
                中等
              </div>
              <div class="secondary-color-text-1">
                我正在寻找相关经验相对丰富的自由职业者
              </div>
            </n-flex>
          </n-flex>
          <n-flex class="header-icon-item" style="width:270px">
            <div class="icon">
              <RenderIcon icon="icon-yusuanzonge" :size="30" fill="#808080" />
            </div>
            <n-flex vertical class="icon-item-text" :size="5">
              <div class="text-title">
                150人民币
              </div>
              <div class="secondary-color-text-1">
                固定价格
              </div>
            </n-flex>
          </n-flex>
        </n-flex>
      </n-flex>
      <div class="header-select">
        <div class="header-select-title">
          这个项目需要多长时间?
        </div>
        <Text size="14" color="#808080">3个月</Text>
      </div>
    </div>
    <div class="terms">
      <div class="professional-title">合同细节</div>
      <div class="terms-desc secondary-color-text-1">
        服务费折扣20%降到15%;专属客服，以及其他竞争者的出价区间
        <RouterLink to="/member">
          <n-button type="primary" text>
            开通原创力会员
          </n-button>
        </RouterLink>
      </div>
      <div class="professional-title title-2">
        获得报酬的方式
      </div>
      <div class="terms-type">
		<template v-for="item in options">
			<div
			  :class="{
			  'terms-type-item':true,
			  active:type == item.type
			}"
			   v-if="type == item.type"
			>
			
			  <div :class="{'terms-item-title':true}">
				{{ item.title }}
			  </div>
			  <div class="terms-item-desc">
				{{ item.desc }}
			  </div>
			</div>
		</template>
      </div>
      <template v-if="type == 1">
        <n-divider></n-divider>
        <n-flex class="list-select" vertical :size="40">
			<n-flex :size="8">
				<n-radio :checked="checkedValue == 1" name="radio1" value="1" @change="handleChange"></n-radio>
				<n-flex vertical :size="8">
					<Text :size="18">UI设计师</Text>
					<Text :size="12">设计十个界面</Text>
					<Text :size="18">项目期限</Text>
					<Text :size="14">2022-05-04——2022-06-04</Text>
					<Text :size="18">金额</Text>
					<Text :size="14">¥200</Text>
					<Text :size="16">附件</Text>
					<n-space>
					  <n-upload :show-file-list="false">
						  <n-input placeholder="" readonly style="width:300px">
							<template #prefix>
							  <RenderIcon fill="#58968B" :icon="IconLink"></RenderIcon>
							</template>
						  </n-input>
					  </n-upload>
					  <n-upload :show-file-list="false">
						  <n-input placeholder="" readonly style="width:300px">
							<template #prefix>
							  <RenderIcon fill="#58968B" :icon="IconLink"></RenderIcon>
							</template>
						  </n-input>
					  </n-upload>
					</n-space>
				</n-flex>
			</n-flex>
			<n-flex :size="8">
				<n-radio :checked="checkedValue == 2" name="radio1" value="2" @change="handleChange"></n-radio>
				<n-flex vertical :size="8">
					<Text :size="18">UI设计师</Text>
					<Text :size="12">设计十个界面</Text>
					<Text :size="18">项目期限</Text>
					<Text :size="14">2022-05-04——2022-06-04</Text>
					<Text :size="18">金额</Text>
					<Text :size="14">¥200</Text>
					<Text :size="16">附件</Text>
					<n-space>
					  <n-upload :show-file-list="false">
						  <n-input placeholder="" readonly style="width:300px">
							<template #prefix>
							  <RenderIcon fill="#58968B" :icon="IconLink"></RenderIcon>
							</template>
						  </n-input>
					  </n-upload>
					  <n-upload :show-file-list="false">
						  <n-input placeholder="" readonly style="width:300px">
							<template #prefix>
							  <RenderIcon fill="#58968B" :icon="IconLink"></RenderIcon>
							</template>
						  </n-input>
					  </n-upload>
					</n-space>
				</n-flex>
			</n-flex>
		</n-flex>
        <n-divider></n-divider>
      </template>
	  <template v-if="type == 2">
		  <n-divider></n-divider>
		  <n-flex style="margin-top:40px" vertical :size="20">
			<Text :size="16">附件</Text>
			<n-space>
			  <n-upload :show-file-list="false">
				  <n-input placeholder="" readonly style="width:300px">
					<template #prefix>
					  <RenderIcon fill="#58968B" :icon="IconLink"></RenderIcon>
					</template>
				  </n-input>
			  </n-upload>
			  <n-upload :show-file-list="false">
				  <n-input placeholder="" readonly style="width:300px">
					<template #prefix>
					  <RenderIcon fill="#58968B" :icon="IconLink"></RenderIcon>
					</template>
				  </n-input>
			  </n-upload>
			</n-space>
		  </n-flex>
		  <n-divider></n-divider>
	  </template>
      <div class="secondary-color-text-1 server-desc">
        扣除平台服务费20%;专属客服，
        <RouterLink to="/member" class="router-link" style="font-size: 14px;">开通原创力会员</RouterLink>
        尊享服务费折扣15%
      </div>
      <div class="project-table">
        <n-flex justify="space-between" align="center" class="project-table-item">
          <n-flex vertical>
            <div class="project-item-title">
              {{type == 1 ? '项目总价' : '出价'}}
            </div>
            <div class="project-item-desc">
              {{type == 1 ? '这包括所有里程碑，并且是您的套户将看到的金额' : '客户将在您的项目简历中看到的总金额'}}
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
              您的预估付款(扣除服务费)
            </div>
          </n-flex>
          <div class="project-item-title" style="font-weight:400">
            ￥160
          </div>
        </n-flex>

        <div class="project-tip">
          包括原创力固定价格保护。
          <RouterLink to="#" class="router-link">
            了解更多信息
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="tow-footer" style="padding: 20px 40px;margin-bottom: 77px">
      <n-flex justify="flex-end" :size="40">
        <n-button type="primary" text>取消</n-button>
		<n-popover trigger="click" raw :show-arrow="false" v-if="type == 1">
		    <template #trigger>
		      <n-button type="primary">确认提交工作</n-button>
		    </template>
		    <n-flex vertical size="large" style="padding:17px;background-color: #ffffff;">
			  <n-button type="primary" @click="onClickSubmit(1)">提交里程碑工作</n-button>
		      <n-button type="tertiary" @click="onClickSubmit(2)">提交全部工作</n-button>
		    </n-flex>
		  </n-popover>
		  <n-button type="primary" @click="onClickSubmit(2)" v-else>确认提交工作</n-button>
		<!-- <n-button type="primary" @click="show = true">评价</n-button> -->
      </n-flex>
    </div>
  </div>
  <Evaluation v-model:show="show"></Evaluation>
</template>

<style scoped lang="scss">
.work-details {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

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
    padding: 40px;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #EDEDED;
    border-radius: 16px 16px 16px 16px;
    box-sizing: border-box;
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
	text-align: center;

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
  ::v-deep(.list-select .n-radio .n-radio__dot-wrapper){
  	  width: 25px;
  	  height: 25px;
  }
  ::v-deep(.list-select .n-radio .n-radio__dot){
	  width: 25px;
	  height: 25px;
  }
}
</style>