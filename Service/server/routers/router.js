const Router = require('koa-router')

const
    WCKJAPI_MD = require('./WCKJAPI_MD/index')

let router = new Router()

router.use('/WCKJAPI_MD', WCKJAPI_MD.routes(), WCKJAPI_MD.allowedMethods())

module.exports = router