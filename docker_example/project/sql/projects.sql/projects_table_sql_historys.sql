
-- --------------------------------------------------------

--
-- 表的结构 `sql_historys`
--

DROP TABLE IF EXISTS `sql_historys`;
CREATE TABLE IF NOT EXISTS `sql_historys` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tables` varchar(50) NOT NULL DEFAULT '0',
  `who_handle` varchar(16) NOT NULL DEFAULT '0',
  `add_ip` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `add_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `info` text NOT NULL,
  `queue` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `platform` varchar(50) NOT NULL DEFAULT '0',
  `overtime` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `sql_historys`
--

TRUNCATE TABLE `sql_historys`;