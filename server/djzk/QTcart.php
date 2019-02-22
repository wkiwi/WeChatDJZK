<?php
//页面编码
header('Content-Type:application/json;charset:UTF-8');
//接受参数

$page=$_REQUEST['page'];
$cat=$_REQUEST['cat'];
$sort=$_REQUEST['sort'];
$is_tqg=$_REQUEST['is_tqg'];
$is_ju=$_REQUEST['is_ju'];
$max_price=$_REQUEST['max_price'];
$new=$_REQUEST['new'];
$api='http://openapi.qingtaoke.com/qingsoulist?sort='.$sort.'&page='.$page.'&app_key=******&v=1.0&cat='.$cat.'&max_price='.$max_price.'&new='.$new.'&is_ju='.$is_ju.'&is_tqg='.$is_tqg.'';//调用轻淘客分类
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