<?php 
namespace model;
class  ReceiptRecordValid implements IValidAble,IMiddleware{

public function verify($data){
return true;
}
  
public function nextData($data){
return $data
}

public function transJsonArray2TableColumArray($data){
return this->nextData($data);
}
}
