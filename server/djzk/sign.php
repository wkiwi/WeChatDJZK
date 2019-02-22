<?php
/**
 * 
 *     用户签到
 *
 */
header('Content-Type:application/json;charset:UTF-8');
$user_openid =$_REQUEST['user_openid'];
$formId=$_REQUEST['formId'];
$time=time();
$conn = mysqli_connect('127.0.0.1','dj123','dj123','dj123',3306); //数据库名。密码。 表
mysqli_query($conn,"SET NAMES UTF8"); //设置下面的SQL语句所用的字符编码


$sql="SELECT sign,id FROM user  WHERE user_openid='$user_openid'";

$result = mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
$sign=$row['sign'];
  if($sign=='true'){
		$sql="UPDATE user set formId='$formId', formIdTime='$time',sign='false',integral=integral+10 WHERE user_openid='$user_openid' AND sign='true'";
		$result = mysqli_query($conn,$sql);
		$output['code']="10000";
		$output['content']=$result;
		$output['time']=$time;
  }else{
	$output['code']="10001";
	$output['content']='今天已经签到了';
	$output['time']=$time;
  }

echo json_encode($output);
?>