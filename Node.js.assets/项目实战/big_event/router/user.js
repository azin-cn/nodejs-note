const express = require('express')
const router = express.Router()

/**
 * 用户路由模块，抽离路由处理函数
 */
const userHandler = require('../router_handler/user')

router.post('/register',userHandler.register)


router.post('/login', userHandler.login)

module.exports =  router