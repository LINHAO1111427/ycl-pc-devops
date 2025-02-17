<script setup lang="ts">
import {
  AddCircleOutline,
  ChevronDownSharp,
  ChevronForwardOutline,
  CreateOutline,
  Trash,
  ShieldCheckmarkSharp,
} from '@vicons/ionicons5'
import EditingLanguage from './EditingLanguage.vue'
import WorkTime from './WorkTime.vue'
import { ref } from 'vue'
import AddEducation from '@/views/PersonalData/component/AddEducation.vue'
import AddVideo from '@/views/PersonalData/component/AddVideo.vue'
import { Text } from '@/components'

const props = defineProps({
  edi: {
    type: Boolean,
    default: true,
  },
})

const showLanguage = ref(false)

const showWork = ref(false)

const education = ref(false)

const showVideo = ref(false)

const weekHours = ref('每周40小时以上')

const languageList = ref([{
	name:'中文',
	skilled:'母语或双语'
}])

const educationList = ref([
	{
		id:1,
		name:'清华大学',
		content:'设计硕士，高级设计师',
		date:'2016-2019'
	},
	{
		id:2,
		name:'天津美术学院',
		content:'设计硕士，高级设计师',
		date:'2016-2019'
	}
])
</script>

<template>
  <div class="personal-data-slider">
    <div class="personal-data-slider-user">
      <n-flex align="center" justify="space-between">
        <div class="text-size-16">查看职业档案</div>
        <n-icon :size="22" class="cursor-pointer-style main-color-size" v-if="edi"  @click="$router.push('/user-set/personal')">
          <CreateOutline></CreateOutline>
        </n-icon>
      </n-flex>
      <n-space vertical :size="15" style="margin-top: 15px">
        <div class="secondary-color-text-1" style="font-size: 14px">设计师</div>
        <div class="secondary-color-text-1" style="font-size: 14px">
          所有工作
        </div>
      </n-space>
    </div>
    <n-flex
      class="personal-data-slider-nums"
      align="center"
      justify="center"
      :size="20"
    >
      <n-flex class="personal-data-slider-nums-item" vertical align="center">
        <div class="slider-nums-item-nums">124</div>
        <div class="secondary-color-text-1">历史接单(单)</div>
      </n-flex>
      <n-flex class="personal-data-slider-nums-item" vertical align="center">
        <div class="slider-nums-item-nums">124000</div>
        <div class="secondary-color-text-1">总收入(￥)</div>
      </n-flex>
      <n-flex class="personal-data-slider-nums-item" vertical align="center">
        <div class="slider-nums-item-nums">4.9</div>
        <div class="secondary-color-text-1">评分(5.0)</div>
      </n-flex>
    </n-flex>
    <n-flex class="personal-data-slider-footer" vertical :size="20">
      <n-flex vertical>
        <n-flex align="center" justify="space-between">
          <div class="text-size-16">视频介绍</div>
          <n-icon :size="22" class="cursor-pointer-style main-color-size" @click="showVideo = true" v-if="edi">
            <AddCircleOutline></AddCircleOutline>
          </n-icon>
        </n-flex>
      </n-flex>
      <n-flex align="center" justify="space-between">
        <n-space vertical>
          <span style="font-size: 14px">每周小时数量</span>
          <span class="secondary-color-text-1">{{weekHours}}</span>
        </n-space>
        <n-icon :size="22" class="cursor-pointer-style main-color-size" @click="showWork = true" v-if="edi">
          <CreateOutline />
        </n-icon>
      </n-flex>
      <n-flex vertical :size="15">
        <n-flex align="center" justify="space-between">
          <div class="text-size-16">语言</div>
          <n-flex align="center" v-if="edi">
            <n-icon :size="22" class="cursor-pointer-style main-color-size" @click="showLanguage = true" v-if="languageList.length == 0">
              <AddCircleOutline />
            </n-icon>
            <n-icon :size="22" class="cursor-pointer-style main-color-size" style="margin-bottom: 3px" @click="showLanguage = true" v-else>
              <CreateOutline />
            </n-icon>
          </n-flex>
        </n-flex>
        <n-flex vertical :size="10">
          <span style="font-size: 14px" class="secondary-color-text-1" v-for="(item,index) in languageList" :key="index">
            {{item.name}}：{{item.skilled}}
          </span>
        </n-flex>
      </n-flex>
      <n-flex align="center" justify="space-between">
        <div class="text-size-16">个人验证</div>
        <n-icon :size="18" class="cursor-pointer-style main-color-size" v-if="edi">
          <ChevronDownSharp />
        </n-icon>
      </n-flex>

      <template v-if="edi">
        <n-flex align="center" justify="space-between" style="cursor: pointer;" @click="$router.push('/user-set/identity')">
          <n-space vertical>
            <span style="font-size: 14px">身份证认证</span>
            <span class="secondary-color-text-1">请上传您的身份证</span>
          </n-space>
          <n-icon :size="18" class="cursor-pointer-style main-color-size">
            <ChevronForwardOutline />
          </n-icon>
        </n-flex>
      </template>
      <template v-else>
        <n-flex align="center">
			<n-space vertical>
			  <span style="font-size: 14px">身份证认证</span>
			  <n-flex align="center">
				  <Text class="secondary-color-text-1">已认证</Text>
				  <n-icon :size="15" color="#808080">
					<ShieldCheckmarkSharp></ShieldCheckmarkSharp>
				  </n-icon>
			  </n-flex>
			</n-space>
        </n-flex>
      </template>
      <n-flex vertical :size="15">
        <n-flex align="center" justify="space-between">
          <div class="text-size-16">教育</div>

          <n-flex align="center" @click="education = true" v-if="edi">
            <n-icon
              :size="22"
              class="cursor-pointer-style main-color-size"
              style="margin-bottom: 3px"
            >
              <AddCircleOutline />
            </n-icon>
          </n-flex>
        </n-flex>
        <n-flex justify="space-between" v-for="(item,index) in educationList" :key="index">
          <n-flex vertical :size="10">
            <span style="font-size: 14px">{{item.name}}</span>
            <span class="secondary-color-text-1">{{item.content}}</span>
            <span class="secondary-color-text-1">{{item.date}}</span>
          </n-flex>
          <n-flex align="center" v-if="edi">
            <n-icon :size="22" class="cursor-pointer-style main-color-size"  @click="education = true">
              <CreateOutline />
            </n-icon>
            <n-icon :size="22" class="cursor-pointer-style main-color-size" @click="educationList.splice(index,1)">
              <Trash />
            </n-icon>
          </n-flex>
        </n-flex>
      </n-flex>
    </n-flex>
  </div>
  <WorkTime v-model:show="showWork" v-model:weekHours="weekHours"></WorkTime>
  <EditingLanguage v-model:show="showLanguage" v-model:languageList="languageList" />
  <AddEducation v-model:show="education" />
  <AddVideo v-model:show="showVideo" />
</template>

<style scoped lang="scss">
.personal-data-slider {
  width: 284px;
  border: solid 1px #e7e7e7;
  border-top: transparent;
  height: 100%;
  flex-shrink: 0;

  .personal-data-slider-user {
    height: 167px;
    background: #ffffff;
    padding: 16px;
    box-sizing: border-box;
    border-bottom: solid 1px #e7e7e7;
  }

  .personal-data-slider-nums {
    height: 94px;
    box-sizing: border-box;
    border-bottom: solid 1px #e7e7e7;

    .slider-nums-item-nums {
      font-weight: 600;
      font-size: 16px;
      color: #333333;
    }
  }

  .personal-data-slider-footer {
    padding: 20px;
    box-sizing: border-box;
  }
}
</style>
