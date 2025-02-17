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
                <p @click="handleClick('id7',7)" :class="data.menu == 7 ? 'client-menu-success' : ''">总预算</p>
            </div>
            <div class="client-form">
                <div class="client-form-view" id="id1">
                    <div class="client-form-title">
                        工作名称
                    </div>
                    <n-input style="width:50%" placeholder="请输入工作名称" />
                </div>
                <div class="client-form-view" id="id2" ref="targetDiv">
                    <div class="client-form-title">
                        工作内容
                    </div>
                    <n-input type="textarea" :autosize="{
                        minRows: 13,
                        maxRows: 5,
                      }" placeholder="请输入..." />
                </div>
                <div class="client-form-view" id="id3">
                    <div class="client-form-title">
                        技能和专业知识
                    </div>
                    <n-tag size="large" :type="item.checked ? 'success' :''" v-for="item,index in data.tag" class="easy-tag"
                        :color="{textColor:item.checked ? '' :'#808080'}" @click="change_tag(index)" round>
                        {{ item.name }}
                    </n-tag>
                </div>
                <div class="client-form-view" id="id4">
                    <div class="client-form-title">
                        经验等级
                    </div>
                    <div class="client-form-level">
                        <div @click="change_level(1)"
                            :class="data.level == 1 ? 'client-form-level-item-success' : 'client-form-level-item'">
                            <div class="client-form-level-item-icon">
                                <img src="../../assets/client/1.png" alt="">
                            </div>
                            <div class="client-form-level-item-title">
                                入门级
                            </div>
                            <div class="client-form-level-item-brief">
                                我在这个领域相对还是新手
                            </div>
                        </div>
                        <div @click="change_level(2)"
                            :class="data.level == 2 ? 'client-form-level-item-success' : 'client-form-level-item'">
                            <div class="client-form-level-item-icon">
                                <img src="../../assets/client/2.png" alt="">
                            </div>
                            <div class="client-form-level-item-title">
                                中级
                            </div>
                            <div class="client-form-level-item-brief">
                                我在这个领域有丰富的经验
                            </div>
                        </div>
                        <div @click="change_level(3)"
                            :class="data.level == 3 ? 'client-form-level-item-success' : 'client-form-level-item'">
                            <div class="client-form-level-item-icon">
                                <img src="../../assets/client/3.png" alt="">
                            </div>
                            <div class="client-form-level-item-title">
                                专家
                            </div>
                            <div class="client-form-level-item-brief">
                                我在这个领域拥有全面而深厚的专业知识
                            </div>
                        </div>
                    </div>

                </div>
                <div class="client-form-view" id="id5">
                    <div class="client-form-title">
                        招聘区域
                    </div>
                    <n-select v-model:value="data.value" :options="data.options" />
                </div>
                <div class="client-form-view" id="id6">
                    <div class="client-form-title">
                        项目雇佣人数
                    </div>
                    <n-select v-model:value="data.number" :options="data.n_options" />
                </div>

                <div class="client-form-view" id="id7">
                    <div class="client-form-title">
                        总预算
                    </div>
                    <div class="client-form-title-cn">选择工作方式</div>

                    <div class="client-form-money">
                        <div :class="data.money == 1 ? 'client-form-money-item-success':'client-form-money-item'"
                            @click="change_money(1)">
                            <p>里程碑</p>
                            <span>将项目划分为更小的部分，称为里程碑，里程碑完成并获得批准后，您将获得报酬。</span>
                        </div>
                        <div :class="data.money == 2 ? 'client-form-money-item-success':'client-form-money-item'"
                            @click="change_money(2)">
                            <p>一次性工作</p>
                            <span>当所有工作都交付完毕时，再获得全部付款。</span>
                        </div>
                    </div>


                    <div class="client-form-money-number" v-if="data.money == 1">
                        <div class="client-form-title-cn">里程碑数量</div>
                        <div class="add-number">
                            <n-button type="primary" ghost @click="add_list()">
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
                            <el-col :span="1">

                            </el-col>
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
                        <el-row :gutter="20" class="easy-col" v-for="item,index in data.list" :key="index">
                            <el-col :span="1">
                                {{ index > 9 ? index + 1 : '0' + (index + 1) }}
                            </el-col>

                            <el-col :span="11">
                                <n-input placeholder="请输入" />
                            </el-col>
                            <el-col :span="6">
                                <n-date-picker type="date" />
                            </el-col>
                            <el-col :span="6">
								<n-flex align="center" style="position: relative;">
									<n-input placeholder="请输入" style="text-align: right;">
										<template #prefix>
											<span style="color:#808080">￥</span>
										</template>
									</n-input>
									<n-icon
									  style="position: absolute;right: -30px"
									  class="cursor-pointer-style"
									  :size="20"
									  v-if="index > 0"
									  @click="data.list.splice(index,1)"
									>
									  <CloseCircleOutline></CloseCircleOutline>
									</n-icon>
								</n-flex>
                            </el-col>
                        </el-row>

                    </div>

                    <div class="client-form-money" style="margin-top:30px;">
                        <div class="client-form-end">
                            项目总价
                        </div>
                        <div class="client-form-end-number">
							<template v-if="data.money == 1">
							  ￥200.00
							</template>
							<template v-else>
							  <n-input default-value="200" align="right">
							    <template #prefix>
							      ￥
							    </template>
							  </n-input>
							</template>
                        </div>
                    </div>
                    <div class="client-form-end-more">
                        包括原创力固定价格保护。<a>了解更多信息</a>
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
import { reactive, onMounted, onUnmounted, ref } from 'vue';
import { createDiscreteApi } from 'naive-ui'
import { useRouter } from 'vue-router'
import { CloseCircleOutline } from '@vicons/ionicons5'
const router = useRouter()
const { dialog } = createDiscreteApi(['dialog'])
const data = reactive({
    tag: [
        {
            name: '中文',
            checked: false,
        },
        {
            name: '法语',
            checked: false,
        },
        {
            name: '德语',
            checked: false,
        },
        {
            name: '阿拉伯语',
            checked: false,
        },
        {
            name: '荷兰语',
            checked: false,
        },
        {
            name: '意大利语',
            checked: false,
        },
        {
            name: '日语',
            checked: false,
        },
        {
            name: '朝鲜语',
            checked: false,
        },
        {
            name: '内容本地化',
            checked: false,
        },
    ],
    level: 1,
    value: '北京',
    options: [
        {
            label: '北京',
            value: '北京',
        },
        {
            label: '天津',
            value: '天津',
        },
        {
            label: '上海',
            value: '上海',
        },
        {
            label: '武汉',
            value: '武汉',
        },
    ],
    number: '10',
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
    money: 1,
    list: [{}],
    menu: 1,
})

const change_tag = (index) => {
    data.tag[index].checked = !data.tag[index].checked
}

const change_level = (level) => {
    data.level = level
}
const change_money = (index) => {
    data.money = index
}

const add_list = () => {
    let obj = {}
    data.list.push(obj)
}

const handleClick = (targetId, index) => {
    const targetElement = document.getElementById(targetId);
    data.menu = index
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}

const success_add = () => {
    dialog.warning({
        actionClass: 'naiveui-dialog-action',
        showIcon: false,
        closable: false,
        title: '您的项目已发布成功，请在“审核中的工作”查看更多详情',
        content: () => h('div', {}, [
            h('p',
                {
                    style: {
                        cursor: 'pointer',
                    },
                    onClick() {
                        console.log("11111")
                    },
                },
                { default: () => '' }),
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


</script>

<style scoped>
.easy {
    width: 100%;
    background-color: #F4FBFA;
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
    width: 159px;
    height: 458px;
    background-color: #FFFFFF;
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
    background-color: #58968B;
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
</style>