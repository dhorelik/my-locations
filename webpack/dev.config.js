var path = require('path')
var appRoot = process.cwd()
var webpack = require('webpack')

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(appRoot, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(appRoot, 'src')
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=_[hash:base64:5]__[local]',
                    'sass?sourceMap'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader?name=img/img-[hash:6].[ext]'
            }
        ]
    }
}
