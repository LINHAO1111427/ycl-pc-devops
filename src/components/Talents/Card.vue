<script setup lang="ts">
import Ellipsis from '@/components/Talents/ellipsis.vue'
import TagList from '@/components/Talents/TagList.vue'
import { IconStart, RenderIcon, IconGongZou, IconMessage, IconPingbi, IconShoucang1, IconWeiyanzheng } from '@/components'
import { ref } from 'vue'

withDefaults(defineProps<{
    list: Array,
  }>(), {
    list: []
  },
)

const tagOptions = ['文件翻译', '译本', '普通话', '方言', '英译中文', ...new Array(10).fill('翻译').map((item, index) => item + index)]

const emit = defineEmits(['click'])

const charMessageShow = ref(false)
</script>

<template>
  <div class="cart-container" v-for="(item,index) in list" @click="emit('click')">
    <div class="cart-container-left">
      <n-flex align="center">
        <div class="cart-header-title">
          用于电子书翻译的普通话翻译
        </div>
        <div class="cart-header-date">
          7个小时前发布
        </div>
        <div class="cart-header-icons">
          <RenderIcon :size="18" fill="#808080" :icon="IconMessage" @click.stop="charMessageShow = true" />
          <RenderIcon :size="18" :fill="item.isActive2 ? '#58968B' : '#808080'" :icon="IconPingbi" @click.stop="item.isActive2 = !item.isActive2" />
          <RenderIcon
            :size="18"
            :fill="item.isActive ? '#58968B' : '#808080'"
            :icon="item.isActive ? IconStart : IconShoucang1"
            @click.stop="item.isActive = !item.isActive"
          />
        </div>
      </n-flex>
      <n-flex style="margin-top: 15px" align="center">
        <div class="cart-ver-item">
		  <RenderIcon :size="15" fill="#808080" :icon="IconWeiyanzheng" />
          <span style="margin-left: 3px;">付款未经验证</span>
        </div>
        <!-- <div class="cart-ver-item">
          证书未验证
        </div> -->
        <div class="cart-ver-item">
          一次性任务
        </div>
        <!-- <div class="cart-ver-item">
          中文母语
        </div> -->
        <div class="cart-ver-item">
          广东
        </div>
        <n-rate readonly :default-value="5" color="#F18B41" style="margin-left: auto" />
        <span class="rate-nums">5</span>
      </n-flex>
      <div class="cart-title">项目详情：</div>
      <div class="cart-ellipsis-text">
        <ellipsis>
          职位描述： 你好！ 我们是Nutravision，一家致力于通过我们的补充剂促进眼睛健康的公司。我们需要一位熟练的翻译人员将我们的两本电子书从英语翻译成普通话。 责任： - 准确翻译两本电子书，同时保持原语气。 - 校对翻译以确保它们没有错误。 - 与我们的团队合作，确保质量。 要求： - 英语和普通话流利。 - 在翻译书面内容方面有丰富的经验。 - 非常注重细节和出色的校对技巧。 - 能够按时完成任务。 项目详情： - 电子书数量：1 - 总字数：主动青光眼电子书 6,500 字 - 截止日期：2周 - 赔偿：$400 加入我们，帮助向讲普通话的观众传播有价值的健康信息。请提供您的工作样本和翻译经验的简要概述。在这个项目完成后，很可能会有其他电子书和材料需要翻译。
        </ellipsis>
        <div class="cart-tag-list">
          <TagList :options="tagOptions"></TagList>
        </div>
      </div>
    </div>
    <div class="cart-container-right">
      <n-flex class="header" justify="space-between">
        <div>固定价格</div>
        <div>共发布：268</div>
      </n-flex>
      <n-flex class="header" justify="space-between" style="margin: 10px 0">
        <div>预估预算: ￥400</div>
        <div>总花费: ￥40</div>
      </n-flex>
	  <div style="margin: 10px 0">
	    中级:我正在寻找价格适合的自由职业者
	  </div>
      <div style="margin-top: 30px;font-size: 12px;">以下经验优先</div>
      <div class="cart-text-item-desc">
        - 英语和普通话流利
      </div>
      <div class="cart-text-item-desc">
        - 在翻译书面内容方面有丰富的经验
      </div>
      <div class="cart-text-item-desc">
        - 非常注重细节和出色的校对技巧。
      </div>
      <div class="cart-text-item-desc">
        - 能够按时完成任务，
      </div>
    </div>
  </div>
  <ChatMessage v-model:show="charMessageShow" />
</template>

<style scoped lang="scss">
.cart-container {
  border: solid 1px #58968B;
  box-sizing: border-box;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  width: 100%;
  cursor: pointer;
  background-color: #ffffff;
  
  &:hover .cart-header-title{
	  color: #58968B;
  }

  .cart-header-icons {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .cart-container-left {
    padding: 20px 5px 20px 20px;
    box-sizing: border-box;
    flex: 1;
    width: calc(100% - 250px);
  }

  .cart-container-right {
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
    background-color: #58968B;
    width: 250px;
    flex-shrink: 0;
    padding: 20px 10px 20px 27px;
    box-sizing: border-box;

    & div {
      font-size: 10px;
      color: #f5f5f5;
      font-weight: 400;
    }
  }


  .cart-text-item-desc {
    font-size: 12px !important;
    margin-top: 7px;
  }

  .cart-header-title {
    font-size: 20px;

	&:hover{
		text-decoration: underline;
	}
  }

  .cart-header-date {
    font-size: 12px;
    margin-top: 5px;
    color: #9b9b9b;
  }

  .cart-ver-item {
	display: flex;
	align-items: center;
    color: #afafaf;
  }

  .rate-nums {
    line-height: 10px;
    font-weight: 600;
  }

  .cart-title {
    margin-top: 25px;
  }

  .cart-ellipsis-text {
    margin-top: 5px;
    color: #afafaf;
    line-height: 1.5;
  }

  .cart-tag-list {
    margin-top: 10px;
  }
}
</style>