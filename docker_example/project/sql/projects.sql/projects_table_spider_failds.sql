
-- --------------------------------------------------------

--
-- 表的结构 `spider_failds`
--

DROP TABLE IF EXISTS `spider_failds`;
CREATE TABLE IF NOT EXISTS `spider_failds` (
  `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '0',
  `url` varchar(1000) NOT NULL DEFAULT '0',
  `status` tinyint(1) UNSIGNED NOT NULL,
  `who_add` varchar(16) NOT NULL,
  `add_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `who_update` varchar(16) NOT NULL,
  `update_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `who_delete` varchar(16) NOT NULL,
  `delete_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `spider_failds`
--

TRUNCATE TABLE `spider_failds`;