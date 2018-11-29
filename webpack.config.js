const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    // entry: "./src/index.js",
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "build", "index.html")
            // template: "build/index.html",
            // filename: "./index.html"
        }),
        new CopyWebpackPlugin([
            // Copy directory contents to {output}/to/directory/
            { from: path.join(__dirname, "src", "assets") }
        ])
    ],
    devServer: {
        contentBase: "./build",
        hot: true
    },
    devtool: "source-map"
};
