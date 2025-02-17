export default [
  // 用户设置
  {
    path: '/user-set',
    name: 'user-set',
    component: () => import('../views/UserSet/index.vue'),
    children: [
      // 提现
      {
        path: 'withdrawal',
        name: 'withdrawal',
        component: () => import('../views/UserSet/Withdrawal/index.vue'),
      },
      // 联系方式
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../views/UserSet/Contact/index.vue'),
      },
      // 密码安全
      {
        path: 'security',
        name: 'security',
        component: () => import('../views/UserSet/Security/index.vue'),
      },
      // 税务信息
      {
        path: 'tax',
        name: 'tax',
        component: () => import('../views/UserSet/Tax/index.vue'),
      },
      // 个人资料设置
      {
        path: 'personal',
        name: 'personal',
        component: () => import('../views/UserSet/Personal/index.vue'),
      },
      {
        name: 'identity',
        path: 'identity',
        component: () => import('../views/UserSet/Identity/index.vue'),
      },
      {
        name: 'notice',
        path: 'notice',
        component: () => import('../views/UserSet/Notice/index.vue'),
      },
    ],
  },
]
