export default [
  {
    // 搜索求职
    path: '/search/jon',
    name: 'search-jon',
    component: () => import('../views/SearchJon/index.vue'),
  },
  {
    // 搜索工作
    path: '/search/position',
    name: 'search-position',
    component: () => import ('../views/SearchPositions/index.vue'),
  },
  {
    // 搜索人才
    path: '/search/talents',
    name: 'search-talents',
    component: () => import ('../views/SearchTalents/index.vue'),
  },
]