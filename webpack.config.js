const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    // Where files should be sent once they are bundled
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: 'eval-cheap-module-source-map'
};