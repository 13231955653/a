<?php
namespace api;

use ControllerFather;
use ToolClass\CurlTool;
use ToolClass\RedisTool;
use ToolClass\ErrorInformAdminThrow;

class Strings extends ControllerFather
{
    public function __construct ($sClassName = '')
    {
        parent::__construct(__CLASS__);
    }

//    /route/api/strings/unicode-split
    public function unicodeSplit ()
    {
        if (empty($_POST)) {
            return false;
        }

        if (
            !isset($_POST['source'])
            ||
            $_POST['source'] === ''
        ) {
            return false;
        }

        $aValue = [];
        $aValue['act'] = 'get';
        $aValue['key'] = UNICODE_SPLIT_API_KEY;
        $rReturn = new RedisTool();
        $rReturn = $rReturn->queryKeyData($aValue);
        if (!$rReturn) {
            ErrorInformAdminThrow::recordErrorAndInformAdmin(2);
            return false;
        }

        $aValue = $_POST;
        $aValue['md5'] = $rReturn;
        $rReturn = null;
        unset($rReturn);
        return CurlTool::instance(ACTION_URL['unicode_split'])->post($aValue, false);
    }

//    /route/api/strings/simplified-traditional-convert
    public function simplifiedTraditionalConvert ()
    {
        if (empty($_POST)) {
            return false;
        }

        if (
            !isset($_POST['source'])
            ||
            $_POST['source'] === ''
        ) {
            return false;
        }

        $aValue = [];
        $aValue['act'] = 'get';
        $aValue['key'] = TRADITIONAL_SIMPLIFIED_API_KEY;
        $rReturn = new RedisTool();
        $rReturn = $rReturn->queryKeyData($aValue);
        if (!$rReturn) {
            ErrorInformAdminThrow::recordErrorAndInformAdmin(4);
            return false;
        }

        $aValue = $_POST;
        $aValue['md5'] = $rReturn;
        $rReturn = null;
        unset($rReturn);
        return CurlTool::instance(ACTION_URL['simplified_traditional_convert'])->post($aValue, false);
    }
}
