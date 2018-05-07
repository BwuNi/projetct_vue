import _ajax from '../_ajax'
import {
    def_config, // 默认 ajax 配置
    system ,// 系统
    origin,
    env
} from '../config'
import JSEncrypt from 'jsencrypt'

export default function(data) {
    return new Promise((res, rej) => {
        _ajax({
            url: origin[env] + system['def'] + 'GetPubKey',
            type: "GET"
        }).then(key => {
            const encrypt = new JSEncrypt();
            encrypt.setPublicKey(key.data);
            res(encrypt.encrypt(JSON.stringify(data)))
        }).catch(e => {
            rej(e)
        })
    })
}