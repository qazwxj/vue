//wepack配置文件
const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './src/main.js'),// 入口，表示，要使用 webpack 打包哪个文件
  output: { // 输出文件相关的配置
    path: path.join(__dirname, '/dist'), // 指定 打包好的文件，输出到哪个目录中去
    filename: 'bundle.js' // 这是指定 输出的文件的名称
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port:3000,
    open:true,
    hot:true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  module: { // 这个节点，用于配置 所有 第三方模块 加载器 
    rules: [ // 所有第三方模块的 匹配规则
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //  配置处理 .css 文件的第三方loader 规则
      { test: /\.less$/, use: ['style-loader', 'css-loader','less-loader'] }, 
      { test: /\.scss$/, use: ['style-loader', 'css-loader','less-loader','sass-loader'] },
      {
        test: /\.(png|jpg|gif|jpeg|bmp|webp)$/,
        use: ['url-loader?limit=8192&name=[hash:8]-[name].[ext]']
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 8192 // 限制 单位为byte  8192字节是8KB
        //     }
        //   }
        // ]
      
      },
    ]
  },
 
 
  mode: 'development'
};
  
