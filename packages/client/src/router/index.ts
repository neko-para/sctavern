import TestGameVue from '@/views/TestGame.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tg',
      component: TestGameVue,
    },
  ],
})

export default router
