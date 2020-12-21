
-- --------------------------------------------------------

--
-- 表的结构 `image_lists`
--

DROP TABLE IF EXISTS `image_lists`;
CREATE TABLE IF NOT EXISTS `image_lists` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `path` varchar(3000) NOT NULL DEFAULT '0',
  `md5_file` varchar(32) NOT NULL DEFAULT '0',
  `used_number` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `update_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `md5_apth` (`md5_file`),
  KEY `used_number` (`used_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `image_lists`
--

TRUNCATE TABLE `image_lists`;