<?php 
require_once 'common.php';
use model\BillQuery;
Flight::route('Get /querybill/now', function(){
$billquery=new BillQuery();
$nowbill=$billquery->queryNowBill();
print_r($nowbill);

});
