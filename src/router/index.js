import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import tahap3 from '../views/tahap3.vue'
import tahap2 from '../views/tahap2.vue'
import tahap1 from '../views/tahap1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/tahap3',
    name: 'tahap3',
    component: tahap3
  },
  {
    path: '/tahap2',
    name: 'tahap2',
    component: tahap2
  },
  {
    path: '/tahap1',
    name: 'tahap1',
    component: tahap1
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
