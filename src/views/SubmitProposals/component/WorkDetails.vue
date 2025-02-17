<script setup lang="ts">
import { ref } from 'vue'
import { RenderIcon, IconCrown, IconYusuanzonge, IconJiangpai } from '@/components'
import { CloseCircleOutline, ReturnDownBackSharp } from '@vicons/ionicons5'
import { useRouter } from 'vue-router'
import { createDiscreteApi } from 'naive-ui'

const router = useRouter()

const selectOptions = [{ label: '一周', value: 1 },{ label: '半个月', value: 2 },{ label: '一个月', value: 3 },{ label: '两个月', value: 4 },{ label: '三个月', value: 5 }]

const tagOptions = ['文件翻译', '译本', '普通话', '方言', '英译中文']

const current = ref('里程碑')

const options = [
  {
    title: '里程碑',
    desc: '将项目划分为更小的部分，称为里程碑，里程碑完成并获得批准后，您将获得报酬。',
  },
  {
    title: '一次性工作',
    desc: ' 当所有工作都交付完毕时，再获得全部付款。',
  },
]

const formValue = ref([{}])


const textarea = ref('')

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

const { dialog } = createDiscreteApi(['dialog'])
function submit(){
	dialog.success({
	  actionClass:'naiveui-dialog-action',
	  showIcon: false,
	  closable: false,
	  // title:'提示信息',
	  content: '恭喜您，该项目提交成功，您可以从“历史申请”查看更多详情',
	  positiveText: '确定',
	  maskClosable: false,
	  positiveButtonProps:{
		color:'#58968B'  
	  },
	  onPositiveClick: () => {
		router.push('/application')
	  }
	})
}
</script>

