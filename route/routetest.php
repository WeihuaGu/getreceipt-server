<?php 
require_once 'common.php';
use util\Encrypt;
Flight::route('GET /test/encrypt', function(){
Flight::json(array('data'=>Flight::encrypt("测试")));
});

