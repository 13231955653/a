<?php
header('Content-Type: text/html; charset=utf-8');

require_once('phpanalysis.class.php');

$pa = new PhpAnalysis('utf-8', 'utf-8', false);
$pa->MakeDict( sourcefile,  16 , 'dict/base_dic_full.dic');

echo "OK";
