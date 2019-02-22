<?php
//页面编码
header('Content-Type:application/json;charset:UTF-8');
$api='http://openapi.qingtaoke.com/baokuan?app_key=******&v=1.0';//调用轻淘客搜索
//封装方法：从接口中获取内容
function httpGet($url){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_TIMEOUT,500);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST , true);
    curl_setopt($curl, CURLOPT_URL, $url);
    $res = curl_exec($curl);
    curl_close($curl);
    return $res;
}
$str = httpGet($api); //执行方法：从接口中获取内容（json格式）
echo $str;
?>