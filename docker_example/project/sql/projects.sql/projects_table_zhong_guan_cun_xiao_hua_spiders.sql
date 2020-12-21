
-- --------------------------------------------------------

--
-- 表的结构 `zhong_guan_cun_xiao_hua_spiders`
--

DROP TABLE IF EXISTS `zhong_guan_cun_xiao_hua_spiders`;
CREATE TABLE IF NOT EXISTS `zhong_guan_cun_xiao_hua_spiders` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `curl_number` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `last_curl_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `domain` varchar(700) NOT NULL DEFAULT '0',
  `name` varchar(100) NOT NULL DEFAULT '0',
  `url` varchar(1000) NOT NULL DEFAULT '0',
  `url_ending` varchar(100) NOT NULL DEFAULT '0',
  `no_curl_url_include_string` varchar(1000) NOT NULL DEFAULT 'xiaohua.zol.com.cn,.php,#,(,),bizhi',
  `status` tinyint(1) UNSIGNED NOT NULL DEFAULT '1',
  `who_add` varchar(16) NOT NULL DEFAULT '0',
  `add_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `who_update` varchar(16) NOT NULL DEFAULT '0',
  `update_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `who_delete` varchar(16) NOT NULL DEFAULT '0',
  `delete_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `domain` (`domain`),
  KEY `status` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=167 DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `zhong_guan_cun_xiao_hua_spiders`
--

TRUNCATE TABLE `zhong_guan_cun_xiao_hua_spiders`;
--
-- 转存表中的数据 `zhong_guan_cun_xiao_hua_spiders`
--

