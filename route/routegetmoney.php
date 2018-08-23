<?php 
require_once 'common.php';
Flight::route('POST /getedmoney/', function(){
$bodyjson = getBodyJson();
$recordarray=json2Array($bodyjson);
$flaginsert=new Bill()->recordReceipts($recordarray);
if($flaginsert)
Flight::json(array('code'=>Flight::get('httpcode')['created'],'desc'=>'created'));
else
Flight::json(array('code'=>Flight::get('httpcode')['conflict'],'desc'=>'conflict'));
});

