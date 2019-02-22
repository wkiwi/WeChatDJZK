<?php

$appid=$_REQUEST['appid'];
$secret=$_REQUEST['secret'];
$id=$_REQUEST['id'];

//服务端生成图片

// 获取access_token
$accessTokenObject = json_decode(file_get_contents('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='.$appid.'&secret='.$secret));
// 拼接微信服务端获取二维码需要的url，见文档https://mp.weixin.qq.com/debug/wxadoc/dev/api/qrcode.html
//$url = 'https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token=' . $accessTokenObject->access_token;
$url = 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token='. $accessTokenObject->access_token;
//$uid = $this->input->get('uid');
//$json = '{"path": "pages/index/index?"' . $uid . ', "width": 430}';
$json = '{"page": "pages/index/index","scene":'.$id.', "width": 430}';
$ch = curl_init();
//设置超时
curl_setopt($ch, CURLOPT_TIMEOUT, 60);

curl_setopt($ch,CURLOPT_URL, $url);
curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,TRUE);
curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,2);//严格校验
//要求结果为字符串且输出到屏幕上
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
//设置header
header('Content-Type: image/jpeg');
//post提交方式
curl_setopt($ch, CURLOPT_POST, TRUE);
curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
//运行curl
$data = curl_exec($ch);
//返回结果
curl_close($ch);
echo $data;

?>