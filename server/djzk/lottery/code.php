<?php
/**
 * 一段简单的代码
 *  微信登录：获取调用接口获取登录凭证（code）进而换取用户登录态信息，包括用户的唯一标识（openid）
 */
 
$code =$_GET['code'];
$appid="*******************";//微信开发者appId
$secret="**********************";// appId秘钥
 
$api="https://api.weixin.qq.com/sns/jscode2session?appid={$appid}&secret={$secret}&js_code={$code}&grant_type=authorization_code"; //调用官方接口
 
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
/*$arr = (array) json_decode($str,true);
echo $arr['data']['openid'];*/
?>