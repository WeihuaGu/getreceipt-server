var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var billapi = require('./api/bill');

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
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('愿你赚很多钱');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
