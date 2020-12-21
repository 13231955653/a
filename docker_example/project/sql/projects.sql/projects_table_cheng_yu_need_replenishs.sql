
-- --------------------------------------------------------

--
-- 表的结构 `cheng_yu_need_replenishs`
--

DROP TABLE IF EXISTS `cheng_yu_need_replenishs`;
CREATE TABLE IF NOT EXISTS `cheng_yu_need_replenishs` (
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
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `cheng_yu_need_replenishs`
--

TRUNCATE TABLE `cheng_yu_need_replenishs`;
--
-- 转存表中的数据 `cheng_yu_need_replenishs`
--

INSERT INTO `cheng_yu_need_replenishs` (`id`, `word`, `word_md5`, `add_time`, `urlencode`, `type`, `status`) VALUES
(3, '糗', '41506E2DD6C69E89FA126E9BAC4751B1', 1607906725, '%E7%B3%97', 0, 1),
(5, '匮', '271EBF48C3DC8569BD63FFF5A24F13D8', 1607907338, '%E5%8C%AE', 0, 1),
(7, '悭', 'FB5E7D32846A44050E304101EC40AE21', 1607907391, '%E6%82%AD', 0, 1),
(8, '迹', '8CBC490D5DC77CA5EDA882DFC2DBBBEA', 1607908336, '%E8%BF%B9', 0, 1),
(22, '侣', 'CE25A3E88D4FBC7900D5BDCAF63D79D3', 1607909901, '%E4%BE%A3', 0, 1),
(26, '胾', 'F5E33C258A2953B1AC7A2F4CA82D4C3A', 1607911562, '%E8%83%BE', 0, 1);
