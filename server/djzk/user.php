<?php
/**
 * 记录所有使用过本小程序人员数据
 *  
 */
header('Content-Type:application/json;charset:UTF-8');
$openid =$_REQUEST['openid'];
$conn = mysqli_connect('127.0.0.1','dj123','dj123','dj123',3306); //数据库名。密码。 表
mysqli_query($conn,"SET NAMES UTF8"); //设置下面的SQL语句所用的字符编码

/*查看openid是否存在于数据库中*/

$sql="SELECT id FROM user WHERE user_openid='$openid'";
$result = mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
if($row!==null){//存在
	    $sql="SELECT integral,sign FROM user WHERE user_openid='$openid'";
        $result = mysqli_query($conn,$sql); //提交SQL命令
        $row=mysqli_fetch_assoc($result);

        if($row!==null){//登录成功
            $output['integral']=intval($row['integral']);
			$output['sign']=($row['sign']);
        } 
        echo json_encode($output);
    }else{	//不存在
	    $sql="INSERT INTO user VALUES(NULL,'$openid','','','','0','false','true')";
		mysqli_query($conn,$sql);
		echo "插入成功";
	}   
?>