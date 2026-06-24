import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/Blog.vue'),
    },
    {
      path: '/series/ai-learn',
      name: 'ai-learn',
      component: () => import('../views/series/AiLearn.vue'),
    },
    {
      path: '/series/vue-source',
      name: 'vue-source',
      component: () => import('../views/series/VueSource.vue'),
    },
    {
      path: '/series/react-source',
      name: 'react-source',
      component: () => import('../views/series/ReactSource.vue'),
    },
  ],
})

export default router
