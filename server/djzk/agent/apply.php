<?php
/**
 * 
 *     申请人信息提交
 *
 */
header('Content-Type:application/json;charset:UTF-8');
$openid =$_REQUEST['openid'];
$name=$_REQUEST['name'];
$zfb=$_REQUEST['zfb'];
$wx=$_REQUEST['wx'];
$phone=$_REQUEST['phone'];
$argument=$_REQUEST['argument'];
$formId=$_REQUEST['formId'];


$conn = mysqli_connect('127.0.0.1','dj123','dj123','dj123',3306); //数据库名。密码。 表
mysqli_query($conn,"SET NAMES UTF8"); //设置下面的SQL语句所用的字符编码


$sql="SELECT id FROM apply_agent WHERE openid='$openid'";//查询当前是否在申请中或已经申请成功
$result = mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
if(($row==null)==1){//不存在
	    $sql="INSERT INTO apply_agent VALUES(NULL,'$openid','$name','$zfb','$wx','$phone','$argument','$formId','0','0','0.5','','')";
		mysqli_query($conn,$sql);
		echo "1";
}

?>