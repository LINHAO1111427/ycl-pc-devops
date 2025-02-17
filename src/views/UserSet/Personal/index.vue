<script setup lang="ts">
import {
  RenderIcon,
  Text,
  IconDiscount,
  IconCrown,
  IconReport,
} from '@/components'
import { CreateOutline, ChevronForward } from '@vicons/ionicons5'
import { ref } from 'vue'

const current = ref('account')

const currentVisibility = ref('公开的')

const projectOptions = ref('接受里程碑任务')

const tagOptions = ref(['翻译&本地化服务', '中文', '英语', '法语'])

const level = ref('入门级')

const levelOptions = ref([
  {
    title: '入门级',
    desc: '我在这个领域相对还是新手',
    icon: IconCrown,
  },
  {
    title: '中级',
    desc: '我在这个领域有丰富的经验',
    icon: IconReport,
  },
  {
    title: '专家',
    desc: '我在这个领域拥有全面而深厚的专业知识',
    icon: IconDiscount,
  },
])

const optionsProject = ref([
  {
    label: '只接受一次性任务',
    value: '只接受一次性任务',
  },
  {
    label: '接受里程碑任务',
    value: '接受里程碑任务',
  },
  {
    label: '两者都有',
    value: '两者都有',
  },
])

const optionsVisibility = ref([
  {
    label: '公开的',
    value: '公开的',
  },
  {
    label: '私密的',
    value: '私密的',
  },
])

const slider = [
  {
    title: '能见度',
    to: 'account',
  },
  {
    title: '项目喜好',
    to: 'city',
  },
  {
    title: '经验等级',
    to: 'experience',
  },
  {
    title: '擅长领域',
    to: 'ling',
  },
  {
    title: '历史接单量',
    to: 'history',
  },
]

function onMouseenter(key: string) {
  current.value = key
  window.location.hash = key
}

function onClickClose(value) {
  tagOptions.value = tagOptions.value.filter((item) => item !== value)
}
</script>

