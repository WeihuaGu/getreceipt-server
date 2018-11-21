<?php
require 'vendor/autoload.php';

//欢迎
Flight::route('/', function(){
    echo '愿你赚很多钱';
});

//配置Flight必要变量
Flight::set('httpcode', require './config/httpcode.php');
Flight::set('mainconfig',require './config/main.php');
require_once './util/common.php';
//获取调试程序所需之错误,如是生产环境删掉
Flight::set('flight.log_errors', true);
/**
Flight::map('error', function(Exception $ex){
    // Handle error
    echo $ex->getTraceAsString();
    echo 'Message: ' .$ex->getMessage();
});
**/





//路由

//数据库检查
require './route/routedatabase.php';
//响应到从客户端来的收款推送
require './route/routegetmoney.php';
//查询
require './route/routequery.php';


require './route/routetest.php';




Flight::start();
