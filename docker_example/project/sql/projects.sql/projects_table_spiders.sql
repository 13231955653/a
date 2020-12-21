
-- --------------------------------------------------------

--
-- 表的结构 `spiders`
--

DROP TABLE IF EXISTS `spiders`;
CREATE TABLE IF NOT EXISTS `spiders` (
  `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `correlation_spider_table` varchar(100) NOT NULL DEFAULT '0',
  `domain` varchar(700) NOT NULL DEFAULT '0',
  `name` varchar(100) NOT NULL DEFAULT '0' COMMENT '不可修改',
  `url` varchar(1000) NOT NULL DEFAULT '0',
  `url_ending` varchar(100) NOT NULL DEFAULT '0',
  `detail_info_page_name` varchar(100) NOT NULL DEFAULT '0',
  `no_curl_url_include_string` varchar(1000) NOT NULL DEFAULT '0',
  `port` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `classify_page_dom_reg` varchar(100) NOT NULL DEFAULT '0',
  `detail_page_dom_reg` varchar(100) NOT NULL DEFAULT '0',
  `detail_page_a_tag` varchar(100) NOT NULL DEFAULT '0',
  `status` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `max_faild_number` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `who_add` varchar(16) NOT NULL,
  `add_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `who_update` varchar(16) NOT NULL,
  `update_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `who_delete` varchar(16) NOT NULL,
  `delete_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `explains` varchar(100) NOT NULL DEFAULT '0',
  `curl_number` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `last_curl_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `insert_curl_data_total` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `origin_address_notice` varchar(100) NOT NULL DEFAULT '0',
  `origin_notice_info` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `status` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `spiders`
--

TRUNCATE TABLE `spiders`;
--
-- 转存表中的数据 `spiders`
--

INSERT INTO `spiders` (`id`, `correlation_spider_table`, `domain`, `name`, `url`, `url_ending`, `detail_info_page_name`, `no_curl_url_include_string`, `port`, `classify_page_dom_reg`, `detail_page_dom_reg`, `detail_page_a_tag`, `status`, `max_faild_number`, `who_add`, `add_time`, `who_update`, `update_time`, `who_delete`, `delete_time`, `explains`, `curl_number`, `last_curl_time`, `insert_curl_data_total`, `origin_address_notice`, `origin_notice_info`) VALUES
(1, 'zhong_guan_cun_xiao_hua_spiders', 'xiaohua.zol.com.cn', 'spider_zhong_guan_cun_zai_xian_xiao_hua_ku', 'http://xiaohua.zol.com.cn', '.html', 'detail,label', '.php,/#,(,),bizhi,desk,xiazai,sj.zol.com.cn,ai.zol.com.cn', 0, '/<li class=\"article-summary\".*?>.*?<\\/li>/ism', '/<div class=\"article-text\".*?>.*?<\\/div>/ism', '/href=\"(\\/detail\\S+)\"/ism', 1, 3, '', 0, '', 0, '', 0, '中关村在线笑话库', 45, 1607496195, 0, '<br><br>源链接', '<br>如有侵权，请联系网站管理员。');
