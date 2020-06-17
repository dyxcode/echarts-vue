import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/coronavirus'
  },
  {
    path: '/barchart',
    name: 'barchart',
    component: () => import('../views/barchart/Barchart')
  },
  {
    path: '/horizontalbarchart',
    name: 'horizontalbarchart',
    component: () => import('../views/horizontalbarchart/HorizontalBarchart')
  },
  {
    path: '/linechart',
    name: 'linechart',
    component: () => import('../views/linechart/Linechart')
  },
  {
    path: '/steplinechart',
    name: 'steplinechart',
    component: () => import('../views/steplinechart/StepLinechart')
  },
  {
    path: '/piechart',
    name: 'piechart',
    component: () => import('../views/piechart/Piechart')
  },
  {
    path: '/rosechart',
    name: 'rosechart',
    component: () => import('../views/rosechart/Rosechart')
  },
  {
    path: '/coronavirus',
    name: 'coronavirus',
    component: () => import('../views/coronavirus/Coronavirus')
  },
  {
    path: '/userboard',
    name: 'userboard',
    component: () => import('../views/userboard/UserBoard')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router