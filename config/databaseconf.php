<?php
error_reporting(E_ALL^E_NOTICE);

if($_ENV['MYSQL_DBNAME_GETRECEIPT']!=null){
 
return 
[
        'database_type' => 'mysql',
        'database_name' => $_ENV['MYSQL_DBNAME_GETRECEIPT'],
        'server' => $_ENV['MYSQL_HOST'],
        'username' => $_ENV['MYSQL_USERNAME'],
        'password' =>$_ENV['MYSQL_PASSWORD'],
        'port' => $_ENV['MYSQL_PORT'],
        'charset' => 'utf8'
    ];
}else

return 
[
        'database_type' => 'mysql',
        'database_name' => 'getreceipt',
        'server' => 'localhost',
        'username' => 'root',
        'password' => 'XXXx',
        'charset' => 'utf8'
    ];
