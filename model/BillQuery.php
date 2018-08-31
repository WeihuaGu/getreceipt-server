<?php
namespace model;
class BillQuery {
$bill=new Bill();
public function queryNowBill(){
   return $this->bill->queryByTime_Now();
	
}












}
