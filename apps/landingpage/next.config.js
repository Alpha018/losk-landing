/* eslint-disable @typescript-eslint/no-var-requires */
const { apiEnv, params } = require('../../libs/config/src')

module.exports = {
  env: {
    ...apiEnv,
    ...params
  },
  devIndicators: {
    autoPrerender: false
  },
}
