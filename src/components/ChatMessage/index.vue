<script setup lang="ts">
import { RenderIcon, Text } from '@/components'
import { AddCircle, ArrowForwardSharp } from '@vicons/ionicons5'


</script>

<template>
  <n-modal class="chat-message-modal">
    <n-card
      style="width: 70%;"
      size="huge"
      :bordered="false"
      content-style="background-color: #EAE9EC"
    >
      <n-flex class="char-message" :wrap="false">
        <n-flex class="char-message-slider" vertical :size="30">
          <n-flex :wrap="false" align="center" v-for="item in 3">
            <n-avatar round style="flex-shrink: 0" size="large" />
            <n-flex vertical style="width: 100%" :size="5">
              <n-flex justify="space-between" align="center">
                <Text :size="16">
                  乔安娜
                </Text>
                <Text class="secondary-color-text-1">
                  10:32
                </Text>
              </n-flex>
              <Text class="secondary-color-text-1">
                您好
              </Text>
            </n-flex>
          </n-flex>
        </n-flex>
        <n-flex class="char-message-container" vertical>
          <div class="char-message-container-header">
            <Text :size="20">乔安娜</Text>
          </div>
          <div class="char-message-container-char">
            <div class="char-message-container-char-item">
              <n-flex class="char-item-container" :wrap="false" align="center">
                <n-flex align="center" justify="center" class="char-item-container-slider left" vertical>
                  <n-avatar round></n-avatar>
                  <Text class="secondary-color-text-1">12:22</Text>
                </n-flex>
                <Text class="text-content">
                  追随者内容规模掩码重复重新组织设备追随者创建。粗体ipsum箭头滚动减去多边形。
                </Text>
              </n-flex>
            </div>
            <div class="char-message-container-char-item right">
              <n-flex class="char-item-container right" :wrap="false" align="center" reverse>
                <n-flex align="center" justify="center" class="char-item-container-slider right" vertical>
                  <n-avatar round></n-avatar>
                  <Text class="secondary-color-text-1">12:22</Text>
                </n-flex>
                <Text class="text-content">
                  不透明度星形滚动草稿像素分布。水平选择缩略图下划线figjam滚动布尔社区。变体字体删除线项目符号。
                </Text>
              </n-flex>
            </div>
          </div>
          <n-flex vertical class="char-message-container-footer">
            <div class="char-message-input">
              <n-icon :size="22" color="#605F62">
                <AddCircle></AddCircle>
              </n-icon>
              <div class="char-border"></div>
              <n-input placeholder="请输入消息..." />
              <div class="char-border"></div>
              <n-icon :size="22" color="#605F62">
                <ArrowForwardSharp></ArrowForwardSharp>
              </n-icon>
            </div>
            <n-space class="char-icons" :size="30">
              <RenderIcon class="cursor-pointer-style" icon="icon-biaoqing-xue" :size="20" />
              <RenderIcon class="cursor-pointer-style" icon="icon-tupian" :size="20" />
              <RenderIcon class="cursor-pointer-style" icon="icon-wenjian" :size="20" />
              <RenderIcon class="cursor-pointer-style" icon="icon-dianhua" :size="20" />
            </n-space>
          </n-flex>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>

<style scoped lang="scss">
.chat-message-modal {
  border-radius: 20px;
  overflow: hidden;
  

  .char-message {
    height: calc(100vh - 200px);
  }

  .char-message-slider {
    width: 280px;
    background-color: #fff;
    height: 100%;
    border-radius: 15px;
  }

  ::v-deep(.n-card__content),
  ::v-deep( .n-card__footer) {
    padding: 20px;
  }

  .char-message-slider {
    padding: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  .char-message-container {
    width: 100%;
    background-color: #fff;
    border-radius: 15px;

    .char-message-container-header {
      padding: 20px;
      box-sizing: border-box;
      border-bottom: 1px solid #ecebeb;
    }

    .char-message-container-char {
      height: 100%;
      flex: 1;

      .char-message-container-char-item {
        display: flex;

        &.right {
          justify-content: flex-end;
        }
      }

      .char-item-container {
        width: 50%;
        background: #FFFFFF;
        border-radius: 16px 16px 16px 16px;
        border: 1px solid rgba(163, 139, 233, 0.33);
        padding-right: 10px;
        margin-top: 10px;

        &.right {
          padding-left: 10px;
          padding-right: 0;
        }

        .char-item-container-slider {
          padding: 0 15px;
          background-color: #F3F1FC;
          box-sizing: border-box;
          height: 100%;
		  border-radius: 16px 0 0 16px;
        }
		
		.char-item-container-slider.left {
		  border-radius: 16px 0 0 16px;
		}
		
		.char-item-container-slider.right {
		    border-radius: 0 16px 16px 0;
		}
		
		.text-content{
			padding:15px 0;
		}
      }
    }

    .char-message-container-footer {
      height: 113px;
      padding: 20px;
      box-sizing: border-box;

      .char-message-input {
        height: 44px;
        background: #F6F5F8;
        border-radius: 20px;
        box-shadow: rgba(51, 51, 51, 0.2) 1px 2px 1px;
        display: flex;
        align-items: center;
        padding: 0 20px;
        justify-items: center;
        border: solid 1px #F6F5F8;

        ::v-deep(.n-input__border),
        ::v-deep(.n-input__state-border) {
          display: none !important;
        }

        .char-border {
          border-right: solid 1px #dedede;
          height: 30px;
          margin: 0 10px;
        }
      }
    }
  }
}

</style>