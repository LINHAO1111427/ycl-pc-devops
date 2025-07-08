<template>
  <div class="easy">
    <div class="talents-container">
      <div class="client-menu">
        <p @click="handleClick('id1',1)" :class="data.menu == 1 ? 'client-menu-success' : ''">工作名称</p>
        <p @click="handleClick('id2',2)" :class="data.menu == 2 ? 'client-menu-success' : ''">工作内容</p>
        <p @click="handleClick('id3',3)" :class="data.menu == 3 ? 'client-menu-success' : ''">技能和专业知识</p>
        <p @click="handleClick('id4',4)" :class="data.menu == 4 ? 'client-menu-success' : ''">经验等级</p>
        <p @click="handleClick('id5',5)" :class="data.menu == 5 ? 'client-menu-success' : ''">招聘区域</p>
        <p @click="handleClick('id6',6)" :class="data.menu == 6 ? 'client-menu-success' : ''">项目雇佣人数</p>
        <p @click="handleClick('id8',8)" :class="data.menu == 8 ? 'client-menu-success' : ''">项目时间设置</p>
        <p @click="handleClick('id7',7)" :class="data.menu == 7 ? 'client-menu-success' : ''">详细配置</p>
      </div>
      <div class="client-form">
        <div class="client-form-view" id="id1">
          <div class="client-form-title">
            工作名称
          </div>
          <n-input style="width:50%" placeholder="请输入工作名称" v-model:value="defaultUserForm.title"/>
        </div>
        <div class="client-form-view" id="id2" ref="targetDiv">
          <div class="client-form-title">
            工作内容
          </div>
          <n-input type="textarea" :autosize="{ minRows: 6, maxRows: 8 }" placeholder="请输入..."
                   v-model:value="defaultUserForm.description"/>
        </div>
        <div class="client-form-view" id="id3">
          <div class="client-form-title">
            技能和专业知识
          </div>
          <div style="overflow-y: scroll;height: 200px;">
            <n-tag size="large" :type="item.checked ? 'success' :''" v-for="item,index in data.tag" class="easy-tag"
                   :color="{textColor:item.checked ? '' :'#808080'}" @click="change_tag(index)" round>
              {{ item.name }}
            </n-tag>
          </div>

        </div>
        <div class="client-form-view" id="id2" ref="targetDiv">
          <div class="client-form-title">
            首选资格
          </div>
          <n-input type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="请输入首选资格要求
