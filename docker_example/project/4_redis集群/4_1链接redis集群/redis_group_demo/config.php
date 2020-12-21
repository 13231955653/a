<?php
define('REDIS_GROUP_IP_PORT_LIST', [
    '192.168.125.128:8011',
    '192.168.125.128:8012',
    '192.168.125.128:8013',
    '192.168.125.128:8014',
    '192.168.125.128:8015',
    '192.168.125.128:8016',
    '192.168.125.128:8017',
    '192.168.125.128:8018',
]);

define('REDIS_CONFIG', [
    'host' => '192.168.125.128',
    'port' => '8011'
]);

define('REDIS_PERFIX', 'no_perfix');
define('MARK_STRING', ':');

define('CHARSET', 'utf-8');

define('MD5_STRING', '8FACB97BE0692D9875209797BE2B1A08');

define('REDIS_ACTION', [
    //    'keys',
    //    'keys_left_x_data',
    //    'keys_right_x_data',
    //    'keys_all_x_data',
    'get',
    'incr',
    'hmset',
    'hkeys',
    'hvals',
    //    'set',
    //    'setnx',
    //    'setex',
    //    'exists'
]);
define('REDIS_KET_DAFULT_LIFE_TIME', 60);

define('C_REDIS_PERFIX', 'aaaaaa');