<template>
  <div class="work-details">
    <div class="header" id="header">
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
              <RenderIcon :icon="IconJiangpai" :size="30" fill="#808080" />
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
              <RenderIcon :icon="IconYusuanzonge" :size="30" fill="#808080" />
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
        <n-select :options="selectOptions" style="width: 222px" placeholder="选择持续时问" />
      </div>
    </div>
    <div class="professional" id="professional">
      <div class="professional-title">技能和专业知识</div>
      <n-flex>
        <n-tag round v-for="item in tagOptions" class="secondary-color-text-1">
          {{ item }}
        </n-tag>
      </n-flex>
    </div>
    <div class="terms" id="terms">
      <div class="professional-title">条款</div>
      <div class="terms-desc secondary-color-text-1">
        服务费折扣20%降到15%;专属客服，以及其他竞争者的出价区间
        <RouterLink to="/member">
          <n-button type="primary" text>
            开通原创力会员
          </n-button>
        </RouterLink>
      </div>
      <div class="professional-title title-2">
        选择获得报酬的方式
      </div>
      <div class="terms-type">
        <div
          :class="{
          'terms-type-item':true,
          active:current === item.title
        }"
          v-for="item in options"
          @click="current = item.title"
        >
          <div :class="{'terms-item-title':true}">
            {{ item.title }}
          </div>
          <div class="terms-item-desc">
            {{ item.desc }}
          </div>
        </div>
      </div>
      <template v-if="current === '里程碑'">
        <n-divider></n-divider>
        <div class="add-header">
          <div class="add-header-title">
            里程碑数量
          </div>
          <n-button type="primary" ghost @click="add">
            添加里程碑
          </n-button>
        </div>
        <div class="add-form-item">
          <n-form>
            <n-grid :cols="24" :x-gap="24">
              <template v-for="(item,index) in formValue">
                <n-form-item-gi span="1">
                  <span style="font-size: 14px">{{ index >= 10 ? index : '0' + (index + 1) }}</span>
                </n-form-item-gi>
                <n-form-item-gi label="描述" span="10">
                  <n-input placeholder="请输入" />
                </n-form-item-gi>
                <n-form-item-gi label="期限" span="7">
                  <n-date-picker
                    style="width:100%"
                    placeholder="请选择期限"
                    value-format="yyyy-MM-dd"
                    type="date"
                    clearable
                  />
                </n-form-item-gi>
                <n-form-item-gi label="金额" span="6" style="position: relative">
                  <n-input
                    style="width:100%"
                    placeholder="0"
                    clearable
					default-value="200"
                  >
                    <template #prefix>
                      ￥
                    </template>
                  </n-input>
                  <n-icon
                    style="position: absolute;right: -30px"
                    class="cursor-pointer-style"
                    :size="20"
                    v-if="index > 0"
                    @click="formValue.splice(index,1)"
                  >
                    <CloseCircleOutline></CloseCircleOutline>
                  </n-icon>
                </n-form-item-gi>
              </template>
            </n-grid>
          </n-form>
        </div>
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
              {{current === '项目总价' ? '' : '出价'}}
            </div>
            <div class="project-item-desc">
              {{current === '这包括所有里程碑，并且是您的套户将看到的金额' ? '' : '客户将在您的项目简历中看到的总金额'}}
            </div>
          </n-flex>
          <div class="project-item-title">
            <template v-if="current === '里程碑'">
              ￥200
            </template>
            <template v-else>
              <n-input default-value="200" align="right">
                <template #prefix>
                  ￥
                </template>
              </n-input>
            </template>
          </div>
        </n-flex>
        <n-flex justify="space-between" align="center" class="project-table-item">
          <n-flex vertical>
            <div class="project-item-title">
              自由职业者服务费
            </div>
          </n-flex>
          <div class="project-item-title secondary-color-text-1">
            <template v-if="current === '里程碑'">
              ￥40
            </template>
            <template v-else>
              <n-input default-value="40" align="right" disabled>
                <template #prefix>
                  ￥
                </template>
              </n-input>
            </template>
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
            <template v-if="current === '里程碑'">
              ￥160
            </template>
            <template v-else>
              <n-input default-value="160" align="right" disabled>
                <template #prefix>
                  ￥
                </template>
              </n-input>
            </template>
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

    <div class="cover-letter" id="cover-letter">
      <div class="professional-title">求职信</div>
      <div class="letter-header-title">
        <div class="title-text">
          在你写求职信的时候得到个性化的提示。
        </div>
        <n-space align="center">
          <n-progress type="line" status="success" :percentage="textarea.length" :height="4" style="width: 200px">
            {{ textarea.length > 100 ? 100 : textarea.length }}%完成度
          </n-progress>
          <n-button :type="textarea.length >100 ?'primary' : 'default' " secondary strong>获得提示</n-button>
        </n-space>
      </div>
      <n-input v-model:value="textarea" type="textarea" style="height: 400px;" placeholder="请输入"></n-input>

      <div class="annex">
        <div class="annex-title">附件</div>
        <n-upload list-type="image-card" />
        <div class="annex-desc">
          拖动 或 点击 上传项目文件
        </div>
        <div class="annex-value">
          您最多可以附加10个大小为25 MB的文件。包括工作样本或其他文件来支持你的申请。不需要上传你的简历--你的原创力个人资料会随着你的提案自动转发给客户。
        </div>
      </div>
    </div>

    <div class="two-points" id="two-points">
      <div class="professional-title">简介亮点</div>
      <div class="secondary-color-text-1" style="font-size: 14px;margin-bottom: 20px">
        突出显示您个人资料中最相关的项目，以展示您的经验和技能。您可以添加多达六个亮点总数。点击回车添加标签
      </div>
      <n-form-item label="添加原创力工作" size="large">
        <n-input
          v-model:value="userInput.higInput"
          placeholder="请输入标签"
          style="width: 525px;"
          @keydown.enter="onClickAdd"
        >
          <template #suffix>
            <n-icon>
              <ReturnDownBackSharp></ReturnDownBackSharp>
            </n-icon>
          </template>
        </n-input>
      </n-form-item>
      <n-flex class="tow-tag">
        <n-tag
          round
          class="secondary-color-text-1 cursor-pointer-style"
          v-for="item in userInput.hig"
          closable
          @close="userInput.hig = userInput.hig.filter(value => value !== item)"
          :key="item">
          {{ item }}
        </n-tag>
      </n-flex>
      <n-form-item label="添加证书" size="large">
		<n-upload :show-file-list="false">
			<n-input readonly placeholder="您暂时还没有证书" style="width: 525px;"></n-input>
		</n-upload>
      </n-form-item>
    </div>

    <div class="tow-footer" style="padding: 20px 40px;margin-bottom: 77px">
      <n-flex justify="flex-end" :size="40">
        <n-button type="primary" text>取消</n-button>
        <n-button type="primary" @click="submit">确认提交项目申请</n-button>
      </n-flex>
    </div>
  </div>
</template>

<style scoped lang="scss">
.work-details {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

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
  
}
</style>