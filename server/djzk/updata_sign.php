<?php
/**
 * 
 *     每天晚上12点更新签到状态
 *
 */
header('Content-Type:application/json;charset:UTF-8');
$type =$_REQUEST['user_id'];
$conn = mysqli_connect('127.0.0.1','dj123','dj123','dj123',3306); //数据库名。密码。 表
mysqli_query($conn,"SET NAMES UTF8"); //设置下面的SQL语句所用的字符编码


$sql="UPDATE user set sign='true' WHERE sign='false'";
$result = mysqli_query($conn,$sql);

echo $result;
?>