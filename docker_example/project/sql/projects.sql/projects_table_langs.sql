
-- --------------------------------------------------------

--
-- 表的结构 `langs`
--

DROP TABLE IF EXISTS `langs`;
CREATE TABLE IF NOT EXISTS `langs` (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `add_ip` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `add_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `value` varchar(1000) NOT NULL,
  `chinese` varchar(1000) NOT NULL DEFAULT '0',
  `english` varchar(1000) NOT NULL DEFAULT '0',
  `status` tinyint(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT '1已处理0未处理',
  PRIMARY KEY (`id`),
  KEY `status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `langs`
--

TRUNCATE TABLE `langs`;