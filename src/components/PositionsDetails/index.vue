<script setup lang="ts">
import { IconStart, RenderIcon, IconFaxiangmu, IconYusuanzonge, IconJiangpai, IconWeiyanzheng, IconYiyanzheng } from '@/components'
import { useMessage } from 'naive-ui'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const tagOptions = ['Microsoft PowerPoint', '译本', '普通话', '方言', '英译中文']

const message = useMessage()

const isShow = ref(false)

const isCollection = ref(false)

const router = useRouter()

const linkUrl = ref('https://yuanchuangli.tjwangzhan.com/talents-detail')

function onClickApply(){
	router.push('/submit-proposals')
}
function onClickUrl(){
	const routerPath = router.resolve(`/talents-detail`).href
	window.open(routerPath, '_blank')
}
const charMessageShow = ref(false)
</script>

<template>
  <n-flex class="positions-details" vertical :size="40">
    <n-flex class="positions-details_header" justify="space-between">
      <n-flex vertical>
        <div class="positions-details_header-title">
          演示自由职业者工作:超过 20 张幻灯片的中英译本
        </div>
        <n-flex :size="40">
          <div class="secondary-color-text-1">
            2024-07-10
          </div>
          <div class="secondary-color-text-1">全国</div>
        </n-flex>
      </n-flex>
      <n-flex>
        <n-flex
          :class="{'start-icons-button':true,active:isCollection}"
          align="center"
          justify="center"
          @click="isCollection  = !isCollection"
        >
          <RenderIcon :icon="IconStart" :fill="isCollection ? '#58968B' : '#e5e5e5'" size="20" />
        </n-flex>
        <n-button type="primary" size="large" style="width: 184px" @click="onClickApply">
          立即申请
        </n-button>
      </n-flex>
    </n-flex>
    <div class="secondary-color-text-1">
      我们正在寻找一位技术娴熟，一丝不苟的基于Web和Word的中文演示文榜编辑加入我们充满活力的日队。理想的候选人将具备强大的中文能力和出色的辑技能，在创建、和优化网络内容和基于单词的演示文稿方面拥有丰富的经验，这个角色需要的不仅仅是语言能力:候选人必须对中国文化有深入的了解，以确保内容不仅在语言上准确，而且在文化上具有相关性和吸引力。将文化畑微差别无缝整合到内容中的能力至关重要，因为这将与我们的目标受众产生共鸣并保持真实性。<br />
      成功的候选人将展示对中国文化习俗、传统和社会规范的根深蒂团的了解。这种文化洞察力对于制作适合上下文和吸引人的内容至关重要，无论是理解惯用语、识别文化参考，还是使内容与文化事件和趋势保持一致，候选人的文化背景都将在他们的编辑职中发挥至关重要的作用。此外，选人必须善于驾驭中文交流中特有的语气和风格的复杂性，确保所有内容都符合我们的品牌声音，同时具有文化敏感性和吸引力。这种全面的文化意识，加上卓越的编辑技巧，将成为候选人为我们团队做出贡献的基石。
    </div>
    <n-flex class="positions-details_type" align="center" justify="space-evenly" :wrap="false">
      <div class="details_type-item">
        <RenderIcon :icon="IconFaxiangmu" fill="#808080" size="30" />
        <div>
          <div class="type-item-title">
            一次性项目
          </div>
          <div>
            项目类型
          </div>
        </div>
      </div>
      <n-divider vertical style="height: 30px" />
      <div class="details_type-item">
        <RenderIcon :icon="IconYusuanzonge" fill="#808080" size="30" />
        <div>
          <div class="type-item-title">
            ￥1500.00
          </div>
          <div>
            总预算
          </div>
        </div>
      </div>
      <n-divider vertical style="height: 30px" />
      <div class="details_type-item">
        <RenderIcon :icon="IconJiangpai" fill="#808080" size="30" />
        <div>
          <div class="type-item-title">
            入门级
          </div>
          <div>
            我正在寻找无经验/经验不太足的自由职业者
          </div>
        </div>
      </div>
    </n-flex>

    <div class="positions-professional-skills">
      <div class="skills-title">
        技能和专业知识
      </div>
      <n-flex>
        <n-tag :bordered="false" round v-for="item in tagOptions" style="cursor: pointer;">
          {{ item }}
        </n-tag>
      </n-flex>
    </div>
    <div class="about-customer">
      <n-flex class="about-customer-item" justify="space-between" vertical>
        <div>
          <n-flex align="center">
            <div class="about-customer-item-title">
              关于客户
            </div>
            <n-button text type="primary"  @click="charMessageShow = true"><span style="text-decoration: underline">举报不当内容</span></n-button>
          </n-flex>
          <div class="secondary-color-text-1">
            于2024-07-30加入原创力
          </div>
        </div>
        <div>
          <div class="secondary-color-text-1 flex-new">
			  <RenderIcon :size="15" fill="#808080" :icon="IconWeiyanzheng" />
			  <span style="margin-left: 5px;">付款方式未验证</span>
          </div>
          <div class="secondary-color-text-1 flex-new">
			  <RenderIcon :size="15" fill="#808080" :icon="IconYiyanzheng" />
              <span style="margin-left: 5px;">电话号码已验证</span>
          </div>
        </div>
      </n-flex>
      <n-flex class="about-customer-item" justify="center" style="width: 525px;flex-shrink: 0">
        <n-flex justify="space-between" vertical>
          <div>
            <div class="secondary-color-text-1">
              已发布 329个职位
            </div>
            <div class="about-customer-item-text">
              62%的雇佣率，3个职位空缺
            </div>
          </div>
          <div>
            <div class="secondary-color-text-1">
              总共花费48000人民币
            </div>
            <div class="about-customer-item-text">
              总共雇佣260位人才，32位活跃员工
            </div>
          </div>
        </n-flex>
        <div class="rate-item-nums">
          <n-rate value="5" readonly />
          <span> 5</span>
        </div>
      </n-flex>
      <n-flex class="about-customer-item" justify="flex-end">
        <n-flex vertical align="flex-start" :size="13">
          <div class="about-customer-item-title">
            工作链接
          </div>
          <n-button secondary>
			<n-ellipsis style="max-width: 230px">{{linkUrl}}</n-ellipsis>
		  </n-button>
          <n-button text type="primary" @click="$copyText(linkUrl)">复制链接</n-button>
        </n-flex>
      </n-flex>
    </div>

    <div class="positions-professional-skills">
      <div class="skills-title">
        首选资格
      </div>
    </div>

    <div class="positions-professional-skills">
      <div class="skills-title">
        此工作的活动
      </div>
      <n-flex vertical>
        <n-flex justify="space-between" class="skills-item">
          <div>
            简历数量：
          </div>
          <div>
            50+
          </div>
        </n-flex>
        <n-flex justify="space-between" class="skills-item">
          <div>
            当前面试数量：
          </div>
          <div>
            7
          </div>
        </n-flex>
        <n-flex justify="space-between" class="skills-item">
          <div>
            发出邀请数量：
          </div>
          <div>
            10
          </div>
        </n-flex>
        <n-flex justify="space-between" class="skills-item">
          <div>
            未答复的邀请数量：
          </div>
          <div>
            3
          </div>
        </n-flex>
      </n-flex>
    </div>


    <div class="positions-professional-skills">
      <div class="skills-title">
        历史工作发布统计 <span style="text-decoration: underline;cursor: pointer;" @click="$router.push('/custom-effective-work')">进行中的工作</span>
      </div>
      <n-flex class="skills-item-item" justify="space-between" v-for="item in (isShow ? 14 : 5)">
        <div>
          <n-button text type="primary">
          <span style="text-decoration: underline" @click="onClickUrl">
            我们的远程工作需要以中文为母语的人和作家
          </span>
          </n-button>
          <div class="rate-item-nums">
            <n-rate value="5" readonly />
            <span> 5</span>
          </div>
          <n-flex align="center">
            <span>发布者:</span>
            <n-button text type="primary">
            <span style="text-decoration: underline">
              南司富
            </span>
            </n-button>
            <div class="rate-item-nums1">
              <n-rate value="5" readonly />
              <span>5</span>
            </div>
          </n-flex>
        </div>
        <n-flex vertical>
          <span>2024-07 - 2024-09</span>
          <span>固定价格￥280.00</span>
        </n-flex>
      </n-flex>
      <span style="text-decoration: underline;cursor: pointer;" @click="isShow = !isShow">{{ !isShow ? '查看全部(14)' : '收起' }}</span>
    </div>

    <div class="positions-professional-skills">
      <div class="skills-title">
        类似工作推荐
      </div>
      <n-flex class="skills-item-item" justify="space-between" v-for="item in 20">
        <n-flex>
          <n-button text type="primary"  @click="onClickUrl">
            <span style="text-decoration: underline">
              我们的远程工作需要以中文为母语的人和作家
            </span>

          </n-button>
          <span>
            固定价格
          </span>
        </n-flex>
      </n-flex>
    </div>
  </n-flex>
  <ChatMessage v-model:show="charMessageShow" />
