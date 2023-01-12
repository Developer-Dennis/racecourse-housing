import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from  '../views/AboutView.vue'
import Services from '../views/services.vue'
import Houses from '../views/houses.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path:  '/services',
    name:  'services',
    component: Services
  },
  {
    path: '/houses',
    name:  'houses',
    component: Houses,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
