<?php
/**
 *
 * 随机字符串，不包含数字，版本号
 *
 */
$iLen = isset($_GET['n']) && $_GET['n'] ? $_GET['n'] : 4;

$sStr = 'plmkoiujnbhytgvfredcxszaqw';

$sStr = str_repeat($sStr, $iLen);
$sStr = str_shuffle($sStr);

echo mb_substr($sStr, 0, $iLen);
