
-- --------------------------------------------------------

--
-- 表的结构 `files`
--

DROP TABLE IF EXISTS `files`;
CREATE TABLE IF NOT EXISTS `files` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `type` varchar(100) NOT NULL,
  `path` varchar(1000) NOT NULL,
  `path_md5` char(32) NOT NULL,
  `add_time` int(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `path_md5` (`path_md5`),
  KEY `type` (`type`)
) ENGINE=InnoDB AUTO_INCREMENT=169 DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `files`
--

TRUNCATE TABLE `files`;
--
-- 转存表中的数据 `files`
--

INSERT INTO `files` (`id`, `type`, `path`, `path_md5`, `add_time`) VALUES
(154, 'cheng_yu', 'D:\\www\\test\\docker_example\\project\\command\\String\\cheng_yu\\cheng_yu_1608000901.json', '2C6D2C19D48FA28702AFB34E18479C6E', 1608000902),
(160, 'word', 'D:\\www\\test\\docker_example\\project\\command\\string\\word\\word_1608009411.json', '951BB8886C1920734F1B48C8071E4080', 1608094574),
(166, 'string', 'D:\\www\\test\\docker_example\\project\\command\\string\\string\\string_1608340129.json', '49A1F436F4AB893C518C02FDF250F092', 1608340130);
