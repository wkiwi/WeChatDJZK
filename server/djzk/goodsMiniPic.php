<?php
$id=$_REQUEST['id'];
require_once('sdk/TopSdk.php');
$appkey="********";    //阿里妈妈key
$secretKey="********";  //阿里妈妈secretkey
$c = new TopClient;
$c->appkey = $appkey;
$c->secretKey = $secretKey;


$req = new TbkItemInfoGetRequest;
$req->setFields(" seller_id,nick,num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url,volume");
$req->setPlatform("1");
$req->setNumIids($id);
$resp = $c->execute($req);

$ar=json_encode($resp);
echo $ar;


/*$arr = (array) json_decode($ar,true);
$nick=$arr['results']['n_tbk_item']['nick'];
echo $nick;
*/


?>