import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'views/Dashboard'
import LoadingAnimation from 'views/LoadingAnimation'
import HoverAnimation from 'views/HoverAnimation'
import PanelAnimation from 'views/PanelAnimation'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/loadingAnimation',
    name: 'Loading 加载中效果',
    component: LoadingAnimation
  },
  {
    path: '/hoverAnimation',
    name: 'Hover 悬停效果',
    component: HoverAnimation
  },
  {
    path: '/panelAnimation',
    name: 'Panel 展板效果',
    component: PanelAnimation
  }
]

export default new Router({
  mode: 'history',
  base: '/vue-style-codebase/',
  routes
})
