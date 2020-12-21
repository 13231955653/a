
-- --------------------------------------------------------

--
-- 表的结构 `home_menus`
--

DROP TABLE IF EXISTS `home_menus`;
CREATE TABLE IF NOT EXISTS `home_menus` (
  `id` mediumint(7) UNSIGNED NOT NULL AUTO_INCREMENT,
  `platform` varchar(16) NOT NULL DEFAULT '0',
  `page` varchar(16) NOT NULL DEFAULT '0',
  `position` varchar(16) NOT NULL DEFAULT '0',
  `name` varchar(50) NOT NULL DEFAULT '0',
  `url` varchar(200) NOT NULL DEFAULT '0',
  `status` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `who_add` varchar(16) NOT NULL DEFAULT '0',
  `who_add_id` mediumint(7) UNSIGNED NOT NULL DEFAULT '0',
  `add_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `who_update` varchar(16) NOT NULL DEFAULT '0',
  `who_update_id` mediumint(7) UNSIGNED NOT NULL DEFAULT '0',
  `update_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `who_delete` varchar(16) NOT NULL DEFAULT '0',
  `who_delete_id` mediumint(7) UNSIGNED NOT NULL DEFAULT '0',
  `delete_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `platform` (`platform`,`page`,`position`) USING BTREE,
  KEY `status` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `home_menus`
--

TRUNCATE TABLE `home_menus`;
--
-- 转存表中的数据 `home_menus`
--

INSERT INTO `home_menus` (`id`, `platform`, `page`, `position`, `name`, `url`, `status`, `who_add`, `who_add_id`, `add_time`, `who_update`, `who_update_id`, `update_time`, `who_delete`, `who_delete_id`, `delete_time`) VALUES
(1, 'mobile', 'index', 'header', 'header_1', '0', 1, '0', 0, 0, '0', 0, 0, '0', 0, 0),
(4, 'mobile', 'index', 'header', 'header_2', '0', 1, '0', 0, 0, '0', 0, 0, '0', 0, 0),
(7, 'mobile', 'index', 'header', 'header_3', '0', 1, '0', 0, 0, '0', 0, 0, '0', 0, 0),
(10, 'mobile', 'index', 'header', 'header_4', '0', 0, '0', 0, 0, '0', 0, 0, '0', 0, 0),
(13, 'mobile', 'index', 'footer', 'index', '0', 1, '0', 0, 0, '0', 0, 0, '0', 0, 0),
(16, 'mobile', 'index', 'footer', 'chat', '0', 1, '0', 0, 0, '0', 0, 0, '0', 0, 0),
(19, 'mobile', 'index', 'footer', 'more', '0', 1, '0', 0, 0, '0', 0, 0, '0', 0, 0),
(22, 'mobile', 'index', 'footer', 'set', '0', 1, '0', 0, 0, '0', 0, 0, '0', 0, 0);
