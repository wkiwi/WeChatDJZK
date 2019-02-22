<?php
//页面编码
header('Content-Type:application/json;charset:UTF-8');
//接受参数

$page=$_REQUEST['page'];
$word=$_REQUEST['word'];

$api='http://openapi.qingtaoke.com/search?s_type=1&key_word='.$word.'&app_key=******&page='.$page.'&v=1.0&cat=0&sort=1&is_ju=0&is_tqg=0&is_ali=0';
//$api='http://openapi.qingtaoke.com/qingsoulist?sort='.$sort.'&page='.$page.'&app_key=OjRY3esp&v=1.0&cat='.$cat.'&new=0&is_ju=0&is_tqg=0';//调用轻淘客分类
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