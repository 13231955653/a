<?php
namespace api;

use ControllerFather;
use ToolClass\CurlTool;
use ToolClass\RedisTool;
use ToolClass\ErrorInformAdminThrow;

class Pinyin extends ControllerFather
{
    public function __construct ($sClassName = '')
    {
        parent::__construct(__CLASS__);
    }

//    /route/api/pinyin/query-pin-yin
    public function queryPinYin ()
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
        $aValue['key'] = PIN_YIN_API_KEY;
        $rReturn = new RedisTool();
        $rReturn = $rReturn->queryKeyData($aValue);
        if (!$rReturn) {
            ErrorInformAdminThrow::recordErrorAndInformAdmin(1);
            return false;
        }

        $aValue = $_POST;
        $aValue['md5'] = $rReturn;
        return CurlTool::instance(ACTION_URL['pinyin'])->post($aValue, false);
    }

//    /route/api/pinyin/split
    public function split ()
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
        $aValue['key'] = PING_YIN_SPLIT_KEY;
        $rReturn = new RedisTool();
        $rReturn = $rReturn->queryKeyData($aValue);
        if (!$rReturn) {
            ErrorInformAdminThrow::recordErrorAndInformAdmin(3);
            return false;
        }

        $aValue = $_POST;
        $aValue['md5'] = $rReturn;
        return CurlTool::instance(ACTION_URL['pin_yin_split'])->post($aValue, false);
    }
}
