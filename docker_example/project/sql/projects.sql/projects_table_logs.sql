
-- --------------------------------------------------------

--
-- 表的结构 `logs`
--

DROP TABLE IF EXISTS `logs`;
CREATE TABLE IF NOT EXISTS `logs` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tables` varchar(50) NOT NULL DEFAULT '0',
  `who_handle` varchar(16) NOT NULL DEFAULT '0',
  `add_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `info` text NOT NULL,
  `queue` tinyint(1) UNSIGNED NOT NULL DEFAULT '1',
  `platform` varchar(50) NOT NULL DEFAULT '0',
  `overtime` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `logs`
--

TRUNCATE TABLE `logs`;