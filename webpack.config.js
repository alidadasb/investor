var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/index.js",
    output: {
        path: DIST_DIR + "/",
        filename: "bundle.js",
        publicPath: "/"
    },
    resolve: {
        extensions: [ '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.svg$/,
                loaders: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2016']
                        }
                    },
                    {
                        loader: 'react-svg-loader',
                        query: {
                            jsx: true
                        }
                    }
                ]
            },
            {
                test: /\.js?$/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2016"]
                }
            },  {
                test: /\.jsx?$/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    cacheDirectory: true,
                    presets: ["react", "es2016"]
                }
            }
        ]
    }
};

module.exports = config;