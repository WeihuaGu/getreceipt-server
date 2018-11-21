<?php 
require_once 'common.php';
use model\BillQuery;
Flight::route('GET /querybill/now', function(){
$billquery=new BillQuery();
$nowbill=$billquery->queryNowBill();
if(empty($nowbill))
Flight::json(array('code'=>Flight::get('httpcode')['nocontent'],'desc'=>'have no bill record in 3 minute','items'=>$nowbill));

else
Flight::json(array('code'=>Flight::get('httpcode')['get_success'],'desc'=>'now time item with in 3 minute','items'=>Flight::encrypt($nowbill)));

});
