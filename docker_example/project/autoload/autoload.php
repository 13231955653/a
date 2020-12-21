<?php

namespace autoload;

$autoload1 = function ($sName) {
    //////////////////////////////////////////
    $sFile = __ROOT_DIR__ . DIRECTORY_SEPARATOR . str_replace('\\', DIRECTORY_SEPARATOR, str_replace('/', DIRECTORY_SEPARATOR, $sName)) . '.php';

//    var_dump($sFile);
    if (is_file($sFile)) {
        require_once $sFile;
    }
};
spl_autoload_register($autoload1);

$autoload2 = function ($sName) {
    //////////////////////////////////////////
    $sFile = __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'middleware' . DIRECTORY_SEPARATOR . str_replace('\\', DIRECTORY_SEPARATOR, str_replace('/', DIRECTORY_SEPARATOR, $sName)) . '.php';

//    var_dump($sFile);
    if (is_file($sFile)) {
        require_once $sFile;
    }
};
spl_autoload_register($autoload2);

$autoload3 = function ($sName) {
    //////////////////////////////////////////
    $sFile = __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'Hook' . DIRECTORY_SEPARATOR . str_replace('\\', DIRECTORY_SEPARATOR, str_replace('/', DIRECTORY_SEPARATOR, $sName)) . '.php';

//    var_dump($sFile);
    if (is_file($sFile)) {
        require_once $sFile;
    }
};
spl_autoload_register($autoload3);
