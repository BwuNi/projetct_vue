const createKey = require('./createKey')

module.exports = function (router) {
    router.get('/GetPubKey', async (ctx) => {
        key = await createKey()
        ctx.body = JSON.stringify({
          success:true,
          data:key
        })
    })
}