例：出色的市场分析能力，能洞察用户需求与竞争环境。优秀的沟通与协作能力，能与技术、设计、运营等多部门高效合作。"
                   v-model:value="defaultUserForm.preferredQualification"/>
        </div>
        <div class="client-form-view" id="id5">
          <div class="client-form-title">
            招聘区域
          </div>
          <n-select v-model:value="defaultUserForm.district" :options="data.options"/>
        </div>
        <div class="client-form-view" id="id4">
          <div class="client-form-title">
            经验等级
          </div>
          <n-flex class="nCard" style="gap: 8px 18px; flex-wrap: wrap;">
            <n-flex
                v-for="level in levels"
                :key="level.key"
                class="cardItem"
                justify="flex-start"
                align="center"
                @click="defaultUserForm.experienceLevel = level.key"
                :style="{
      borderRadius: '8px',
      border: defaultUserForm.experienceLevel === level.key ? '1px solid #3BC8B4' : '1px solid #ccc',
      backgroundColor: defaultUserForm.experienceLevel === level.key ? '#EDFFFC' : '#F6F8FA'
    }"
            >
              <img :src="level.img" style="width: 40px; height: 40px;"/>
              <n-flex style="height: 48px; margin-left: 8px;" vertical>
                <div style="font-size: 16px; font-weight: bold;">{{ level.label }}</div>
                <div style="font-size: 12px; color: #888;">{{ level.description }}</div>
              </n-flex>
            </n-flex>
          </n-flex>
          <!--          <div class="client-form-level">-->
          <!--            <div @click="change_level(1)"-->
          <!--                 :class="data.level == 1 ? 'client-form-level-item-success' : 'client-form-level-item'">-->
          <!--              <div class="client-form-level-item-icon">-->
          <!--                <img src="../../assets/img/uac1.png " alt="">-->
          <!--              </div>-->
          <!--              <div class="client-form-level-item-title">-->
          <!--                入门级-->
          <!--              </div>-->
          <!--              <div class="client-form-level-item-brief">-->
          <!--                我在这个领域相对还是新手-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div @click="change_level(2)"-->
          <!--                 :class="data.level == 2 ? 'client-form-level-item-success' : 'client-form-level-item'">-->
          <!--              <div class="client-form-level-item-icon">-->
          <!--                <img src="../../assets/img/uac2.png" alt="">-->
          <!--              </div>-->
          <!--              <div class="client-form-level-item-title">-->
          <!--                中级-->
          <!--              </div>-->
          <!--              <div class="client-form-level-item-brief">-->
          <!--                我在这个领域有丰富的经验-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div @click="change_level(3)"-->
          <!--                 :class="data.level == 3 ? 'client-form-level-item-success' : 'client-form-level-item'">-->
          <!--              <div class="client-form-level-item-icon">-->
          <!--                <img src="../../assets/img/uac3.png " alt="">-->
          <!--              </div>-->
          <!--              <div class="client-form-level-item-title">-->
          <!--                专家-->
          <!--              </div>-->
          <!--              <div class="client-form-level-item-brief">-->
          <!--                我在这个领域拥有全面而深厚的专业知识-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </div>-->

        </div>
        <div class="client-form-view" id="id6">
          <div class="client-form-title">
            项目雇佣人数
          </div>
          <n-select v-model:value="defaultUserForm.headCount" :options="data.n_options" @update:value="xmChange"/>
        </div>
        
        <div class="client-form-view" id="id8">
          <div class="client-form-title">
            项目时间设置
          </div>
          <n-space>
            <n-date-picker 
              v-model:value="defaultUserForm.startTime" 
              type="datetime" 
              placeholder="选择项目开始时间"
              clearable
              style="width: 300px;"
            />
            <n-date-picker 
              v-model:value="defaultUserForm.endTime" 
              type="datetime" 
              placeholder="选择项目结束时间（必填）"
              clearable
              style="width: 300px;"
            />
          </n-space>
        </div>
        
        <n-flex style="padding: 20px 40px;margin-left: 20px;">
          <div v-for="item,index in defaultUserForm.projectItems">
            <div :class="job == (index+1) ? 'header-job-success' : 'header-job'" @click="job = (index+1)">
              {{ item.freelancerName || `自由职业者${index + 1}` }}
            </div>
          </div>
        </n-flex>
        <div class="client-form-view" id="id7">
          <div class="client-form-title">
            项目详细配置
          </div>
          <div v-for="item,index in defaultUserForm.projectItems">
            <div v-if="job == (index+1)">
              <div class="client-form-title-cn">自由职业者基本信息</div>
              <n-space vertical :size="15">
                <n-input 
                  v-model:value="item.freelancerName" 
                  placeholder="请输入自由职业者姓名或称呼"
                  style="width: 400px;"
                >
                  <template #prefix>
                    姓名：
                  </template>
                </n-input>
                
                <n-input 
                  v-model:value="item.workDescription" 
                  type="textarea"
                  :autosize="{ minRows: 3, maxRows: 5 }"
                  placeholder="请详细描述该自由职业者的具体工作内容和要求"
                  style="width: 600px;"
                />
              </n-space>
              
              <div class="client-form-title-cn" style="margin-top: 30px;">选择工作方式</div>
              <div class="client-form-money">
                <div :class="item.deliveryType == 20 ? 'client-form-money-item-success':'client-form-money-item'"
                     @click="change_money(20,item)">
                  <p>里程碑</p>
                  <span>将项目划分为更小的部分，称为里程碑，里程碑完成并获得批准后，您将获得报酬。</span>
                </div>
                <div :class="item.deliveryType == 10 ? 'client-form-money-item-success':'client-form-money-item'"
                     @click="change_money(10,item)">
                  <p>一次性工作</p>
                  <span>当所有工作都交付完毕时，再获得全部付款。</span>
                </div>
              </div>
              <div class="client-form-money-number" v-if="item.deliveryType == 20">
                <div class="client-form-title-cn">里程碑数量</div>
                <div class="add-number">
                  <n-button type="primary" ghost @click="add_list(item)">
                    <n-icon size="20">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                           viewBox="0 0 32 32">
                        <path d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" fill="currentColor"></path>
                      </svg>
                    </n-icon>
                    添加里程碑
                  </n-button>
                </div>
                <el-row :gutter="20">
                  <!--                            <el-col :span="1">-->

                  <!--                            </el-col>-->
                  <el-col :span="11">
                    <div class="col-title">描述</div>
                  </el-col>
                  <el-col :span="6">
                    <div class="col-title">期限</div>
                  </el-col>
                  <el-col :span="6">
                    <div class="col-title">金额</div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" class="easy-col" v-for="item1,index in item.projectMilestones" :key="index">
                  <!--                            <el-col :span="1">-->
                  <!--                                {{ index > 9 ? index + 1 : '0' + (index + 1) }}-->
                  <!--                            </el-col>-->

                  <el-col :span="11">
                    <n-input placeholder="请输入" v-model:value="item1.description"/>
                  </el-col>
                  <el-col :span="6">
                    <n-date-picker type="date" v-model:value="item1.endTime"/>
                  </el-col>
                  <el-col :span="6">
                    <n-flex align="center" style="position: relative;">
                      <n-input 
                        placeholder="请输入" 
                        style="text-align: right;" 
                        v-model:value="item1.budget"
                        @update:value="onMilestoneBudgetChange"
                      >
                        <template #prefix>
                          <span style="color:#808080">￥</span>
                        </template>
                      </n-input>

                      <n-icon
                          style="position: absolute;right: -30px"
                          class="cursor-pointer-style"
                          :size="20"
                          v-if="index > 0"
                          @click="item.list.splice(index,1)"
                      >
                        <CloseCircleOutline></CloseCircleOutline>
                      </n-icon>
                    </n-flex>
                  </el-col>
                </el-row>
              </div>
              <div class="client-form-money" style="margin-top:30px;">
                <template v-if="item.deliveryType == 10">
                  <div class="client-form-title-cn">设置单价</div>
                  <n-input 
                    v-model:value="item.unitPrice" 
                    placeholder="请输入该自由职业者的报酬"
                    style="width: 300px; margin-bottom: 20px;"
                    @update:value="onUnitPriceChange"
                  >
                    <template #prefix>
                      ￥
                    </template>
                  </n-input>
                </template>
                
                <div class="client-form-end">
                  该自由职业者预算
                </div>
                <div class="client-form-end-number">
                  <template v-if="item.deliveryType == 20">
                    ￥{{
                      item.projectMilestones.reduce((sum, item1) => sum + parseInt(item1.budget === '' ? 0 : item1.budget), 0)
                    }}
                  </template>
                  <template v-else>
                    ￥{{ item.unitPrice || 0 }}
                  </template>
                </div>
              </div>
            </div>
          </div>

          <div class="client-form-end-more">
            包括单刻达固定价格保护。
          </div>
        </div>

        <!-- 项目总价汇总 -->
        <div class="client-form-view" style="margin-top: 30px;">
          <div class="client-form-title">
            项目总价汇总
          </div>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
            <div v-for="(item, index) in defaultUserForm.projectItems" :key="index" 
                 style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <span>{{ item.freelancerName || `自由职业者${index + 1}` }}：</span>
              <span>￥{{ item.deliveryType === 10 ? (item.unitPrice || 0) : 
                item.projectMilestones.reduce((sum, milestone) => sum + parseInt(milestone.budget || 0), 0) }}
              </span>
            </div>
            <div style="border-top: 1px solid #ddd; padding-top: 10px; margin-top: 15px; font-weight: bold; font-size: 18px;">
              <div style="display: flex; justify-content: space-between;">
                <span>项目总预算：</span>
                <span style="color: #58968B;">￥{{ defaultUserForm.totalBudget }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="submit">
          <n-button type="primary" size="large" @click="success_add">确认发布工作</n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive, onMounted, onUnmounted, ref, h} from 'vue';
