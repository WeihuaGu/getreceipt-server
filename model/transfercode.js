const config = require('config');
var configuserid;
if (process.env.transfercode_userid)
        configuserid = process.env.transfercode_userid;
else
        configuserid = config.get('transfercode.userid'); //

var getTransferCodeUriWithUserid=(amount,userid,callback)=>{
        if(amount===""|userid==="")
                callback("userid或者amount为空",null);
        else    
                callback(null,"alipays://platformapi/startapp?appId=09999988&actionType=toAccount&goBack=NO&amount="+amount+"&userId="+userid+"&memo=pay");
}
var getTransferCodeUriWithUseridPlusRemark=(amount,userid,remark,callback)=>{
	if(amount===""|userid===""|remark==="")
                callback("userid或者amount为空或者remark为空",null);
	else
                callback(null,"alipays://platformapi/startapp?appId=09999988&actionType=toAccount&goBack=NO&amount="+amount+"&userId="+userid+"&memo="+remark);
}


var getTransferCodeUri=(amount,callback)=>{
        getTransferCodeUriWithUserid(amount,configuserid,(err,result)=>{
                if(err)
                   callback(err,null);
                else
                   callback(null,result);
        
        });
}
var getTransferCodeUriPlusRemark=(amount,remark,callback)=>{
        getTransferCodeUriWithUseridPlusRemark(amount,configuserid,remark,(err,result)=>{
                if(err)
                   callback(err,null);
                else
                   callback(null,result);

        });
}

module.exports.getTransferCodeUri=getTransferCodeUri;

module.exports.getTransferCodeUriWithUserid=getTransferCodeUriWithUserid;

module.exports.getTransferCodeUriPlusRemark=getTransferCodeUriPlusRemark;
