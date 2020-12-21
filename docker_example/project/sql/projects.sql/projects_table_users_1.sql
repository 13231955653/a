
-- --------------------------------------------------------

--
-- 表的结构 `users_1`
--

DROP TABLE IF EXISTS `users_1`;
CREATE TABLE IF NOT EXISTS `users_1` (
  `id` int(9) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(16) NOT NULL DEFAULT '0',
  `password` varchar(32) NOT NULL DEFAULT '0',
  `status` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `tel` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `experience` int(11) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`,`password`) USING BTREE,
  KEY `status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `users_1`
--

TRUNCATE TABLE `users_1`;