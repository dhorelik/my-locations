var path = require('path')
var appRoot = process.cwd()
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('../webpack/dev.config.js')

new WebpackDevServer(webpack(config), {
    contentBase: path.join(appRoot, 'static'),
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true }
}).listen(3000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err)
    }

    console.log('Listening at http://localhost:3000/')
})
