import createApp from './createApp'

Promise.all([
  typeof IntersectionObserver === 'undefined' && import(/* webpackChunkName: "IntersectionObserver" */ 'intersection-observer'),
  typeof requestIdleCallback === 'undefined' && import(/* webpackChunkName: "requestIdleCallback" */ 'request-idle-callback')
]).then(() => {
  const { app } = createApp()
  app.$mount('#app')
})
