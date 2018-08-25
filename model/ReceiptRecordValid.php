<?php 
namespace model;

class  ReceiptRecordValid implements IValidAble,IMiddleware{

public function verify($data){
if(array_key_exists("time",$data)&&array_key_exists("money",$data)&&array_key_exists("title",$data)&&array_key_exists("content",$data))
return true;
else
return false;
}
  
public function nextData($data){
return $this->transJsonArray2TableColumArray($data);
}

public function transJsonArray2TableColumArray($data){
$recordarray=array();
$recordarray['time']=$data['time'];
$recordarray['amount']=$data['money'];
$recordarray['Platform']=$data['title'];
$recordarray['content']=$data['content'];

return $recordarray;
}
}
