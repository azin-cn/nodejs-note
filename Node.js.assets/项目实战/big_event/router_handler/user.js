/**
 * 用户路由处理函数
 */
const db = require('../db/index') // 数据库服务
const bcryptjs = require('bcryptjs') // 密码加密服务



const queryUser = 'select * from user where username=? and password=?'
const insertUser = 'insert into user vlaues set ?'

exports.register = (req,res) => {
  const userinfo = req.body
  console.log(userinfo);
  if(!userinfo || !userinfo.username || !userinfo.password) {
    res.send({status: 1, meessage: '用户名或密码不合法', data: {}})
  }

  db.query(queryUser, [userinfo.username, userinfo.password], (error, result)=> {
    
    if(error) res.send({status: 1, message: '发生未知错误', data: {}})
    if(result.length>0) {
      res.send({status: 1, message: '用户名已被占用', data: {}})
    }
    
    // 正常插入用户流程
    userinfo.password = bcryptjs.hashSync(userinfo.password,10)
    
    console.log(userinfo.password);
    
    db.query(insertUser,[userinfo.username,userinfo.password],(error,result) => {
      if(error) res.send({status: 1, message: '发生未知错误', data: {}})
      res.send({status: 0, message: '注册成功', data: {result}})
    })
  })
}

exports.login = (req, res) => {
  res.send('login')
}