process.env.NODE_ENV = 'production'

const 
    ora = require('ora') // 控制台 loading 样式
    spinner = ora('building for production...')

    path = require('path').posix // Path 模块
    chalk = require('chalk') // 控制台 text 颜色

    //config = require('../config') //加载 config
    

spinner.start()

console.log(chalk.yellow(__dirname))
 
setTimeout(() => {
    spinner.stop() 
}, 5000);