
-- --------------------------------------------------------

--
-- 表的结构 `phper_infos`
--

DROP TABLE IF EXISTS `phper_infos`;
CREATE TABLE IF NOT EXISTS `phper_infos` (
  `id` mediumint(7) UNSIGNED NOT NULL AUTO_INCREMENT,
  `url` varchar(700) NOT NULL,
  `info` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `url` (`url`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `phper_infos`
--

TRUNCATE TABLE `phper_infos`;