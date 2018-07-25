import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'views/Dashboard'
import LoadingAnimation from 'views/LoadingAnimation'
import HoverAnimation from 'views/HoverAnimation'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/loadingAnimation',
    name: 'Loading 效果',
    component: LoadingAnimation
  },
  {
    path: '/hoverAnimation',
    name: 'Hover 效果',
    component: HoverAnimation
  }
]

export default new Router({ routes })
