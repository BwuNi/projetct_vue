import {
    def_config, // 默认 ajax 配置
    system, // 系统
    origin,
    env
} from '../config'

import send_ajax from '../base/sendajax'
import cookie from 'js-cookie'

export default function post(op = {}, path = '', sys = 'def') {
    op.url = origin[env] + system[sys] + path
    op.type = 'POST'

    return new Promise((res, rej) => {
        send_ajax(op, res, rej, convertData)
    })

}

function convertData(op, data) {

    if (op.encrypt)
        return JSON.stringify({
            param: JSON.stringify({
                data: data,
                token: cookie.get('LOGIN_KEY'),
                encrypt: true
            })
        })
    else
        return JSON.stringify({
            param: JSON.stringify({
                data: data,
                token: cookie.get('LOGIN_KEY')
            })
        })
}