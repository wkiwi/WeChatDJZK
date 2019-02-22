<?php
/**
 * 
 *     设置与修改代理人信息
 *
 */
header('Content-Type:application/json;charset:UTF-8');
$pid =$_REQUEST['pid'];
$ggid=$_REQUEST['ggid'];
$id=$_REQUEST['id'];
$rate=$_REQUEST['rate'];
$conn = mysqli_connect('127.0.0.1','dj123','dj123','dj123',3306); //数据库名。密码。 表
mysqli_query($conn,"SET NAMES UTF8"); //设置下面的SQL语句所用的字符编码


$sql="SELECT type FROM apply_agent WHERE id='$id'";//查询当前是否在申请中或已经申请成功
$result = mysqli_query($conn,$sql);
if($row=mysqli_fetch_assoc($result)){//不存在
	    $sql="update apply_agent set type='1',pid='$pid',gg_id='$ggid',rate='$rate' WHERE id='$id' ";
		mysqli_query($conn,$sql);
		echo "1";
}

?>