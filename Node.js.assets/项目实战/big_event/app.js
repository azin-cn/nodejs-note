const express = require('express')
const app = express()


// 允许跨域模块
const cors = require('cors')

// 用户路由模块
const userRouter = require('./router/user')

/**
 * 用户自定义中间件，添加响应头使用utf8，利用共享一次请求想啊应对象
 */
app.use((req, res,next) => {
  res.setHeader('Content-type','text/html;charset=utf8')
  next()
})

/**
 * 开启解析post请求的中间件
 * 
 * 解析 xml/application
 * 解析 json
 */
app.use(express.urlencoded({extended: false}))
app.use(express.json())

/**
 * 使用cors中间件解决跨域问题，注意cors生成记得加括号
 */
app.use(cors()) 
app.use('/user',userRouter)


/**
 * 监听80端口
 */
app.listen(80, () => {
  console.log('server running at http://loaclhost')
})