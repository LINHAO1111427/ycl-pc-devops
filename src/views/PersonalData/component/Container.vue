<script setup lang="ts">
import { CreateOutline, SwapVerticalOutline, ReturnDownBackSharp } from '@vicons/ionicons5'
import { Text } from '@/components'
import WorkDetails from './WorkDetails.vue'
import EditIntroduction from './EditIntroduction.vue'
import { ref } from 'vue'

const props = defineProps({
  edi: {
    type: Boolean,
    default: true,
  },
})

const showWorkDetails = ref(false)

const showEditIntroduction = ref(false)

const userInput = ref({
  hig: ['中文','法语','德语','阿拉伯语','荷兰语'],
  higInput: '',
})


function onClickAdd() {
  userInput.value.hig.push(userInput.value.higInput)
  userInput.value.higInput = ''
}
</script>

<template>
  <div class="personal-data-container-body">
    <div class="personal-profile">
      <n-flex align="center" style="height: 30px">
        <Text :size="22" weight="600">自我简介</Text>
        <n-icon :size="22" class="cursor-pointer-style main-color-size" v-if="edi" @click="showEditIntroduction = true">
          <CreateOutline></CreateOutline>
        </n-icon>
      </n-flex>
      <Text :size="14" class="secondary-color-text-1">
        CET4/6 TEM4/8 我在我的大学通过了，TEM8是我国的最高级别，代表英语学习者可以像母语人士一样与外国人交流，在我的国家，我做过翻译，为外国客户翻译论文和其他东西，我有很强的学习新事物的能力，如果你雇用我，
        我绝对不会让你失望的！
      </Text>
    </div>
    <div class="personal-work-experience">
      <n-flex align="center" style="height: 30px;margin-bottom: 30px">
        <Text :size="26" weight="600">工作经历</Text>
        <n-icon :size="22" class="cursor-pointer-style main-color-size">
          <SwapVerticalOutline></SwapVerticalOutline>
        </n-icon>
      </n-flex>
      <Text :size="18">
        已完成工作（3）
      </Text>
      <n-flex class="personal-work-list" :size="20" vertical>
        <n-flex class="personal-work-list-item" vertical v-for="_item in 3" @click="showWorkDetails = true">
          <Text :size="20">
            将普通话翻译成英语
          </Text>
          <Text :size="16" color="#808080">
            没有给出反馈
          </Text>
          <n-flex justify="space-between" style="margin-top: 20px">
            <Text :size="16" color="#808080">
              2021-04-10 - 2022-04-10
            </Text>
            <template v-if="edi">
              <n-button type="primary" style="width: 120px">
                固定价格
              </n-button>
            </template>
            <template v-else>
              <Text class="secondary-color-text-1">固定价格</Text>
            </template>
          </n-flex>
        </n-flex>
      </n-flex>
    </div>
    <n-flex class="personal-skills-container" vertical :size="20">
      <Text :size="26" weight="600">技能和专业知识</Text>
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
      <n-flex>
		  <n-tag
		    round
		    class="cursor-pointer-style"
		    v-for="item in userInput.hig"
		    closable
		    @close="userInput.hig = userInput.hig.filter(value => value !== item)"
		    :key="item">
		    {{ item }}
		  </n-tag>
      </n-flex>
    </n-flex>
    <n-flex class="personal-skills-container" vertical :size="10">
      <div>
        <Text :size="26" weight="600">商业咨询项目展示</Text>
        <Text :size="14" color="#808080" v-if="edi">
          项目是一种在原创力上赚钱的新方式，可帮助您做更多您喜欢做的工作。创建项目产品，突出您的优势并吸引更多客户
        </Text>
        <template v-else>
          <n-flex style="margin-top: 20px">
            <n-flex vertical>
              <n-image>
                <template #placeholder>
                  <div class="image-placeholder"></div>
                </template>
              </n-image>
              <Text :size="16" weight="600">证书</Text>
            </n-flex>
            <n-flex vertical>
              <n-image>
                <template #placeholder>
                  <div class="image-placeholder"></div>
                </template>
              </n-image>
              <Text :size="16" weight="600">设计：web网站</Text>
            </n-flex>
          </n-flex>
        </template>
      </div>
      <n-button type="primary" style="width: 88px" v-if="edi" @click="$router.push('/add/project')">管理项目</n-button>
    </n-flex>
  </div>
  <WorkDetails v-model:show="showWorkDetails"></WorkDetails>
  <EditIntroduction v-model:show="showEditIntroduction" />
</template>

<style scoped lang="scss">
.personal-data-container-body {
  width: 100%;
  border-right: solid 1px #EDEDED;
  border-bottom: 1px solid #EDEDED;

  .personal-profile {
    padding: 21px 116px 21px 37px;
    height: 194px;
    border-bottom: 1px solid #EDEDED;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .personal-work-experience {
    padding: 40px;
    box-sizing: border-box;
    border-bottom: 1px solid #EDEDED;
  }

  .personal-work-list {
    margin-top: 20px;

    .personal-work-list-item {
      border: solid 1px #58968B;
      width: 100%;
      height: 162px;
      border-radius: 16px;
      padding: 20px 40px;
      cursor: pointer;
    }
  }

  .personal-skills-container {
    border-bottom: 1px solid #EDEDED;
    padding: 40px;
    box-sizing: border-box;
  }

  .image-placeholder {
    width: 244px;
    height: 173px;
    background: #D9D9D9;
    border-radius: 12px 12px 12px 12px;
  }
}
</style>