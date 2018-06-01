module.exports = async function decrypt(ctx, next) {
    if (
        ctx.request &&
        ctx.request.method == 'GET' &&
        (
            JSON.stringify(ctx.request.body) == "{}" ||
            !ctx.request.body
        )
    ) {
        if(ctx.request.url.split('?param=')[1]){

            ctx.request.body = JSON.parse(
                decodeURIComponent(ctx.request.url.split('?param=')[1])
            )
        }
        await next()
    } else {
        await next()
    }
}