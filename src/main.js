import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "normalize.css";
import echarts from 'echarts'
import 'echarts-liquidfill/src/liquidFill.js';
import "./assets/js/flexible"

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
