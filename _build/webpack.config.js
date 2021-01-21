const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const paths = require("../paths");
const { presets, plugins } = require("./webpack.config.babel");
const copy = require("./webpack.config.copy");

module.exports = {
    entry: paths.resolveFromRoot("src/index.js"),
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
        new BundleAnalyzerPlugin({ analyzerMode: "static", openAnalyzer: false }),
        new CopyWebpackPlugin([...copy]),
        new ExtractTextPlugin("styles.css"),
        new HTMLWebpackPlugin({
            inject: false,
            template: paths.resolveFromRoot("src/index.html"),
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
            },
        }),
        new MomentLocalesPlugin(),
        new UglifyJsPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.[hash].js",
            minChunks (module) {
                if(module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
                    return false;
                }
                return module.context && module.context.includes("node_modules");
            },
        }),
    ],
};
