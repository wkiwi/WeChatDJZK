<?php
/**
 * 
 *  分享图片二维码接口
 */
header('Content-Type:image/jpeg;charset:UTF-8');

$buss_name=$_REQUEST['buss_name'];//名称
$thumb=$_REQUEST['thumb'];//主图地址
$tmall=$_REQUEST['tmall'];//天猫
$price_quanhou=$_REQUEST['price_quanhou'];//券后价
$price_shoujia=$_REQUEST['price_shoujia'];//售价
$yhq_price=$_REQUEST['yhq_price'];//优惠券额度
$sales=$_REQUEST['sales'];//销量
$qrcode_url=$_REQUEST['qrcode_url'];//二维码内容

$api='http://newapi.tkjidi.com/api/tkcms/procamera?buss_name='.$buss_name.'&thumb='.$thumb.'&tmall='.$tmall.'&price_quanhou='.$price_quanhou.'&price_shoujia='.$price_shoujia.'&yhq_price='.$yhq_price.'&sales='.$sales.'&qrcode_url='.$qrcode_url.'';//调用官方接口
 
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
$str = httpGet($api);
echo $str;

?>