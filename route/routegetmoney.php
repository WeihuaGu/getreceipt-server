<?php 
require_once 'common.php';
use model\Bill;
Flight::route('POST /getedmoney/', function(){
$bodyjson = getBodyJson();
$recordarray=json2Array($bodyjson);
$bill=new Bill();
$flaginsert=$bill->recordReceipts($recordarray);
if($flaginsert!=null && $flaginsert!="error")
Flight::json(array('code'=>Flight::get('httpcode')['created'],'desc'=>'created','createdid'=>$flaginsert));
else
Flight::json(array('code'=>Flight::get('httpcode')['conflict'],'desc'=>'conflict'));
});

