<?php
/**
 * 
 *     查看当前抽奖信息
 *
 */
header('Content-Type:application/json;charset:UTF-8');

$conn = mysqli_connect('127.0.0.1','dj123','dj123','dj123',3306); //数据库名。密码。 表
mysqli_query($conn,"SET NAMES UTF8"); //设置下面的SQL语句所用的字符编码


$sql="SELECT lottery_number,lottery_name,message,lottery_time,lottery_image,lottery_open  FROM lottery_details WHERE lottery_open='1' ";
$result = mysqli_query($conn,$sql);
 while(($row=mysqli_fetch_assoc($result))!==NULL){
		      $output=$row;
		  }

echo json_encode($output);
?>