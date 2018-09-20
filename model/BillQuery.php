<?php
namespace model;
class BillQuery {
private $bill;
function __construct() {
       $this->bill=new Bill();
   }
public function queryNowBill(){
   return $this->bill->queryByTime_Now();
	
}












}
