const 
    exec = require('child_process').exec,
    spawn = require('child_process').spawn,
    path = require('path'),
    chalk = require('chalk') // 控制台 text 颜色


const 
    service_path = path.resolve(__dirname, '../service'),
    service = spawn(
        'cmd.exe',['/s', '/c',`"cd ${service_path} && npm run dev"`], { cwd: null, env: null, windowsVerbatimArguments: true } 
    )

service.stdout.on('data', function (data) {
    console.log(chalk.yellow(`service: ${data.toString()}`))
});

service.stderr.on('data', (data) => {
  console.log(chalk.yellow(`service: ${data.toString()}`));
});

const 
    client_path = path.resolve(__dirname,'../'),
    client = spawn(
        'cmd.exe',['/s', '/c',`"cd ${client_path} && webpack-dev-server --config ./config/dev.conf.js --open --hot"`], { cwd: null, env: null, windowsVerbatimArguments: true } 
    )

client.stdout.on('data', function (buffer) {
    console.log(chalk.blue(`client: ${buffer.toString()}`))
});

client.stderr.on('data', (data) => {
  console.log(chalk.blue(`client: ${data.toString()}`));
});

