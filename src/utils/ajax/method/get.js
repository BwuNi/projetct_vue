import {
    def_config, // 默认 ajax 配置
    system, // 系统
    origin,
    env,
    def_get_config
} from '../config'
import send_ajax from '../base/sendajax'
import cookie from 'js-cookie'

export default function get(_op = {}, path = '', sys = 'def') {
    // 添加 get 默认参数
    const op = Object.assign({}, def_get_config, _op)

    // 转换 url
    op.url = origin[env] + system[sys] + path
    op.type = 'GET'
    
    // 将 data 添加进 url
    if (op.data || op.data === '') {
        op.url = op.url + "?param=" + encodeURIComponent(convertData(op, op.data))
        op.data = null
    }
    return new Promise((res, rej) => {
        send_ajax(op, res, rej)
    })
}

function convertData(op, data = '') {

    if (op.encrypt)
        return JSON.stringify({
            data: data,
            token: cookie.get('LOGIN_KEY'),
            encrypt: true
        })
    else
        return JSON.stringify({
            data: data,
            token: cookie.get('LOGIN_KEY')
        })
}