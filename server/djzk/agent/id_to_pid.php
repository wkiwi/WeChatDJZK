<?php
/**
 * 
 *    被推广者接收代理的id  去查询代理的pid
 *
 */
header('Content-Type:application/json;charset:UTF-8');
$id =$_REQUEST['id'];
$conn = mysqli_connect('127.0.0.1','dj123','dj123','dj123',3306); //数据库名。密码。 表
mysqli_query($conn,"SET NAMES UTF8"); //设置下面的SQL语句所用的字符编码


$sql="SELECT pid,gg_id FROM apply_agent WHERE id='$id'";//查询pid
$result = mysqli_query($conn,$sql);

if($row=mysqli_fetch_assoc($result)){//查询存在该id
	$sql="UPDATE apply_agent set fans=fans+1 WHERE id='$id'";
	$result = mysqli_query($conn,$sql);
	$output['code']=1;
	$output['content']=$row;
	echo json_encode($output);
}else{
	$output['code']=0;
	echo json_encode($output);
}
?>