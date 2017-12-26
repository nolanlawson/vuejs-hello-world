import createApp from './createApp'

export default context => {
  const { app } = createApp()
  return app
}
