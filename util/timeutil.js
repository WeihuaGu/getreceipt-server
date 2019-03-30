var moment = require('moment-timezone');
moment.tz.setDefault('Asia/Shanghai');

module.exports.getChinaDate = ()=>{
    time=moment(new Date()).tz("Asia/Shanghai").format();
    return new Date(time);
}
module.exports.getUTC = (localtime)=>{
    time=moment.tz(localtime, "Asia/Shanghai");
    return time.utc().format();

}







