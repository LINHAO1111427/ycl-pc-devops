// 客户端

export default [
    // 发布工作步骤
    {
      path: '/client/addclient',
      component: () => import('../views/Client/Add/index.vue'),
      name: 'addclient',
    },
    // 发现人才
    {
      path: '/client/talent',
      component: () => import('../views/Client/Talent/index.vue'),
      name: 'talent',
    },
    // 招聘者首页
    {
      path: '/client/index',
      component: () => import('../views/Client/Index/index.vue'),
      name: 'index',
    },
    // 招聘者发布
    {
      path: '/client/open',
      component: () => import('../views/Client/Open/index.vue'),
      name: 'open',
    },
    // 我的雇佣
    {
      path: '/client/hire',
      component: () => import('../views/Client/Hire/index.vue'),
      name: 'hire',
    },
	// 最近浏览
	{
	  path: '/client/browse',
	  component: () => import('../views/Client/Browse/index.vue'),
	  name: 'browse',
	},
	// 收藏的人才
	{
	  path: '/client/collect',
	  component: () => import('../views/Client/Collect/index.vue'),
	  name: 'collect',
	},
    // 正在生效的商业咨询
    {
      path: '/client/effective-consult',
      component: () => import('../views/Client/Effective/consult.vue'),
      name: 'client-effective-consult',
    },
    // 正在生效的商业咨询
    {
      path: '/client/submit-consult',
      component: () => import('../views/Client/Effective/submit.vue'),
      name: 'client-submit-consult',
    },
    // 正在生效的商业咨询
    {
      path: '/client/historical-consult',
      component: () => import('../views/Client/Effective/historical.vue'),
      name: 'client-historical-consult',
    },
    // 筛选人才
    {
      path: '/client/search-talents',
      component: () => import('../views/Client/Search/talents.vue'),
      name: 'client-search-talents',
    },
    // 商业咨询
    {
      path: '/client/search-advice',
      component: () => import('../views/Client/Search/advice.vue'),
      name: 'client-search-advice',
    },
    // 审核中的工作
    {
      path: '/client/work-apply',
      component: () => import('../views/Client/Work/apply.vue'),
      name: 'client-work-apply',
    },
    // 所有工作
    {
      path: '/client/work-all',
      component: () => import('../views/Client/Work/all.vue'),
      name: 'client-work-all',
    },
    // 生效的工作
    {
      path: '/client/work-ing',
      component: () => import('../views/Client/Work/ing.vue'),
      name: 'client-work-ing',
    },

    // 为此项目付款页面
    {
      path: '/client/order-pay',
      component: () => import('../views/Client/Order/pay.vue'),
      name: 'client-order-pay',
    },
    // 客户端工作详情
    {
      path: '/client/order-details',
      component: () => import('../views/Client/Order/details.vue'),
      name: 'client-order-details',
    },
    // 客户端工作详情
    {
      path: '/client/member-statistics',
      component: () => import('../views/Client/Member/statistics.vue'),
      name: 'client-member-statistics',
    },

    // 设置-账户信息
    {
      path: '/client',
      component: () => import('../views/Client/Member/tag.vue'),
      name: 'client-member-tag',
      children:[
        {
          path: 'member-contact',
          component: () => import('../views/Client/Member/contact.vue'),
          name: 'client-member-contact',
        },
        {
          path: 'member-withdrawal',
          component: () => import('../views/Client/Member/withdrawal.vue'),
          name: 'client-member-withdrawal',
        },
        {
          path: 'member-security',
          component: () => import('../views/Client/Member/security.vue'),
          name: 'client-member-security',
        },
        {
          path: 'member-identity',
          component: () => import('../views/Client/Member/identity.vue'),
          name: 'client-member-identity',
        },
        {
          path: 'member-notice',
          component: () => import('../views/Client/Member/notice.vue'),
          name: 'client-member-notice',
        }
      ]
    },
    // 客户的页面结束工作
    {
      path: '/client/project-end',
      component: () => import('../views/Client/Project/end.vue'),
      name: 'client-project-end',
    },
    // 客户的页面一次性项目结束工作
    {
      path: '/client/only-end',
      component: () => import('../views/Client/Only/end.vue'),
      name: 'client-only-end',
    },
    // 客户点进自由职业者申请详情
    {
      path: '/client/job',
      component: () => import('../views/Client/Job/index.vue'),
      name: 'client-end',
    },
	// 我的钱包
	{
	  path: '/client/wallet',
	  name: 'client-wallet',
	  component: () => import('../views/Client/MyWallet/index.vue'),
	},
	// 提款日历
	{
	  path: '/client/withdrawal-calendar',
	  name: 'client-withdrawal-calendar',
	  component: () => import('../views/Client/WithdrawalCalendar/index.vue'),
	},
	// 交易记录
	{
	  path: '/client/transaction-log',
	  name: 'client-transaction-log',
	  component: () => import('../views/Client/TransactionLog/index.vue'),
	},
	// 提现
	{
	  path: '/client/withdrawals',
	  name: 'client-withdrawals',
	  component: () => import('../views/Client/Withdrawal/index.vue'),
	},
	// 自由职业者详情
	{
	  path: '/client/member-detail',
	  name: 'client-member-detail',
	  component: () => import('../views/Client/MemberDetail/index.vue'),
	},
  ]
  