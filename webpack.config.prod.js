const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    // Where files should be sent once they are bundled
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: false,
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 
                        {   loader: 'style-loader'}, 
                        {   loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: {
                                    localIdentName: '[name]__[local]__[hash:base64:5]'
                                } 
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: () => [autoprefixer()],
                                },
                            }
                        }
                    ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [  new HtmlWebpackPlugin({ 
                    template: __dirname + '/src/index.html',
                    filename: 'index.html',
                    inject: 'body' 
                }) 
    ],
};
