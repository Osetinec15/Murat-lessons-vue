import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import 'normalize.css'
import 'reset-css'
import '@fortawesome/fontawesome-free/css/all.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
