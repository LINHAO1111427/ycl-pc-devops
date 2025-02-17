<script setup lang="ts">
import Ellipsis from '@/components/Talents/ellipsis.vue'
import TagList from '@/components/Talents/TagList.vue'
import { IconStart, RenderIcon, IconPingbi, IconMessage, IconWeiyanzheng, IconShipin } from '@/components'
import { ref } from 'vue'

const props = defineProps({
  isConsult: {
	type: Boolean,
	default: 0,
  },
})
	
const tagOptions = ['文件翻译', '译本', '普通话', '方言', '英译中文', ...new Array(10).fill('翻译').map((item, index) => item + index)]


const emit = defineEmits(['click'])

const isActive = ref(false)

const isActive2 = ref(false)

const charMessageShow = ref(false)
</script>

<template>
  <div class="talents-cart-container" v-for="(_item,index) in 10">
    <div class="talents-cart-container-left">
      <n-flex :wrap="false" align="center">
        <n-badge dot type="success" :offset="[-45, 8]" >
          <n-avatar :size="55" round style="flex-shrink: 0" />
        </n-badge>
        <n-flex vertical style="width: 100%" :size="0">
          <n-flex align="center">
            <n-space>
              <div class=cart-header-title>
                王杰
              </div>
              <div class="cart-header-date">
                7个小时前发布
              </div>
            </n-space>
            <div class="cart-header-icons">
              <RenderIcon :size="18" fill="#898989" :icon="IconMessage" @click.stop="charMessageShow=true" />
              <RenderIcon :size="18" :fill="isActive2 ? '#58968B' : '#808080'" :icon="IconPingbi" @click.stop="isActive2 = !isActive2" />
              <RenderIcon
                :size="18"
                :fill="isActive ? '#58968B' :'#898989'"
                :icon="IconStart"
                @click="isActive = !isActive"
              />
            </div>
          </n-flex>
          <n-flex style="margin-top: 15px" align="center">
            <div class="cart-ver-item">
			  <RenderIcon :size="15" fill="#808080" :icon="IconWeiyanzheng" />
              证书未上传
            </div>
            <div class="cart-ver-item">
              接单总量:97
            </div>
            <div class="cart-ver-item">
              收入合计：1200
            </div>
            <div class="cart-ver-item">
              一次性任务
            </div>
            <div class="cart-ver-item">
              广东
            </div>
			<div class="cart-ver-item">
				<n-button size="small" :type="isConsult == 1 || index > 1 ? 'primary' : 'tertiary'" :secondary="isConsult == 1 || index > 1 ? false : true" @click="onClickUrl">
					<RenderIcon :size="15" :fill="isConsult == 1 || index > 1? '#ffffff' : '#8A8A8A'" :icon="IconShipin" style="margin-right:5px;" />
					商业咨询
				</n-button>
			</div>
            <n-rate readonly :default-value="5" color="#F18B41" style="margin-left: auto" />
            <span class="rate-nums">5</span>
          </n-flex>
        </n-flex>
      </n-flex>
      <div class="cart-title">个人简介：</div>
      <div class="cart-ellipsis-text" @click="emit('click')">
        <ellipsis>
          职位描述： 你好！ 我们是Nutravision，一家致力于通过我们的补充剂促进眼睛健康的公司。我们需要一位熟练的翻译人员将我们的两本电子书从英语翻译成普通话。 责任： - 准确翻译两本电子书，同时保持原语气。 - 校对翻译以确保它们没有错误。 - 与我们的团队合作，确保质量。 要求： - 英语和普通话流利。 - 在翻译书面内容方面有丰富的经验。 - 非常注重细节和出色的校对技巧。 - 能够按时完成任务。 项目详情： - 电子书数量：1 - 总字数：主动青光眼电子书 6,500 字 - 截止日期：2周 - 赔偿：$400 加入我们，帮助向讲普通话的观众传播有价值的健康信息。请提供您的工作样本和翻译经验的简要概述。在这个项目完成后，很可能会有其他电子书和材料需要翻译。
        </ellipsis>
        <div class="cart-tag-list">
          <TagList :options="tagOptions"></TagList>
        </div>
      </div>
    </div>
  </div>
  <ChatMessage v-model:show="charMessageShow" />
</template>

<style scoped lang="scss">
.talents-cart-container {
  border: solid 1px #58968B;
  box-sizing: border-box;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  width: 100%;
  background-color: #ffffff;

  .cart-header-icons {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .talents-cart-container-left {
    padding: 20px;
    box-sizing: border-box;
    flex: 1;
    width: calc(100% - 250px);
  }

  .cart-text-item-desc {
    font-size: 12px !important;
    margin-top: 7px;
  }

  .cart-header-title {
    font-size: 20px;
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