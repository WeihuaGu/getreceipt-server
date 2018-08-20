<?php
require 'vendor/autoload.php';

//欢迎
Flight::route('/', function(){
    echo '愿你赚很多钱';
});

//配置Flight必要变量
Flight::set('httpcode', require './config/httpcode.php');


//路由

//数据库检查
require './route/routedatabase.php';
//获取到从客户端来的收款推送
require './route/routegetmoney.php';




Flight::start();
