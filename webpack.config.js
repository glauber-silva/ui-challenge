'use strict'

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugins = require('extrat-text-webpack-plugin');

const GLOBAL = {
    'process.env.NODE_ENV': JSON.stringify('production')
};

const PROD = process.env.NODE_ENV === 'production';

module.exports = {
    debug: true,
    devtool: PROD ? 'source-map' : 'eval-source-map',
    noInfo: false,
    entry: PROD ? './src/index' :
    [
        'webpack-hot-middleware/client?reload=true',
        './src/index'
    ],
    target:'web',
    output: {
        path: PROD ? __dirname + '/build' : __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: PROD ? './build' : './public'
    },
    plugins: PROD ?
    [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBASL),
        new ExtractTextPlugins('bundle.css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({compress:{warnings: false}})
    ] :
    [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders:[
            {test: /\.js$/, include:path.join(__dirname, 'src'), loaders:['babel']},
            {
                test: /\.css$/,
                loader: PROD ?
                    ExtractTextPlugins.extract('style', 'css?sourceMap'):
                    'style!css?sourceMap'
            },
            {
                test: /\.scss$/,
                loader: PROD ?
                ExtractTextPlugins.extract('style', 'css?sourceMap!resolve-url!sass?sourceMap'):
                'style!css?sourceMap!resolve-url!sass?sourceMap'   
            },
            {
                test: /\.(svg|png|jpe?g|gif)(\?\S*)?$/,
                loader: 'url?limit=100000&name=img/[name].[ext]'
            },
            {
                test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/, 
                loader: 'url?limit=100000&name=fonts/[name].[ext]'
            }
        ]
    },
    sassLoader: {
        includePaths:[path.resolve('./src')]
    },
    resolve: {
        root: [path.resolve('./src')]
    }
};