<?php
    // 从databaseconf.php文件中获得数据库配置然后返回单例Medoo数据库对象
    require 'vendor/autoload.php';
    use Medoo\Medoo; 

    class MedooDatabase{
    private static $instance; 
    private static $database;
	
    public static function getInstance()  
    {  
        if (!(self::$instance instanceof self))  
        {  
            self::$instance = new self();  
        }  
        return self::$instance;  
    }  
    private function __construct()  
    {  
    }     
    /** 
     * Description:私有化克隆函数，防止外界克隆对象 
     */  
    private function __clone()  
    {  
    }  

    public function getMedoo(){
	 // 初始化配置
    if(empty(self::$database))
    self::$database = new medoo(require './config/databaseconf.php'
    );     
    return self::$database;
    }
    

   }
   
