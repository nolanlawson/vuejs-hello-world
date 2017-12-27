import createApp from './createApp'

Promise.all([
  typeof IntersectionObserver === 'undefined' && import(/* webpackChunkName: "IntersectionObserver" */ 'intersection-observer'),
  typeof requestIdleCallback === 'undefined' && import(/* webpackChunkName: "requestIdleCallback" */ 'request-idle-callback')
]).then(() => {
  const { app } = createApp()
  if (process.env.NODE_ENV !== 'production') {
    const div = document.createElement('div')
    div.id = 'app'
    document.body.appendChild(div)
  }
  app.$mount('#app')
})
