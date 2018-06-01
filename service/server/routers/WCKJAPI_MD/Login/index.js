const login = require('../../../utils/login')

module.exports = function(router) {
    router.post('/Login', async (ctx) => {
        let data = ctx.request.body,
            id = login.login(data.LOGIN)
        ctx.body = JSON.stringify({
            success: true,
            data: id
        })
    })
}