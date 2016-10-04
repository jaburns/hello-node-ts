const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
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
            { test: /\.tsx?$/, loader: 'ts-loader' }
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
