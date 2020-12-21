
-- --------------------------------------------------------

--
-- 表的结构 `classifys`
--

DROP TABLE IF EXISTS `classifys`;
CREATE TABLE IF NOT EXISTS `classifys` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '0',
  `post_total` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `status` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `who_add` varchar(16) NOT NULL DEFAULT '0',
  `add_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `who_update` varchar(16) NOT NULL DEFAULT '0',
  `update_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  `who_delete` varchar(16) NOT NULL DEFAULT '0',
  `delete_time` int(11) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `classifys`
--

TRUNCATE TABLE `classifys`;
--
-- 转存表中的数据 `classifys`
--

INSERT INTO `classifys` (`id`, `name`, `post_total`, `status`, `who_add`, `add_time`, `who_update`, `update_time`, `who_delete`, `delete_time`) VALUES
(1, 'joke_text', 0, 1, 'superadmin', 0, '0', 0, '0', 0),
(7, 'joke_img', 0, 1, 'superadmin', 0, '0', 0, '0', 0);
