import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import StatisticView from '../views/StatisticView.vue'
import BarView from '../views/BarView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: DashboardView
  },
  {
    path: '/statistic',
    name: 'stats',
    component: StatisticView
  },
  {
    path: '/bar',
    name: 'bar',
    component: BarView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
