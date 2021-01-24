const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public'),
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};
