import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Servicios from '../views/Servicios.vue'
import Contacto from '../views/Contacto.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/servicios', component: Servicios },
  { path: '/contacto', component: Contacto }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
