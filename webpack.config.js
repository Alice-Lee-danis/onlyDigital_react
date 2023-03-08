const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: [
        '@babel/polyfill',
        './src/index.tsx'
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer:{
        port:3000
    },
    module: {
        rules: [
           
            {
                test:/\.(css|scss)?$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.(jpg|jpeg|png|svg)?$/,
                use:'file-loader'
            },
            {
                test: /\.tsx$/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"]
                  }
                }
            },
            {
            test: /\.ts$/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
            },
        ]
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HTMLWebpackPlugin({template:"./src/index.html"}),
        new CleanWebpackPlugin()
    ],
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
    }
}