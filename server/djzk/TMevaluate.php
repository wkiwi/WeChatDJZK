<?php
/**
 * 
 *  商品评价接口
 */
header('Content-Type:application/json;charset:UTF-8');
 $itemId=$_REQUEST['itemId'];
 $sellerId=$_REQUEST['sellerId'];
 $order=$_REQUEST['order'];
 $currentPage=$_REQUEST['currentPage'];
 $pageSize=$_REQUEST['pageSize'];
 $content = file_get_contents('https://rate.tmall.com/list_detail_rate.htm?itemId='.$itemId.'&sellerId='.$sellerId.'&order='.$order.'&currentPage='.$currentPage.'&pageSize='.$pageSize.'');
 $str_encode = mb_convert_encoding($content, 'UTF-8', 'GBK');
 $str_encode =trim(" $str_encode");
// $str_encode="{".$str_encode."}";
 echo ($str_encode);
?>