import {createDiscreteApi} from 'naive-ui'
import {useRoute, useRouter} from 'vue-router'
import {CloseCircleOutline} from '@vicons/ionicons5'
import {getUserSkill} from '@/api/user'
import {useMessage} from 'naive-ui'
import {date} from "mockjs/src/mock/random/date.js";
import {createProject} from '@/api/base'
// 创建 message 实例
const message = useMessage()
const images = import.meta.glob('@/assets/img/*.png', {eager: true});
const router = useRouter()
const {dialog} = createDiscreteApi(['dialog'])
const selectedLevelKey = ref(null); // 当前选中的 key
const levels = [
  {
    key: 1,
    label: "入门级",
    description: "我在这个领域还是新手",
    img: images['/src/assets/img/uac1.png'].default
  },
  {
    key: 2,
    label: "中级",
    description: "我在这个领域有丰富的经验",
    img: images['/src/assets/img/uac2.png'].default
  },
  {
    key: 3,
    label: "专家",
    description: "我在这个领域有全面和专业知识",
    img: images['/src/assets/img/uac3.png'].default
  }
];
const defaultUserForm = ref({
  title: "",
  preferredQualification: "",
  description: "",
  experienceLevel: 1,
  district: "",
  headCount: 0,
  totalBudget: 0,
  startTime: null,  // 项目开始时间
  endTime: null,    // 项目结束时间
  projectSkills: [],
  projectItems: [
    {
      sequence: 1,
      freelancerName: "",    // 自由职业者姓名
      deliveryType: 20,
      totalBudget: 0,
      unitPrice: 0,          // 单价
      workDescription: "",   // 工作描述
      projectMilestones: [
        {description: "里程碑1", budget: 0, endTime: null},
        {description: "里程碑2", budget: 0, endTime: null}
      ]
    }
  ]
});

