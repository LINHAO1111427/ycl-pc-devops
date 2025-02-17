<template>
    <n-modal v-model:show="showModal">
        <n-card style="width: 900px" :bordered="false" size="huge" role="dialog" aria-modal="true">
            <div class="header-title">
                请您对工作者做出评价
            </div>
            <div v-for="item,index in data" :key="index">
                <p class="title">{{ item.name }}</p>
                <div class="rate-list">
                    <div class="rate-item" v-for="value,key in item.sub" :key="key" @click="change_rate(index,key)">
                        <RenderIcon :size="27" :fill="value.isActive ? '#58968B' :'#808080'"
                            :icon="!value.isActive ? IconShoucang1 : IconStart" />
                        <span>{{ value.name }}</span>
                    </div>
                </div>
            </div>
            <template #footer>
                <div class="btns">
                    <n-button quaternary type="primary" @click="emit('update:show',false)">
                        取消
                    </n-button>
                    <n-button type="primary" @click="emit('update:show',false)">
                        完成
                    </n-button>
                </div>
            </template>
        </n-card>
    </n-modal>
</template>

<script setup>
import { ref } from 'vue'
import { IconStart, RenderIcon, IconGongZou, IconMessage, IconPingbi, IconShoucang1, IconWeiyanzheng } from '@/components'
var showModal = true

const emit = defineEmits(['update:show'])


const data = ref([
    {
        name: '专业度',
        sub: [
            {
                name: '非常不满意',
                isActive: false
            },
            {
                name: '不满意',
                isActive: false
            },
            {
                name: '一般',
                isActive: false
            },
            {
                name: '满意',
                isActive: false
            },
            {
                name: '非常满意',
                isActive: true
            }
        ]
    },
    {
        name: '态度',
        sub: [
            {
                name: '非常不满意',
                isActive: false
            },
            {
                name: '不满意',
                isActive: false
            },
            {
                name: '一般',
                isActive: true
            },
            {
                name: '满意',
                isActive: false
            },
            {
                name: '非常满意',
                isActive: false
            }
        ]
    },
    {
        name: '支付效率',
        sub: [
            {
                name: '非常不满意',
                isActive: true
            },
            {
                name: '不满意',
                isActive: false
            },
            {
                name: '一般',
                isActive: false
            },
            {
                name: '满意',
                isActive: false
            },
            {
                name: '非常满意',
                isActive: false
            }
        ]
    },
    {
        name: '交付质量',
        sub: [
            {
                name: '非常不满意',
                isActive: false
            },
            {
                name: '不满意',
                isActive: false
            },
            {
                name: '一般',
                isActive: false
            },
            {
                name: '满意',
                isActive: false
            },
            {
                name: '非常满意',
                isActive: true
            }
        ]
    },
    {
        name: '整体评价',
        sub: [
            {
                name: '非常不满意',
                isActive: false
            },
            {
                name: '不满意',
                isActive: false
            },
            {
                name: '一般',
                isActive: false
            },
            {
                name: '满意',
                isActive: false
            },
            {
                name: '非常满意',
                isActive: true
            }
        ]
    },

])
const change_rate = (index, key) => {
    data.value[index].sub.forEach((element, k) => {
        element.isActive = false
    });
    data.value[index].sub[key].isActive = true
}

</script>

<style scoped>
.rate-list {
    display: flex;
    justify-content: space-around;
}

.rate-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}

.rate-item span {
    padding-top: 10px;
}

.title {
    font-size: 16px;
    padding: 30px 0 20px 0;
    color: #333333;
}

.note {
    font-size: 12px;
    color: #333333;
}

.input-btn {
    display: flex;
    width: 50%;
}


.input-btn button {
    margin-left: 20px;
}

::v-deep(.n-base-icon) {
    font-size: 16px;
}

.work-details-slider-container {
    width: 258px;
}

.work-details-right-box {
    width: 358px;
}

.header-title {
    font-weight: 400;
    font-size: 27px;
    color: #000000;
}

.radio-item {
    display: flex;
    align-items: baseline;
    margin: 30px 0;
}

.radio-item-radio {
    padding-right: 15px;
}

.radio-item-cn p {
    font-size: 16px;
    color: #333333;
}

.radio-item-cn span {
    display: flex;
    line-height: 25px;
}

.btns {
    text-align: right;
    display: flex;
    justify-content: flex-end;
    padding-top: 30px;
}

.btns button {
    margin-left: 20px;
}

.member-item-top {
    display: flex;
    margin-top: 30px;
}

.item-top-icon {
    width: 50px;
    height: 50px;
    background-color: #D9D9D9;
    border-radius: 100px;
    position: relative;
}

.item-top-icon-success {
    width: 10px;
    height: 10px;
    background-color: #58968B;
    border-radius: 100px;
    position: absolute;
    left: 5px;
    top: 2px;
}

.item-top-view {
    padding-left: 20px;
    flex: 1;
}

.item-top-view p {
    font-size: 20px;
    color: #333333;
}

.item-top-view-span {
    text-align: right;
    width: 100%;
}

.item-top-view-span span {
    font-size: 10px;
    color: #808080;
    margin-left: 30px;
}

.member-item-p {
    font-size: 12px;
    color: #808080;
    padding: 10px 0 0 0;
}

.member-item-a {
    font-size: 12px;
    color: #58968B;
}
</style>