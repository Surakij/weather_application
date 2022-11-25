const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/sum.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
        environment: {
            arrowFunction: false,
        }
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "index.html",
    })],
    devServer: {
        compress: true,
        port: 9000,
    },
};
