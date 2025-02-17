<script setup lang="ts">
import HeaderTop from '@/components/Header/HeaderTop.vue'
import { Footer, IconStart, RenderIcon, IconFaxiangmu, IconYusuanzonge, IconJiangpai } from '@/components'
import { ref } from 'vue'

const listData = ref([
	{
		id:1,
		isCollection:false
	},
	{
		id:2,
		isCollection:false
	}
])
</script>

<template>
  <HeaderTop :is-login="false" :is-work="false" />
  <div class="application">
    <div class="application-container">
      <div class="application-header-title">
        历史申请
      </div>
	  <n-flex align="center" style="margin-bottom:20px;">
	    <n-input round placeholder="请输入.." size="large" style="width: 516px">
	      <template #prefix>
	        <div class="icon">
	          <img src="../../assets/img/search.png" alt="" />
	        </div>
	      </template>
	    </n-input>
	    <div class="hide_input">
		  <RenderIcon class="cursor-pointer-style" icon="icon-rili" fill="#808080" size="25" />
		  <n-date-picker type="daterange" clearable @update-value="handleUpdateValue" />
	    </div>
	  </n-flex>
      <n-flex class="application-list" vertical :size="20">
        <div class="application-list-item" v-for="(item,index) in listData">
          <n-flex class="application-item-tag" align="center" justify="center">
            已申请
          </n-flex>
          <div :class="`application-item-desc ${index === 1 ?'active' :''}`">
            {{ index !== 1 ? '该工作不再招聘' : '该工作正在招聘中' }}
          </div>
          <div class="application-item-title">
            商业网站设计与开发
          </div>
          <n-flex justify="space-between">
            <n-space class="secondary-color-text-1">
              <span>2024-07-10</span>
              <span>全国</span>
            </n-space>
            <n-flex>
              <n-flex
                :class="{'start-icons-button':true,active:item.isCollection}"
                align="center"
                justify="center"
                @click="item.isCollection  = !item.isCollection"
              >
                <RenderIcon :icon="IconStart" :fill="item.isCollection ? '#58968B' : '#e5e5e5'" size="20" />
              </n-flex>
              <n-button size="large" strong secondary type="tertiary" style="width: 184px" v-if="index !== 1">
                <span class="naiveui-text-16">已下架</span>
              </n-button>
			  <n-button type="primary" size="large" style="width: 184px" v-else @click="$router.push('/submit-proposals')">
			    <span class="naiveui-text-16">立即申请</span>
			  </n-button>
            </n-flex>
          </n-flex>
          <div class="application-desc-text">
            我们正在寻找一位技术娴熟，一丝不苟的基于Web和Word的中文演示文榜编辑加入我们充满活力的日队。理想的候选人将具备强大的中文能力和出色的辑技能，在创建、和优化网络内容和基于单词的演示文稿方面拥有丰富的经验，这个角色需要的不仅仅是语言能力:候选人必须对中国文化有深入的了解，以确保内容不仅在语言上准确，而且在文化上具有相关性和吸引力。将文化畑微差别无缝整合到内容中的能力至关重要，因为这将与我们的目标受众产生共鸣并保持真实性。
            <br />
            成功的候选人将展示对中国文化习俗、传统和社会规范的根深蒂团的了解。这种文化洞察力对于制作适合上下文和吸引人的内容至关重要，无论是理解惯用语、识别文化参考，还是使内容与文化事件和趋势保持一致，候选人的文化背景都将在他们的编辑职中发挥至关重要的作用。此外，选人必须善于驾驭中文交流中特有的语气和风格的复杂性，确保所有内容都符合我们的品牌声音，同时具有文化敏感性和吸引力。这种全面的文化意识，加上卓越的编辑技巧，将成为候选人为我们团队做出贡献的基石。
          </div>
          <n-flex class="positions-details_type" align="center" justify="space-evenly" :wrap="false">
            <div class="details_type-item">
              <RenderIcon :icon="IconFaxiangmu" fill="#808080" size="30" />
              <n-flex vertical>
                <div class="type-item-title">
                  一次性项目
                </div>
                <div class="type-item-desc">
                  项目类型
                </div>
              </n-flex>
            </div>
            <n-divider vertical style="height: 30px" />
            <div class="details_type-item">
              <RenderIcon :icon="IconYusuanzonge" fill="#808080" size="30" />
              <n-flex vertical>
                <div class="type-item-title">
                  ￥1500.00
                </div>
                <div class="type-item-desc">
                  总预算
                </div>
              </n-flex>
            </div>
            <n-divider vertical style="height: 30px" />
            <div class="details_type-item">
              <RenderIcon :icon="IconJiangpai" fill="#808080" size="30" />
              <n-flex vertical>
                <div class="type-item-title">
                  入门级
                </div>
                <div class="type-item-desc">
                  我正在寻找无经验/经验不太足的自由职业者
                </div>
              </n-flex>
            </div>
          </n-flex>
        </div>
      </n-flex>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped lang="scss">
.application {
  height: $container-height;
  background-color: $BackColor;
  overflow: auto;

  .application-container {
    width: 1326px;
    margin: 0 auto;
	max-width: 100%;
	
    .application-header-title {
      margin: 50px 0 30px 0;
      font-weight: 500;
      font-size: 34px;
      color: #333333;
    }
	
	.hide_input{
		position: relative;
		::v-deep(.n-date-picker){
			position: absolute;
			top: 0;
			left: 0;
			opacity: 0;
			width: 25px;
			height: 25px;
			overflow: hidden;
		}
		::v-deep(.n-input .n-input-wrapper){
			cursor: pointer;
		}
	}

    .application-list {
      margin-bottom: 98px;

      .application-list-item {
        height: 514px;
        border-radius: 16px 16px 16px 16px;
        border: 1px solid $MainColor;
        padding: 20px 40px;
        box-sizing: border-box;
		background-color: #ffffff;

        .application-item-tag {
          width: 76px;
          height: 27px;
          background: $MainColor;
          border-radius: 2px 2px 2px 2px;
          color: #FFFFFF;
        }

        .application-item-desc {
          font-weight: 400;
          font-size: 16px;
          color: #808080;
          margin-top: 30px;

          &.active {
            color: $MainColor
          }
        }

        .application-item-title {
          font-weight: 500;
          font-size: 20px;
          color: #333333;
          margin-top: 15px;
          margin-bottom: 30px;
        }

        .start-icons-button {
          width: 40px;
          height: 40px;
          border-radius: 12px 12px 12px 12px;
          //justify-content: space-evenly;
          border: 2px solid #e5e5e5;

          &.active {
            border: 2px solid #58968B;

          }
        }

        .application-desc-text {
          font-weight: 400;
          font-size: 12px;
          color: #333333;
          line-height: 24px;
          margin-top: 20px;

        }

        .positions-details_type {
          width: 800px;
          height: 77px;
          background: #FCFCFC;
          border-radius: 8px;
          border: 1px solid #EDEDED;
          margin-top: 20px;

          .details_type-item {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .type-item-title {
            font-weight: 600;
            font-size: 14px;
            color: #333333;
          }
		  
		  .type-item-desc{
			  color: #808080;
		  }
        }
      }
    }
  }
}
@media (max-width: 1400px) {
	.application {
		.application-container {
			padding:0 20px;
		}
	}
}
</style>