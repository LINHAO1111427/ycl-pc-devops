<script setup lang="ts">
import { RenderIcon, Text, IconMessage } from '@/components'
import HeaderTop from '@/components/Header/HeaderTop.vue'
import Layout from '@/components/Layout/Layout.vue'
import EditTextLink from './component/EditTextLink.vue'
const showEditTextLink = ref(false)
</script>

<template>
  <HeaderTop :is-work="false"></HeaderTop>
  <Layout>
    <div class="add-project">
      <Text :size="36">
        添加新的咨询项目介绍
      </Text>
      <n-flex class="add-project-header" vertical :gap="10">
        <Text :size="24">
          项目名称
        </Text>
        <n-input placeholder="输入一个简短但具有描述性的标题" />
      </n-flex>
      <n-flex style="margin-top: 20px" :wrap="false">
        <n-flex vertical class="add-project-slider" :size="20">
          <n-flex class="add-project-slider-role">
            <Text :size="24">
              您的角色
            </Text>
            <n-input placeholder="例如，前端工程师或营销分析师" />
          </n-flex>
          <n-flex class="add-project-slider-introduce" vertical>
            <Text :size="24">
              项目介绍
            </Text>
            <n-input type="textarea" placeholder="例如，前端工程师或营销分析师" style="height: 100%" />
          </n-flex>
          <n-flex class="add-project-slider-role">
            <Text :size="24">
              技能和交付成果
            </Text>
            <n-input placeholder="添加与此项目相关的技能" />
          </n-flex>
        </n-flex>
        <n-flex vertical class="add-project-right">
          <n-flex class="add-project-container-add" align="center" vertical justify="center" :size="20">
            <n-space justify="center" style="width: 100%" :size="20">
              <n-upload :show-file-list="false" :trigger-style="{cursor: 'pointer'}">
				  <RenderIcon icon="icon-tupian" :size="25" fill="#808080" />
			  </n-upload>
              <RenderIcon class="cursor-pointer-style" icon="icon-text_tool" :size="25" fill="#808080" @click="showEditTextLink = true" />
              <RenderIcon class="cursor-pointer-style" icon="icon-lianjie" :size="25" fill="#808080"  @click="showEditTextLink = true" />
			  <n-upload :show-file-list="false" :trigger-style="{cursor: 'pointer'}">
				<RenderIcon icon="icon-wenjian" :size="25" fill="#808080" />
			  </n-upload>
			  <n-upload :show-file-list="false" :trigger-style="{cursor: 'pointer'}">
				<RenderIcon icon="icon-yinle" :size="25" fill="#808080" />
			  </n-upload>
            </n-space>
            <div class="secondary-color-text-1" style="text-align: center;width: 100%">添加内容</div>
          </n-flex>

          <n-flex class="add-project-duration" vertical :size="15">
            <n-space align="center">
              <Text :size="20">
                咨询时长
              </Text>
              <RenderIcon :icon="IconMessage" :size="18" fill="#58968B"></RenderIcon>
            </n-space>
            <n-space :wrap="false" align="center" justify="space-between">
              <div class="project-duration-label">30分钟</div>
              <n-input-number placeholder="" :show-button="false" style="width: 100px">
                <template #suffix>￥</template>
              </n-input-number>
            </n-space>
            <n-space :wrap="false" align="center" justify="space-between">
              <div class="project-duration-label">60分钟</div>
              <n-input-number placeholder="" :show-button="false" style="width: 100px">
                <template #suffix>￥</template>
              </n-input-number>
            </n-space>
            <n-space :wrap="false" align="center" justify="space-between">
              <div class="project-duration-label">
                <n-input-number placeholder="" :show-button="false" style="width: 100px">
                  <template #suffix>分钟</template>
                </n-input-number>
              </div>
              <n-input-number placeholder="" :show-button="false" style="width: 100px">
                <template #suffix>￥</template>
              </n-input-number>
            </n-space>

            <n-button type="primary">确定</n-button>
          </n-flex>
        </n-flex>
      </n-flex>
      <n-flex justify="flex-end">
        <n-button style="margin-top: 115px;width:226px" type="primary">确定</n-button>
      </n-flex>
    </div>
  </Layout>
  <EditTextLink v-model:show="showEditTextLink" />
</template>

<style scoped lang="scss">


.add-project {
  padding: 50px 0 114px 0;

  .cart-project-item {
    background: #FFFFFF;
    border-radius: 16px 16px 16px 16px;
    border: 1px solid #EDEDED;
    padding: 40px;
  }

  .add-project-header {
    height: 159px;
    @extend .cart-project-item;
    margin-top: 10px;
    box-sizing: border-box;
  }

  .add-project-slider {
    flex-shrink: 0;
  }

  .add-project-slider-role {
    width: 755px;
    height: 159px;
    @extend .cart-project-item;
  }

  .add-project-slider-introduce {
    @extend .cart-project-item;
    width: 755px;
    height: 267px;
  }

  .add-project-right {
    width: 100%;

    .add-project-container-add {
      height: 244px;
      @extend .cart-project-item;
    }

    .add-project-duration {
      height: 258px;
      @extend .cart-project-item;
      padding: 20px;
      width: 292px;
    }
  }

  .project-duration-label {
    width: 80px;
    text-align: right;
  }
}
</style>