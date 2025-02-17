<script setup lang="ts">
import { h, ref } from 'vue'
import { useRouter } from 'vue-router'
import HeaderModal from './HeaderModal.vue'
import { IconService, IconRemind, RenderIcon } from '@/components'
import { ChevronDown } from '@vicons/ionicons5'
import Looking from './Looking.vue'
import Talents from './Talents.vue'
import College from './College.vue'
import { Notice, renderCustomHeader, renderCustomIcons } from '@/components/Header/ClientNotice.tsx'
import HeaderDropdownSelect from './HeaderDropdownSelect.vue'
import HeaderClient from './HeaderClient.vue'
import avatarUrl from '../../assets/img/avatar.png'
import ChangeAccount from './ClientChangeAccount.vue'
import EditAvatar from '@/components/Client/EditAvatar.vue'

const router = useRouter()

const searchType = ref('人才')

const isShow = ref(false)

const visual = ref(false)

let id: null | number = null

const key = ref('College')

type Options = any[] | ((value: any[]) => any[])

withDefaults(
  defineProps<{
    isWork: boolean
    isLogin: boolean,
    headerOptions?: Options
  }>(),
  {
    isWork: true,
    isLogin: false,
  },
)

const options = ref([
  {
    label: '人才',
    key: '人才',
    desc: '雇佣专业人士和经验丰富的人',
  },
  {
    label: '找工作',
    key: '找工作',
    desc: '寻找适合你的多样化工作类型',
  },
  {
    label: '商业咨询',
    key: '商业咨询',
    desc: '从专业人士那里得到有效的建议反馈',
  },
])


const noticeOptions = ref([
  {
    key: 'header',
    type: 'render',
    render: () => h(Notice),
  },
])

const showChangeAccount = ref(false)

const showEditAvatar = ref(false)

const avatarOptions = ref([
  {
    key: 'header',
    type: 'render',
    // render: renderCustomHeader,
	render: () =>h(renderCustomHeader,{
    	onClick: (event) => {
    	 const clickedElement = event.target;
    	 if (clickedElement.tagName == 'IMG') {
    		 showEditAvatar.value = true
         }
    	},
    })
  },
  {
    key: 'icons',
    type: 'render',
    render: () => h(renderCustomIcons,{
    	onClick: (event) => {
    	 const clickedElement = event.target;
    	 if (clickedElement.classList.contains('showChangeAccount')) {
    		 showChangeAccount.value = true
         }
    	},
    }),
  },
])

function onClickSelect(value: string) {
  searchType.value = value
  isShow.value = false
}

function onClickShowDropdown(value: boolean) {
  isShow.value = value
}

function onClickLogin() {
  router.push('/login')
}

function onMouseout() {
  id = setTimeout(() => {
    visual.value = false
  }, 300)
}

function onMouseenter(value: string) {
  clearTimeout(id!)
  key.value = value
  visual.value = true
}

function renderLabel({ option }: any) {
  return h(
    'div',
    {
      class: {
        'header-top-label_container_item': true,
      },
    },
    h(
      'div',
      {
        class: {
          'header-top-label_container_item_1': true,
          'active': option.label === searchType.value,
        },
        onClick() {
          onClickSelect(option.label)
        },
      },
      [
        h(
          'div',
          { class: 'header-top-label_container_item-text' },
          option.label,
        ),
        h(
          'div',
          { class: 'header-top-label_container_item-text' },
          option.desc,
        ),
      ],
    ),
  )
}
const keyword = ref(null)
function search(){
	if(searchType.value == '人才'){
		router.push('/client/search-talents')
	}else if(searchType.value == '找工作'){
		router.push('/search/position')
	}else if(searchType.value == '商业咨询'){
		router.push('/client/search-talents?is_consult=1')
	}
}

const charMessageShow = ref(false)

</script>

