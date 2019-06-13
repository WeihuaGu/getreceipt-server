/**var bill= require('./incomebill');
bill.list(null, (err, bills) => {
                if (err)  console.log("err");
                console.log(bills);
});
**/
console.log('test ……');
console.log("test transfercode uri");
var transfercode = require('./model/transfercode');
console.log(transfercode.getTransferCodeUri("34.5"));


