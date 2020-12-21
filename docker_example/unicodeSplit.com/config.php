<?php
date_default_timezone_set('Asia/Shanghai');//'Asia/Shanghai'

define('REDIS_CONFIG', array(
    'host' => '127.0.0.1',
    'port' => '6379',
));

define('LIMIT_TIME', 60);

define('IP_WHITE', array(
    '192.168.125.1',
//    '192.168.125.128',
//    '192.168.125.135',
//    '172.30.0.1',
//    '172.22.0.1'
));

define('SPLIT_TAG', '~*');

define('MD5_CODE', '2F333363FF03B435811A1FF1FD9567BC');

define('MEMORY_LIMIT', '128M');

define('CHARSET', 'utf-8');

//define('REDIS_PREFIX', 'unicode-split:');

define('USE_REDIS', true);

define('MASTER_DIC', 'master-dic');

define('VICE_DIC', 'vice-dic');

define('MD5_STRING', '8FACB97BE0692D9875209797BE2B1A08');
define('C_REDIS_PERFIX', 'STRING_SPLIT');

//    redis  集群  api 地址
define('REDIS_GROUP_ADDRESS', 'http://192.168.125.128:6999/index.php');
//redis api  验证 key
define('REDIS_API_KEY', '8FACB97BE0692D9875209797BE2B1A08');

define('TEST', false);

//切割字符串 api  验证 key
define('UNICODE_SPLIT_PREFIX', 'unicode_split:');
define('UNICODE_SPLIT_API_KEY', UNICODE_SPLIT_PREFIX . 'unicode_split_api_key');
