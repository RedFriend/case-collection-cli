// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from "axios";
import qs from 'qs'
import depot from './axios/api.js'
import Vuex from 'vuex'
import store from './vuex/store'


import $ from 'jquery'

Vue.config.productionTip = false
Vue.prototype.qs = qs
axios.defaults.baseURL='http://146.12.14.248:9090/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
depot()


Vue.prototype.axios=axios
Vue.use(ElementUI)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
