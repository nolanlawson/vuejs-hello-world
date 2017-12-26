import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

sync(store, router)

Vue.config.productionTip = false

export default () => {
  const app = new Vue({
    store,
    router,
    render: h => h(App)
  })
  return { app }
}
