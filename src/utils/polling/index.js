import ajax from '../ajax'
import uuidv4 from 'uuid/v4';

const polling = function name(
    timeout = 1000 * 60, //间隔时间
    method = 'post', //方法
) {

    let
        msgs = [], //订阅的消息
        callbacks = [] //保存回调函数的数组，key 为 id，value 为 {id:'',sys:'',path:'',callback:func}

    //
    function sendAjax() {
        if (msgs.length === 0)
            return setTimeout(sendAjax, timeout);

        msgs.forEach(i => {
            ajax[i.method](i.path, i.data, i.sys)
                .then(data => {
                    pub(callbacks, data, i)
                })
                .catch(data => {
                })

        })

        setTimeout(sendAjax, timeout)
    }

    // 发布消息的方法
    function pub(
        callbacks = [], data = {}, { path = '', sys = '' }
    ) {
        callbacks.forEach(i => {
            if (i.path === path && i.sys === sys)
                i.callback(data)
        });

    }

    sendAjax()

    return {
        on(path, sys, callback,method) {
            const id = uuidv4()

            callbacks.push({
                path,
                sys,
                callback,
                id,
            })
            ajax[method?method:'post'](path, '', sys)
                .then(data => {
                    callback(data)
                })
                .catch(data => {
                })

            return id
        },
        sub(path, sys = 'def',method = 'post',data) {
            // 判断是否已经存在于 msgs

            if (!name ||
                msgs.map(i => ((i.sys === sys) && (i.path === path))).filter(i => i).length !== 0
            )
                return this

            msgs.push({ sys, path,data ,method})

            return this
        },
        cancel(id) {
            const call = callbacks.map(i => i.id === id ? i : null).filter(i => i)[0]

            if (call) {
                callbacks = callbacks.map(i => i.id === id ? null : i).filter(i => i)
                if (callbacks.filter(i =>( i.path == call.path )&&( i.sys == call.sys)).length == 0)
                    msgs = msgs.map(i => i.path == call.path && i.sys == call.sys ? null : i).filter(i => i)
            }
        }
    }
}

export default polling