const stored = JSON.parse(localStorage.getItem('userForm') || 'null');
const storedUser = reactive(stored || defaultUserForm.value);
console.log(storedUser)
// const objDtata = ref([{
//   deliveryType: 10,
//   list: [{moneyData: 0}]
// }])
const job = ref(1)
const data = reactive({
  tag: [],
  level: 1,
  options: [
    {label: '北京', value: '北京'},
    {label: '上海', value: '上海'},
    {label: '广州', value: '广州'},
    {label: '深圳', value: '深圳'},
    {label: '杭州', value: '杭州'},
    {label: '南京', value: '南京'},
    {label: '成都', value: '成都'},
    {label: '重庆', value: '重庆'},
    {label: '武汉', value: '武汉'},
    {label: '西安', value: '西安'},
    {label: '天津', value: '天津'},
    {label: '苏州', value: '苏州'},
    {label: '青岛', value: '青岛'},
    {label: '宁波', value: '宁波'},
    {label: '郑州', value: '郑州'},
    {label: '长沙', value: '长沙'},
    {label: '合肥', value: '合肥'},
    {label: '福州', value: '福州'},
    {label: '厦门', value: '厦门'},
    {label: '济南', value: '济南'},
    {label: '大连', value: '大连'},
    {label: '昆明', value: '昆明'},
    {label: '南昌', value: '南昌'},
    {label: '石家庄', value: '石家庄'},
    {label: '南宁', value: '南宁'},
  ],
  n_options: [
    {
      label: '10',
      value: '10',
    },
    {
      label: '9',
      value: '9',
    },
    {
      label: '8',
      value: '8',
    },
    {
      label: '7',
      value: '7',
    },
    {
      label: '6',
      value: '6',
    },
    {
      label: '5',
      value: '5',
    },
    {
      label: '4',
      value: '4',
    },
    {
      label: '3',
      value: '3',
    },
    {
      label: '2',
      value: '2',
    },
    {
      label: '1',
      value: '1'
    }
  ],
  menu: 1,
})

function xmChange(value) {
  defaultUserForm.value.projectItems = []
  for (let i = 0; i < value; i++) {
    defaultUserForm.value.projectItems.push({
      sequence: i + 1,
      freelancerName: `自由职业者${i + 1}`,
      deliveryType: 10,  // 默认一次性工作
      totalBudget: 0,
      unitPrice: 0,
      workDescription: "",
      projectMilestones: [{description: "里程碑", budget: 0, endTime: new Date()}]
    })
  }
  // 计算总价
  calculateTotalBudget()
  console.log('你选择了：', value)
}

const change_tag = (index) => {
  data.tag[index].checked = !data.tag[index].checked
}

const change_level = (level) => {
  data.level = level
}
const change_money = (index, item) => {
  item.deliveryType = index
  if (index === 10) {
    // 一次性工作：清空里程碑，设置单价
    item.projectMilestones = []
    item.unitPrice = item.unitPrice || 0
  } else {
    // 里程碑项目：清空单价，确保有至少一个里程碑
    item.unitPrice = 0
    if (item.projectMilestones.length === 0) {
      item.projectMilestones = [{description: "里程碑1", budget: 0, endTime: new Date()}]
    }
  }
  calculateTotalBudget()
}

const add_list = (item) => {
  let obj = {description: "里程碑", budget: 0, endTime: new Date()}
  item.projectMilestones.push(obj)
}

