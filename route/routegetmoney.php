<?php 
Flight::route('POST /getmoney/', function(){
$body = Flight::request()->getBody();
Flight::json(array('code'=>Flight::get('httpcode')['get_success'],'desc'=>$body));
});

