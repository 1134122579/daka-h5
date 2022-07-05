/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/home/home.vue')
  },
  {
    path: '/detail',
    name: 'Detaile',
    component: () => import('@/views/detail/index.vue')
  },
  {
    path: '/imagelist',
    name: 'Imagelist',
    component: () => import('@/views/imagelist/index.vue')
  },
  {
    path: '/label',
    name: 'label',
    component: () => import('@/views/label/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('@/views/add/index.vue')
  },
  // {
  //   path: '/newculture',
  //   name: 'newCulture',
  //   component: () => import('@/views/company/newculture')
  // },
  {
    path: '*',
    redirect: '/'
    // hidden: true
  }
]
