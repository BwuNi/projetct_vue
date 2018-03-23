const Koa = require('koa') 
const cors = require('koa2-cors')  // 跨域
const bodyParser = require('koa-bodyparser')  // 解析请求
const koaLogger = require('koa-logger')  // 日志
const convert = require('koa-convert') // 适配 koa1 的中间件
const crypto = require('crypto')  // 加密
const session = require('koa-session-minimal') // session


const router = require('./routers/router') 



module.exports =  (app) => {

    // 跨域配置
    app.use(cors())

    // 配置控制台日志中间件
    app.use(convert(koaLogger()))

    // 配置ctx.body解析中间件
    app.use(bodyParser())

    // 加载路由中间件
    app.use(router.routes()).use(router.allowedMethods())

    // 应用处理 session 的中间件
    app.use(session({
        key: 'USER_SID',          // cookie 中存储 session-id 时的键名, 默认为 koa:sess
        cookie: {                   // 与 cookie 相关的配置
            domain: 'localhost',    // 写 cookie 所在的域名
            path: '/',              // 写 cookie 所在的路径
            maxAge: 1000 * 30,      // cookie 有效时长
            httpOnly: true,         // 是否只用于 http 请求中获取
            overwrite: false        // 是否允许重写
        }
    }))
}

