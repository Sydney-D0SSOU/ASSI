import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueCircle from 'vue2-circle-progress'


Vue.component('vue-circle', VueCircle)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
