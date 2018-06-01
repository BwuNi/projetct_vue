import {
    def_config, // 默认 ajax 配置
    system, // 系统
    origin,
    env
} from './config'

import _ajax from './_ajax'
import get from './method/get'
import post from './method/post'



function Ajax(option = {}) {
    const
        op = option,
        res = {
            data(data) {
                op.data = data
                return this
            },
            encrypt(bool = true) {
                op.encrypt = bool
                return this
            },
            get: get.bind(res, op),
            post: post.bind(res, op),
        }

    return res
}


export default Ajax