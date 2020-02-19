import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'

Vue.config.productionTip = false
console.log('这些环境变量是...', process.env)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
