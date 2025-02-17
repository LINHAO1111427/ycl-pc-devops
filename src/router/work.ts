// 工作

export default [
  // 历史工作
  {
    path: '/work/historical',
    component: () => import('../views/HistoricalWork/index.vue'),
    name: 'historical',
  },
  {
    // 正在的工作
    path: '/work/effective',
    name: 'effective',
    component: () => import('../views/EffectiveWork/index.vue'),
  },
  {
    // 我的合同
    path: '/work/my',
    name: 'work-my',
    component: () => import('../views/MyWork/index.vue'),
  },
  {
    // 搜索求职
    path: '/work/search',
    name: 'work-search',
    component: () => import('../views/SearchJon/index.vue'),
  },
]
