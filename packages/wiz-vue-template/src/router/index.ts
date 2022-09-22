/*
 * @Copyright © 2022 WIZ Holdings PTE. LTD. All rights reserved: 
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/index.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/crud',
        name: 'crud',
        component: () => import('@/pages/crud/index.vue'), // 注意这里要带上 文件后缀.vue
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
