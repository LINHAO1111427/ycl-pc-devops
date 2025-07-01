<script setup lang="ts">
import { Text } from '@/components'
import HeaderTop from '@/components/Header/HeaderTop.vue'
import Layout from '@/components/Layout/Layout.vue'
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const isShow = ref()

const route = useRoute()

const router = useRouter()

const invite = ref(false)

watchEffect(() => {
  invite.value = !!route.query.invite
})

function onClickConfirm(){
	if(!invite.value){
		router.push('/received-contract')
	}else{
		router.push('/submit-proposals')
	}
}
const showModal = ref(false)
const appealStatus = ref(false)
const appealReason = ref('')
const fileList = ref([])

const handleUploadChange = ({ file, fileList: newFileList }) => {
  fileList.value = newFileList
}

const handleRemove = (options) => {
  fileList.value = fileList.value.filter(file => file.id !== options.file.id)
}

const submitAppeal = () => {
  if (appealStatus.value && !appealReason.value.trim()) {
    window.$message.warning('请输入申诉理由')
    return
  }
  if (appealStatus.value && appealReason.value.length > 200) {
    window.$message.warning('申诉理由不能超过200字')
    return
  }
  console.log('申诉状态:', appealStatus.value)
  console.log('申诉理由:', appealReason.value)
  console.log('上传文件:', fileList.value)
  showModal.value = false
  window.$message.success('提交成功')
}
</script>

