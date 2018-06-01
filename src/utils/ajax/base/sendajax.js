import encrypt from '../base/encrypt'
import _ajax from '../_ajax'

export default function send_ajax(op, res, rej, convertData = (op, i) => i) {
    

    if (op.encrypt) {
        encrypt(op.data).then((data) => {
            op.data = data
            ajax(op, res, rej, convertData)
        })
    } else ajax(op, res, rej, convertData)
}

function ajax(op, res, rej, convertData) {


    if (op.data || op.data === '') {
        op.data = convertData(op, op.data)
    }
    // 调用基础 ajax 模块
    _ajax(op).then((data) => {
        let result = data
        // json 数据处理
        if (typeof result === 'string')
            result = JSON.parse(result)
        if (typeof result == 'object' && result && result.success)
            res(result)
        else if (typeof result == 'object' && !result)
            res(data)
        else
            rej(result)

    }).catch(e => rej(e))
}