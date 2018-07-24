import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'views/Dashboard'
import LoadingAnimation from 'views/LoadingAnimation'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/loadingAnimation',
    name: '加载动画',
    component: LoadingAnimation
  }
]

export default new Router({ routes })
