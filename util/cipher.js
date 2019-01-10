var crypto = require('crypto');
var secret;
if(process.env.financepass)
    secret=process.env.financepass;
else
    secret='pass';//密钥

module.exports.encrypt=(str)=>{
    var cipher = crypto.createCipher('aes192', secret);
    var enc = cipher.update(str, 'utf8', 'hex');//编码方式从utf-8转为hex;
    enc += cipher.final('hex');//编码方式从转为hex;
    return enc;
}

module.exports.decrypt=(str)=>{
    var decipher = crypto.createDecipher('aes192', secret);
    var dec = decipher.update(str, 'hex', 'utf8');//编码方式从hex转为utf-8;
    dec += decipher.final('utf8');//编码方式从utf-8;
    return dec;
}


