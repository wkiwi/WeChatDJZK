<?php
//页面编码

//接受参数

$id=$_REQUEST['id'];
$api='https://hws.m.taobao.com/cache/mtop.wdetail.getItemDescx/4.1/?data={item_num_id:%22'.$id.'%22}&type=json&dataType=json';//调用大淘客单品官方接口

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
//echo json_encode($str);
?>