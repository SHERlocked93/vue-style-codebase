import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'views/Dashboard'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/loading',
    name: '加载状态'
  }
]

export default new Router({ routes })
