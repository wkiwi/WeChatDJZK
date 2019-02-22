<?php
require_once('sdk/TopSdk.php');
$c =new TopClient;
$appkey="********";    //阿里妈妈key
$secretKey="********";  //阿里妈妈secretkey
$AdzoneId="153926552";/*mm_1*****0_40*****67_153926552*/
$page=$_GET['page'];
$q=$_GET['q'];

$Pagenumber=100;
$c->appkey=$appkey;
$c->secretKey=$secretKey;
$c->format="json";
$req= new TbkDgItemCouponGetRequest;
$req->setAdzoneId($AdzoneId);
$req->setPlatform('1');
$req->setPageSize('10');
$req->setQ($q);
$req->setPageNo($page);
$resp=$c->execute($req);


//转换数组
$array=json_decode(json_encode($resp),true);

//截取数组
$data=array_slice($array,-0,1);
$sum=array_slice($array,-2,1);

foreach($data as $key=>$value){
	$asd=$value;
}
foreach($asd as $key=>$value){
	$assa=$value;
}
foreach($sum as $total_results){
	$sum=$total_results;
}
//创建数组
$str =array('msg'=>'success','data'=>$assa,'pages'=>$Pagenumber);
$jsonencode=json_encode($str);
echo $jsonencode;
?>