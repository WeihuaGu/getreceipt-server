var test=require('./cipher');
var passed=test.encrypt("test it");
console.log(passed);
console.log(test.decrypt(passed));


