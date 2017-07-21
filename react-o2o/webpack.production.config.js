var pkg = require('./package.json')
var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: {
        app: path.resolve(__dirname, '/test.html'),
        //将第三方依赖单独打包
        vendor: Object.keys(pkg.dependencies)
    },
    output: {
        path: __dirname + '/build',
        filename: '/js/[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', 'jsx']
    },
    module: {
        rules: [{
                test: /\.('js|jsx')?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss!less')
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                lloader: ExtractTextPlugin.extract('style', 'css!postcss')
            },
            {
                test: /\.(png|gif|jpg|jpeg|bmp)$/i,
                loader: 'url-loader?limit=5000&name=img/[name].[chunkhash:8].[ext]'
            }, //限制大小5kb
            {
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                loader: 'url-loader?limit=5000&name=fonts/[name].[chunkhash:8].[ext]'
            }, //限制大小小于5k

        ]
    },
    plugins: [
        //产权标记
        new webpack.BannerPlugin("Copyright by dagen"),
        //html模板插件
        new HtmlWebpackPlugin({
            template: __dirname + 'test.html'
        }),
        //热加载插件
        new webpack.HotModuleReplacementPlugin(),
        //自动弹出浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),
        //定义为生产环境,编译react时压缩到最小
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        //为组件分配ID
        new webpack.optimize.OccurrenceOrderPlugin(),
        //代码压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        //分离CSS和JS文件
        new ExtractTextPlugin('/css/[name].[chunkhash:8].css'),
        //提取公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '/js/[name].[chunkhash:8].js'
        }),
        //可在业务js代码中使用__DEV__判断是否是dev模式（dev模式下提示）
        new webpack.DefinePlugin({
            __DEV__: false
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [autoprefixer]
                }
            }
        })
    ]
}