<?php

namespace controller;

use ToolClass\Log\Exception;

class ControllerFather
{
//    private $sNowUseClassName = '';
//
//    public
//    function __construct ($sClassName = '')
//    {
//        $this->sNowUseClassName = $sClassName;
//
//        //        $this->beforeDisposeData();
//    }

    //    private
    //    function beforeDisposeData ()
    //    {
    //        if (!BeforeCheck::beforeCheckData()) {
    //            Exception::throwException('Check before you pass faild');
    //            return false;
    //        }
    //    }

    public
    function __call ($method, $ages)
    {
//        var_dump($this->sNowUseClassName);
        $sDir = TEST ? __ROOT_DIR__ : '';
        ///////////////////////////////////////////
        Exception::throwException($sDir . DIRECTORY_SEPARATOR . str_replace('\\', DIRECTORY_SEPARATOR, str_replace('/', DIRECTORY_SEPARATOR, $this->sNowUseClassName)) . ' - ' . $method . ' no exists');
    }
}
