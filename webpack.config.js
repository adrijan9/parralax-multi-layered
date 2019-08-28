const path = require("path"),
    webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    extractPlugin = new ExtractTextPlugin({
        filename: "css/main.css"
    }),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        "parralax-ml": "./src/_js/parralax-ml.js",
        main: "./src/_js/main.js"
    },
    output: {
        path: path.resolve(__dirname, "www"),
        library: "ParallaxML",
        libraryExport: "default",
        libraryTarget: 'umd',
        umdNamedDefine: true,
        filename: '[name].[hash:8].js',
        sourceMapFilename: '[name].[hash:8].map',
        chunkFilename: '[id].[hash:8].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'www'),
        compress: false,
        port: 3000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env"
                            ],
                            "plugins": [
                                [
                                    "@babel/plugin-proposal-class-properties"
                                ]
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                })
            },
            {
                test: /\.html$/,
                use: [
                    "html-loader"
                ]
            },
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader"
            },
            // {
            //     test: /\.html$/,
            //     use: [
            //         {
            //             loader: "file-loader",
            //             options: {
            //                 name: "[name].[ext]"
            //             }
            //         }
            //     ],
            //     exclude: path.resolve(__dirname, "_html/index.html")
            // }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['www']
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                handlebarsLoader: {}
            }
        }),
        extractPlugin,
        // new HtmlWebpackPlugin({
        //     filename: "_html/index.html",
        //     template: "_html/index.html"
        // }),
        new HtmlWebpackPlugin({
            title: 'Index',
            template: './src/_hbs/index.handlebars'
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/_assets/fonts',
                to: "fonts"
            },
            {
                from: 'src/_assets/images',
                to: "images"
            }
        ])
    ]
};