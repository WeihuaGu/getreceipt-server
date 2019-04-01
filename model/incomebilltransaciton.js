var bill = require('./incomebill');
var encrypt = require('../util/cipher');
var timeutil = require('../util/timeutil');
var mustAddProperty = [
        'time',
        'money',
        'title',
        'content',
        'deviceid',
        'encrypt'
];

var determineMustProperty = (item) => {
        for (property in mustAddProperty) {
                if (mustAddProperty[property] in item)
                        continue;
                else
                        return "refuse";
        }
        return "pass";
}

var transToModelType = (oneincomerecord)=>{
        var onerecord={};
        var localtime=encrypt.decryptReceived(oneincomerecord.time);
        console.log("time直接解码得"+localtime);
        if (oneincomerecord.encrypt=="1")
            onerecord.time=timeutil.getUTC(localtime);
        else
            onerecord.time=oneincomerecord.time;
        console.log("time转为UTC得"+onerecord.time);
        onerecord.amount=oneincomerecord.money;
        onerecord.platform=oneincomerecord.platform;
        onerecord.content=oneincomerecord.content;
        onerecord.deviceid=oneincomerecord.content;
        onerecord.is_pre_encrypt=oneincomerecord.encrypt;
        return onerecord;
}

module.exports.addOneIncomeBillItem = (item, callback) => {
        if(item == null)
                callback('请传入插入数据');
        if(determineMustProperty(item) == "refuse")
                callback('缺少必要属性', null);
        bill.add(transToModelType(item),(err,result)=>{
                if(err) callback(err,null);
                callback(null,result);
        });
}

module.exports.getNowIncomeBillItem = (callback) =>{
        bill.getOneItemByTime(null,null,(err,result)=>{
                if(err) callback(err,null);
                callback(null,result);
        });
}
