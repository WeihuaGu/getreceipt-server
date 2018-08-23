<?php
namespace model;
class Bill extends Model implements IReceiptRecord {
public function __construct(){
   parent::__construct();
   $this->setTablename("Users"); 
}

public recordReceipts($recored){
  if(validRecord($recored)){
  $this->database->insert($this->tablename,$recored);
  }
}
public validRecord($recored){
  return new ReceiptRecordValid.verify($recored);
}

}
