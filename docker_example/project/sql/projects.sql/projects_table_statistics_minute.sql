
-- --------------------------------------------------------

--
-- 表的结构 `statistics_minute`
--

DROP TABLE IF EXISTS `statistics_minute`;
CREATE TABLE IF NOT EXISTS `statistics_minute` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `time` int(11) UNSIGNED NOT NULL,
  `year` smallint(4) UNSIGNED NOT NULL DEFAULT '0',
  `month` tinyint(2) UNSIGNED NOT NULL DEFAULT '0',
  `day` tinyint(2) UNSIGNED NOT NULL DEFAULT '0',
  `hour` tinyint(2) UNSIGNED NOT NULL DEFAULT '0',
  `minute` tinyint(2) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `time` (`time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `statistics_minute`
--

TRUNCATE TABLE `statistics_minute`;