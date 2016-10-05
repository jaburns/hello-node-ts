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
            {
                loader: 'source-map-loader' ,
                test: /\.js$/,
                exclude: [
                    path.resolve('../node_modules/node-uuid')
                ]
            }
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
