import createApp from './createApp'

export default context => {
  return Promise.resolve().then(() => {
    const { app, router } = createApp()

    router.push(context.url)

    return new Promise((resolve, reject) => router.onReady(resolve, reject)).then(() => {
      const matchedComponents = router.getMatchedComponents()
      // no matched routes, reject with 404
      if (!matchedComponents.length) {
        throw new Error(`404 for url ${context.url}`)
      }
      return app
    })
  })
}
