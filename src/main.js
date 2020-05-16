import Vue from 'vue'
import ECharts from 'vue-echarts'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts-gl'

Vue.component('v-chart', ECharts)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// vue.config.js
module.exports = {
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ]
}
