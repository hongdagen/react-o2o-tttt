var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, './src/index.jsx'),
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader",
                    options: {
                        plugins: (loader) => [
                            require('autoprefixer')()
                        ]
                    }
                }, {
                    loader: "less-loader"
                }],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader",
                    options: {
                        plugins: (loader) => [
                            require('autoprefixer')()
                        ]
                    }
                }]
            },
            {
                test: /\.(png|gif|jpg|jpeg|bmp)$/i,
                loader: 'url-loader?limit=5000'
            }, //限制大小5kb
            {
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                loader: 'url-loader?limit=5000'
            }, //限制大小小于5k
        ]
    },
    //webpack-dev-server的配置
    devServer: {
        proxy: {
            "/api/": {
                target: "http://localhost:3000/",
                secure: false,
                changeOrigin: true
            }
        },
        // color: true, //终端中输出为彩色
        historyApiFallback: true, //不跳转
        inline: false, //实时刷新
        hot: true //使用热加载插件
    },
    plugins: [
        //html模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html'
        }),
        //热加载插件
        new webpack.HotModuleReplacementPlugin(),
        //自动弹出浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),
        //可在业务js代码中使用__DEV__判断是否是dev模式（dev模式下提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        }),
    ]
}