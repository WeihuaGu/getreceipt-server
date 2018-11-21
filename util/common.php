<?php
//定义一些使用到的辅助方法
use util\Encrypt;
function encryptarray(&$array,$encrypt){
            if(is_array($array)){
                  foreach($array as &$value){
                                        if(is_array($value))
                                                encryptarray($value,$encrypt);
                                       else 
                                                $value=$encrypt->encrypt($value);

                }
                                   
            }
                         
}
Flight::map('encrypt', function($str){
   
    $security=Flight::get('mainconfig')['security'];
     if(!$security['encryptflag'])
                return $str;
     else{
                     $encryptconfig=$security['encryptconfig'];
                     $encrypt=new Encrypt($encryptconfig);
                     if(is_array($str)){
                                    
                                    encryptarray($str,$encrypt);
                                    return $str;
                    }
                      else
                      return $encrypt->encrypt($str);
    }
});

Flight::before('json', function(&$params, &$output){
    // Do something
});
