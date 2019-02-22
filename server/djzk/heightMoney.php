<?php
//页面编码
header('Content-Type:application/json;charset:UTF-8');
//接受参数
$item_id=$_REQUEST['id'];
$pid='mm_12*******10_59****56_342****9';//高拥pid这里默认写死 使用时自行修改

$pid=explode("_", $pid);

$session='70002100842678567e01c93bf388b370dc185eea2ec243d6fd2e29148ad9091c5aba84e3468576117';

$url="http://gy.yishoudan.com/ysd_api.php?item_id=".$item_id."&adzone_id=".$pid[3]."&site_id=".$pid[2]."&session=".$session;
//配置的为一首单淘客的高拥接口，目前一手单已挂。可以换黑马淘客
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);//这个是重点。
$data= curl_exec($ch);
//$data['ret'] = curl_exec($ch);
//$data['info'] = curl_getinfo($ch);
curl_close($ch);

//var_dump($data);
//echo json_decode($data);
//echo json_encode($data);
$url=json_decode($data, true)['tbk_privilege_get_response']['result']['data']['coupon_click_url'];
$output['url']=$url;

echo json_encode($output);

?>