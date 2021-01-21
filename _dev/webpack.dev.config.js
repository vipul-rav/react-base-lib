const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const paths = require("../paths");
const { presets, plugins } = require("../_build/webpack.config.babel");
const copy = require("../_build/webpack.config.copy");

module.exports = {
    devServer: {
        contentBase: paths.resolveFromRoot("dist"),
        hot: true,
        open: true,
    },
    devtool: "eval-source-map",
    entry: paths.resolveFromRoot("src/baseApp.js"),
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        babelrc: false,
                        presets,
                        plugins,
                    },
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",         
                }),
            },
        ],
    },
    output: {
        filename: "[name].[hash].js",
        path: paths.resolveFromRoot("dist"),
    },
    plugins: [
        new CopyWebpackPlugin([...copy]),
        new ExtractTextPlugin("styles.css"),
        new HTMLWebpackPlugin({
            inject: false,
            template: paths.resolveFromRoot("src/index.html"),
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development"),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
};
