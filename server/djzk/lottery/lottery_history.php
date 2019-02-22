<?php
/**
 * 
 *     查询历史中奖用户信息
 *
 */
header('Content-Type:application/json;charset:UTF-8');

$conn = mysqli_connect('127.0.0.1','dj123','dj123','dj123',3306); //数据库名。密码。 表
mysqli_query($conn,"SET NAMES UTF8"); //设置下面的SQL语句所用的字符编码


$sql="SELECT user_id,user_name,user_image,lottery_time,lottery_name FROM lottery_history ";
$result = mysqli_query($conn,$sql);
while(($row=mysqli_fetch_assoc($result))!==NULL){
	    $output[]=$row;
}
echo json_encode($output);
?>