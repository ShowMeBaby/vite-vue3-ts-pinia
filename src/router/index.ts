import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  { path: '/login', name: 'LoginPage', meta: { title: '登录', keepAlive: true, requireAuth: false }, component: () => import('@/pages/loginPage.vue') },
  { path: '/', name: 'IndexPage', meta: { title: '首页', keepAlive: true, requireAuth: true }, component: () => import('@/pages/indexPage.vue') },
  { path: '/vueUse', name: 'VueUse', meta: { title: 'vueUse demo', keepAlive: true, requireAuth: true }, component: () => import('@/pages/vueUse.vue') },
  { path: '/request', name: 'RequestPage', meta: { title: 'request demo', keepAlive: true, requireAuth: true }, component: () => import('@/pages/requestPage.vue') },
  { path: '/gamelist', name: 'GameListPage', meta: { title: 'request demo', keepAlive: true, requireAuth: true }, component: () => import('@/pages/gameListPage.vue') },
  {
    path: '/tailwindcss',
    name: 'TailwindcssPage',
    meta: { title: 'tailwindcss demo', keepAlive: true, requireAuth: true },
    component: () => import('@/pages/tailwindcssPage.vue')
  },
  { path: '/touchview', name: 'TouchView', meta: { title: 'tailwindcss demo', keepAlive: true, requireAuth: true }, component: () => import('@/pages/touchView.vue') }
]
const router = createRouter({ history: createWebHistory(), routes })
export default router
