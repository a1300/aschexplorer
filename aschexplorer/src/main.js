// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// extern
import { AtomSpinner } from 'epic-spinners'
import LoadingIndicator from '@/components/LoadingIndicator.vue'
import VueCollapse from 'vue2-collapse'
import { headroom } from 'vue-headroom'
import i18n from '@/localization/index'

Vue.config.productionTip = false

Vue.component('atom-spinner', AtomSpinner)
Vue.use(VueCollapse)
Vue.component('loading-indicator', LoadingIndicator)
Vue.component('headroom', headroom)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  i18n
})
