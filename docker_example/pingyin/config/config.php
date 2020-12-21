<?php
// 严格开发模式
ini_set('display_errors', 'On');
error_reporting(E_ALL);

define('CHARSET', 'utf-8');

header('Content-Type: text/html; charset=' . CHARSET);

date_default_timezone_set('Asia/Shanghai');//'Asia/Shanghai'

define('MEMORY_LIMIT', '256M');


// 设为性能模式
//Chinese::setMode('Memory');
// 性能模式占用内存大，如果提示内存不足，请扩大内存限制
//ini_set('memory_limit',MEMORY_LIMIT);

// 设为通用模式，支持 PDO_SQLITE 的情况下为默认
// Chinese::setMode('SQLite');

// 设为兼容模式，不支持 PDO_SQLITE 的情况下为默认
// Chinese::setMode('JSON');

define('MODE', 'Memory');

define('USE_REDIS', true);

define('REDIS_CONFIG', array(
    'host' => '127.0.0.1',
    'port' => '6379',
));

define('PING_YIN_PREFIX', 'ping_yin:');

define('PING_YIN_DATA', PING_YIN_PREFIX . 'data');

//define('PING_YIN_LIMIT', PING_YIN_PREFIX . 'limit:');

define('WORD_SPLIT_TAG', ' ');

define('LIMIT_TIME', 60);

//define('IP_WHITE', array(
//    '192.168.125.1',
//    '172.30.0.1'
//));

//define('MD5_CODE', '2F222222FF03B435811A1FF1FD9567BC');

//默认返回拼音数组数量
define('MAX_RETURN_NUM', 6);
//默认返回拼音切割数组数量
define('PIN_YIN_SPLIT_DEFAULT_NUM', 6);

define('TEST', false);

define('REDIS_GROUP_ADDRESS', 'http://192.168.125.128:6999/index.php');

//拼音 redis 密钥
define('PIN_YIN_API_KEY', PING_YIN_PREFIX . 'pin_yin_api_key');
//拼音切割 redis 前缀
define('PING_YIN_SPLIT_PREFIX', 'ping_yin_split:');
//拼音切割 redis 密钥
define('PING_YIN_SPLIT_KEY', PING_YIN_SPLIT_PREFIX . 'pin_yin_api_key');
//redis 链接 密钥
define('REDIS_API_KEY', '8FACB97BE0692D9875209797BE2B1A08');
//中文简繁体转换 redis 前缀
define('TRADITIONAL_SIMPLIFIED_PREFIX', 'traditional_simplified:');
//中文简繁体转换 redis 密钥
define('TRADITIONAL_SIMPLIFIED_API_KEY', TRADITIONAL_SIMPLIFIED_PREFIX . 'traditional_simplified_api_key');
