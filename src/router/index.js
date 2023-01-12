import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from  '../views/AboutView.vue'
import Services from '../views/services.vue'
import Houses from '../views/houses.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },

  {
    path: '/about',
    name: 'about',
    component: About,
  },

  {
    path:  '/services',
    name:  'service_page',
    component: Services,
  },

  {
    path: '/houses',
    name:  'house_page',
    component: Houses,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
