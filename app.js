var express = require('express');
var app = express();
var server = require('http').Server(app);
const io=require('socket.io')(server);
var bodyParser = require('body-parser');
var billapi = require('./api/bill');
var deviceapi = require('./api/device');

process.env.TZ="Asia/Shanghai";

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.sendStatus(200); /让options请求快速返回/
  }
  else {
    next();
  }
});
app.use('/bill',billapi);
app.use('/device',deviceapi);
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('愿你赚很多钱');
});

global.deviceisonline=false;
io.on('connection',(socket)=>{
    socket.on('echo',(devicestr)=>{
        device=JSON.parse(devicestr);
        global.deviceid=device['deviceid'];
        global.deviceisonline=true;
        global.deviceconnectedtime=device['connectedtime'];
        console.log("new device_echo from "+device['deviceid']+" with time"+device['connectedtime']);
    });
    socket.on('disconnect',()=>{
        global.deviceisonline=false;
        global.devicedisconnectedtime=new Date();
        console.log("device disconnect");
    });
});


server.listen(3000, function () {
  console.log('app listening on port 3000!');
});
