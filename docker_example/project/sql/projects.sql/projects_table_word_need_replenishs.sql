
-- --------------------------------------------------------

--
-- 表的结构 `word_need_replenishs`
--

DROP TABLE IF EXISTS `word_need_replenishs`;
CREATE TABLE IF NOT EXISTS `word_need_replenishs` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `word` char(1) NOT NULL,
  `word_md5` char(32) NOT NULL,
  `add_time` int(11) UNSIGNED NOT NULL,
  `urlencode` varchar(50) NOT NULL DEFAULT '0',
  `type` tinyint(2) UNSIGNED NOT NULL,
  `status` tinyint(1) UNSIGNED NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `word_md5` (`word_md5`),
  KEY `status` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `word_need_replenishs`
--

TRUNCATE TABLE `word_need_replenishs`;
--
-- 转存表中的数据 `word_need_replenishs`
--

INSERT INTO `word_need_replenishs` (`id`, `word`, `word_md5`, `add_time`, `urlencode`, `type`, `status`) VALUES
(3, '贱', 'FDF8A7B0ADB19F07413ACEE9E995251C', 1608014641, '%E8%B4%B1', 0, 1);
