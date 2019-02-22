<?php
/**
 * 
 *     输出公告内容
 *
 */
header('Content-Type:application/json;charset:UTF-8');

$output['img']=['http://appi.taoxiaobao.top/imgs/newpeople1.jpg','http://appi.taoxiaobao.top/imgs/newpeople2.jpg'];
$output['content'][] ='步骤如下:

1、打开手机淘宝->退出自己账号->然后注册个新的账号登录(号段必须是: 13/15/18,虚拟号段不行)。
';
$output['content'][] ='2、然后复制淘口令“￥N7Fa0InqD9Q￥”到手机淘宝会弹窗领取，百分百领到10元现金，网址：http://m.tb.cn/h.WDHtZkZ 复制到浏览器打开，获取验证码，复制礼包口令打开淘宝。';

$output['content'][] ='3、关键的来了，无需实名、无需绑定银行卡、无需开通支付宝找到10元以内的商品直接付款成功。

PS: 领取10元现金红包页面的0元购商品不推荐买，性价低，手机号多无限撸，简单粗暴不限设备免单商品随意挑，进入9.9包邮专区挑选一件适合你的商品吧！


';

echo json_encode($output);
?>