<template>
  <div class="header_top">
    <div class="wrapper">
      <div class="container">
        <div class="container-header-nav">
          <div class="logo" @click="$router.push('/')">
            <img src="../../assets/img/logo.png" alt="" />
          </div>
          <div class="header-nav-container">
            <template v-if="isWork">
              <div class="nav-container-item" @mouseleave="onMouseout" @mouseenter="onMouseenter('Talents')">
                <span :class="key === 'Talents' && visual ? 'active' : ''">招人才</span>
                <n-icon :class="{
                    'nav-arrow': true,
                    active: key === 'Talents' && visual,
                  }">
                  <ChevronDown></ChevronDown>
                </n-icon>
              </div>
              <div class="nav-container-item" @mouseleave="onMouseout" @mouseenter="onMouseenter('Looking')">
                <span :class="key === 'Looking' && visual ? 'active' : ''">找工作</span>
                <n-icon :class="{
                    'nav-arrow': true,
                    active: key === 'Looking' && visual,
                  }">
                  <ChevronDown></ChevronDown>
                </n-icon>
              </div>
              <div class="nav-container-item" @mouseleave="onMouseout" @mouseenter="onMouseenter('College')">
                <span :class="key === 'College' && visual ? 'active' : ''">原创力学院</span>
                <n-icon :class="{
                    'nav-arrow': true,
                    active: key === 'College' && visual,
                  }">
                  <ChevronDown></ChevronDown>
                </n-icon>
              </div>
              <div class="nav-container-item">专业领域</div>
              <div class="nav-container-item">联系我们</div>
            </template>
            <template v-else>
              <HeaderClient :options="headerOptions" />
            </template>
          </div>
        </div>
        <n-flex align="center" class="right">
          <n-space>
            <n-input round v-model:value="keyword" placeholder="请输入.." size="large" style="width: 300px"
              @keyup.enter="search">
              <template #prefix>
                <div class="icon">
                  <img src="../../assets/img/search.png" alt="" />
                </div>
              </template>
              <template #suffix>
                <div class="select" :class="isShow ? 'on' : ''">
                  <n-dropdown trigger="hover" :options="options" :show="isShow" @select="onClickSelect"
                    :on-update:show="onClickShowDropdown" style="width: 318px" :render-option="renderLabel"
                    :show-arrow="true" :menu-props="
                      () => {
                        return {
                          style: {
                            padding: '20px',
                          },
                        }
                      }
                    ">
                    <span class="el-dropdown-link">
                      {{ searchType }}
                      <img src="../../assets/img/xiala.png" alt="" />
                    </span>
                  </n-dropdown>
                </div>
              </template>
            </n-input>
            <n-space>
              <template v-if="isLogin">
                <n-button style="width: 104px" quaternary size="large" @click="onClickLogin">
                  登录
                </n-button>
                <RouterLink to="/register">
                  <n-button style="width: 104px; --n-border-radius: 12px" type="primary" size="large">
                    注册
                  </n-button>
                </RouterLink>
              </template>
              <template v-else>
                <n-flex align="center" :size="30" style="margin-left: 30px">
                  <RenderIcon size="24" fill="#808080" :icon="IconService" @click="charMessageShow = true" />
				  <n-dropdown trigger="hover" :options="noticeOptions" show-arrow placement="bottom-end">
					<n-badge :offset="[-4,2]" color="red" dot>
						<RenderIcon size="24" fill="#808080" :icon="IconRemind" />
					</n-badge>
				  </n-dropdown>
                  <n-dropdown trigger="hover" :options="avatarOptions" show-arrow style="width:245px">
                    <n-avatar round size="large" :src="avatarUrl" />
                  </n-dropdown>
                </n-flex>
              </template>
            </n-space>
          </n-space>
        </n-flex>
      </div>
    </div>
    <HeaderModal :visual="visual" @open="onMouseenter(key)" @close="onMouseout">
      <Talents v-if="key === 'Talents'"></Talents>
      <Looking v-if="key === 'Looking'"></Looking>
      <College v-if="key === 'College'"></College>
    </HeaderModal>
  </div>
  <ChatMessage v-model:show="charMessageShow" />
  <ChangeAccount v-model:show="showChangeAccount" />
  <EditAvatar v-model:show="showEditAvatar" />
</template>

<style scoped lang="scss">
.header_top {
  border-bottom: 1px solid #ededed;
}

.header_top .container {
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: $header-height;
}

.container-header-nav {
  display: flex;
  align-items: center;
  height: 64px;
  .logo{
  	  cursor: pointer;
  }
}

.header_top .header-nav-container {
  display: flex;
  align-items: center;
  height: 64px;
  margin-left: 40px;

  .nav-container-item {
    height: 64px;
    font-weight: 500;
    padding: 0 0 0 40px;
    font-size: 12px;
    color: #333333;
    display: flex;
    align-items: center;

    &.padding-2 {
      padding: 0 0 0 10px;
    }

    &:hover {
      color: #58968b;
      cursor: pointer;
    }

    span.active {
      color: #58968b;
    }
  }
}

.header_top {
  .select {
    height: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &.on {
      img {
        transform: rotate(180deg);
      }

      .el-dropdown-link {
        color: #58968b;
      }
    }

    img {
      transition: all 0.3s;
      margin-left: 5px;
    }

    .el-dropdown-link {
      display: flex;
      align-items: center;
      padding: 0 16px 0 16px;
      font-size: 12px;
      height: 22px;
      border-left: 1px solid #ededed;
      color: #333333;
    }
  }

  .nav-arrow {
    margin-left: 5px;
    transition: all 0.3s;

    &.active {
      transform: rotate(180deg);
    }
  }
}
</style>

<style lang="scss">
.header-top-label_container_item {
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  .header-top-label_container_item_1 {
    padding: 10px;
    border-radius: 6px 6px 6px 6px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;

    &.active,
    &:hover {
      background-color: #58968b;

      .header-top-label_container_item-text {
        color: #ffffff;
      }
    }

    .header-top-label_container_item-text {
      font-size: 14px;
    }
  }
}
</style>
