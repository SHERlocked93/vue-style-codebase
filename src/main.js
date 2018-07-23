import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

import 'styles/index.scss'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small' })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