</template>

<style scoped lang="scss">
.positions-details {

  .positions-details_header-title {
    font-weight: 500;
    font-size: 20px;
    color: #333333;
    line-height: 23px;
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


  .positions-details_type {
    width: 800px;
    height: 77px;
    background: #FCFCFC;
    border-radius: 8px 8px 8px 8px;
    border: 1px solid #EDEDED;
  }

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

  .positions-professional-skills {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .skills-title {
      height: 28px;
      font-weight: 500;
      font-size: 20px;
      color: #333333;
      line-height: 23px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }


  .about-customer {
    display: flex;
    width: 1077px;
    height: 109px;

    .about-customer-item {
      height: 109px;
      width: 100%;
      border-right: solid 1px #EDEDED;

      &:last-child {
        border: none;
      }
    }

    .about-customer-item-title {
      font-weight: 500;
      font-size: 20px;
      color: #333333;
    }
  }


  .about-customer-item-text {
    font-weight: 500;
    font-size: 12px;
    color: #333333;
  }

  .rate-item-nums1 {
    height: 20px;
    display: flex;
    align-items: center;
    gap: 5px;

    ::v-deep(.n-base-icon svg), ::v-deep(.n-base-icon) {
      color: #F18B41;
    }
  }

  .rate-item-nums {
    height: 40px;
    display: flex;
    align-items: center;
    gap: 5px;

    ::v-deep(.n-base-icon svg), ::v-deep(.n-base-icon) {
      width: 18px;
      height: 18px;
      color: #F18B41;
    }

    span {
      width: 11px;
      height: 25px;
      font-weight: 600;
      font-size: 18px;
      color: #333333;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }

  .skills-item {
    width: 224px;
    line-height: 30px;
    border-bottom: solid 1px #EDEDED;
  }
  
  .flex-new{
	  display: flex;
	  align-items: center;
  }
}
</style>