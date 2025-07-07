<template>
  <n-modal v-model:show="modalVisible" class="custom-modal">
    <n-card style="width: 700px; padding: 20px" closable @close="closeModal">
      <n-flex vertical class="vipTitle" align="center" justify="space-evenly">
        <div class="t1">单刻达会员</div>
        <div class="t2">提高您的知名度、薪酬等等！</div>
        <div class="vbtn" style="margin-top: 10px;" @click="payment">立即开通</div>
      </n-flex>
      <n-flex class="plans" justify="center">
        <n-flex vertical class="plan" v-for="(item, index) in 3" :key="index" align="center">
          <h3>首月体验价格</h3>
          <p class="price">¥{{ index === 0 ? '1.00' : index === 1 ? '189' : '289' }} </p>
          <p class="price"><span>原价 ¥{{ index === 0 ? '100' : index === 1 ? '200' : '300' }}</span></p>
          <ul>
            <li>职位匹配</li>
            <li>专业指导的简历筛查</li>
            <li>工作推荐</li>
            <li>服务咨询</li>
            <li>专属客服</li>
            <li>专属超值积分</li>
          </ul>
          <div class="vbtn" @click="payment">立即开通</div>
        </n-flex>
      </n-flex>
      <n-flex vertical class="footerDiv" align="center">
        <div class="footerT1">充满幸福和优势的一年</div>
        <n-flex>
          <n-flex vertical class="footerDivItem" justify="center" align="center">
            <div>查看价格区间</div>
            <div>
              <span>看到竞争对手的价格区间</span><br/>
              <span>让自己的出价更具竞争力</span>
            </div>
          </n-flex>
          <n-flex vertical class="footerDivItem" justify="center" align="center">
            <div>行业详细分析报告</div>
            <div>
              <span>每个月会收到平台的行业</span><br/>
              <span>详细分析报告</span>
            </div>
          </n-flex>
          <n-flex vertical class="footerDivItem" justify="center" align="center">
            <div>服务费折扣</div>
            <div>20%折扣到15%</div>
          </n-flex>
          <n-flex vertical class="footerDivItem" justify="center" align="center">
            <div>专属客服</div>
            <div>专属客服回复更快</div>
          </n-flex>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({
  modelValue: Boolean,
});
const emit = defineEmits(['update:modelValue','success']);

// 计算属性绑定 v-model:show
const modalVisible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const closeModal = () => {
  emit('update:modelValue', false);
};
const payment=()=>{
  emit('success')
  emit('update:modelValue', false);
}
</script>


<style scoped>
:deep(.n-card__content) {
  width: 100% !important;
}
:deep(.n-base-close::before) {
  border: 1px solid;
  content: "";
  position: absolute;
  width: var(--n-close-size);
  height: var(--n-close-size);
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  transition: inherit;
  border-radius: 50%;
}
:deep(.n-card-header) {
  right: 200px;
  top: 20px;
  position: fixed;
}
.custom-modal {
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw !important;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6); /* 半透明遮罩 */
  .vbtn {
    width: 130px;
    height: 40px;
    background: #157DFE;
    border-radius: 12px;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
  }

  :deep(.footerDiv) {
    margin-top: 50px;

    .footerT1 {
      font-size: 30px;
      color: #FFFFFF;
      line-height: 47px;
    }
  }

  :deep(.footerDivItem) {
    padding: 20px;
    margin-top: 30px;
    width: 230px;
    height: 160px;
    background: #222222;
    border-radius: 6px;
    border: 1px solid;
    color: #FFFFFF;
    border-image: linear-gradient(90deg, rgba(250, 217, 186, 1), rgba(230, 173, 179, 1), rgba(168, 173, 232, 1)) 1 1;

    div:nth-child(1) {
      font-weight: 400;
      font-size: 20px;
      color: #FFFFFF;
      background: linear-gradient(0deg, #FBDCBB 0%, #E3A8B2 52%, #A6AEEB 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    div:nth-child(2) {
      text-align: center;
      height: 50px;
      color: #FFFFFF; /* 选中第二个 div */
    }

  }

  :deep(.vipTitle) {
  }
  .t1 {
    background: linear-gradient(0deg, #FBDCBB 0%, #E3A8B2 52%, #A6AEEB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
    font-size: 80px;
    color: #FFFFFF;
  }

  .t2 {
    font-size: 20px;
    color: #FFFFFF;
    line-height: 23px;
  }
  .modal-header {
    text-align: center;
  }

  .plans {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-top: 20px;
  }

  .plan {
    padding: 20px;
    background: #FFFFFF;
    border-radius: 30px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .plan.highlighted {
    background: linear-gradient(135deg, #ff9a9e, #fad0c4);
    color: white;
    font-weight: bold;
  }

  .price {
    font-size: 24px;
    font-weight: bold;
    //margin: 10px 0;
  }

  .price span {
    font-size: 14px;
    color: gray;
    text-decoration: line-through;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin: 5px 0;
  }

}
</style>
