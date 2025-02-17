import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
import WorkRouter from './work'
import UserSetRouter from './user-set'
import SearchRouter from './search.ts'
import ClientRouter from './client.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      // 登录
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/Login.vue'),
    },
    {
      //
      path: '/password',
      name: 'password',
      component: () => import('../views/Login/Password.vue'),
    },
    {
      // 修改密码
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('../views/Login/ResetPassword.vue'),
    },
    {
      // 注册
      path: '/register',
      name: 'register',
      component: () => import('../views/Register/Register.vue'),
    },
    // 找工作列表
    {
      path: '/talents',
      name: 'talents',
      component: () => import('../views/Talents/index.vue'),
    },
	// 找工作详情页
	{
	  path: '/talents-detail',
	  name: 'talents-detail',
	  component: () => import('../views/TalentsDetail/index.vue'),
	},
    // 开通会员
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/Member/index.vue'),
    },
    // 提交申请
    {
      path: '/submit-proposals',
      name: 'submit-proposals',
      component: () => import('../views/SubmitProposals/index.vue'),
    },
    // 提交职业自由工作者
    {
      path: '/submit-work',
      name: 'submit-work',
      component: () => import('../views/SubmitWork/index.vue'),
    },
    // 我的钱包
    {
      path: '/wallet',
      name: 'wallet',
      component: () => import('../views/MyWallet/index.vue'),
    },
    // 历史申请
    {
      path: '/application',
      name: 'application',
      component: () => import('../views/HistoricalApplication/index.vue'),
    },
    // 用户统计
    {
      path: '/user-statistics',
      name: 'user-statistics',
      component: () => import('../views/UserStatistics/index.vue'),
    },
    // 个人资料
    {
      path: '/personal-data',
      name: 'personal-data',
      component: () => import('../views/PersonalData/index.vue'),
    },
    // 积分兑换
    {
      path: '/point-redemption',
      name: 'point-redemption',
      component: () => import('../views/PointRedemption/index.vue'),
    },
    // 提现
    {
      path: '/withdrawals',
      name: 'withdrawals',
      component: () => import('../views/Withdrawal/index.vue'),
    },
	// 交易记录
	{
	  path: '/transaction-log',
	  name: 'transaction-log',
	  component: () => import('../views/TransactionLog/index.vue'),
	},
	// 提款日历
	{
	  path: '/withdrawal-calendar',
	  name: 'withdrawal-calendar',
	  component: () => import('../views/WithdrawalCalendar/index.vue'),
	},
	// 接受offer收到合同
	{
	  path: '/received-contract',
	  name: 'received-contract',
	  component: () => import('../views/ReceivedContract/index.vue'),
	},
	// 文章详情
	{
	  path: '/article-detail',
	  name: 'article-detail',
	  component: () => import('../views/ArticleDetail/index.vue'),
	},
	// 提交商业咨询
	{
	  path: '/submit-consult',
	  name: 'submit-consult',
	  component: () => import('../views/SubmitConsult/index.vue'),
	},
	//正在生效的商业咨询
	{
	  path: '/effective-consult',
	  name: 'effective-consult',
	  component: () => import('../views/EffectiveConsult/index.vue'),
	},
	//历史商业咨询
	{
	  path: '/historical-consult',
	  name: 'historical-consult',
	  component: () => import('../views/HistoricalConsult/index.vue'),
	},
	//待确认咨询订单
	{
	  path: '/confirm-consult',
	  name: 'confirm-consult',
	  component: () => import('../views/ConfirmConsult/index.vue'),
	},
	//提现历史
	{
	  path: '/withdrawal-log',
	  name: 'withdrawal-log',
	  component: () => import('../views/WithdrawalLog/index.vue'),
	},
	// 添加项目介绍
	{
	  path: '/add/project',
	  name: 'add-project',
	  component: () => import('../views/AddProject/index.vue'),
	},
	{
	  path: '/send-offer',
	  name: 'send-offer',
	  component: () => import('../views/SendOffer/index.vue'),
	},
	//联系我们
	{
	  path: '/contact',
	  name: 'Contact',
	  component: () => import('../views/Contact/index.vue'),
	},
	{
	  // 查看客户进行中的工作
	  path: '/custom-effective-work',
	  name: 'custom-effective-work',
	  component: () => import('../views/CustomEffectiveWork/index.vue'),
	},
    {
      path: '/icons',
      name: 'icons',
      component: () => import('../views/Icons/index.vue'),
    },
    ...UserSetRouter,
    ...WorkRouter,
    ...SearchRouter,
	...ClientRouter
  ],
})

export default router
