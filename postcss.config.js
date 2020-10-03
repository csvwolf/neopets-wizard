const postcssPresetEnv = require('postcss-preset-env')
const postcssNested = require('postcss-nested')

const config = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 0
    }),
    postcssNested
  ]
})

module.exports = config
