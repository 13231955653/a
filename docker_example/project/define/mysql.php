<?php
define('DATDABASE_CONFIG', [
    'MYSQL_GROUP' => [
        [
            'MYSQL_IP'      => '192.168.125.128',
            'MYSQL_PORT'    => '3402',
            'DATABASE_NAME' => 'projects',
            'USER'          => 'root',
            'PASSWORD'      => 'Ou891007',
            'CHARSET'       => 'utf8mb4'
        ],
        [
            'MYSQL_IP'      => '192.168.125.128',
            'MYSQL_PORT'    => '3403',
            'DATABASE_NAME' => 'projects',
            'USER'          => 'root',
            'PASSWORD'      => 'Ou891007',
            'CHARSET'       => 'utf8mb4'
        ],
        [
            'MYSQL_IP'      => '192.168.125.128',
            'MYSQL_PORT'    => '3404',
            'DATABASE_NAME' => 'projects',
            'USER'          => 'root',
            'PASSWORD'      => 'Ou891007',
            'CHARSET'       => 'utf8mb4'
        ],
    ],
    'MYSQL_ONE'   => [],
]);

define('WRITE_SQL_HISTORY', TRUE);

//define('VAR_DUMP_SQL', TRUE);

//define('INSERT_BY_QUEUE', TRUE);
//define('UPDATE_BY_QUEUE', TRUE);

define('DATABASE_CHARSET', 'utf8mb4');

//轮询数据库redis标志
//define('DATABASE_NOW_QUERY_REDIS_TAG', 'database_now_query_redis_tag');

define('MT_RAND_DATABASE_MIN_TAG', 0);
define('MT_RAND_DATABASE_MAX_TAG', count(DATDABASE_CONFIG['MYSQL_GROUP']));

