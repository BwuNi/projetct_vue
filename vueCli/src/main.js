
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import Element from 'element-ui'
import Globel_Comp from '@/components/common/globel/globel'

import '../src/less/element/theme/index.css'
import './less/index.less'

Vue.config.productionTip = false


Vue.use(Element)

Vue.use(Globel_Comp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