<template>
  <HeaderTop :is-work="false"></HeaderTop>
  <Layout>
    <div class="send-offer">
      <Text :size="40">
        {{ invite ? '恭喜您！您已被邀请提交一份项目简历！' : '恭喜您！您已被邀请提交一份offer！' }}
      </Text>
      <Text :size="16">
        {{
          invite ? '阅读更多关于下面的工作，并提交一个项目简历，如果您有兴趣。' : '阅读更多关于下面的工作，并接受一个offer，如果您有兴趣。'
        }}
      </Text>
      <div class="send-offer-container">
        <div class="send-offer-header">
          <n-space vertical :size="16">
            <Text :size="22">您好，王杰！</Text>
            <Text :size="22">
              {{
                invite ? '想邀请你看看我发布的这份工作。如果你有时间并且感兴趣，请确认提交一份项目简历' : '我想邀请你看看我发布的这份工作。如果你有时间并且感兴趣，请提交一份offer'
              }}
            </Text>
          </n-space>
        </div>
        <n-space class="send-offer-text" vertical :size="10">
          <n-button type="primary" text class="router-link naiveui-button-16">
            {{ invite ? '需要一份关于某公司的正式文件' : '普通话翻译成英语' }}
          </n-button>
          <n-space align="center">
            <n-ellipsis
              :style="{
                  width:isShow ? 'auto' : '500px',
                  'line-height':'20px',
				  fontSize:'16px'
              }"
              class="secondary-color-text-1"
              :tooltip="false"
              :line-clamp="isShow ? 9999:1"
            >
              LXT正在寻找注重细节的自由职业者加入我们的团队。你的角色将包括评估书面提示和答案，以及一个
              LXT正在寻找注重细节的自由职业者加入我们的团队。你的角色将包括评估书面提示和答案，以及一个LXT正在寻找注重细节的自由职业者加入我们的团队。你的角色将包括评估书面提示和答案，以及一个LXT正在寻找注重细节的自由职业者加入我们的团队。你的角色将包括评估书面提示和答案，以及一个
            </n-ellipsis>
            <n-button type="primary" text class="router-link naiveui-button-16" @click="isShow = !isShow">
              {{ isShow ? '收起' : '更多' }}
            </n-button>
          </n-space>
        </n-space>
        <n-flex class="send-offer-work-details" vertical :size="30">
          <n-space vertical v-if="!invite">
            <Text :size="24">工作详情</Text>
            <Text :size="18">职位描述</Text>
            <Text :size="14" class="secondary-color-text-1">
              我们正在寻找一位技术娴熟，一丝不苟的基于Web和Word的中文演示文榜编辑加入我们充满活力的日队。理想的候选人将具备强大的中文能力...
            </Text>
          </n-space>
          <n-flex vertical>
            <n-flex class="send-offer-work-item" justify="space-between">
              <Text :size="20">
                {{ invite ? '项目类型' : '项目类型' }}
              </Text>
              <Text :size="16" class="secondary-color-text-1">{{ invite ? '里程碑项目' : '里程碑项目' }}</Text>
            </n-flex>
            <n-flex class="send-offer-work-item" justify="space-between">
              <Text :size="20">
                预算估计数
              </Text>
              <Text :size="16" class="secondary-color-text-1">￥200</Text>
            </n-flex>
            <n-flex class="send-offer-work-item" justify="space-between">
              <Text :size="20">
                {{ invite ? '预计时间' : '项目截止日期' }}
              </Text>
              <Text :size="16" class="secondary-color-text-1">  {{ invite ? '1-3个月' : '11月1日' }} </Text>
            </n-flex>
          </n-flex>
        </n-flex>
        <n-flex class="send-offer-footer" :size="20">
          <n-button class="naiveui-button-16" type="primary" block size="large" @click="onClickConfirm">{{ invite ? '确定' : '确定接受offer' }}</n-button>
          <n-button class="naiveui-button-16" block size="large" @click="showModal=true">忽略</n-button>
        </n-flex>
        <n-flex vertical :size="0">
          <Text :size="24">
            知道谁能胜任这份工作吗
          </Text>
          <Text :size="14" class="secondary-color-text-1">
            如果您拒绝邀请，您可以选择通过推荐工作来帮助其他自由职业者。
          </Text>
        </n-flex>
        <n-flex vertical :size="10" style="margin: 40px 0">
          <Text :size="18">
            顺祝商祺
          </Text>
          <Text :size="16" class="secondary-color-text-1">
            单刻达团队
          </Text>
        </n-flex>
      </div>
    </div>
    <n-modal v-model:show="showModal" title="是否申诉" preset="dialog" class="no-icon-dialog">
      <n-space vertical size="large">
        <n-radio-group v-model:value="appealStatus" name="appeal">
          <n-radio :value="false">否</n-radio>
          <n-radio :value="true">是</n-radio>
        </n-radio-group>

        <template v-if="appealStatus">
          <n-form-item label="申诉理由">
            <n-input
                v-model:value="appealReason"
                type="textarea"
                maxlength="200"
                show-count
                placeholder="请输入申诉理由（最多200字）"
            />
          </n-form-item>

          <n-form-item label="上传申诉图片（最多3张）">
            <n-upload
                :max="3"
                list-type="image-card"
                :file-list="fileList"
                :on-change="handleUploadChange"
                :on-remove="handleRemove"
            >
<!--              <n-button v-if="fileList.length < 3">上传图片</n-button>-->
            </n-upload>
          </n-form-item>
        </template>
      </n-space>

      <template #action>
        <n-space justify="end">
          <n-button @click="showModal = false">取消</n-button>
          <n-button type="primary" @click="submitAppeal">提交</n-button>
        </n-space>
      </template>
    </n-modal>
  </Layout>

</template>


<style scoped lang="scss">
.send-offer {
  padding-top: 40px;

  .send-offer-container {
    margin-top: 30px
  }

  .send-offer-header {
    height: 230px;
    background: #F9F9F9;
    border-radius: 8px 8px 8px 8px;
    padding: 40px 50px;
    box-sizing: border-box;
  }

  .send-offer-text {
    margin-top: 12px;
    margin-bottom: 24px;
  }

  .send-offer-work-details {
    background: #F9F9F9;
    border-radius: 8px 8px 8px 8px;
    padding: 40px;

    .send-offer-work-item {
      border-bottom: solid 1px #E8E8E8;
      padding: 10px 20px;

      &:nth-last-child(1) {
        border: none
      }
    }
  }

  .send-offer-footer {
    margin: 20px 0 53px 0;
  }
}
</style>
