/* eslint-disable */

const path = require('path')
const { startDevServer } = require('@cypress/vite-dev-server')

module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config)

  on('dev-server:start', options => {
    return startDevServer({
      options,
      viteConfig: {
        configFile: path.resolve(__dirname, '../../vite.config.ts'),
      },
    })
  })

  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push('--disable-dev-shm-usage')
    }

    return launchOptions
  })

  return config
}