INSERT INTO `zhong_guan_cun_xiao_hua_spiders` (`id`, `curl_number`, `last_curl_time`, `domain`, `name`, `url`, `url_ending`, `no_curl_url_include_string`, `status`, `who_add`, `add_time`, `who_update`, `update_time`, `who_delete`, `delete_time`) VALUES
(1, 1, 1607408234, 'http://xiaohua.zol.com.cn/new/', 'new', 'http://xiaohua.zol.com.cn/new/2.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408121, 'system', 1607408234, '0', 0),
(4, 0, 0, 'http://xiaohua.zol.com.cn/lengxiaohua/', 'lengxiaohua', 'http://xiaohua.zol.com.cn/lengxiaohua/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408121, '0', 0, '0', 0),
(7, 0, 0, 'http://xiaohua.zol.com.cn/qutu/', 'qutu', 'http://xiaohua.zol.com.cn/qutu/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408121, '0', 0, '0', 0),
(10, 0, 0, 'http://xiaohua.zol.com.cn/video/', 'video', 'http://xiaohua.zol.com.cn/video/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(13, 0, 0, 'http://xiaohua.zol.com.cn/youmo/', 'youmo', 'http://xiaohua.zol.com.cn/youmo/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(16, 0, 0, 'http://xiaohua.zol.com.cn/aiqing/', 'aiqing', 'http://xiaohua.zol.com.cn/aiqing/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(19, 0, 0, 'http://xiaohua.zol.com.cn/fuqi/', 'fuqi', 'http://xiaohua.zol.com.cn/fuqi/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(22, 0, 0, 'http://xiaohua.zol.com.cn/baoxiaonannv/', 'baoxiaonannv', 'http://xiaohua.zol.com.cn/baoxiaonannv/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(25, 0, 0, 'http://xiaohua.zol.com.cn/baoxiao/', 'baoxiao', 'http://xiaohua.zol.com.cn/baoxiao/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(28, 0, 0, 'http://xiaohua.zol.com.cn/zonghe/', 'zonghe', 'http://xiaohua.zol.com.cn/zonghe/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(31, 0, 0, 'http://xiaohua.zol.com.cn/ertong/', 'ertong', 'http://xiaohua.zol.com.cn/ertong/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(34, 0, 0, 'http://xiaohua.zol.com.cn/xiaoyuan/', 'xiaoyuan', 'http://xiaohua.zol.com.cn/xiaoyuan/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(37, 0, 0, 'http://xiaohua.zol.com.cn/jianduan/', 'jianduan', 'http://xiaohua.zol.com.cn/jianduan/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(40, 0, 0, 'http://xiaohua.zol.com.cn/jingdian/', 'jingdian', 'http://xiaohua.zol.com.cn/jingdian/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(43, 0, 0, 'http://xiaohua.zol.com.cn/zhengren/', 'zhengren', 'http://xiaohua.zol.com.cn/zhengren/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(46, 0, 0, 'http://xiaohua.zol.com.cn/dongwu/', 'dongwu', 'http://xiaohua.zol.com.cn/dongwu/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(49, 0, 0, 'http://xiaohua.zol.com.cn/kongbu/', 'kongbu', 'http://xiaohua.zol.com.cn/kongbu/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(52, 0, 0, 'http://xiaohua.zol.com.cn/yingyu/', 'yingyu', 'http://xiaohua.zol.com.cn/yingyu/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(55, 0, 0, 'http://xiaohua.zol.com.cn/neihan/', 'neihan', 'http://xiaohua.zol.com.cn/neihan/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(58, 0, 0, 'http://xiaohua.zol.com.cn/xiaoxiaohua/', 'xiaoxiaohua', 'http://xiaohua.zol.com.cn/xiaoxiaohua/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(61, 0, 0, 'http://xiaohua.zol.com.cn/duanxin/', 'duanxin', 'http://xiaohua.zol.com.cn/duanxin/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(64, 0, 0, 'http://xiaohua.zol.com.cn/duanxiaohua/', 'duanxiaohua', 'http://xiaohua.zol.com.cn/duanxiaohua/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(67, 0, 0, 'http://xiaohua.zol.com.cn/yijuhua/', 'yijuhua', 'http://xiaohua.zol.com.cn/yijuhua/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(70, 0, 0, 'http://xiaohua.zol.com.cn/jipin/', 'jipin', 'http://xiaohua.zol.com.cn/jipin/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(73, 0, 0, 'http://xiaohua.zol.com.cn/shuzi/', 'shuzi', 'http://xiaohua.zol.com.cn/shuzi/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(76, 0, 0, 'http://xiaohua.zol.com.cn/chaoji/', 'chaoji', 'http://xiaohua.zol.com.cn/chaoji/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(79, 0, 0, 'http://xiaohua.zol.com.cn/duanpian/', 'duanpian', 'http://xiaohua.zol.com.cn/duanpian/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(82, 0, 0, 'http://xiaohua.zol.com.cn/sichuanfangyan/', 'sichuanfangyan', 'http://xiaohua.zol.com.cn/sichuanfangyan/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(85, 0, 0, 'http://xiaohua.zol.com.cn/shunkouliu/', 'shunkouliu', 'http://xiaohua.zol.com.cn/shunkouliu/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(88, 0, 0, 'http://xiaohua.zol.com.cn/mingzhubaoxiao/', 'mingzhubaoxiao', 'http://xiaohua.zol.com.cn/mingzhubaoxiao/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(91, 0, 0, 'http://xiaohua.zol.com.cn/gaoxiaogeci/', 'gaoxiaogeci', 'http://xiaohua.zol.com.cn/gaoxiaogeci/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(94, 0, 0, 'http://xiaohua.zol.com.cn/lianaibidu/', 'lianaibidu', 'http://xiaohua.zol.com.cn/lianaibidu/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(97, 0, 0, 'http://xiaohua.zol.com.cn/qiuaimiji/', 'qiuaimiji', 'http://xiaohua.zol.com.cn/qiuaimiji/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(100, 0, 0, 'http://xiaohua.zol.com.cn/yuanchuang/', 'yuanchuang', 'http://xiaohua.zol.com.cn/yuanchuang/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(103, 0, 0, 'http://xiaohua.zol.com.cn/hahaquwen/', 'hahaquwen', 'http://xiaohua.zol.com.cn/hahaquwen/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(106, 0, 0, 'http://xiaohua.zol.com.cn/shuma/', 'shuma', 'http://xiaohua.zol.com.cn/shuma/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(109, 0, 0, 'http://xiaohua.zol.com.cn/gaoxiao/', 'gaoxiao', 'http://xiaohua.zol.com.cn/gaoxiao/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(112, 0, 0, 'http://xiaohua.zol.com.cn/gedifangyan/', 'gedifangyan', 'http://xiaohua.zol.com.cn/gedifangyan/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(115, 0, 0, 'http://xiaohua.zol.com.cn/zhongkouwei/', 'zhongkouwei', 'http://xiaohua.zol.com.cn/zhongkouwei/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(118, 0, 0, 'http://xiaohua.zol.com.cn/label/1/', 'label', 'http://xiaohua.zol.com.cn/label/1/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(121, 0, 0, 'http://xiaohua.zol.com.cn/label/2/', 'label', 'http://xiaohua.zol.com.cn/label/2/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(124, 0, 0, 'http://xiaohua.zol.com.cn/label/3/', 'label', 'http://xiaohua.zol.com.cn/label/3/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(127, 0, 0, 'http://xiaohua.zol.com.cn/label/4/', 'label', 'http://xiaohua.zol.com.cn/label/4/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(130, 0, 0, 'http://xiaohua.zol.com.cn/label/5/', 'label', 'http://xiaohua.zol.com.cn/label/5/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(133, 0, 0, 'http://xiaohua.zol.com.cn/label/6/', 'label', 'http://xiaohua.zol.com.cn/label/6/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(136, 0, 0, 'http://xiaohua.zol.com.cn/label/7/', 'label', 'http://xiaohua.zol.com.cn/label/7/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(139, 0, 0, 'http://xiaohua.zol.com.cn/label/8/', 'label', 'http://xiaohua.zol.com.cn/label/8/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(142, 0, 0, 'http://xiaohua.zol.com.cn/label/9/', 'label', 'http://xiaohua.zol.com.cn/label/9/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(145, 0, 0, 'http://xiaohua.zol.com.cn/label/10/', 'label', 'http://xiaohua.zol.com.cn/label/10/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(148, 0, 0, 'http://xiaohua.zol.com.cn/label/11/', 'label', 'http://xiaohua.zol.com.cn/label/11/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(151, 0, 0, 'http://xiaohua.zol.com.cn/label/12/', 'label', 'http://xiaohua.zol.com.cn/label/12/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(154, 0, 0, 'http://xiaohua.zol.com.cn/label/13/', 'label', 'http://xiaohua.zol.com.cn/label/13/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(157, 0, 0, 'http://xiaohua.zol.com.cn/label/14/', 'label', 'http://xiaohua.zol.com.cn/label/14/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(160, 0, 0, 'http://xiaohua.zol.com.cn/label/15/', 'label', 'http://xiaohua.zol.com.cn/label/15/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(163, 0, 0, 'http://xiaohua.zol.com.cn/label/16/', 'label', 'http://xiaohua.zol.com.cn/label/16/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0),
(166, 0, 0, 'http://xiaohua.zol.com.cn/label/17/', 'label', 'http://xiaohua.zol.com.cn/label/17/1.html', '.html', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 1, 'system', 1607408122, '0', 0, '0', 0);
