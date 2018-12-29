//这是main.js是我们项目的入口文件
//1.导入jquery
// import ***from***是es6中导入模块的方式
//由于es6的代码，太高级浏览器解析不了，所以这一行代码
import  $  from  'jquery'

import './css/index.css'
import './css/index.less'
import './css/index.scss'

$(function(){
  $('li:odd').css('backgroundColor','yellow')
  $('li:even').css('backgroundColor',function(){
    return '#'+'D97634'
  })
})