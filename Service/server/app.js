const Koa = require('koa') 
const init = require('./init')
const { encode, decode } = require('./utils/code') 


const app = new Koa()

init(app)

app.use(async (ctx, next) => {
    if (ctx.url === '/cookie') {

        if (ctx.cookies.get('cid')) {
            ctx.body = `cookie is "${decode(ctx.cookies.get('cid'))}"`
        } else {
            ctx.cookies.set(
                'cid',
                encode('hello world'),
                {
                    domain: 'localhost',  // 写cookie所在的域名
                    path: '/index',       // 写cookie所在的路径
                    maxAge: 10 * 60 * 1000, // cookie有效时长
                    expires: new Date('2017-02-15'),  // cookie失效时间
                    httpOnly: false,  // 是否只用于http请求中获取
                    overwrite: false  // 是否允许重写
                }
            )
            ctx.body = 'cookie is ok'
        }
    } else {
        next()
    }

})


app.use(async (ctx) => {

    if (ctx.url === '/get' && ctx.method === 'GET') {
        // 当GET请求时候返回表单页面
        let html = `
          <h1>koa2 request post demo</h1>
          <form method="POST" action="/">
            <p>userName</p>
            <input name="userName" /><br/>
            <p>nickName</p>
            <input name="nickName" /><br/>
            <p>email</p>
            <input name="email" /><br/>
            <button type="submit">submit</button>
          </form>
        `
        ctx.body = html
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        // 当POST请求的时候，中间件koa-bodyparser解析POST表单里的数据，并显示出来
        let postData = ctx.request.body
        ctx.body = postData
    } else {
        // 其他请求显示404
        // ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
    }
})


app.listen(8081)
console.log('[demo] start-quick is starting at port 8081')
