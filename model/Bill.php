<?php
namespace model;
use Medoo\Medoo;
class Bill extends Model implements IReceiptRecord {
public $receiptvalid;
public function __construct(){
   parent::__construct();
   $this->setTablename("receiptbill");
   $this->receiptvalid=new ReceiptRecordValid(); 
   
}
public function queryByTime_Now(){
   $where=Medoo::raw('where time>=DATE_SUB(NOW(),INTERVAL 3 MINUTE)');
   $datas = $this->database->select($this->tablename,"*",$where);
   return $datas;
	
}
public function recordReceipts($recored){
  if($this->validRecord($recored)){
  $recored=$this->receiptvalid->transJsonArray2TableColumArray($recored);
  $this->database->insert($this->tablename,$recored);  
  	if($this->database->error()[0]="00000")
  		return $this->database->id();
  	else
		return "error";
  }else
  return null;
 
}
public function validRecord($recored){
  return $this->receiptvalid->verify($recored);
}

}
