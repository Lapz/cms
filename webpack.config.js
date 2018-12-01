const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: "./src/main/js/index.js",
    devtool: "sourcemaps",
    cache:true,
    mode: "development",
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8888',
        'webpack/hot/only-dev-server',
        './src/main/js/index.js'
    ],

    "output": {
        path: __dirname,
        filename: "./src/main/resources/static/built/bundle.js"
    },
    optimization: {
       usedExports: true
    },
    devServer: {
        contentBase: path.join(__dirname, './src/main/resources/static'),
        compress: true,
        hot:true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        proxy: {

            "/": {
                target: {
                    host: "localhost",
                    protocol: 'http:',
                    port: 8080,
                },
                changeOrigin: true,
            },
            ignorePath: true,
            secure: false,
        }
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /(node_modules)/,
                use: [{
                    loader:'babel-loader',
                    options: {
                        presets: [ "@babel/preset-env", "@babel/preset-react"]
                    }
                }],

            },

        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ],

}