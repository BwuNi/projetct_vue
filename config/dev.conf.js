const 
    base = require('./base.conf'),
    merge = require('webpack-merge'),
    utils = require('./utils')

module.exports = merge(base, {
    module:{
        rules:utils.styleLoader()
    },
    devServer: {
        hot:true,
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
})
