import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueCountdownTimer from 'vuejs-countdown-timer';
import i18n from '@/plugins/i18n'

import './scss/main.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCountdownTimer)


new Vue({
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
