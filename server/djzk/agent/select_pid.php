<?php
/**
 * 
 *    查询代理pid等信息
 *
 */
header('Content-Type:application/json;charset:UTF-8');
$openid =$_REQUEST['openid'];
$conn = mysqli_connect('127.0.0.1','dj123','dj123','dj123',3306); //数据库名。密码。 表
mysqli_query($conn,"SET NAMES UTF8"); //设置下面的SQL语句所用的字符编码


$sql="SELECT name,id,type,pid,gg_id,fans,rate FROM apply_agent WHERE openid='$openid'";//查询当前是否在申请中或已经申请成功
$result = mysqli_query($conn,$sql);


if($row=mysqli_fetch_assoc($result)){
	$output['code']=1;
	$output['content']=$row;
	echo json_encode($output);
}else{
	$output['code']=0;
	echo json_encode($output);
}
?>