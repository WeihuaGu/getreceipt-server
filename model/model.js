const mongoose = require('mongoose');
const config = require('config');
var mongodburl;
if(process.env.mongodbfinaninurl)
	mongodburl=process.env.mongodbfinaninurl;//优先使用环境变量
else
	mongodburl=config.get('database.mongodburl'); //mongodb 连接地址 例如mongodb://用户名:密码@地址:端口/数据库名
mongoose.connect(mongodburl, { useNewUrlParser: true ,useCreateIndex: true});


module.exports=mongoose;
