<?php
/**
 * 
 *     新发布一条抽奖信息且把上次中奖用户状态改为0
 *
 */
header('Content-Type:application/json;charset:UTF-8');
$lottery_number =$_REQUEST['number'];
$lottery_name=$_REQUEST['names'];
$lottery_time=$_REQUEST['time'];
$message=$_REQUEST['message'];
$conn = mysqli_connect('127.0.0.1','dj123','dj123','dj123',3306); //数据库名。密码。 表
mysqli_query($conn,"SET NAMES UTF8"); //设置下面的SQL语句所用的字符编码


$sql="INSERT INTO lottery_details VALUES(NULL,'$lottery_number','$lottery_name','$message','$lottery_time','https://wx.qlogo.cn/mmopen/vi_32/Fgg7oEHKj3O1FrZ6gsibZrgm9fFhThic7PYLvhmmVnzsVR3kVSLdxM16Gj96Z85htNGVPlib90xJfj8LmPhKmj4xA/0','1')";
$result = mysqli_query($conn,$sql);
if($result){
	$sql="UPDATE lottery_history set lottery_type='0' WHERE lottery_type='1'";//修改上次中奖人信息状态
	$result = mysqli_query($conn,$sql);
	$sql="truncate table user_lottery";//清空抽奖人信息
	$result = mysqli_query($conn,$sql);
	echo '发布成功';
}

?>