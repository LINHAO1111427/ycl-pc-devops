<script setup lang="ts">
import HeaderTop from '@/components/Header/HeaderTop.vue'
import { Footer } from '@/components'
import WorkDetails from '@/views/SubmitProposals/component/WorkDetails.vue'

const current = ref('工作细节')

const options = [
  {
    title: '工作细节',
    id: 'header',
  },
  {
    title: '技能和专业知识',
    id: 'professional',
  },
  {
    title: '条款',
    id: 'terms',
  },
  {
    title: '求职信',
    id: 'cover-letter',
  },
  {
    title: '简介亮点',
    id: 'two-points',
  },
]

</script>

<template>
  <div class="submit-proposals">
    <HeaderTop :is-login="false" :is-work="false" />
    <div class="container">
      <div class="slider">
        <a
          :class="['slider-item',item.title === current ? 'active' :'']" v-for="item in options"
          @click="current = item.title" :href="'#' + item.id">
          {{ item.title }}
        </a>
      </div>
      <div class="container-body">
        <WorkDetails></WorkDetails>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.submit-proposals {
  background-color: #f4fbfa;
  height: 100%;
  overflow: auto;


  .container {
    width: 1316px;
    padding-top: 40px;
    display: flex;
    justify-content: space-around;


    .slider {
      display: flex;
      flex-direction: column;
      width: 179px;
      height: 330px;
      background: #FFFFFF;
      border-radius: 16px 16px 16px 16px;
      padding: 10px;
      box-sizing: border-box;
      gap: 10px;

      .slider-item {
        padding: 16px 10px;
        font-size: 16px;
        cursor: pointer;


        &:hover, &.active {
          width: 159px;
          background: #58968B;
          border-radius: 8px 8px 8px 8px;
          color: #FFFFFF;
        }
      }
    }
  }

  .container-body {
    flex: 1;
	margin-left: 30px;
  }
}
@media (max-width: 1400px) {
	.submit-proposals {
	  .container {
		  padding-left: 20px;
		  padding-right: 20px;
	  }
	}
}
</style>