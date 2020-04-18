import Vue from 'vue'
import router from './router'
import App from './App.vue'
Vue.config.devtools = true
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
