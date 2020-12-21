
-- --------------------------------------------------------

--
-- 表的结构 `error_logs`
--

DROP TABLE IF EXISTS `error_logs`;
CREATE TABLE IF NOT EXISTS `error_logs` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tables` varchar(50) NOT NULL DEFAULT '0',
  `who_handle` varchar(16) NOT NULL DEFAULT '0',
  `add_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `info` text NOT NULL,
  `platform` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `who_handle` (`who_handle`),
  KEY `platform` (`platform`),
  KEY `tables` (`tables`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `error_logs`
--

TRUNCATE TABLE `error_logs`;