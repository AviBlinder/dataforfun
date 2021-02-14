import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Google Analytics 
// Vue.use(VueAnalytics, {
//     id: 'UA-57147400-2',
//     router
// }

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
