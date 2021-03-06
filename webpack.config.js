const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports ={
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    plugins: [new HtmlWebpackPlugin()],
    mode: 'production',
};