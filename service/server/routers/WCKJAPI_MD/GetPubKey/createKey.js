const
    exec = require('child_process').exec,
    begin = '-----BEGIN PUBLIC KEY-----',
    end = '-----END PUBLIC KEY-----'

module.exports = function(params) {
    return new Promise((res, rej) => {
        var ls = exec(`cd ${__dirname} && openssl rsa -in rsa_private_key.pem -pubout`, (error, stdout, stderr) => {
            if (error) {
                console.log('Error code: ' + error.code)
                console.log(error.stack)
                console.log(stderr)
                rej(error)
            }

            res(
                stdout
                .replace(/\n/g, '')
                .replace(/\r/g, '')
                .replace(begin, '')
                .replace(end, '')
            )
        })
    })
}