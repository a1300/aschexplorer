// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// extern
import { AtomSpinner } from 'epic-spinners'
import LoadingIndicator from '@/components/LoadingIndicator.vue'
import VueCollapse from 'vue2-collapse'

Vue.config.productionTip = false

Vue.component('atom-spinner', AtomSpinner)
Vue.use(VueCollapse)
Vue.component('loading-indicator', LoadingIndicator)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
