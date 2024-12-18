import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import StartView from '../views/StartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/McProfile01',
      name: 'McProfile01',
      component: () => import('../views/McProfile01.vue'),
    },
    {
      path: '/McProfile02',
      name: 'McProfile02',
      component: () => import('../views/McProfile02.vue'),
    },
    {
      path: '/McProfile03',
      name: 'McProfile03',
      component: () => import('../views/McProfile03.vue'),
    },
    {
      path: '/McProfile04',
      name: 'McProfile04',
      component: () => import('../views/McProfile04.vue'),
    },
    {
      path: '/McProfile05',
      name: 'McProfile05',
      component: () => import('../views/McProfile05.vue'),
    },
    {
      path: '/McProfile06',
      name: 'McProfile06',
      component: () => import('../views/McProfile06.vue'),
    },
    {
      path: '/McProfile07',
      name: 'McProfile07',
      component: () => import('../views/McProfile07.vue'),
    },
    {
      path: '/McProfile08',
      name: 'McProfile08',
      component: () => import('../views/McProfile08.vue'),
    },
    {
      path: '/McProfile09',
      name: 'McProfile09',
      component: () => import('../views/McProfile09.vue'),
    },
    {
      path: '/McProfile10',
      name: 'McProfile010',
      component: () => import('../views/McProfile10.vue'),
    },
    {
      path: '/McProfile11',
      name: 'McProfile011',
      component: () => import('../views/McProfile11.vue'),
    },
    {
      path: '/McProfile12',
      name: 'McProfile012',
      component: () => import('../views/McProfile12.vue'),
    },

  ],
})

export default router
