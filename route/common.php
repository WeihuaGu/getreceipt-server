<?php
function getBodyJson(){
$body = Flight::request()->getBody();
return $body;
}

function json2Array($json){

return json_decode($json, true);

}
