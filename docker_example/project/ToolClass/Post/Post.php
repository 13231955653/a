<?php

namespace ToolClass\Post;

use model\publics\SpiderCurlData;
use ToolClass\Curl\CurlData;
use ToolClass\Image\Image;
use ToolClass\Regular\RegularVerify;

class Post
{
    //中关村笑话
    public static function insertZGCXXHKPostQueue ($sSpiderName = '', $sOriginUrl = '', $sPostInfo = '')
    {
        if (!$sSpiderName || !$sOriginUrl || !$sPostInfo) {
            return TRUE;
        }

        $sDisposeInfo = Post::disposeInfo($sPostInfo);
        if (!$sDisposeInfo) {
            try {
                return CurlData::insertValue($sSpiderName, $sOriginUrl, $sPostInfo, SpiderCurlData::jokeTextId());
            } catch (\Exception $e) {

            }
        } else {
            try {
                return CurlData::insertValue($sSpiderName, $sOriginUrl, $sDisposeInfo, SpiderCurlData::jokeImgId());
            } catch (\Exception $e) {

            }
        }

        return TRUE;
    }


    public static function disposeInfo ($sInfo)
    {
        if (!Image::existImage($sInfo)) {
            return false;
        }

        $aImages = Image::getAllImageSrc($sInfo);
        if (!$aImages) {
            return FALSE;
        }

        $sDownloadImageName = '';
        foreach ($aImages[RegularVerify::$sSrcFeild] as $v) {
            $sDownloadImageName = Image::downloadImage($v);
            $sInfo = $sDownloadImageName ? str_replace($v, $sDownloadImageName, $sInfo) : $sInfo;
        }
        $sDownloadImageName = null;
        unset($sDownloadImageName);

        return $sInfo;
    }
}