import { createRouter, createWebHistory } from 'vue-router'
import Warehouse from '@/views/Warehouse.vue'
import Favorites from '@/views/Favorites.vue'
import Deals from '@/views/Deals.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'warehouse',
      component: Warehouse
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    },
    {
      path: '/deals',
      name: 'deals',
      component: Deals
    }
  ]
})

export default router
