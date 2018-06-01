function ajax() {
    //设定 ajax 参数
    var ajaxData = {
        type: arguments[0].type || 'GET',
        url: arguments[0].url || '',
        async: arguments[0].async || 'true',
        data: arguments[0].data || null,
        dataType: arguments[0].dataType || 'text',
        contentType:
            arguments[0].contentType || 'application/x-www-form-urlencoded',
        beforeSend: arguments[0].beforeSend || function() {},
        success: arguments[0].success || function() {},
        error: arguments[0].error || function() {}
    }
    ajaxData.beforeSend()

    // 所返回的 promise
    var promise = new Promise(function(resolve, reject) {
        var xhr = createxmlHttpRequest()
        xhr.responseType = ajaxData.dataType
        xhr.open(ajaxData.type, ajaxData.url, ajaxData.async)
        xhr.setRequestHeader('Content-Type', ajaxData.contentType)
        xhr.send(convertData(ajaxData.data))
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) {
                return
            }

            if (xhr.status == 200) {
                resolve(xhr.response)
            } else {
                reject(xhr.statusText)
            }
        }
    })

    return promise
}

// 创建 XHR
function createxmlHttpRequest() {
    if (window.ActiveXObject) {
        return new ActiveXObject('Microsoft.XMLHTTP')
    } else if (window.XMLHttpRequest) {
        return new XMLHttpRequest()
    }
}

// 如果传递参数是 obj，将其转换为 str
function convertData(data) {
    if (typeof data === 'object') {
        var convertResult = ''
        for (var c in data) {
            convertResult += c + '=' + data[c] + '&'
        }
        convertResult = convertResult.substring(0, convertResult.length - 1)
        return convertResult
    } else {
        return data
    }
}

/**
 * 
 */
ajax.get = (url ='' , data , option )=>(ajax(
    Object.assign({
        url,
        data,
        type:'GET'
    },option)
))


ajax.post = (url ='' , data , option )=>(ajax(
    Object.assign({
        url,
        data,
        type:'POST'
    },option)
))


export default ajax
