<?php
require_once('sdk/TopSdk.php');

$appkey="********";    //阿里妈妈key
$secretKey="********";  //阿里妈妈secretkey
$URL=$_GET['URL'];
$TEXT=$_GET['TEXT'];

$c = new TopClient;
$c->appkey = $appkey;
$c->secretKey = $secretKey;
$c->format="json";
$req = new TbkTpwdCreateRequest;

$req->setUserId("");//淘宝id
$req->setText($TEXT);
$req->setUrl($URL);
$req->setLogo("http://appi.taoxiaobao.top/djzk/taobaoLOGO.png");
$req->setExt("{}");
$resp = $c->execute($req);
echo json_encode($resp);
?>