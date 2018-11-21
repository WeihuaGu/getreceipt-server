<?php
namespace util;
class Encrypt{
	var $method;
    var $iv;
    var $key;
	function __construct($encryptconfig){
		$this->method=$encryptconfig['method'];
	    $this->iv=$encryptconfig['iv'];
		$this->key=$encryptconfig['key'];
	}


	function getEncryptMethods(){
		return openssl_get_cipher_methods();
	}
	function encrypt($data){
	$value=openssl_encrypt($data , $this->method,$this->key,true,$this->iv); //第四参数OPENSSL_RAW_DATA输出原始数据

	$values = base64_encode($value);

	// echo "加密后的密文是：<br>".$value."<br><br>";
	return $values;
	}
	














}
