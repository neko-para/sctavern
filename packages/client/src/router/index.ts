import { createRouter, createWebHashHistory } from 'vue-router'
import RootMenu from '@/views/RootMenu.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: RootMenu,
    },
    {
      path: '/local/config',
      name: 'local-config',
      component: () => import('@/views/LocalGameSetup.vue'),
    },
    {
      path: '/local/player',
      name: 'local-player',
      component: () => import('@/views/LocalGame.vue'),
      props: route => ({ config: JSON.parse(route.query.config as string) }),
    },
    {
      path: '/debug',
      name: 'debug',
      component: () => import('@/views/TestGame.vue'),
    },
  ],
})

export default router
