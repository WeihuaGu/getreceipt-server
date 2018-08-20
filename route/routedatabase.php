<?php 


use model\Model;

Flight::route('/database/info',function(){
$model=new Model();
$info=$model->databaseInfo();
Flight::json(array('desc'=>$info),Flight::get('httpcode')['get_success']);
});
