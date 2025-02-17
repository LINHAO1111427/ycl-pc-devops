<script setup lang="ts">
import { ref } from 'vue'

const options = [
  {
    title: '行业分析报告',
    desc: '了解你所擅长的领域在原创力受青睐程度',
  },
  {
    title: '如何雇佣',
    desc: '尝试完成工作的多样化方式',
  },
  {
    title: '原创力培训',
    desc: '帮助你在擅长的领域更具竞争力',
  },
  {
    title: '如何找到工作',
    desc: '了解如何开展你的自由职业生涯',
  },
]

const current = ref('人才市场')

const tag = [
  '开发与IT',
  '设计与创意',
  '销售&市场营销',
  '写作与翻译',
  '汽车设计',
  '财务与会计',
  '工程与建筑',
  '人力资源与培训',
  '管理和客户支持',
]
</script>

<template>
  <div class="college-talents">
    <div class="header-talents-slider">
      <n-flex
        v-for="item in options"
        :class="{
          'talents-slider': true,
        }"
        vertical
        justify="center"
      >
        <div class="slider-text">{{ item.title }}</div>
        <div class="secondary-color-text-1">{{ item.desc }}</div>
      </n-flex>
    </div>

    <div class="header-talents-right">
      <n-flex>
        <n-flex
          vertical
          class="header-talents-item-right"
          justify="center"
          :size="10"
        >
          <div class="header-talents-title">指南</div>
          <n-button text class="router-link">开始成为一名自由职业者</n-button>
        </n-flex>
        <n-flex
          vertical
          class="header-talents-item-right"
          justify="center"
          :size="10"
        >
          <div class="header-talents-title">指南</div>
          <n-button text class="router-link">发展你的自由职业生涯</n-button>
        </n-flex>
        <n-flex
          vertical
          class="header-talents-item-right"
          justify="center"
          :size="10"
        >
          <div class="header-talents-title">指南</div>
          <n-button text class="router-link">
            招聘&与自由职业者一起完成目标
          </n-button>
        </n-flex>
      </n-flex>

      <n-button text class="router-link">参考更多资料</n-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.college-talents {
  width: 1326px;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  max-width:100%;

  .header-talents-slider {
    border-right: solid 1px #ededed;
    margin-right: 68px;
    width: 670px;
    flex-shrink: 0;
  }

  .slider-text {
    font-weight: 600;
    font-size: 14px;
    color: #333333;
  }

  .talents-slider {
    width: 300px;
    display: inline-flex !important;
    height: 84px;
    border-radius: 8px;
    padding: 0px 40px;
    box-sizing: border-box;
    cursor: pointer;
    color: #333333;
    border: solid 1px #ededed;
    margin-left: 30px;

    &:nth-child(1),
    &:nth-child(3) {
      margin-left: 0;
    }

    &:nth-child(1),
    &:nth-child(2) {
      margin-bottom: 30px;
    }

    &.active,
    &:hover {
      color: $MainColor;
      border: 1px solid $MainColor;
      background: #bfe1db;
    }
  }

  .header-talents-right {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  .header-talents-item-right {
    height: 87px;
    background: #ffffff;
    border-radius: 10px 10px 10px 10px;
    border: 1px solid #ededed;
    padding: 20px;
    box-sizing: border-box;
  }

  .header-talents-title {
    font-size: 14px;
  }

  ::v-deep(.n-button__content) {
    font-size: 12px;
  }
}
@media (max-width: 1400px) {
    .college-talents{
		padding-left:20px;
		padding-right:20px;
	}
}	

</style>
