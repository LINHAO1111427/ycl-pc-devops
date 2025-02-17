<script setup lang="ts">
import { Text } from '@/components'
import { NFlex } from 'naive-ui'
import { ref } from 'vue'
const language = ref([
  {
    label: '基本原理',
	content:'我只能通过书面交流用这种语言交流',
    value: '基本原理',
  },
  {
    label: '对话',
	content:'我非常了解这种语言，可以与客户口头讨论项目细节',
    value: '对话',
  },
  {
    label: '流利的',
	content:'我完全掌握了这种语言，语法很完美',
    value: '流利的',
  },
  {
    label: '母语或双语',
	content:'我完全掌握了这种语言，包括词汇成语和口语的广度',
    value: '母语或双语',
  },
])

const emit = defineEmits(['update:show','update:languageList'])

const currentForm = ref([
  {
    name: '',
    skilled: null,
  },
])

function onClickAdd() {
  currentForm.value.push({
    name: '',
    skilled: null,
  })
}

function onClicDelete(index) {
  currentForm.value.splice(index,1)
}

function onClickConfirm(){
	emit('update:show', false)
	emit('update:languageList', currentForm.value)
}

// const renderLabel = (option: any) =>
// 	  h(
// 		'div',null,
// 		{
// 		  default: () => [
// 			  h(NFlex,{
// 				  vertical:true,
// 				  size:0,
// 				  padding:20
// 			  },{
// 				  default:()=>[
// 					  h('div',null,{
// 						default: () => option.label
// 					  }),
// 					  h('div',null,{
// 						default: () => option.content 
// 					  })
// 				  ]
// 			  })
// 		  ]
// 		}
// 	  )
</script>

<template>
  <n-modal>
    <n-card
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
      style="width: 850px"
    >
      <n-flex class="contact-work-date" vertical :size="40">
        <Text :size="30">编辑语言</Text>
        <div>
          <n-form ref="formRef" :show-label="false" class="naiveui-form-16">
            <n-grid :cols="24" :x-gap="24">
              <template v-for="(item, index) in currentForm">
                <n-form-item-gi
                  label="语言"
                  :span="10"
                  path="age"
                  :show-label="index === 0"
                >
                  <n-input v-model:value="item.name" placeholder="请输入" />
                </n-form-item-gi>
                <n-form-item-gi
                  label="熟练程度"
                  :span="10"
                  path="answer"
                  :show-label="index === 0"
                >
                  <n-select
                    v-model:value="item.skilled"
                    placeholder="请选择"
                    :options="language"
                  />
                </n-form-item-gi>

                <n-form-item-gi
                  :span="4"
                  path="answer"
                  :show-label="index === 0"
                  v-if="index !== 0"
                >
                  <n-button
                    block
                    type="error"
                    ghost
                    @click="onClicDelete(index)"
                  >
                    删除
                  </n-button>
                </n-form-item-gi>
              </template>
            </n-grid>
          </n-form>
          <n-button type="primary" style="width: 100px" @click="onClickAdd">
            添加
          </n-button>
        </div>

        <n-flex justify="flex-end" :size="50">
          <n-button text type="primary" @click="emit('update:show', false)" class="naiveui-button-16">
            取消
          </n-button>
          <n-button type="primary" @click="onClickConfirm" class="naiveui-button-16">
            确定
          </n-button>
        </n-flex>
      </n-flex>
    </n-card>
  </n-modal>
</template>
