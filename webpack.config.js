const isProd = process.env.NODE_ENV === 'production'

module.exports = require(`./build/configs/webpack.config.${isProd ? 'prod' : 'dev'}`)
