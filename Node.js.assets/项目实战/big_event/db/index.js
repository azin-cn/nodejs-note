/**
 * 数据库服务模块
 */

// 导入中间件
const mysql = require('mysql')

// 创建服务实例，也就是连接池，注意这里的配置和Java中的不一样，指定数据库
const db = mysql.createPool({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'wmf74520',
  database: 'web'
})

// 暴露接口
module.exports = db