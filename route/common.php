<?php
function getBodyJson(){
$body = Flight::request()->getBody();
$bodyjson=json_decode($body, false);
return $bodyjson;
}

function json2Array($json){


return null;
}
