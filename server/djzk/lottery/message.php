<?php
$lottery_name=$_REQUEST['lottery_name'];

 $value = array(
		"keyword1"=>array(
			"value"=>$lottery_name,
			"color"=>"#FF0404"
		),
		"keyword2"=>array(
			"value"=>"请中奖用户进入小程序联系客服领取奖品",
			"color"=> "#353535"
		),
		"keyword3"=>array(
			"value"=>date("Y-n-d"),
			"color"=>"#353535"
		),
		"keyword4"=>array(
			"value"=>"所有奖项已抽完，点击查看中奖名单",
			"color"=>"#0C64F8"
		)
	);
$accessTokenObject = json_decode(file_get_contents('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=***********&secret=**************'));

$conn = mysqli_connect('127.0.0.1','djzk','djzk','djzk',3306);
$sql="SELECT user_openid,formId FROM user_lottery ";
$result = mysqli_query($conn,$sql);
 while(($row=mysqli_fetch_assoc($result))!==NULL){
		$touser= $row['user_openid'];
		$formId= $row['formId'];

$data=array();
$data['data']= $value;
//$data["touser"]='oqQzW5TjmEJ1IgoaFXktKPlCNqb4';
$data["touser"]=$touser;
$data["template_id"]='ScoXoHhWkDY23715S30mbRwBuRZwSiFWOK_EB62WWck';
$data["page"]='pages/lottery/lottery';
//$data["form_id"]='1523624037111';
$data["form_id"]=$formId;
$data["emphasis_keyword"]="keyword1.DATA";
$dd=json_encode($data);

//echo $accessTokenObject->access_token;
$url='https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token='.$accessTokenObject->access_token;
//echo $url;


 $ch = curl_init();         
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $dd);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $tmpInfo = curl_exec($ch);
    if (curl_errno($ch)) {
        return curl_error($ch);
    }
    curl_close($ch);
    //echo $tmpInfo;
}
echo 'success';
?>