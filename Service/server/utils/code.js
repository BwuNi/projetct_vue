const crypto = require('crypto') // 加密

function encode(text,key){  
    var secret = key || "asdhjwheru*asd123&123";  
    var cipher = crypto.createCipher('aes-256-cbc',secret);  
    var crypted =cipher.update(text,'utf8','hex');  
    crypted+=cipher.final('hex');  
    console.log(crypted);  
    return crypted;  
}  

function decode(text,key){  
    var secret = key || "asdhjwheru*asd123&123";  
    var decipher = crypto.createDecipher('aes-256-cbc',secret);  
    var dec=decipher.update(text,'hex','utf8');  
    dec+= decipher.final('utf8');//解密之后的值  
    console.log(dec);  
    return dec;  
}  


module.exports = {encode,decode}