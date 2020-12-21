
-- --------------------------------------------------------

--
-- 表的结构 `admins`
--

DROP TABLE IF EXISTS `admins`;
CREATE TABLE IF NOT EXISTS `admins` (
  `id` mediumint(7) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(16) NOT NULL DEFAULT '0',
  `password` char(32) NOT NULL DEFAULT '0',
  `status` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `jurisdiction` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `usernmae` (`username`,`password`(10)) USING BTREE,
  KEY `status` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `admins`
--

TRUNCATE TABLE `admins`;
--
-- 转存表中的数据 `admins`
--

INSERT INTO `admins` (`id`, `username`, `password`, `status`, `jurisdiction`) VALUES
(1, 'superadmin', 'B6D17E0E1D201A24F71F8E70C75271F7', 1, 1),
(2, 'ceshiquanxian', 'B6D17E0E1D201A24F71F8E70C75271F7', 1, 2);
