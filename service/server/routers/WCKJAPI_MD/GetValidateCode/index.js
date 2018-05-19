const imgs = require('./imgs')

module.exports = function (router) {
    router.get('/GetValidateCode/:data', async (ctx) => {
        let postData = ctx.request.body,
            url = ctx.request.url,
            arr = url.split('/'),
            data = JSON.parse(
                decodeURIComponent(arr[arr.length - 1])
            ).data
    
        ctx.response['content-disposition']= 'attachment; filename="v.jpeg"'
        ctx.response['Content-Type']= 'application/vnd.ms-word'
    
        // ctx.body = JSON.stringify(ctx.response)
        ctx.body = JSON.stringify({
          success:true,
          data:imgs[Math.floor(Math.random()*(imgs.length))].img
        })
    })
    
}