
-- --------------------------------------------------------

--
-- 表的结构 `image_size`
--

DROP TABLE IF EXISTS `image_size`;
CREATE TABLE IF NOT EXISTS `image_size` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '0',
  `width` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `who_add` varchar(16) NOT NULL DEFAULT '0',
  `add_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `who_update` varchar(16) NOT NULL DEFAULT '0',
  `update_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `who_delete` varchar(16) NOT NULL DEFAULT '0',
  `delete_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `image_size`
--

TRUNCATE TABLE `image_size`;