// 计算项目总价
const calculateTotalBudget = () => {
  defaultUserForm.value.totalBudget = defaultUserForm.value.projectItems.reduce((sum, item) => {
    if (item.deliveryType === 10) {
      // 一次性工作：使用单价
      return sum + parseInt(item.unitPrice || 0)
    } else {
      // 里程碑项目：汇总所有里程碑的预算
      const milestoneSum = item.projectMilestones.reduce((mSum, milestone) => 
        mSum + parseInt(milestone.budget || 0), 0)
      return sum + milestoneSum
    }
  }, 0)
}

// 当单价改变时重新计算总价
const onUnitPriceChange = () => {
  calculateTotalBudget()
}

// 当里程碑预算改变时重新计算总价
const onMilestoneBudgetChange = () => {
  calculateTotalBudget()
}

const handleClick = (targetId, index) => {
  const targetElement = document.getElementById(targetId);
  data.menu = index
  if (targetElement) {
    targetElement.scrollIntoView({behavior: 'smooth'});
  }
}

const success_add = async () => {
  // 验证必填字段
  if (!defaultUserForm.value.title) {
    message.error('请填写工作名称')
    return
  }
  if (!defaultUserForm.value.endTime) {
    message.error('请选择项目结束时间')
    return
  }
  
  // 验证每个自由职业者的信息
  for (let i = 0; i < defaultUserForm.value.projectItems.length; i++) {
    const item = defaultUserForm.value.projectItems[i]
    if (!item.freelancerName) {
      message.error(`请填写自由职业者${i + 1}的姓名`)
      return
    }
    if (!item.workDescription) {
      message.error(`请填写自由职业者${i + 1}的工作描述`)
      return
    }
    if (item.deliveryType === 10 && (!item.unitPrice || item.unitPrice <= 0)) {
      message.error(`请设置自由职业者${i + 1}的单价`)
      return
    }
  }
  
  // 准备提交数据
  const submitData = {
    ...defaultUserForm.value,
    projectSkills: data.tag
        .filter(item => item.checked)
        .map(item => ({id: item.id, name: item.name})),
    // 转换时间格式
    startTime: defaultUserForm.value.startTime ? new Date(defaultUserForm.value.startTime).toISOString() : null,
    endTime: defaultUserForm.value.endTime ? new Date(defaultUserForm.value.endTime).toISOString() : null,
    // 转换金额为分（后端要求）
    totalBudget: parseInt(defaultUserForm.value.totalBudget * 100),
    projectItems: defaultUserForm.value.projectItems.map(item => ({
      ...item,
      totalBudget: item.deliveryType === 10 ? 
        parseInt(item.unitPrice * 100) : 
        parseInt(item.projectMilestones.reduce((sum, milestone) => sum + parseInt(milestone.budget || 0), 0) * 100),
      unitPrice: parseInt((item.unitPrice || 0) * 100),
      projectMilestones: item.projectMilestones.map(milestone => ({
        ...milestone,
        budget: parseInt((milestone.budget || 0) * 100),
        endTime: milestone.endTime ? new Date(milestone.endTime).toISOString() : null
      }))
    }))
  }
  
  console.log('提交数据：', submitData)
  const res = await createProject(submitData)
  if (res.code !== 0) {
    message.error(res.msg)
    return
  }
  
  dialog.warning({
    actionClass: 'naiveui-dialog-action',
    showIcon: false,
    closable: false,
    title: '您的项目已发布成功，请在"审核中的工作"查看更多详情',
    content: () => h('div', {}, [
      h('p',
          {
            style: {
              cursor: 'pointer',
            },
            onClick() {
              console.log("项目发布成功")
            },
          },
          {default: () => ''}),
    ]),
    positiveText: '确定',
    negativeText: '',
    maskClosable: false,
    positiveButtonProps: {
      color: '#58968B'
    },
    onPositiveClick: () => {
      router.push('/client/work-apply')
    }
  })
}
onMounted(async () => {
  const res = await getUserSkill({classification: 3})
  if (res.code !== 0) {
    message.error(res.msg)
    return
  }
  data.tag = res.data.map(item => {
    return {
      id: item.id,
      name: item.name,
      checked: false,
    }
  })
  console.log(data)
});

</script>

<style scoped>
::v-deep(.n-date-picker .n-input) {
  height: 40px !important;
  margin-bottom: 0px;
}

.header-job {
  text-align: center;
  font-size: 16px;
  color: #808080;
  padding: 10px;
  position: relative;
  margin-right: 40px;
  cursor: pointer;
}

