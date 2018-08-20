<?php

namespace model;
require_once dirname(dirname(__FILE__)).'/database.php';
class Model{ 

protected $database;

protected $tablename;

public function setTablename($tablename){
$this->tablename=$tablename;


}

public function __construct(){
    try{
	$medoo=\MedooDatabase::getInstance();
	$this->database=$medoo->getMedoo();
	}

    catch(Exception $e){
 	echo 'Message: ' .$e->getMessage();
	Flight::halt(500, 'get database faild');
        }
    
}

public function databaseInfo(){
$info=$this->database->info();
return $info;
}



} 
