<?php
/**
 * 
 *     查询代理的收益
 *
 */
header('Content-Type:application/json;charset:UTF-8');
$gg_id =$_REQUEST['ggid'];

$conn = mysqli_connect('127.0.0.1','dj123','dj123','dj123',3306); //数据库名。密码。 表
mysqli_query($conn,"SET NAMES UTF8"); //设置下面的SQL语句所用的字符编码


$sql="SELECT create_time,goods_title,shop,price,xiaoguo,order_number FROM all_order WHERE gg_id='$gg_id'";

$result = mysqli_query($conn,$sql);


if (mysqli_num_rows($result) < 1){//数据是否为空
			$output['code']= 0;
    }else{
		while($row=mysqli_fetch_assoc($result)){
			$output['code']= 1;
			$output['order'][]=$row;
		}
	}
echo json_encode($output);

?>