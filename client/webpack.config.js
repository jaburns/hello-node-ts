const webpack = require('webpack')
    , path = require('path')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: './build/js',
        filename: 'app.js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
        ],
        preLoaders: [
            { test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    plugins: [
    //  new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter',
        'react-redux': 'ReactRedux',
        'redux': 'Redux'
    }
};
