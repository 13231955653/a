
-- --------------------------------------------------------

--
-- 表的结构 `admin_menus`
--

DROP TABLE IF EXISTS `admin_menus`;
CREATE TABLE IF NOT EXISTS `admin_menus` (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL DEFAULT '0',
  `url` varchar(100) NOT NULL DEFAULT '0',
  `order_` smallint(3) UNSIGNED NOT NULL DEFAULT '0',
  `plies` tinyint(2) UNSIGNED NOT NULL DEFAULT '1',
  `jurisdiction_require` varchar(100) NOT NULL DEFAULT '0',
  `user_jurisdiction` varchar(500) NOT NULL DEFAULT '0',
  `father_id` mediumint(8) UNSIGNED NOT NULL DEFAULT '1',
  `father_id_list` varchar(1000) NOT NULL DEFAULT '0',
  `status` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `explains` varchar(100) NOT NULL DEFAULT '0',
  `platform` varchar(100) NOT NULL DEFAULT '0',
  `who_add` varchar(16) NOT NULL DEFAULT '0',
  `add_time` int(11) UNSIGNED NOT NULL DEFAULT '999',
  `who_update` varchar(16) NOT NULL DEFAULT '0',
  `update_time` int(11) UNSIGNED NOT NULL DEFAULT '999',
  `who_delete` varchar(16) NOT NULL DEFAULT '0',
  `delete_time` int(11) UNSIGNED NOT NULL DEFAULT '999',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `url` (`url`),
  KEY `status` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `admin_menus`
--

TRUNCATE TABLE `admin_menus`;
--
-- 转存表中的数据 `admin_menus`
--

INSERT INTO `admin_menus` (`id`, `name`, `url`, `order_`, `plies`, `jurisdiction_require`, `user_jurisdiction`, `father_id`, `father_id_list`, `status`, `explains`, `platform`, `who_add`, `add_time`, `who_update`, `update_time`, `who_delete`, `delete_time`) VALUES
(5, 'admin_keys', '1', 999, 1, '1', '0', 1, '1', 1, 'All key Settings', '1', '0', 999, '0', 999, '0', 999),
(9, 'admin_logs', '2', 0, 2, '1', '0', 94, '1,94', 1, 'The log', '1', '0', 999, '0', 999, '0', 999),
(13, 'black_user_ip', '3', 3, 1, '1', '0', 1, '1', 1, 'Front desk blacklist', '1', '0', 999, '0', 999, '0', 999),
(17, 'database_actions', '4', 2, 1, '1', '0', 1, '1', 1, 'Database operation', '1', '0', 999, '0', 999, '0', 999),
(21, 'create_table', '5', 0, 2, '1', '0', 17, '1,17', 1, 'Create a table', '1', '0', 999, '0', 999, '0', 999),
(31, 'menu', '6', 1, 1, '11', '1', 1, '1', 1, 'The menu', '1', '0', 999, '0', 999, '0', 999),
(34, 'admin_menu', '7', 2, 2, '1', '1', 31, '1,31', 1, 'The admin menu', '1', '0', 999, '0', 999, '0', 999),
(37, 'home_menu', '8', 3, 2, '1', '1', 31, '1,31', 1, 'The home menu', '1,2', '0', 999, '0', 999, '0', 999),
(79, 'home_menu_show_menu', '12', 0, 3, '1', '1', 37, '1,31,34,37', 1, 'See the menu', '1,2', '0', 999, '0', 999, '0', 999),
(91, 'admin_menu_show_menu', 'admin/admin_menu/admin_list', 0, 3, '1', '1', 34, '1,31,34', 1, 'See the menu', '1', '0', 999, '0', 999, '0', 999),
(94, 'log', '17', 998, 1, '1', '0', 1, '1', 1, 'The log', '1', '0', 999, '0', 999, '0', 999),
(97, 'home_logs', '18', 0, 2, '1', '0', 94, '1,94', 1, 'home log', '1', '0', 999, '0', 999, '0', 999);
