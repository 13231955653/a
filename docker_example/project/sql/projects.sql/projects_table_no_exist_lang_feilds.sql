
-- --------------------------------------------------------

--
-- 表的结构 `no_exist_lang_feilds`
--

DROP TABLE IF EXISTS `no_exist_lang_feilds`;
CREATE TABLE IF NOT EXISTS `no_exist_lang_feilds` (
  `value` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 插入之前先把表清空（truncate） `no_exist_lang_feilds`
--

TRUNCATE TABLE `no_exist_lang_feilds`;