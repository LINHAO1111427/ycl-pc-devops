<script setup lang="ts">
import HeaderTop from '@/components/Header/HeaderTop.vue'
import { Header, Footer, Button, RenderIcon, IconXiazai, IconSangedian } from '@/components'
import { ref } from 'vue'

const options = [
  {
    label: '开始时间',
    value: '开始时间',
  },
  {
    label: '结束时间',
    value: '结束时间',
  },
]

const sortOptions = [
  {
    label: '倒序',
    value: '倒序',
  },
  {
    label: '升序',
    value: '升序',
  },
]

const currentData = ref('开始时间')

const sortValue = ref('倒序')
</script>

<template>
  <div class="historical-work">
    <HeaderTop :is-login="false" :is-work="false" />
    <div class="container">
      <div class="work-container-header">
        <div class="title">
          历史工作
        </div>
        <div class="desc">共2个评分</div>
      </div>
      <n-flex align="center">
        <n-input round placeholder="请输入.." size="large" style="width: 516px">
          <template #prefix>
            <div class="icon">
              <img src="../../assets/img/search.png" alt="" />
            </div>
          </template>
        </n-input>
        <n-flex style="margin-left: auto" align="center">
          <span class="work-title-open">排序方式</span>
          <n-select
            v-model:value="currentData"
            :options="options"
            placeholder="请选择"
            style="width: 180px"
            size="large"
          />
          <n-select
            v-model:value="sortValue"
            :options="sortOptions"
            placeholder="请选择"
            style="width: 180px"
            size="large"
          />
          <Button style="width: 200px">
			  <RenderIcon size="20" fill="#ffffff" :icon="IconXiazai" style="margin-right: 10px;" />
			  导出历史工作报告
		  </Button>
        </n-flex>
      </n-flex>

      <div class="work-List">
        <n-flex class="work-list-item" v-for="(_item,index) in 2">
          <n-tag
            :color="{ color: '#808080', textColor: '#fff' }"
            style="padding: 5px 20px"
            :bordered="false"
          >
            结束
          </n-tag>
          <n-flex class="work-list-item-container" vertical>
            <n-flex class="work-item-header">
              <div class="work-item-header-title">
                将普通话翻译成英语
              </div>
              <Button
                :style="`width: 220px;`"
                type="primary"
                ghost
                font-color="#58968B"
               @click="$router.push('/submit-proposals')">
                提出新的合作
              </Button>
			  <n-flex align="center">
				  <RenderIcon size="20" fill="#333333" :icon="IconSangedian" />
			  </n-flex>
            </n-flex>
            <div class="work-item-user">
              委托人：南桐仁
            </div>
            <n-flex justify="flex-end" align="center">
              <n-rate :value="5" readonly size="large" color="#F18B41" />
              <span class="start-text">5</span>
            </n-flex>
            <n-flex class="footer-button" align="center" justify="space-between">
              <n-flex align="center">
                <div class="footer-text">
                  2021-04-10
                </div>
                <div class="footer-border"></div>
                <div class="footer-text">
                  2021-04-10
                </div>
              </n-flex>
              <div class="footer-budget">
                ￥60.00 预算
              </div>
            </n-flex>
          </n-flex>
        </n-flex>
      </div>
    </div>
    <Footer>
    </Footer>
  </div>
</template>

<style lang="scss" scoped>
.historical-work {
  height: 100%;
  overflow: auto;

  .container {
    width: 1326px;
  }

  .work-container-header {
    margin: 40px 0 38px 0;
    display: flex;
    align-items: center;
    gap: 10px;

    .title {
      width: 136px;
      height: 48px;
      font-weight: 800;
      font-size: 34px;
      color: #333333;
      line-height: 40px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    .desc {
      width: 56px;
      height: 17px;
      font-weight: 500;
      font-size: 12px;
      color: #808080;
      line-height: 14px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      margin-top: 10px;
    }
  }

  .work-title-open {
    width: 56px;
    font-weight: 600;
    font-size: 14px;
    color: #333333;
    line-height: 16px;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
}

.work-List {
  margin: 20px 0 60px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .work-list-item {
    padding: 20px 40px;
    height: 164px;
    border-radius: 16px;
    border: 1px solid #58968B;

    .work-list-item-container {
      flex: 1;
    }

    .work-item-user {
      font-weight: 400;
      font-size: 16px;
      color: #808080;
      line-height: 19px;
    }

    .work-item-header-title {
      font-weight: 400;
      font-size: 20px;
      color: #333333;
      line-height: 23px;
      margin-right: auto;
      margin-top: 3px;
    }
  }

  ::v-deep(.n-rate__item) {
    font-size: 40px;
    $start-size: 25px;

    .n-base-icon {
      width: $start-size;
      height: $start-size;
      line-height: $start-size;

      svg {
        width: $start-size;
        height: $start-size;
      }
    }
  }

  .start-text {
    font-weight: 400;
    font-size: 20px;
    color: #333333;
  }

  .footer-border {
    width: 10px;
    height: 2px;
    background-color: #333333;
  }

  .footer-text {
    font-weight: 500;
    font-size: 16px;
    color: #333333;
    line-height: 19px;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }

  .footer-budget {
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #333333;
  }
}
@media (max-width: 1400px) {
	.historical-work {
	  .container {
	    padding: 0 20px;
	  }
	}
}

</style>
