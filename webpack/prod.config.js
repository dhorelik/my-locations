var path = require('path')
var appRoot = process.cwd()
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(appRoot, 'static', 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new ExtractTextPlugin(
            'bundle.css',
            { allChunks: true }
        ),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(appRoot, 'src')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?modules&importLoaders=2&sourceMap!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
                )
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader?name=img/img-[hash:6].[ext]'
            }
        ]
    }
}
