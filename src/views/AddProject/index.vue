<script setup lang="ts">
import {RenderIcon, Text, IconMessage} from '@/components'
import HeaderTop from '@/components/Header/HeaderTop.vue'
import Layout from '@/components/Layout/Layout.vue'
import EditTextLink from './component/EditTextLink.vue'
import {ArchiveOutline as ArchiveIcon, ReturnDownBackSharp} from '@vicons/ionicons5'

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
        <Text :size="20">
          项目名称
        </Text>
        <n-input placeholder="输入一个简短但具有描述性的标题"/>
      </n-flex>
      <!--      <n-flex style="margin-top: 20px" :wrap="false">-->
      <!--        <n-flex vertical class="add-project-slider" :size="36">-->
      <n-flex class="add-project-slider-role">
        <Text :size="20">
          您的角色
        </Text>
        <n-input placeholder="例如，前端工程师或营销分析师"/>
      </n-flex>
      <n-flex class="add-project-slider-introduce" vertical>
        <Text :size="20">
          项目介绍
        </Text>
        <n-input type="textarea" placeholder="例如，前端工程师或营销分析师" style="height: 100%"/>
      </n-flex>
      <n-flex class="add-project-slider-role">
        <Text :size="20">
          技能和交付成果
        </Text>
        <n-input placeholder="添加与此项目相关的技能"/>
      </n-flex>
      <n-flex class="add-project-slider-role">
        <Text :size="20">
          添加附件
        </Text>
        <n-upload
            multiple
            directory-dnd
            action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
            :max="5"
        >
          <n-upload-dragger style="height: 248px;width: 248px;">
            <div style="margin-bottom: 12px">
              <n-icon size="48" :depth="3">
                <ArchiveIcon/>
              </n-icon>
            </div>
            <div>上传附件</div>
          </n-upload-dragger>
        </n-upload>
      </n-flex>
      <!--        </n-flex>-->
      <!--        <n-flex vertical class="add-project-right">-->
      <!--          <n-flex class="add-project-container-add" align="center" vertical justify="center" :size="20">-->
      <!--            <n-space justify="center" style="width: 100%" :size="20">-->
      <!--              <n-upload :show-file-list="false" :trigger-style="{cursor: 'pointer'}">-->
      <!--                <RenderIcon icon="icon-tupian" :size="25" fill="#808080"/>-->
      <!--              </n-upload>-->
      <!--              <RenderIcon class="cursor-pointer-style" icon="icon-text_tool" :size="25" fill="#808080"-->
      <!--                          @click="showEditTextLink = true"/>-->
      <!--              <RenderIcon class="cursor-pointer-style" icon="icon-lianjie" :size="25" fill="#808080"-->
      <!--                          @click="showEditTextLink = true"/>-->
      <!--              <n-upload :show-file-list="false" :trigger-style="{cursor: 'pointer'}">-->
      <!--                <RenderIcon icon="icon-wenjian" :size="25" fill="#808080"/>-->
      <!--              </n-upload>-->
      <!--              <n-upload :show-file-list="false" :trigger-style="{cursor: 'pointer'}">-->
      <!--                <RenderIcon icon="icon-yinle" :size="25" fill="#808080"/>-->
      <!--              </n-upload>-->
      <!--            </n-space>-->
      <!--            <div class="secondary-color-text-1" style="text-align: center;width: 100%">添加内容</div>-->
      <!--          </n-flex>-->
      <n-flex class="add-project-duration" vertical :size="15">
        <n-space align="center">
          <Text :size="20">
            咨询时长
          </Text>
          <RenderIcon :icon="IconMessage" :size="18" fill="#58968B"></RenderIcon>
        </n-space>
        <n-space :wrap="false" align="center" justify="start">
          <div class="project-duration-label">30分钟</div>
          <n-input-number placeholder="" :show-button="false" style="width: 100px;;margin-left: 30px;">
            <template #suffix>￥</template>
          </n-input-number>
        </n-space>
        <n-space :wrap="false" align="center" justify="start">
          <div class="project-duration-label">60分钟</div>
          <n-input-number placeholder="" :show-button="false" style="width: 100px;margin-left: 30px;">
            <template #suffix>￥</template>
          </n-input-number>
        </n-space>
        <n-space :wrap="false" align="center" justify="start">
          <div class="project-duration-label">
            <n-input-number placeholder="" :show-button="false" style="width: 100px;">
              <template #suffix>分钟</template>
            </n-input-number>
          </div>
          <n-input-number placeholder="" :show-button="false" style="width: 100px;margin-left: 30px;">
            <template #suffix>￥</template>
          </n-input-number>
        </n-space>
      </n-flex>
      <!--        </n-flex>-->
      <!--      </n-flex>-->
      <n-flex justify="flex-end" style="background-color: #F6F8FA;margin-top: 60px;padding: 12px 20px;">
        <n-button style="width: 82px;background-color: white;color: #3BC8B4;" type="primary">取消</n-button>
        <n-button style="width: 120px;background-color:#3BC8B4;color: white; ;" type="primary">确定</n-button>
      </n-flex>
    </div>
  </Layout>
  <EditTextLink v-model:show="showEditTextLink"/>
</template>

<style scoped lang="scss">

.n-upload-dragger {
  display: flex;
  height: 100%;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.add-project {
  padding: 50px 0 114px 0;

  .cart-project-item {
    background: #FFFFFF;
    border-radius: 16px 16px 16px 16px;
    border: 1px solid #EDEDED;
    padding: 40px;
  }

  .add-project-header {
    margin-top: 20px;
    @extend .cart-project-item;
    box-sizing: border-box;
  }

  .add-project-slider {
    margin-top: 20px;
    flex-shrink: 0;
  }

  .add-project-slider-role {
    margin-top: 20px;
    width: 100%;
    @extend .cart-project-item;
  }

  .add-project-slider-introduce {
    margin-top: 20px;
    @extend .cart-project-item;
    width: 100%;
  }
  .add-project-duration {
    margin-top: 20px;
    @extend .cart-project-item;
    padding: 20px;
    width: 100%;
  }
  .add-project-right {
    margin-top: 20px;
    width: 100%;

    .add-project-container-add {
      @extend .cart-project-item;
    }

  }

  .project-duration-label {
    width: 80px;
    text-align: right;
  }
}
</style>
