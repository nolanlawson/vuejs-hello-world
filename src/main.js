import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

sync(store, router)

Vue.config.productionTip = false

Promise.all([
  typeof IntersectionObserver === 'undefined' && import(/* webpackChunkName: "IntersectionObserver" */ 'intersection-observer'),
  typeof requestIdleCallback === 'undefined' && import(/* webpackChunkName: "requestIdleCallback" */ 'request-idle-callback')
]).then(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
  })
})
