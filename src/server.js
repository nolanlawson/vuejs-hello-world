const fs = require('fs')
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')
const json = require('../dist/vue-ssr-server-bundle.json')
const template = fs.readFileSync(path.join(__dirname, './index.html'), 'utf8')

const renderer = createBundleRenderer(json, {
  runInNewContext: true,
  template
})

const context = { url: '/' }

renderer.renderToString(context, (err, html) => {
  if (err) {
    console.error(err)
    process.exit(1)
  } else {
    fs.writeFileSync(path.join(__dirname, '../index.html'), html, 'utf8')
    process.exit(0)
  }
})
