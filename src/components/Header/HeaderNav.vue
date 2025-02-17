<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from '@vicons/ionicons5'
import HeaderModal from './HeaderModal.vue'
import ShowMore from './ShowMore.vue'

const isShowMore = ref(false)

const options = [
  {
    label: '写作与翻译',
    value: '写作与翻译',
  },
  {
    label: '财务与会计',
    value: '财务与会计',
  },
  {
    label: '工程与建筑',
    value: '工程与建筑',
  },
  {
    label: '查看所有专业领域',
    value: '查看所有专业领域',
  },
]

let id: null | number = null

function onMouseout() {
  id = setTimeout(() => {
    isShowMore.value = false
  }, 300)
}

function onMouseenter(value: string) {
  clearTimeout(id!)
  isShowMore.value = true
}
</script>

<template>
  <div class="header_nav">
    <div class="container">
      <ul>
        <li>
          开发与IT
        </li>
        <li>
          AI服务
        </li>
        <li>
          设计&创意
        </li>
        <li>
          销售&市场营销
        </li>
        <li>
          管理&客户支持
        </li>
        <li class="more" :class="isShowMore ? 'on' : ''"  @mouseleave="onMouseout" @mouseenter="onMouseenter">
          <span class="el-dropdown-link">
            更多
            <img src="../../assets/img/xiala.png" alt="" />
          </span>
        </li>
      </ul>
    </div>
  </div>
  <HeaderModal :visual="isShowMore" @open="onMouseenter" @close="onMouseout">
    <ShowMore></ShowMore>
  </HeaderModal>
</template>

<style scoped lang="scss">
.header_bg {
  height: 36px;
}

.header_nav ul {
  display: flex;
  justify-content: space-between;
  height: 36px;
  align-items: center;
  padding: 0 100px;
}

.header_nav ul a {
  font-weight: initial;
  transition: all 0.3s;
}

.header_nav ul a:hover {
  color: #58968b;
  text-decoration: underline;
}
.header_nav ul .more{
	&.on {
      img {
        transform: rotate(180deg);
      }

      .el-dropdown-link {
        color: #58968b;
      }
    }

    img {
      transition: all 0.3s;
      margin-left: 5px;
    }
}
.header_nav ul .more a {
  display: flex;
  align-items: center;
}

.header_nav ul .more a img {
  width: 8px;
  height: 8px;
}

.header_nav .more .el-dropdown-link {
  display: flex;
  align-items: center;
  color: #333333;
  font-weight: initial;
  cursor: pointer;
}
</style>
