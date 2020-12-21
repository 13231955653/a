
-- --------------------------------------------------------

--
-- 表的结构 `jurisdictions`
--

DROP TABLE IF EXISTS `jurisdictions`;
CREATE TABLE IF NOT EXISTS `jurisdictions` (
  `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `explains` varchar(32) NOT NULL DEFAULT '0',
  `who_add` varchar(16) NOT NULL DEFAULT '0',
  `addd_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `who_update` varchar(16) NOT NULL DEFAULT '0',
  `update_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `who_delete` varchar(16) NOT NULL DEFAULT '0',
  `delete_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `status` tinyint(1) UNSIGNED NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `who_add` (`who_add`),
  KEY `who_update` (`who_update`),
  KEY `who_delete` (`who_delete`),
  KEY `status` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `jurisdictions`
--

TRUNCATE TABLE `jurisdictions`;
--
-- 转存表中的数据 `jurisdictions`
--

INSERT INTO `jurisdictions` (`id`, `explains`, `who_add`, `addd_time`, `who_update`, `update_time`, `who_delete`, `delete_time`, `status`) VALUES
(1, '超级管理员', 'superadmin', 1, 'superadmin', 1, 'superadmin', 1, 1),
(4, '后台菜单', 'adminmenu', 1, 'adminmenu', 1, 'adminmenu', 1, 1),
(7, '前台菜单', 'home_menu', 1, 'home_menu', 1, 'home_menu', 1, 1);
