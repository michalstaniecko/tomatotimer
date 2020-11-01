import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueCountdownTimer from 'vuejs-countdown-timer';

import './scss/main.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCountdownTimer)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
