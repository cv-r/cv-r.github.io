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
  ],
})

export default router
