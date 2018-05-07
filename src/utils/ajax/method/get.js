import {
    def_config, // 默认 ajax 配置
    system ,// 系统
    origin,
    env
} from '../config'
import send_ajax from '../base/sendajax'

export default function get(op = {}, path = '', sys = 'def') {
    op.url = origin[env] + system[sys] + path
    op.type = 'GET'

    return new Promise((res, rej) => {
        send_ajax(op,res,rej)
    })
}