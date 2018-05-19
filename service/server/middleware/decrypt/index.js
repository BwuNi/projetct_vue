const
    getKey = require('./getKey')
jsdecrypt = require('jsdecrypt');


module.exports = async function decrypt(ctx, next) {
    if (
        ctx.request &&
        ctx.request.body &&
        typeof ctx.request.body === 'object' &&
        ctx.request.body.encrypt &&
        ctx.request.body.data
    ) {
        ctx.request.body = JSON.parse(
            jsdecrypt.dec(
                await getKey(),
                ctx.request.body.data)
        )
        await next()
    } else {
        await next()
    }
}