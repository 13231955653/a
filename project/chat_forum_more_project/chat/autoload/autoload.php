<?php

namespace autoload;

$autoloadFunc1 = function (string $sClass = '') {
//    var_dump('---------------');
//    var_dump($sClass);
//    var_dump('---------------');
    if ($sClass) {
        $sClass = str_replace('/', DIRECTORY_SEPARATOR, $sClass);
        $sClass = str_replace('\\', DIRECTORY_SEPARATOR, $sClass);
        $sClass = __ROOT_DIR__ . DIRECTORY_SEPARATOR . $sClass . '.php';
    
//        var_dump('******************');
//        var_dump($sClass);
//        var_dump('******************');
        if (is_file($sClass)) {
            require_once $sClass;
        } else {
            if (DEBUG) {
                var_dump('==============');
                var_dump($sClass);
                var_dump('==============');
            }
        }
        
        return;
    }
};
spl_autoload_register($autoloadFunc1);
