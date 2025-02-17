<script setup lang="ts">
import { Footer, IconMessage, RenderIcon, Text } from '@/components'
import Header from '@/components/Header/Header.vue'
import EffectiveSubmitDetails from './EffectiveSubmitDetails.vue'
import avatarUrl from '../../assets/img/avatar.png'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const show = ref(false)

const status = route.query.status || 0
</script>

<template>
    <div class="easy-container">
        <div class="container">
            <div class="slider-avatar">
                <n-flex :size="20" style="padding:0 20px ;">
                    <n-avatar :size="60" round :src="avatarUrl"></n-avatar>
                    <n-flex vertical :size="5 ">
                        <n-space align="center">
                            <Text :size="20">乔安娜</Text>
                            <RenderIcon :icon="IconMessage" :size="20" fill="#58968B"></RenderIcon>
                        </n-space>
                        <Text :size="14" class="secondary-color-text-1">Joanna</Text>
                    </n-flex>
                </n-flex>
                <n-flex :size="0" class="personal-data-container" :wrap="false">
                    <div class="personal-data-slider">
                        <div class="personal-data-slider-user">
                            <n-flex align="center" justify="space-between">
                                <div class="text-size-16">查看职业档案</div>
                            </n-flex>
                            <n-space vertical :size="15" style="margin-top: 15px">
                                <div class="secondary-color-text-1" style="font-size: 14px">设计师</div>
                                <div class="secondary-color-text-1" style="font-size: 14px">家装设计师</div>
                                <div class="secondary-color-text-1" style="font-size: 14px">
                                    所有工作
                                </div>
                            </n-space>
                        </div>

                        <n-flex class="personal-data-slider-nums" align="center" justify="center" :size="20">
                            <n-flex class="personal-data-slider-nums-item" vertical align="center">
                                <div class="slider-nums-item-nums">124</div>
                                <div class="secondary-color-text-1">历史接单(单)</div>
                            </n-flex>
                            <n-flex class="personal-data-slider-nums-item" vertical align="center">
                                <div class="slider-nums-item-nums">124000</div>
                                <div class="secondary-color-text-1">总收入(￥)</div>
                            </n-flex>
                            <n-flex class="personal-data-slider-nums-item" vertical align="center">
                                <div class="slider-nums-item-nums">4.9</div>
                                <div class="secondary-color-text-1">评分(5.0)</div>
                            </n-flex>
                        </n-flex>
                    </div>
                </n-flex>
                <n-flex align="center" justify="space-between" style="padding:20px">
                    <n-space vertical>
                        <span style="font-size: 14px">每周小时数量</span>
                        <n-flex vertical :size="10">
                            <span style="font-size: 11px;color:#808080" class="secondary-color-text-1">
                                超过40小时/周
                            </span>
                        </n-flex>
                    </n-space>

                </n-flex>

                <n-flex vertical :size="15" style="padding:20px">
                    <n-flex align="center" justify="space-between">
                        <div class="text-size-16">语言</div>
                    </n-flex>
                    <n-flex vertical :size="10">
                        <span style="font-size: 14px" class="secondary-color-text-1">
                            中文：母语或双语
                        </span>
                        <span style="font-size: 14px" class="secondary-color-text-1">
                            英语：母语或双语
                        </span>
                    </n-flex>
                </n-flex>
                <n-flex vertical :size="15" style="padding:20px">
                    <n-flex align="center" justify="space-between">
                        <div class="text-size-16">个人验证</div>
                    </n-flex>
                    <n-flex vertical :size="10">
                        <span style="font-size: 14px;color:#333333" class="secondary-color-text-1">
                            身份证认证
                        </span>
                        <span style="font-size: 11px;display:flex;align-items: center;" class="secondary-color-text-1">
                            已认证
                            <i class="icon-weiyanzheng iconfont" style="padding-left: 5px;"></i>
                        </span>
                    </n-flex>
                </n-flex>
                <n-flex vertical :size="15" style="padding:20px">
                    <n-flex align="center" justify="space-between">
                        <div class="text-size-16">教育</div>
                    </n-flex>
                    <n-flex vertical :size="10">
                        <span style="font-size: 14px;color:#333333" class="secondary-color-text-1">
                            清华大学
                        </span>
                        <span style="font-size: 11px;" class="secondary-color-text-1">
                            设计硕士，高级设计师
                        </span>
                        <span style="font-size: 11px;" class="secondary-color-text-1">
                            2016-2019
                        </span>
                    </n-flex>
                    <n-flex vertical :size="10">
                        <span style="font-size: 14px;color:#333333" class="secondary-color-text-1">
                            天津美术学院
                        </span>
                        <span style="font-size: 11px;" class="secondary-color-text-1">
                            设计硕士，高级设计师
                        </span>
                        <span style="font-size: 11px;color:#808080" class="secondary-color-text-1">
                            2012-2016
                        </span>
                    </n-flex>
                </n-flex>
            </div>
            <div class="container-body">
                <EffectiveSubmitDetails :status="status"></EffectiveSubmitDetails>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.easy-container {
    background-color: #f4fbfa;
}

.submit-proposals {
    height: 100%;
    overflow: auto;


    .container {
        width: 1316px;
        max-width: 100%;
        padding-top: 40px;
        display: flex;
        justify-content: space-around;
        gap: 20px;

        .slider-avatar {
            width: 264px;
            background: #FFFFFF;
            border-radius: 16px 16px 16px 16px;
            flex-shrink: 0;
            padding: 20px 0;
            box-sizing: border-box;

            .personal-data-slider {
                width: 100%;
                border-bottom: solid 1px #e7e7e7;
                border-top: transparent;
                height: 100%;
                flex-shrink: 0;

                .personal-data-slider-user {
                    height: 167px;
                    background: #ffffff;
                    padding: 20px;
                    box-sizing: border-box;
                    border-bottom: solid 1px #e7e7e7;
                }

                .personal-data-slider-nums {
                    height: 94px;
                    box-sizing: border-box;
                    border-bottom: solid 1px #e7e7e7;

                    .slider-nums-item-nums {
                        font-weight: 600;
                        font-size: 16px;
                        color: #333333;
                    }
                }

                .personal-data-slider-footer {
                    padding: 20px;
                    box-sizing: border-box;
                }
            }
        }
    }

    .container-body {
        flex: 1;
    }
}

@media (max-width: 1400px) {
    .submit-proposals {

        .container {
            padding: 20px;
        }

    }
}

@media screen and (max-width: 1360px) {

    /* 在此处添加适用于宽度小于1360像素的设备的样式 */
    .submit-proposals {
        .container {
            width: 1200px;
            margin: 0 auto;
            padding: 20px 0 140px 0;
            max-width: 100%;
        }
    }
}
</style>