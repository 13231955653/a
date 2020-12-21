<?php
define('REDIS_GROUP_LIST', array(
    '172.18.0.2:7000',
    '172.18.0.5:7003',
    '172.18.0.6:7004',
    '172.18.0.10:7008',
    '172.18.0.5:7003',
    '172.18.0.9:7007',
    '172.18.0.10:7008',
    '172.18.0.11:7009',
    '172.18.0.6:7004',
    '172.18.0.9:7007'
));

$client = new RedisCluster(null, REDIS_GROUP_LIST);

$client->set(time(), "1");

var_dump(
    $client->keys('*')
);
die;