.header-job-success {
  text-align: center;
  font-size: 16px;
  color: #333333;
  padding: 10px;
  position: relative;
  margin-right: 40px;
  cursor: pointer;
}

.header-job-success::after {
  content: '';
  width: 100%;
  height: 5px;
  background: #58968B;
  position: absolute;
  left: 0;
  bottom: 0;
}

.header-job::after {
  content: '';
  width: 100%;
  height: 5px;
  background: #EDEDED;
  position: absolute;
  left: 0;
  bottom: 0;
}

.header-jobs {
  display: flex;
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 16px 16px 16px 16px;
  border: 1px solid #EDEDED;
  padding: 20px 40px;
}

.easy {
  width: 100%;
  background-color: white;
}

.talents-container {
  width: 1360px;
  margin: 0 auto;
  padding: 20px 0;
  max-width: 100%;
  position: relative;
  display: flex;
}

.client-menu {
  width: 200px;
  height: 458px;
  background-color: #F6F8FA;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

}

.client-menu p {
  font-weight: 600;
  font-size: 14px;
  color: #333333;
  font-style: normal;
  text-transform: none;
  cursor: pointer;
  width: calc(100% - 10px);
  padding-left: 10px;
  text-align: left;
  line-height: 47px;
  border-radius: 10px;
}

.client-menu-success {
  background-color: #3BC8B4;
  color: #FFFFFF !important;
}

.client-form {
  flex: 1;
}

.client-form-view {
  padding: 40px;
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 16px 16px 16px 16px;
  border: 1px solid #EDEDED;
  margin-left: 20px;
  width: calc(100% - 20px);
  margin-bottom: 20px;
}

.submit {
  width: 100%;
  margin-left: 20px;
  width: calc(100% - 20px);
  margin-bottom: 20px;
  text-align: right;
}

.client-form-title {
  font-size: 24px;
  line-height: 36px;
  text-align: left;
  margin-bottom: 10px;
}

.easy-tag {
  margin-right: 10px;
  cursor: pointer;
}

.client-form-level {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.client-form-level-item-success {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 50px;
  border: 1px solid #58968B;
  border-radius: 12px;
  width: 31%;
  background-color: #BFE1DB;
}

.client-form-level-item {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 50px;
  border: 1px solid #EDEDED;
  border-radius: 12px;
  width: 31%;
}

.client-form-level-item-title {
  font-weight: 600;
  font-size: 22px;
  color: #333333;
  text-align: left;
  padding: 30px 0;
}

.client-form-level-item-brief {
  color: #808080;
  font-size: 13px;
}

.client-form-title-cn {
  font-size: 15px;
  color: #333333;
  padding: 15px 0;
}

.client-form-money {
  display: flex;
  justify-content: space-between;
}

.client-form-money-item {
  width: calc(50% - 10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #EDEDED;
  border-radius: 12px;
  padding: 5px 0 25px 0;
}

.client-form-money-item-success {
  width: calc(50% - 10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #58968B;
  border-radius: 12px;
  padding: 0 0 20px 0;
  background-color: #BFE1DB;
}

.client-form-money-item p {
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #333333;
}

.client-form-money-item-success p {
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #58968B;
}

.client-form-money-item span {
  font-size: 12px;
  color: #808080;
  padding: 0 20px;
}

.client-form-money-item-success span {
  font-size: 12px;
  color: #58968B;
  padding: 0 20px;
}

.client-form-money-number {
  margin: 40px 0;
  padding: 20px 0;
  border-top: 1px solid #EDEDED;
  border-bottom: 1px solid #EDEDED;
  position: relative;
}

.add-number {
  position: absolute;
  right: 0;
  top: 25px;
}

.col-title {
  font-weight: 400;
  font-size: 18px;
  color: #333333;
}

.easy-col {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.client-form-money {
  display: flex;

}

.client-form-end,
.client-form-end-number {
  font-size: 18px;
  color: #333333;
}

.client-form-end-more {
  margin-top: 20px;
  text-align: center;
  font-size: 13px;
}

.client-form-end-more a {
  text-decoration: underline;
  color: #58968B;
  font-size: 13px;
}

.dialog-content {
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  text-align: center;
  padding-top: 70px;
  padding-bottom: 20px;
}

.dialog-btn {
  width: 90%;
  text-align: right;
  padding-bottom: 70px;
}

.cardItem {
  cursor: pointer;
  width: 300px;
  height: 125px;
  background: #F6F8FA;
  padding: 25px;

  img {
    height: 48px;
  }
}
</style>
