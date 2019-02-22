<?php
/**
 * 
 *     把中奖人抽出来添加到中奖历史记录里
 *
 */
header('Content-Type:application/json;charset:UTF-8');
$lottery_time =$_REQUEST['lottery_time'];
$lottery_name=$_REQUEST['lottery_name'];
$user_id =$_REQUEST['user_id'];
$conn = mysqli_connect('127.0.0.1','dj123','dj123','dj123',3306); //数据库名。密码。 表
mysqli_query($conn,"SET NAMES UTF8"); //设置下面的SQL语句所用的字符编码


$sql="SELECT user_openid,user_name,user_image FROM user_lottery WHERE user_id='$user_id'";
$result = mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
    if($row){
		    $output=$row;
   			$user_name=$row['user_name'];
  			$user_image=$row['user_image'];
  			$user_openid=$row['user_openid'];
   			$sql="INSERT INTO lottery_history VALUES(NULL,'$user_openid','$user_name','$user_image','$lottery_time','$lottery_name','1')";
   			$result = mysqli_query($conn,$sql);
			    if($result){
					$sql="UPDATE lottery_details set lottery_open='0' WHERE lottery_open='1'";
					$result = mysqli_query($conn,$sql);
					echo 'success';
				}
		  }
?>