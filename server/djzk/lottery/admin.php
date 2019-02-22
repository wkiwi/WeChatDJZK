<?php
/**
 * 
 *     确认是否为管理员，是否有开奖权限
 *
 */
header('Content-Type:application/json;charset:UTF-8');
$user_openid =$_REQUEST['user_openid'];

$conn = mysqli_connect('127.0.0.1','dj123','dj123','dj123',3306); //数据库名。密码。 表
mysqli_query($conn,"SET NAMES UTF8"); //设置下面的SQL语句所用的字符编码


$sql="SELECT id FROM administrator WHERE user_openid = '$user_openid'";
$result = mysqli_query($conn,$sql);
while(($row=mysqli_fetch_assoc($result))!==NULL){
	    $output=$row;
}
echo json_encode($output);
?>