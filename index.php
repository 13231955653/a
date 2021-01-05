<?php
$a = '
payOrderId=P01000920210104080345659
&amount=10900
&mchId=222
&productId=8006
&mchOrderNo=PYB20210104200343LTUN
&appId=84d52f4228534799bb4107b32242dacc
&paySuccTime=1609761960000
&sign=68B5E854C9A2E74B321E67D68FC2988B
&channelOrderNo=1d25304d-69e7-4579-a28d-05145e8435f6
&backType=2
&status=2';
$a = trim($a);

$sTag = '&';
$aCallbackData = explode($sTag, $a);
$aAfterDisposeCallbackData = [];
$sTag1 = '=';
foreach ($aCallbackData as $v) {
    $v = explode($sTag1, $v);
    if (isset($v[0]) && isset($v[1])) {
        $aAfterDisposeCallbackData[trim($v[0])] = trim($v[1]);
    }
}
var_dump($aAfterDisposeCallbackData);