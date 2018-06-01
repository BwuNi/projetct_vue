const Router = require('koa-router')
let api = new Router()

require('./GetValidateCode')(api)
require('./GetPubKey')(api)
require('./Login')(api)
require('./GetMyMenuTops')(api)
require('./GetMyMenuChilds')(api)



module.exports = api