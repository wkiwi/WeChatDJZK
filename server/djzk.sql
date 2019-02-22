-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2018-10-08 17:46:18
-- 服务器版本： 5.5.59-log
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `djzk`
--

-- --------------------------------------------------------

--
-- 表的结构 `administrator`
--

CREATE TABLE IF NOT EXISTS `administrator` (
  `id` int(11) NOT NULL,
  `user_openid` varchar(100) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `administrator`
--

INSERT INTO `administrator` (`id`, `user_openid`) VALUES
(1, 'oqQzW5TjmEJ1IgoaFXktKPlCNqb4'),
(2, 'oqQzW5b-BFHpHcBd3GH5ZISdNLdo');

-- --------------------------------------------------------

--
-- 表的结构 `all_order`
--

CREATE TABLE IF NOT EXISTS `all_order` (
  `create_time` varchar(100) DEFAULT NULL,
  `click_time` varchar(100) DEFAULT NULL,
  `goods_title` varchar(100) DEFAULT NULL,
  `goods_id` varchar(100) DEFAULT NULL,
  `wangwang` varchar(100) DEFAULT NULL,
  `shop` varchar(100) DEFAULT NULL,
  `goods_number` int(11) DEFAULT NULL,
  `goods_price` varchar(100) DEFAULT NULL,
  `order_state` varchar(100) DEFAULT NULL,
  `order_type` varchar(100) DEFAULT NULL,
  `income` varchar(100) DEFAULT NULL,
  `fengcheng` varchar(100) DEFAULT NULL,
  `price` varchar(100) DEFAULT NULL,
  `xiaoguo` decimal(20,2) DEFAULT NULL,
  `jiesuan` varchar(100) DEFAULT NULL,
  `future_price` varchar(100) DEFAULT NULL,
  `jiesuan_time` varchar(100) DEFAULT NULL,
  `commission_rate` varchar(100) DEFAULT NULL,
  `commission_price` varchar(100) DEFAULT NULL,
  `subsidy_rate` varchar(100) DEFAULT NULL,
  `subsidy_price` varchar(100) DEFAULT NULL,
  `subsidy_type` varchar(100) DEFAULT NULL,
  `cjpt` varchar(100) DEFAULT NULL,
  `third_party` varchar(100) DEFAULT NULL,
  `order_number` varchar(100) DEFAULT NULL,
  `cart_name` varchar(100) DEFAULT NULL,
  `media_id` varchar(100) DEFAULT NULL,
  `media_name` varchar(100) DEFAULT NULL,
  `gg_id` int(11) DEFAULT NULL,
  `gg_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `all_order`
--

INSERT INTO `all_order` (`create_time`, `click_time`, `goods_title`, `goods_id`, `wangwang`, `shop`, `goods_number`, `goods_price`, `order_state`, `order_type`, `income`, `fengcheng`, `price`, `xiaoguo`, `jiesuan`, `future_price`, `jiesuan_time`, `commission_rate`, `commission_price`, `subsidy_rate`, `subsidy_price`, `subsidy_type`, `cjpt`, `third_party`, `order_number`, `cart_name`, `media_id`, `media_name`, `gg_id`, `gg_name`) VALUES
('2018-05-05 13:27:31', '2018-05-05 13:25:17', '短袖t恤男士圆领韩版情侣半袖潮流体恤打底衫男装印花纯棉衣服', '544279540312', '古缔兽旗舰店', '古缔兽旗舰店', 1, '128.00', '订单付款', '天猫', '30.60 %', '100.00 %', '39.00', '11.93', '0.00', '0.00', '', '30.60 %', '0.00', '0.00 %', '0.00', '-', '无线', '--', '155211445313773915', '男装', '40258467', '折上折惠惠购', 153926552, '商品'),
('2018-05-05 13:24:17', '2018-05-05 13:21:48', '短袖男士夏季t恤圆领韩版潮流修身半袖上衣纯棉白色情侣体恤服装', '558388112496', '初宿旗舰店', '初宿旗舰店', 1, '199.00', '订单付款', '天猫', '10.00 %', '100.00 %', '14.80', '1.48', '0.00', '0.00', '', '10.00 %', '0.00', '0.00 %', '0.00', '-', '无线', '--', '155263860047773915', '男装', '40258467', '折上折惠惠购', 153926552, '商品'),
('2018-05-04 10:43:05', '2018-05-04 10:42:17', '金煌芒果甜心芒 新鲜水果批发包邮当季带箱10斤青芒非贵妃小台芒', '567940503043', '猫小姐食品旗舰店', '猫小姐食品旗舰店', 1, '89.00', '订单付款', '天猫', '2.50 %', '100.00 %', '29.90', '0.75', '0.00', '0.00', '', '1.50 %', '0.00', '1.00 %', '0.00', '天猫', '无线', '--', '156458101371437190', '食品-生鲜', '40258467', '折上折惠惠购', 184602355, '鹊桥高佣PID'),
('2018-05-04 10:40:40', '2018-05-04 10:40:17', '越南进口新鲜芒果当季超甜水果大青芒果包邮热带批发整箱10斤玉', '565110298294', '优亩甜旗舰店', '优亩甜旗舰店', 1, '69.90', '订单付款', '天猫', '2.50 %', '100.00 %', '39.90', '1.00', '0.00', '0.00', '', '1.50 %', '0.00', '1.00 %', '0.00', '天猫', '无线', '--', '156538796334437190', '食品-生鲜', '40258467', '折上折惠惠购', 184602355, '鹊桥高佣PID'),
('2018-05-04 09:32:09', '2018-05-04 09:31:46', '2018日程本每日计划本创意记事本A5笔记本文具本子加厚简约记录本', '558581167070', '卡杰旗舰店', '卡杰旗舰店', 1, '57.00', '订单付款', '天猫', '30.00 %', '100.00 %', '9.90', '2.97', '0.00', '0.00', '', '30.00 %', '0.00', '0.00 %', '0.00', '-', '无线', '--', '155023147714354112', '电子词典/文化用品', '40258467', '折上折惠惠购', 153926552, '商品'),
('2018-05-02 23:06:35', '2018-05-02 23:04:29', '老粗布床单单件纯棉加厚帆布双人单人学生被单1.5/1.8/2m床全棉布', '534782311935', '之前之后旗舰店', '之前之后旗舰店', 1, '56.00', '订单付款', '天猫', '18.00 %', '100.00 %', '18.00', '3.24', '0.00', '0.00', '', '18.00 %', '0.00', '0.00 %', '0.00', '-', '无线', '--', '154497811582354112', '床上用品', '40258467', '折上折惠惠购', 153926552, '商品'),
('2018-05-02 22:59:17', '2018-05-02 22:57:34', '【狂欢价】南极人大学生宿舍上下铺纯棉全棉床单单件0.9/1.5m床单双人床单', '555781128458', '南极人苏棉纺专卖店', '南极人苏棉纺专卖店', 1, '78.00', '订单付款', '天猫', '18.00 %', '100.00 %', '33.00', '5.94', '0.00', '0.00', '', '18.00 %', '0.00', '0.00 %', '0.00', '-', '无线', '--', '154345322817354112', '床上用品', '40258467', '折上折惠惠购', 153926552, '商品'),
('2018-04-30 18:23:09', '2018-04-30 18:19:45', '【狂欢价】TAFIQ 安卓数据线手机充电器线高速快充适用小米oppo华为vivo通用', '522644713577', '塔菲克旗舰店', '塔菲克旗舰店', 1, '6.00', '订单付款', '天猫', '40.00 %', '100.00 %', '3.90', '1.56', '0.00', '0.00', '', '40.00 %', '0.00', '0.00 %', '0.00', '-', '无线', '--', '140563362455048338', '3C数码配件', '40258467', '折上折惠惠购', 153926552, '商品');

-- --------------------------------------------------------

--
-- 表的结构 `apply_agent`
--

CREATE TABLE IF NOT EXISTS `apply_agent` (
  `id` int(11) NOT NULL,
  `openid` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `zfb` varchar(100) DEFAULT NULL,
  `wx` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `argument` varchar(200) DEFAULT NULL,
  `formId` varchar(100) DEFAULT NULL,
  `type` tinyint(1) DEFAULT NULL,
  `fans` int(11) DEFAULT NULL,
  `rate` varchar(100) DEFAULT NULL,
  `pid` varchar(200) DEFAULT NULL,
  `gg_id` varchar(200) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `apply_agent`
--

INSERT INTO `apply_agent` (`id`, `openid`, `name`, `zfb`, `wx`, `phone`, `argument`, `formId`, `type`, `fans`, `rate`, `pid`, `gg_id`) VALUES
(1, 'oqQzW5TjmEJ1IgoaFXktKPlCNqb4', 'qwe', 'qew', 'qwe', 'qwe', 'qwe', 'the formId is a mock one', 1, 0, '0.9', 'mm_128220910_40258467_153926552', '153926552'),
(2, 'oqQzW5T168cjq746she4lR1a5wZU', '王震', '15619986615', '15619986615', '15619986615', '一起赚钱', '1525742887550', 1, 1, '0.6', 'mm_128220910_40258467_184602355', '184602355');

-- --------------------------------------------------------

--
-- 表的结构 `lottery_details`
--

CREATE TABLE IF NOT EXISTS `lottery_details` (
  `id` int(11) NOT NULL,
  `lottery_number` int(11) DEFAULT NULL,
  `lottery_name` varchar(100) DEFAULT NULL,
  `message` varchar(1000) DEFAULT NULL,
  `lottery_time` varchar(100) DEFAULT NULL,
  `lottery_image` varchar(200) DEFAULT NULL,
  `lottery_open` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `lottery_details`
--

INSERT INTO `lottery_details` (`id`, `lottery_number`, `lottery_name`, `message`, `lottery_time`, `lottery_image`, `lottery_open`) VALUES
(1, 1, '测试', '测试测试测试测试测试测试测试测试测试测试测试测试', '1524102480', 'https://wx.qlogo.cn/mmopen/vi_32/Fgg7oEHKj3O1FrZ6gsibZrgm9fFhThic7PYLvhmmVnzsVR3kVSLdxM16Gj96Z85htNGVPlib90xJfj8LmPhKmj4xA/0', 0),
(2, 1, '测试', '测试测试测试测试测试测试测试测试测试测试测试测试', '1524102480', 'https://wx.qlogo.cn/mmopen/vi_32/Fgg7oEHKj3O1FrZ6gsibZrgm9fFhThic7PYLvhmmVnzsVR3kVSLdxM16Gj96Z85htNGVPlib90xJfj8LmPhKmj4xA/0', 0),
(3, 3, '水面膜一片', 'Airy sang极简水面膜  王一博代言\nPICC保驾护航 孕妇敏感肌可用\n\n肌肤问题的根源在于缺水\n肌肤水油失衡，各种昂贵护肤品等于0\n极简水面膜\n只为补水一件事 更为中国年轻肌肤 \n极简水面膜中国315消费者可信赖产品 与瑞士顶尖研发机构RAHN合作 千万保险护航 各大卫视 各大媒体曝光央视网商城优选产品各种线下广告宣传 一款有背景的面膜决定市场核心竞争力，414天 研发历程，从面膜配方、成分、膜布、包装层层审核，186次实验，精选46个代表性高校区肌肤数据，使用市场最高规格384＋007蚕丝膜布，锁住精华，导入肌肤层，原料来自于瑞士顶尖研发机构RAHN\n\n配方采用植物萃取  敏感肌/孕妈妈可用\n 1.神经酰胺：在保持角质层水分的平衡中起着重要作用。\n2.雪莲花：使皮肤保持光泽、丰满，延缓衰老。\n3.多肽精华：修复肌肤受损细胞，提高肌肤再生能力。\n4.牡丹根皮：等于肌肤敏感干燥具备有效的安抚作用\n\nwuli 小迪迪赞', '1524146400', 'https://wx.qlogo.cn/mmopen/vi_32/Fgg7oEHKj3O1FrZ6gsibZrgm9fFhThic7PYLvhmmVnzsVR3kVSLdxM16Gj96Z85htNGVPlib90xJfj8LmPhKmj4xA/0', 0),
(4, 1, '12支彩妆化妆刷套装', '12支彩妆化妆刷套装初学者美妆工具套刷全套粉底刷眼影刷腮红刷子\n\n多谢各位大佬对抽奖功能的测试，非常非常感谢！本次抽一名，中奖者联系客服领取！！！', '1524319200', 'https://wx.qlogo.cn/mmopen/vi_32/Fgg7oEHKj3O1FrZ6gsibZrgm9fFhThic7PYLvhmmVnzsVR3kVSLdxM16Gj96Z85htNGVPlib90xJfj8LmPhKmj4xA/0', 0),
(5, 1, '新鲜芒果5斤装', '海南三亚小台农芒果新鲜5斤装热带时令水果小芒果鸡蛋芒，商品来自淘宝非商家赞助，本人自费回馈一直一来关注小程序的粉丝。\n\n如点击抽奖无效，请关闭小程序后台程序，重新进入抽奖！！！', '1524837600', 'https://wx.qlogo.cn/mmopen/vi_32/Fgg7oEHKj3O1FrZ6gsibZrgm9fFhThic7PYLvhmmVnzsVR3kVSLdxM16Gj96Z85htNGVPlib90xJfj8LmPhKmj4xA/0', 0);

-- --------------------------------------------------------

--
-- 表的结构 `lottery_history`
--

CREATE TABLE IF NOT EXISTS `lottery_history` (
  `user_id` int(11) NOT NULL,
  `user_openid` varchar(100) DEFAULT NULL,
  `user_name` varchar(100) DEFAULT NULL,
  `user_image` varchar(200) DEFAULT NULL,
  `lottery_time` varchar(100) DEFAULT NULL,
  `lottery_name` varchar(100) DEFAULT NULL,
  `lottery_type` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `lottery_history`
--

INSERT INTO `lottery_history` (`user_id`, `user_openid`, `user_name`, `user_image`, `lottery_time`, `lottery_name`, `lottery_type`) VALUES
(1, 'oqQzW5TjmEJ1IgoaFXktKPlCNqb4', 'Wkiwi', 'https://wx.qlogo.cn/mmopen/vi_32/Fgg7oEHKj3O1FrZ6gsibZrgm9fFhThic7PYLvhmmVnzsVR3kVSLdxM16Gj96Z85htNGVPlib90xJfj8LmPhKmj4xA/0', '2018-04-17 11:46:00', '5元红包', 0),
(2, 'oqQzW5VFPUlQBSvxUdQ_9OdbIPm8', '浅末年代_', 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI26J0Dzq89YEaF8GicH77LtnCdKgwl4csRRCiaB2VFvWibicytUW7J4agRT7SPDJzMq1ebV3ibCk3WATg/0', '2018-04-17 14:30:00', '3元红包', 0),
(7, 'oqQzW5XVq3YbkcC6Tuih8tD-EQBQ', 'Lamb', 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI5XHZoqJExZbVVEQeFwWzibKmzm54Hia2xsgTe91BB8mcl59mOxvIRP6lqXTTEiadCZ5UYqpNLNx0sQ/0', '2018-04-19 22:00:00', '水面膜一片', 0),
(8, 'oqQzW5QLG9j1F6tr3csMFEjJQkU8', '初心。', 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKcN3kZPYapRwKbeuTxyAlnkAH2fGgM91K2IcECktcKFreQ2Ks8IPLBbqXqg0WibD5FcM2F3tD5tLA/0', '2018-04-19 22:00:00', '水面膜一片', 0),
(9, 'oqQzW5Ti-j5g4cJBkxBejC4FrLgA', '枪蹦狗友', 'https://wx.qlogo.cn/mmopen/vi_32/pKUkmoj1qaUMRvaEogdAp918WMU7Sxf6AJZ0g7ygljJ9PUrIdY6151pThO4wF9aicoZ8IIBaicdPvibcP8aTkFbWg/0', '2018-04-19 22:00:00', '水面膜一片', 0),
(11, NULL, '揉揉肉肉', 'https://wx.qlogo.cn/mmopen/vi_32/hak23LwWhWbT0EaE0Nvavjmicw31ugb31ibncZkPBYrYLkoZYNrEXWm4d0mo0pY11LEFF36ZWxUVOoK9Uue42ROg/0', '2018-4-21 22:00:00', '12支彩妆化妆刷套装', 0),
(14, 'oqQzW5XVq3YbkcC6Tuih8tD-EQBQ', 'Lamb', 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI5XHZoqJExZbVVEQeFwWzibKmzm54Hia2xsgTe91BB8mcl59mOxvIRP6lqXTTEiadCZ5UYqpNLNx0sQ/0', '2018-04-27 22:0:00', '新鲜芒果5斤装', 1);

-- --------------------------------------------------------

--
-- 表的结构 `order`
--

CREATE TABLE IF NOT EXISTS `order` (
  `create_time` varchar(100) DEFAULT NULL,
  `click_time` varchar(100) DEFAULT NULL,
  `goods_title` varchar(100) DEFAULT NULL,
  `goods_id` varchar(100) DEFAULT NULL,
  `wangwang` varchar(100) DEFAULT NULL,
  `shop` varchar(100) DEFAULT NULL,
  `goods_number` int(11) DEFAULT NULL,
  `goods_price` varchar(100) DEFAULT NULL,
  `order_state` varchar(100) DEFAULT NULL,
  `order_type` varchar(100) DEFAULT NULL,
  `income` varchar(100) DEFAULT NULL,
  `fengcheng` varchar(100) DEFAULT NULL,
  `price` varchar(100) DEFAULT NULL,
  `xiaoguo` decimal(20,2) DEFAULT NULL,
  `jiesuan` varchar(100) DEFAULT NULL,
  `future_price` varchar(100) DEFAULT NULL,
  `jiesuan_time` varchar(100) DEFAULT NULL,
  `commission_rate` varchar(100) DEFAULT NULL,
  `commission_price` varchar(100) DEFAULT NULL,
  `subsidy_rate` varchar(100) DEFAULT NULL,
  `subsidy_price` varchar(100) DEFAULT NULL,
  `subsidy_type` varchar(100) DEFAULT NULL,
  `cjpt` varchar(100) DEFAULT NULL,
  `third_party` varchar(100) DEFAULT NULL,
  `order_number` varchar(100) DEFAULT NULL,
  `cart_name` varchar(100) DEFAULT NULL,
  `media_id` varchar(100) DEFAULT NULL,
  `media_name` varchar(100) DEFAULT NULL,
  `gg_id` int(11) DEFAULT NULL,
  `gg_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `order`
--

INSERT INTO `order` (`create_time`, `click_time`, `goods_title`, `goods_id`, `wangwang`, `shop`, `goods_number`, `goods_price`, `order_state`, `order_type`, `income`, `fengcheng`, `price`, `xiaoguo`, `jiesuan`, `future_price`, `jiesuan_time`, `commission_rate`, `commission_price`, `subsidy_rate`, `subsidy_price`, `subsidy_type`, `cjpt`, `third_party`, `order_number`, `cart_name`, `media_id`, `media_name`, `gg_id`, `gg_name`) VALUES
('2018-05-05 13:27:31', '2018-05-05 13:25:17', '短袖t恤男士圆领韩版情侣半袖潮流体恤打底衫男装印花纯棉衣服', '544279540312', '古缔兽旗舰店', '古缔兽旗舰店', 1, '128.00', '订单付款', '天猫', '30.60 %', '100.00 %', '39.00', '11.93', '0.00', '0.00', '', '30.60 %', '0.00', '0.00 %', '0.00', '-', '无线', '--', '155211445313773915', '男装', '40258467', '折上折惠惠购', 153926552, '商品'),
('2018-05-05 13:24:17', '2018-05-05 13:21:48', '短袖男士夏季t恤圆领韩版潮流修身半袖上衣纯棉白色情侣体恤服装', '558388112496', '初宿旗舰店', '初宿旗舰店', 1, '199.00', '订单付款', '天猫', '10.00 %', '100.00 %', '14.80', '1.48', '0.00', '0.00', '', '10.00 %', '0.00', '0.00 %', '0.00', '-', '无线', '--', '155263860047773915', '男装', '40258467', '折上折惠惠购', 153926552, '商品'),
('2018-05-04 10:43:05', '2018-05-04 10:42:17', '金煌芒果甜心芒 新鲜水果批发包邮当季带箱10斤青芒非贵妃小台芒', '567940503043', '猫小姐食品旗舰店', '猫小姐食品旗舰店', 1, '89.00', '订单付款', '天猫', '2.50 %', '100.00 %', '29.90', '0.75', '0.00', '0.00', '', '1.50 %', '0.00', '1.00 %', '0.00', '天猫', '无线', '--', '156458101371437190', '食品-生鲜', '40258467', '折上折惠惠购', 184602355, '鹊桥高佣PID'),
('2018-05-04 10:40:40', '2018-05-04 10:40:17', '越南进口新鲜芒果当季超甜水果大青芒果包邮热带批发整箱10斤玉', '565110298294', '优亩甜旗舰店', '优亩甜旗舰店', 1, '69.90', '订单付款', '天猫', '2.50 %', '100.00 %', '39.90', '1.00', '0.00', '0.00', '', '1.50 %', '0.00', '1.00 %', '0.00', '天猫', '无线', '--', '156538796334437190', '食品-生鲜', '40258467', '折上折惠惠购', 184602355, '鹊桥高佣PID'),
('2018-05-04 09:32:09', '2018-05-04 09:31:46', '2018日程本每日计划本创意记事本A5笔记本文具本子加厚简约记录本', '558581167070', '卡杰旗舰店', '卡杰旗舰店', 1, '57.00', '订单付款', '天猫', '30.00 %', '100.00 %', '9.90', '2.97', '0.00', '0.00', '', '30.00 %', '0.00', '0.00 %', '0.00', '-', '无线', '--', '155023147714354112', '电子词典/文化用品', '40258467', '折上折惠惠购', 153926552, '商品'),
('2018-05-02 23:06:35', '2018-05-02 23:04:29', '老粗布床单单件纯棉加厚帆布双人单人学生被单1.5/1.8/2m床全棉布', '534782311935', '之前之后旗舰店', '之前之后旗舰店', 1, '56.00', '订单付款', '天猫', '18.00 %', '100.00 %', '18.00', '3.24', '0.00', '0.00', '', '18.00 %', '0.00', '0.00 %', '0.00', '-', '无线', '--', '154497811582354112', '床上用品', '40258467', '折上折惠惠购', 153926552, '商品'),
('2018-05-02 22:59:17', '2018-05-02 22:57:34', '【狂欢价】南极人大学生宿舍上下铺纯棉全棉床单单件0.9/1.5m床单双人床单', '555781128458', '南极人苏棉纺专卖店', '南极人苏棉纺专卖店', 1, '78.00', '订单付款', '天猫', '18.00 %', '100.00 %', '33.00', '5.94', '0.00', '0.00', '', '18.00 %', '0.00', '0.00 %', '0.00', '-', '无线', '--', '154345322817354112', '床上用品', '40258467', '折上折惠惠购', 153926552, '商品'),
('2018-04-30 18:23:09', '2018-04-30 18:19:45', '【狂欢价】TAFIQ 安卓数据线手机充电器线高速快充适用小米oppo华为vivo通用', '522644713577', '塔菲克旗舰店', '塔菲克旗舰店', 1, '6.00', '订单付款', '天猫', '40.00 %', '100.00 %', '3.90', '1.56', '0.00', '0.00', '', '40.00 %', '0.00', '0.00 %', '0.00', '-', '无线', '--', '140563362455048338', '3C数码配件', '40258467', '折上折惠惠购', 153926552, '商品'),
('2018-05-05 13:27:31', '2018-05-05 13:25:17', '短袖t恤男士圆领韩版情侣半袖潮流体恤打底衫男装印花纯棉衣服', '544279540312', '古缔兽旗舰店', '古缔兽旗舰店', 1, '128.00', '订单付款', '天猫', '30.60 %', '100.00 %', '39.00', '11.93', '0.00', '0.00', '', '30.60 %', '0.00', '0.00 %', '0.00', '-', '无线', '--', '155211445313773915', '男装', '40258467', '折上折惠惠购', 153926552, '商品'),
('2018-05-05 13:24:17', '2018-05-05 13:21:48', '短袖男士夏季t恤圆领韩版潮流修身半袖上衣纯棉白色情侣体恤服装', '558388112496', '初宿旗舰店', '初宿旗舰店', 1, '199.00', '订单付款', '天猫', '10.00 %', '100.00 %', '14.80', '1.48', '0.00', '0.00', '', '10.00 %', '0.00', '0.00 %', '0.00', '-', '无线', '--', '155263860047773915', '男装', '40258467', '折上折惠惠购', 153926552, '商品'),
('2018-05-04 10:43:05', '2018-05-04 10:42:17', '金煌芒果甜心芒 新鲜水果批发包邮当季带箱10斤青芒非贵妃小台芒', '567940503043', '猫小姐食品旗舰店', '猫小姐食品旗舰店', 1, '89.00', '订单付款', '天猫', '2.50 %', '100.00 %', '29.90', '0.75', '0.00', '0.00', '', '1.50 %', '0.00', '1.00 %', '0.00', '天猫', '无线', '--', '156458101371437190', '食品-生鲜', '40258467', '折上折惠惠购', 184602355, '鹊桥高佣PID'),
('2018-05-04 10:40:40', '2018-05-04 10:40:17', '越南进口新鲜芒果当季超甜水果大青芒果包邮热带批发整箱10斤玉', '565110298294', '优亩甜旗舰店', '优亩甜旗舰店', 1, '69.90', '订单付款', '天猫', '2.50 %', '100.00 %', '39.90', '1.00', '0.00', '0.00', '', '1.50 %', '0.00', '1.00 %', '0.00', '天猫', '无线', '--', '156538796334437190', '食品-生鲜', '40258467', '折上折惠惠购', 184602355, '鹊桥高佣PID'),
('2018-05-04 09:32:09', '2018-05-04 09:31:46', '2018日程本每日计划本创意记事本A5笔记本文具本子加厚简约记录本', '558581167070', '卡杰旗舰店', '卡杰旗舰店', 1, '57.00', '订单付款', '天猫', '30.00 %', '100.00 %', '9.90', '2.97', '0.00', '0.00', '', '30.00 %', '0.00', '0.00 %', '0.00', '-', '无线', '--', '155023147714354112', '电子词典/文化用品', '40258467', '折上折惠惠购', 153926552, '商品'),
('2018-05-02 23:06:35', '2018-05-02 23:04:29', '老粗布床单单件纯棉加厚帆布双人单人学生被单1.5/1.8/2m床全棉布', '534782311935', '之前之后旗舰店', '之前之后旗舰店', 1, '56.00', '订单付款', '天猫', '18.00 %', '100.00 %', '18.00', '3.24', '0.00', '0.00', '', '18.00 %', '0.00', '0.00 %', '0.00', '-', '无线', '--', '154497811582354112', '床上用品', '40258467', '折上折惠惠购', 153926552, '商品'),
('2018-05-02 22:59:17', '2018-05-02 22:57:34', '【狂欢价】南极人大学生宿舍上下铺纯棉全棉床单单件0.9/1.5m床单双人床单', '555781128458', '南极人苏棉纺专卖店', '南极人苏棉纺专卖店', 1, '78.00', '订单付款', '天猫', '18.00 %', '100.00 %', '33.00', '5.94', '0.00', '0.00', '', '18.00 %', '0.00', '0.00 %', '0.00', '-', '无线', '--', '154345322817354112', '床上用品', '40258467', '折上折惠惠购', 153926552, '商品'),
('2018-04-30 18:23:09', '2018-04-30 18:19:45', '【狂欢价】TAFIQ 安卓数据线手机充电器线高速快充适用小米oppo华为vivo通用', '522644713577', '塔菲克旗舰店', '塔菲克旗舰店', 1, '6.00', '订单付款', '天猫', '40.00 %', '100.00 %', '3.90', '1.56', '0.00', '0.00', '', '40.00 %', '0.00', '0.00 %', '0.00', '-', '无线', '--', '140563362455048338', '3C数码配件', '40258467', '折上折惠惠购', 153926552, '商品');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL,
  `user_openid` varchar(100) DEFAULT NULL,
  `user_name` varchar(100) DEFAULT NULL,
  `formId` varchar(100) DEFAULT NULL,
  `formIdTime` varchar(100) DEFAULT NULL,
  `integral` int(11) DEFAULT NULL,
  `admin` varchar(100) DEFAULT NULL,
  `sign` varchar(100) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `user_openid`, `user_name`, `formId`, `formIdTime`, `integral`, `admin`, `sign`) VALUES
(1, 'oqQzW5TjmEJ1IgoaFXktKPlCNqb4', 'kiwi', '1525742810293', '1525742805', 180, 'true', 'true'),
(2, 'oqQzW5T168cjq746she4lR1a5wZU', '咳嗽得糖浆', '1525742851397', '1525742847', 40, 'false', 'true'),
(3, 'oqQzW5Tky5GV70_D3VRyWJvBXGvo', '', '973019a2b5d6ad34d5b0836421a6a86c', '1526449371', 20, 'false', 'true'),
(4, 'oqQzW5dcF_eFaTisPXLzuT8cDG2I', '', '', '', 0, 'false', 'true'),
(5, 'oqQzW5Q8Ygprdfj9Cl2BQF6p8ph0', '', '', '', 0, 'false', 'true'),
(6, 'oqQzW5S4tGcSX8RsKuTRIeui4UcY', '', '', '', 0, 'false', 'true'),
(7, 'oqQzW5bZqRok0tvTmxmYtWVSpW30', '', '', '', 0, 'false', 'true'),
(8, 'oqQzW5ddIHIdpLxtoErjk7LCl4BE', '', '', '', 0, 'false', 'true'),
(9, 'oqQzW5cXzte-iXJmc0pV90yvN-Tg', '', '', '', 0, 'false', 'true'),
(10, 'oqQzW5esFFvc53f3SxMXTghYpwKs', '', '1525670211498', '1525670211', 40, 'false', 'true'),
(11, 'oqQzW5bqoCfV7ilhsn3aOhRstv3s', '', '', '', 0, 'false', 'true'),
(12, 'oqQzW5blPmKIOTe_sKAjqbzOzUQk', '', 'the formId is a mock one', '1525454145', 30, 'false', 'true'),
(13, 'oqQzW5Un7lKihRv6k4E3Wg5d_Tnk', '', '', '', 0, 'false', 'true'),
(16, 'oqQzW5eWYPVsuLGWGg-YzSRM7gDU', '', '1525163956134', '1525163954', 50, 'false', 'true'),
(17, 'oqQzW5SY8NmjpM5SV7IUvVA5YtoM', '', '', '', 0, 'false', 'true'),
(18, 'oqQzW5S0hRRVNfL6c5QjtT0F_vMI', '', '', '', 0, 'false', 'true'),
(19, 'oqQzW5UOenHLARhs739WJDl_fztM', '', '', '', 0, 'false', 'true'),
(20, 'oqQzW5bR3UpyFFiBn3s9oOOofSrs', '', '1524102801662', '1524102800', 10, 'false', 'true'),
(21, 'oqQzW5b-BFHpHcBd3GH5ZISdNLdo', '', '1524104788612', '1524104785', 10, 'false', 'true'),
(22, 'oqQzW5V504o2k8feNfvSk0reUIm8', '', '', '', 0, 'false', 'true'),
(23, 'oqQzW5XACsJZQMRbO0A-LLfTyCek', '', '', '', 0, 'false', 'true'),
(24, 'oqQzW5S2NHrtgB78OFQyKcuLVfWM', '', '', '', 0, 'false', 'true'),
(25, 'oqQzW5YKKUew1E77DzCCGUEsfDZU', '', '', '', 0, 'false', 'true'),
(26, 'oqQzW5ZUXkZMKGPt4_JSSt1lTU2U', '', '', '', 0, 'false', 'true'),
(27, 'oqQzW5XuPqiKkqkpeVenw4Ldx_2A', '', '', '', 0, 'false', 'true'),
(28, 'oqQzW5cabeQvNBSOQpo3WQDhqoY0', '', '', '', 0, 'false', 'true'),
(29, 'oqQzW5UcDm5QMbaC7AMYt34JvnhE', '', '', '', 0, 'false', 'true'),
(30, 'oqQzW5XVq3YbkcC6Tuih8tD-EQBQ', '', '', '', 0, 'false', 'true'),
(31, 'oqQzW5XgJz7FVdWEe35Ud51L3npY', '', '', '', 0, 'false', 'true'),
(32, 'oqQzW5Xaw1NRcrWZDmo10-FprKcY', '', '', '', 0, 'false', 'true'),
(33, 'oqQzW5Ti-j5g4cJBkxBejC4FrLgA', '', '', '', 0, 'false', 'true'),
(34, 'oqQzW5W7YNno2nzsJJkCrvKw8Ajg', '', '', '', 0, 'false', 'true'),
(35, 'oqQzW5XV5DzlabcrLynevR8wJDuc', '', '', '', 0, 'false', 'true'),
(36, 'oqQzW5XU3fEHcd_tLW_rIz740v2o', '', '', '', 0, 'false', 'true'),
(37, 'oqQzW5ekMsgd4tmv1DVf1_g463pk', '', '', '', 0, 'false', 'true'),
(38, 'oqQzW5Vx3fhZF260MvlAIX34OGj8', '', '', '', 0, 'false', 'true'),
(39, 'oqQzW5TD2tNATcAyH4COltHav9Tg', '', '', '', 0, 'false', 'true'),
(40, 'oqQzW5d72FJcZvlNQ7ekh_SfIRsM', '', '', '', 0, 'false', 'true'),
(41, 'oqQzW5XfkDou7XIEtg3WDl4zMKMY', '', '', '', 0, 'false', 'true'),
(42, 'oqQzW5Wj0uXNlAKmpVE53LQEVJE4', '', '', '', 0, 'false', 'true'),
(43, 'oqQzW5WTp2vs4HWFu0EZSa5xUrrU', '', '', '', 0, 'false', 'true'),
(44, 'oqQzW5Xn0hmzAZu7zymWdNy59MBE', '', '1524277604097', '1524277603', 20, 'false', 'true'),
(45, 'oqQzW5ZbjR3cyG1MiaOmkrlsLp2Y', '', '', '', 0, 'false', 'true'),
(46, 'oqQzW5QLG9j1F6tr3csMFEjJQkU8', '', '', '', 0, 'false', 'true'),
(47, 'oqQzW5RhNLXHQfT6I4sgk2LFdzlM', '', '', '', 0, 'false', 'true'),
(48, 'oqQzW5XisRiT2YiGZESdw25s7CNE', '', '1524130504085', '1524130501', 10, 'false', 'true'),
(49, 'oqQzW5Yw1tq9oTK6BtbosnUIJjto', '', '', '', 0, 'false', 'true'),
(50, 'oqQzW5Y0gQHoepDcB3bbqW6fu1Pg', '', '', '', 0, 'false', 'true'),
(51, 'oqQzW5WDA1B3Ng15AskUO5QjH1KQ', '', '', '', 0, 'false', 'true'),
(52, 'oqQzW5U8yOTIi9xoTltopXNvxbyE', '', '', '', 0, 'false', 'true'),
(53, 'oqQzW5XKRWnYBOB7J48GcfxB4pLI', '', '', '', 0, 'false', 'true'),
(54, 'oqQzW5dRaybkg65o3wvl11xac7OA', '', '', '', 0, 'false', 'true'),
(55, 'oqQzW5Y2d277QD4RiBgSyl8VvYTI', '', '1524149492478', '1524149468', 10, 'false', 'true'),
(56, 'oqQzW5SF8Rj4TigXI7RyJ5XdkFTQ', '', '', '', 0, 'false', 'true'),
(57, 'oqQzW5cG2ZmTGlAPwSLCnjRWoNQY', '', '', '', 0, 'false', 'true'),
(58, 'oqQzW5ase5HDMU6o_HBnRYZip6Xg', '', '', '', 0, 'false', 'true'),
(59, 'oqQzW5XB8cC6eQPtY5BQO8P3hQSc', '', '', '', 0, 'false', 'true'),
(60, 'oqQzW5f8tU1z0K4a7DPiT0GphlRU', '', '', '', 0, 'false', 'true'),
(61, 'oqQzW5TiAfEKBm-aD7cC2znNuYYE', '', '', '', 0, 'false', 'true'),
(62, 'oqQzW5e81BH7hP9nXaYnXK1YAs_o', '', '', '', 0, 'false', 'true'),
(63, 'oqQzW5e7H2tQjterwATqiIuG4V8o', '', '', '', 0, 'false', 'true'),
(64, 'oqQzW5UcO86ow_yunizM_Eyb4oLo', '', '', '', 0, 'false', 'true'),
(65, 'oqQzW5TezofqwjP9FH5Tbqn0gxq8', '', '', '', 0, 'false', 'true'),
(66, 'oqQzW5a-hbpobi9pvsBy8HwEjqfk', '', '', '', 0, 'false', 'true'),
(67, 'oqQzW5XNGM3viGOtn07y1A4o2wSQ', '', '', '', 0, 'false', 'true'),
(68, 'oqQzW5RxwjL13m2xNbgN8GyZdJec', '', '', '', 0, 'false', 'true'),
(69, 'oqQzW5Ygh355Iu2apdMxUJ98CJ90', '', '', '', 0, 'false', 'true'),
(70, 'oqQzW5bKCJADWMoCQON7b3sT9Pvs', '', '', '', 0, 'false', 'true'),
(71, 'undefined', '', '', '', 0, 'false', 'true'),
(72, 'oqQzW5VFPUlQBSvxUdQ_9OdbIPm8', '', '', '', 0, 'false', 'true'),
(73, 'oqQzW5bh8Qo5M-Zs2kyHUi83gqZk', '', '', '', 0, 'false', 'true'),
(74, 'oqQzW5SIxfo1ubhzpfNxtrehWFIM', '', '', '', 0, 'false', 'true'),
(75, 'oqQzW5TShbXflKAwJOVxO4wBYbq0', '', '', '', 0, 'false', 'true'),
(76, 'oqQzW5dWt0vVmxRaQePFgboCZIRg', '', '', '', 0, 'false', 'true'),
(77, 'oqQzW5Wd8pFhGpupdB-4bSFbcpAc', '', '', '', 0, 'false', 'true'),
(78, 'oqQzW5TifHneBXSZAT9RhnRDdSdI', '', '', '', 0, 'false', 'true'),
(79, 'oqQzW5Sln6KPApw-Z5bNbIabMoag', '', '1524297294568', '1524297293', 10, 'false', 'true'),
(80, 'oqQzW5Q4a0u6gzowYhQkSE4bo3k4', '', '', '', 0, 'false', 'true'),
(81, 'oqQzW5TgqwXI9LqLvRSJijhT3neo', '', '', '', 0, 'false', 'true'),
(82, 'oqQzW5UgX0KsWRas1TEkIvThRoj4', '', 'dafd69188aff916adb8b4c94c55cecee', '1524627257', 10, 'false', 'true'),
(83, 'oqQzW5TkLm5k51XTXyWlTrdLowbY', '', '', '', 0, 'false', 'true'),
(84, 'oqQzW5UDYOrQqyjFBkrENMviG6I8', '', '', '', 0, 'false', 'true'),
(85, 'oqQzW5SHXzbkX1ux2Og8n527awQg', '', '1525067167817', '1525067166', 20, 'false', 'true'),
(86, 'oqQzW5SqWXaV24QEcLHjKEHVd0OI', '', '', '', 0, 'false', 'true'),
(87, 'oqQzW5c8CtQgk59CapxAsUN7HZpY', '', '', '', 0, 'false', 'true'),
(88, 'oqQzW5fPhIVApLfr6C0kX3P0dkbY', '', '', '', 0, 'false', 'true'),
(89, 'oqQzW5XDCw0PJAQ9aSIP4Pd02zfQ', '', '', '', 0, 'false', 'true'),
(90, 'oqQzW5V2WAYfamaNBa5MuKkXtgBs', '', '', '', 0, 'false', 'true'),
(91, 'oqQzW5W1wKQ-v1LjK-HoR3EPX1lA', '', '', '', 0, 'false', 'true'),
(92, 'oqQzW5UjNfk_2NX-fABXl9B5QU0w', '', '', '', 0, 'false', 'true'),
(93, 'oqQzW5dIQrSxBn3XydWcgHsyNaYA', '', '', '', 0, 'false', 'true'),
(94, 'oqQzW5Z26Vm8HdzuB77B7jvO8rec', '', '', '', 0, 'false', 'true'),
(95, 'oqQzW5bl-pJjlLbMlW6HIb_mcbc0', '', '', '', 0, 'false', 'true'),
(96, 'oqQzW5TDl18rYNJDpkz9L-DD3PQw', '', '', '', 0, 'false', 'true'),
(97, 'oqQzW5X6ELpuJGB27FrRI-OaU2VE', '', '1524861477188', '1524861476', 10, 'false', 'true'),
(98, 'oqQzW5TBq-mMOfoVHPYq-A8RcSeA', '', '1525349752295', '1525349751', 10, 'false', 'true'),
(99, 'oqQzW5Q6CqJeJGzSv5Vfg6MVL_9k', '', '', '', 0, 'false', 'true'),
(100, 'oqQzW5XShMxIJRmnGVSbmsRWw880', '', '', '', 0, 'false', 'true'),
(101, 'oqQzW5dGDUd77BAkD8DSLr036e-Q', '', '', '', 0, 'false', 'true'),
(102, 'oqQzW5TSQkTfBePc2pAdY1lhtgJo', '', '', '', 0, 'false', 'true'),
(103, 'oqQzW5UjYGNSpTAUMA9zbKXMRDgg', '', '', '', 0, 'false', 'true'),
(104, 'oqQzW5S95iaJVR8Cz3_uuGJFiUiY', '', '', '', 0, 'false', 'true'),
(105, 'oqQzW5UOuyVcLO4kuF8dGTrN9T_Y', '', '', '', 0, 'false', 'true'),
(106, 'oqQzW5bnbonWbEwRtl8MMDMEPciM', '', '', '', 0, 'false', 'true'),
(107, 'oqQzW5T_6hb6p5FSmiRExxrsUseg', '', '', '', 0, 'false', 'true'),
(108, 'oqQzW5Q-cRRK56QpRmafNLF2wT9g', '', '', '', 0, 'false', 'true'),
(109, 'oqQzW5dCvKmmMURUcr0htDg4zMpU', '', '', '', 0, 'false', 'true'),
(110, 'oqQzW5ZCyDnbNEYGpTw0XKVB2Vl4', '', '70efd687c56e6eb77a9da44d65ffc461', '1525606841', 10, 'false', 'true'),
(111, 'oqQzW5f1MPFM5Xsto54eaJ9SC2tM', '', '', '', 0, 'false', 'true'),
(112, 'oqQzW5b6zlpZulTevcJedpgrzVsA', '', '', '', 0, 'false', 'true'),
(113, 'oqQzW5c82z0EvuqAuK9lx402EtQo', '', '', '', 0, 'false', 'true'),
(114, 'oqQzW5Tg7lVcwMyBVzyO6MGFzDhE', '', '', '', 0, 'false', 'true'),
(115, 'oqQzW5X4XfGg-3i_r9unduojv6XU', '', '', '', 0, 'false', 'true'),
(116, 'oqQzW5Y8dmY5aJmn6uCUiLER1zHY', '', '', '', 0, 'false', 'true');

-- --------------------------------------------------------

--
-- 表的结构 `user_lottery`
--

CREATE TABLE IF NOT EXISTS `user_lottery` (
  `user_id` int(11) NOT NULL,
  `user_openid` varchar(100) DEFAULT NULL,
  `user_name` varchar(100) DEFAULT NULL,
  `user_image` varchar(200) DEFAULT NULL,
  `formId` varchar(100) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user_lottery`
--

INSERT INTO `user_lottery` (`user_id`, `user_openid`, `user_name`, `user_image`, `formId`) VALUES
(1, 'oqQzW5T168cjq746she4lR1a5wZU', '咳嗽的糖浆', 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJOLOwvZA0rfajiagr2ayNboXibAPt5KM1baQf8M2f8ePhJ1KAia0KD9j8p2iaTMWGvMsc7f2dIibBAvoQ/0', '1524723698876'),
(2, 'oqQzW5ekMsgd4tmv1DVf1_g463pk', '', 'https://wx.qlogo.cn/mmopen/vi_32/hak23LwWhWbT0EaE0Nvavjmicw31ugb31ibncZkPBYrYLkoZYNrEXWm4d0mo0pY11Lccfgd9pt1maWclvQFyXbfw/0', '5912f85ed6d73f293885d1434ff7dc4d'),
(3, 'oqQzW5UjNfk_2NX-fABXl9B5QU0w', '♛Hao', 'https://wx.qlogo.cn/mmopen/vi_32/Uypnm8KRTPmPqEOqFicQRm83oN52tmpbcW8Nsn0ILVzibOPhmZSEwUbEMcSk3Mx808PcjupAhuXKwLwqrohj70vg/0', '1524723725129'),
(4, 'oqQzW5TD2tNATcAyH4COltHav9Tg', '如初', 'https://wx.qlogo.cn/mmopen/vi_32/1dC4nktcZGfVR48gD4D4lE1FuQ7449LnQklbcZWbgTTZjYhdXrLbm9Ap5eExR8qt7UxOQZd9MEdyYvKmSupGSA/0', '1524723925494'),
(5, 'oqQzW5b-BFHpHcBd3GH5ZISdNLdo', 'wuli 小迪迪', 'https://wx.qlogo.cn/mmopen/vi_32/MZWNw8C1chsMbkia3ibc91S51fVXKFtgicGV64FXq8zs8h1tplGtyfnU8IsUHxvu7V4lRMto6iaLZuib7SYotPib82cw/0', '1524723999158'),
(6, 'oqQzW5Xn0hmzAZu7zymWdNy59MBE', '甜味怪咖', 'https://wx.qlogo.cn/mmopen/vi_32/g2GmTGZXwOOTmQad9Bica8DE818KoXTLXz5YYPe2cDic7d86xQOb33wVtz9fPHJSo9JbdibFGvaTWxE613aMZ85rw/0', '1524724725578'),
(7, 'oqQzW5Yw1tq9oTK6BtbosnUIJjto', '你', 'https://wx.qlogo.cn/mmopen/vi_32/QvMAibr5wkBYbggxrPrq2I98kmwuLGp5Fh81ZCcHqIbXGp9o5rsiczK8ibk4l4ouvMFUqqiaJEriamZyYA6ZaVLicnWQ/0', '1524725625679'),
(8, 'oqQzW5Ti-j5g4cJBkxBejC4FrLgA', '枪蹦狗友', 'https://wx.qlogo.cn/mmopen/vi_32/pKUkmoj1qaUMRvaEogdAp918WMU7Sxf6AJZ0g7ygljJ9PUrIdY6151pThO4wF9aicoZ8IIBaicdPvibcP8aTkFbWg/0', '1524729668408'),
(9, 'oqQzW5TjmEJ1IgoaFXktKPlCNqb4', 'Wkiwi', 'https://wx.qlogo.cn/mmopen/vi_32/Fgg7oEHKj3O1FrZ6gsibZrgm9fFhThic7PYLvhmmVnzsVR3kVSLdxM16Gj96Z85htNGVPlib90xJfj8LmPhKmj4xA/0', '1524731666461'),
(10, 'oqQzW5YKKUew1E77DzCCGUEsfDZU', '二向箔', 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erOqa7aLd5fqttfcpZBNGHxSgdtricRQcnDI1mpJbSBKZ3s5nqt0f6TjNH8RlcriapgLBcYib9oEibDXg/0', '1524746270244'),
(11, 'oqQzW5SHXzbkX1ux2Og8n527awQg', 'lovemax', 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLfR9yoM3GQ0WVfq9QHd3wHo8f63oP91j20WsgpL5XKlHAyoibpypMib3eUcce9yqa3jyq9eLBe7DUQ/0', '1524803018158'),
(12, 'oqQzW5eWYPVsuLGWGg-YzSRM7gDU', '秘笈点头像', 'https://wx.qlogo.cn/mmopen/vi_32/4hwO9QIxJUibVSIPSk0icb3WJyS3UpbWgD2cNmIFvnshuNzdHPGG64pqncOOVStibfZ6qOySelJCP7UaiclnQzCzsQ/0', '1524807016719'),
(13, 'oqQzW5cabeQvNBSOQpo3WQDhqoY0', '昭', 'https://wx.qlogo.cn/mmopen/vi_32/NtgPBbOEor6Xoq2sricIcmicPyhygS4v2wsCDd6b99f41NibrqmRjHibvaxTR9pXBHVoJd3ncqOFIN8IUricjicLcSPw/0', '86c16eafb7d1686b46381c58a3ab17cd'),
(14, 'oqQzW5XVq3YbkcC6Tuih8tD-EQBQ', 'Lamb', 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI5XHZoqJExZbVVEQeFwWzibKmzm54Hia2xsgTe91BB8mcl59mOxvIRP6lqXTTEiadCZ5UYqpNLNx0sQ/0', '4e7eed7c55f4cd49d46d351fbed0eb14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administrator`
--
ALTER TABLE `administrator`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `apply_agent`
--
ALTER TABLE `apply_agent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lottery_details`
--
ALTER TABLE `lottery_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lottery_history`
--
ALTER TABLE `lottery_history`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_lottery`
--
ALTER TABLE `user_lottery`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `administrator`
--
ALTER TABLE `administrator`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `apply_agent`
--
ALTER TABLE `apply_agent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `lottery_details`
--
ALTER TABLE `lottery_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `lottery_history`
--
ALTER TABLE `lottery_history`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=117;
--
-- AUTO_INCREMENT for table `user_lottery`
--
ALTER TABLE `user_lottery`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
