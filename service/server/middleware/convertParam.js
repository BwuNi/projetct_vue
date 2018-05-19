module.exports = async function convertParam(ctx, next) {
    if (
        ctx.request &&
        ctx.request.body &&
        typeof ctx.request.body === 'object' &&
        ctx.request.body.param &&
        typeof ctx.request.body.param === 'string'
    ) {
        ctx.request.body = JSON.parse(ctx.request.body.param)
    }
    await next()
}