<template>
  <div class="contact-container">
    <div class="contact-slider">
      <div
        v-for="item in slider"
        class="contact-slider-item"
        :class="current === item.to && 'active'"
        @click="onMouseenter(item.to)"
      >
        <Text color="#000" :size="16">
          {{ item.title }}
        </Text>
      </div>
    </div>

    <div class="contact-main">
      <n-flex class="withdrawal-methods-header" justify="space-between">
        个人资料
        <n-button type="primary" text @click="$router.push('/personal-data?preview=preview')">
          <Text :size="16">个人资料预览</Text>
        </n-button>
      </n-flex>
      <div class="user-contact-container" id="account">
        <n-flex align="center" justify="space-between">
          <Text color="#333333" :size="24">能见度</Text>
        </n-flex>
        <n-select
          style="margin-top: 10px"
          :options="optionsVisibility"
          v-model:value="currentVisibility"
        />
      </div>

      <div class="user-contact-container" id="city">
        <n-flex align="center" justify="space-between">
          <Text color="#333333" :size="24">项目喜好</Text>
        </n-flex>
        <n-select
          style="margin-top: 10px"
          :options="optionsProject"
          v-model:value="projectOptions"
        />
      </div>

      <div class="user-contact-container" id="experience">
        <n-flex align="center" justify="space-between">
          <Text color="#333333" :size="24">经验等级</Text>
        </n-flex>
        <n-flex class="experience-container" justify="space-around">
          <n-flex
            :class="{
              'experience-container-item': true,
              active: level === item.title,
            }"
            align="center"
            vertical
            justify="center"
            v-for="item in levelOptions"
            @click="level = item.title"
          >
            <RenderIcon :icon="item.icon" :size="55" fill="#F18B41" />
            <Text color="#333333" :size="28">
              {{ item.title }}
            </Text>
            <Text color="#808080" :size="16" style="text-align:center;">
              {{ item.desc }}
            </Text>
          </n-flex>
        </n-flex>
      </div>

      <n-flex class="user-contact-container" id="ling" :size="40" vertical>
        <n-flex align="center" justify="space-between">
          <Text color="#333333" :size="24">擅长领域</Text>
          <n-icon :size="22" class="cursor-pointer-style main-color-size">
            <CreateOutline />
          </n-icon>
        </n-flex>
        <n-flex align="center" justify="space-between">
          <n-flex vertical>
            <Text :size="20">翻译</Text>
            <n-space>
              <n-tag
                round
                :bordered="false"
                v-for="(item) in tagOptions"
                @close="onClickClose(item)"
              >
                {{ item }}
              </n-tag>
            </n-space>
          </n-flex>
        </n-flex>
      </n-flex>

      <div
        class="user-contact-container"
        id="history"
        style="margin-bottom: 158px"
      >
        <n-flex align="center" justify="space-between">
          <Text color="#333333" :size="24">历史接单总量</Text>
        </n-flex>
        <div class="contact-container-cell">
          <n-flex
            justify="space-between"
            align="center"
            class="contact-container-item border-no pointer"
          >
            <Text :size="16">用于电子书翻译的普通话翻译</Text>
            <n-icon :size="16">
              <ChevronForward></ChevronForward>
            </n-icon>
          </n-flex>
          <n-flex
            justify="space-between"
            align="center"
            class="contact-container-item border-no pointer"
          >
            <Text :size="16">用于实体书翻译的翻译</Text>
            <n-icon :size="16">
              <ChevronForward></ChevronForward>
            </n-icon>
          </n-flex>

          <n-flex
            justify="space-between"
            align="center"
            class="contact-container-item border-no pointer"
          >
            <Text :size="16">用于电子书翻译的法语、日文、中文的翻译</Text>
            <n-icon :size="16">
              <ChevronForward></ChevronForward>
            </n-icon>
          </n-flex>

          <n-flex
            justify="space-between"
            align="center"
            class="contact-container-item border-no pointer"
          >
            <Text :size="16">用于电子书翻译的普通话翻译</Text>
            <n-icon :size="16">
              <ChevronForward></ChevronForward>
            </n-icon>
          </n-flex>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-container {
  margin-top: 20px;
  display: flex;
  flex-shrink: 0;
  gap: 20px;

  .contact-slider {
    width: 179px;
    height: 355px;
    background: #ffffff;
    border-radius: 16px 16px 16px 16px;
    box-sizing: border-box;
    padding: 20px;
  }

  .contact-slider-item {
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    padding: 16px 10px;
    margin-bottom: 10px;

    &:hover,
    &.active {
      background-color: $MainColor;
      border-radius: 8px;

      & div {
        color: #ffffff !important;
      }
    }
  }

  .contact-main {
    width: 100%;

    .withdrawal-methods-header {
      margin-top: 20px;
      width: 100%;
      height: 80px;
      background: #ffffff;
      border-radius: 16px;
      border: 1px solid #ededed;
      display: flex;
      align-items: center;
      padding: 0 40px;
      font-size: 28px;
      color: #333333;
    }

    .user-contact-container {
      background: #ffffff;
      border-radius: 16px;
      border: 1px solid #ededed;
      margin-top: 20px;
      padding: 40px;
      box-sizing: border-box;
    }
  }

  .contact-container-item {
    padding: 10px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #ededed;

    &.border-no {
      border: none;
    }

    &.pointer {
      cursor: pointer;
    }

    &:last-child {
      border: none;
    }
  }

  .contact-container-cell {
    background-color: #f8f8f8;
    height: 238px;
    margin-top: 40px;
    border-radius: 16px;
    padding: 20px;
    box-sizing: border-box;
  }

  .tax-item-text {
    font-size: 22px;
    color: $SecondaryColor-1;
    cursor: pointer;

    &.active {
      color: $MainColor;
    }
  }

  .tax-city-container {
    margin-top: 40px;
  }

  .experience-container {
    margin-top: 40px;

    .experience-container-item {
      width: 30%;
      cursor: pointer;
      height: 236px;
      background: #ffffff;
      border-radius: 12px 12px 12px 12px;
      border: 1px solid #ededed;

      &.active {
        background: #bfe1db;
        border-radius: 12px 12px 12px 12px;
        border: 1px solid #58968b;
      }
    }
  }
}
</style>
