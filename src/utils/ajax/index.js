import {
    def_config, // 默认 ajax 配置
    system // 系统
} from './config'

import _ajax from './_ajax'



const
    ajax = {},
    env = window.globConfig.envirnment ? window.globConfig.envirnment : 'dev',
    origin = window.globConfig.ajax_origin ? window.globConfig.ajax_origin : {
        prod: 'http://139.129.237.60:1102/',
        dev: 'http://127.0.0.1:1102/'
    }

    console.log(window.globConfig.ajax_origin)

ajax.get = (path = '', data, sys = 'def', option = {}) => (

    new Promise((res, rej) => {
        // 调用基础 ajax 模块
        _ajax(
            Object.assign({
                url: origin[env] + system[sys] + path,
                data,
                type: 'GET'
            }, option)
        ).then((data) => {
            // json 数据处理
            if (typeof data === 'string')
                JSON.parse(data)
            //
            if (data.success)
                res(data)
            else
                rej(data)
        }).catch(rej)
    })
)


ajax.post = (path = '', data = '', sys = 'def', option = {}) => {

    return new Promise((res, rej) => {
        // 调用基础 ajax 模块
        _ajax(
            Object.assign({
                url: origin[env] + system[sys] + path,
                data: JSON.stringify({
                    param: JSON.stringify({
                        data,
                        token: ''
                    })
                }),
                type: 'POST'
            }, option)
        ).then((data) => {
            // json 数据处理
            if (typeof data === 'string')
                JSON.parse(data)
            //
            if (data.success)
                res(data)
            else
                rej(data)
        }).catch(rej)
    })
}


export default ajax