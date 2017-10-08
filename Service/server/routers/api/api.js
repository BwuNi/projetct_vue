const Router = require('koa-router')

let api = new Router()

// 子路由1
api.get('/user', async (ctx)=>{
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html
})

module.exports = api