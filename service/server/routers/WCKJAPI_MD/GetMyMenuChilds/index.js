const msg = require('./list')

module.exports = function(router) {
    router.get('/GetMyMenuChilds', async (ctx) => {
        if (ctx.request.body.data) {

            ctx.body = JSON.stringify(
                msg[ctx.request.body.data]
            )
        }
    })

}