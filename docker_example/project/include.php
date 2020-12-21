<?php

define('TEST', true);

define('__ROOT_DIR__', __DIR__);

define('MAX_EXECUTION_TIME', 30);

ini_set('max_execution_time', MAX_EXECUTION_TIME);

require_once __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'define' . DIRECTORY_SEPARATOR . 'base_define.php';

require_once __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'define' . DIRECTORY_SEPARATOR . 'error.php';

//require_once __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'define' . DIRECTORY_SEPARATOR . 'api.php';
//
//require_once __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'define' . DIRECTORY_SEPARATOR . 'redis.php';

require_once __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'define' . DIRECTORY_SEPARATOR . 'system.php';

//require_once __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'define' . DIRECTORY_SEPARATOR . 'file.php';

require_once __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'autoload' . DIRECTORY_SEPARATOR . 'autoload.php';
