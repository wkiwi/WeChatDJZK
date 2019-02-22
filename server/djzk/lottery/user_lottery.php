<?php
/**
 * 
 *     用户参与抽奖将自己的openid信息和呢称与formId提交到数据库
 *
 */
header('Content-Type:application/json;charset:UTF-8');
$openid =$_REQUEST['openid'];
$userpic=$_REQUEST['userpic'];
$name=$_REQUEST['name'];
$formId=$_REQUEST['formId'];
$conn = mysqli_connect('127.0.0.1','dj123','dj123','dj123',3306); //数据库名。密码。 表
mysqli_query($conn,"SET NAMES UTF8"); //设置下面的SQL语句所用的字符编码


$sql="SELECT user_id FROM user_lottery WHERE user_openid='$openid'";
$result = mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
if(($row==null)==1){//存在
	    $sql="INSERT INTO user_lottery VALUES(NULL,'$openid','$name','$userpic','$formId')";
		mysqli_query($conn,$sql);
		echo "插入成功";
}
?>