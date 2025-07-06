<script setup lang="ts">
import {Text} from '@/components'
import {NFlex} from 'naive-ui'
import {ref} from 'vue'
import {saveUserLanguageLeve, deleteUserLanguageLeve} from '@/api/user'
import {useMessage} from 'naive-ui'
// 创建 message 实例
const message = useMessage()
const language = ref([
  {
    label: '基本原理',
    content: '我只能通过书面交流用这种语言交流',
    value: '基本原理',
  },
  {
    label: '对话',
    content: '我非常了解这种语言，可以与客户口头讨论项目细节',
    value: '对话',
  },
  {
    label: '流利的',
    content: '我完全掌握了这种语言，语法很完美',
    value: '流利的',
  },
  {
    label: '母语或双语',
    content: '我完全掌握了这种语言，包括词汇成语和口语的广度',
    value: '母语或双语',
  },
])

const emit = defineEmits(['update:show', 'update:languageList'])

const props = defineProps({
  languageList: {
    type: Array,
    default: () => [{
      language: '',
      level: null,
    }]
  }
})
const innerList = ref([...props.languageList])

// 记录最初传进来的值（深拷贝一份，不受 innerList 影响）
const originalList = ref([])

// 初始化 innerList 和 originalList
watch(() => props.languageList, (val) => {
  innerList.value = JSON.parse(JSON.stringify(val))
  originalList.value = JSON.parse(JSON.stringify(val))
}, {immediate: true})

function onClickAdd() {
  innerList.value.push({
    userId: localStorage.getItem('userId'),
    language: '',
    level: null,
  })
}

function onClicDelete(index) {
  innerList.value.splice(index, 1)
}

const onClickConfirm = async () => {
  // 1. 删除原始中有的数据（即原始 languageList 中有 id 的）
  const deletePromises = originalList.value
      .filter(item => item.languageId)
      .map(item => deleteUserLanguageLeve({id: item.languageId}))

  await Promise.all(deletePromises)

  // 2. 添加 userId 后保存当前新数据
  const payload = innerList.value.map(item => ({
    ...item,
    userId: localStorage.getItem('userId')
  }))

  const res = await saveUserLanguageLeve(payload)

  if (res.code !== 0) {
    message.error(res.msg)
    return
  }

  // 3. 通知父组件更新语言列表 + 关闭弹窗
  emit('update:languageList', payload)
  emit('update:show', false)
}
// const onClickConfirm = async () => {
//   const payload = innerList.value.map(item => ({
//     ...item,
//     userId: localStorage.getItem('userId')
//   }))
//   const result = innerList.value
//       .filter(item => item.languageId)
//       .map(item => [item.languageId, item.languageId])
//
//   const res = await saveUserLanguageLeve(payload)
//   if (res.code !== 0) {
//     message.error(res.msg)
//     return
//   }
//   emit('update:show', false)
//   emit('update:languageList', innerList.value)
// }

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
              <template v-for="(item, index) in innerList">
                <n-form-item-gi
                    label="语言"
                    :span="10"
                    path="age"
                    :show-label="index === 0"
                >
                  <n-input v-model:value="item.language" placeholder="请输入"/>
                </n-form-item-gi>
                <n-form-item-gi
                    label="熟练程度"
                    :span="10"
                    path="answer"
                    :show-label="index === 0"
                >
                  <n-select
                      v-model:value="item.level"
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
