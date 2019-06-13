const config = require('config');
var configuserid;
if (process.env.financepass)
        configuserid = process.env.transfercode_userid;
else
        configuserid = config.get('transfercode.userid'); //

var getTransferCodeUriWithUserid=(amount,userid,callback)=>{
        if(amount===""|userid==="")
                callback("userid或者amount为空",null);
        else    
                callback(null,"alipays://platformapi/startapp?appId=09999988&actionType=toAccount&goBack=NO&amount="+amount+"&userId="+userid+"&memo=pay");
}

var getTransferCodeUri=(amount,callback)=>{
        getTransferCodeUriWithUserid(amount,configuserid,(err,result)=>{
                if(err)
                   callback(err,null);
                else
                   callback(null,result);
        
        });
}

module.exports.getTransferCodeUri=getTransferCodeUri;

module.exports.getTransferCodeUriWithUserid=getTransferCodeUriWithUserid;


