<?php

namespace command\Image;

use command\CommandFather;

use model\publics\ImageList;
use ToolClass\Model\Mysql;
use ToolClass\Queue\Queue;

class DelNoUsedImage extends CommandFather
{
    public $sCommandName = 'image_del_no_used_image';

    public
    function __construct ()
    {
    }

    public
    function do ()
    {
        $aNoUsedImages = $this->queryAllNoUsedImage();

        if ( $aNoUsedImages ) {
            $this->disposeNoUsedImage( $aNoUsedImages );
        }
    }

    private
    function disposeNoUsedImage (
        $aNoUsedImages = []
    ) {
        if ( !$aNoUsedImages ) {
            return;
        }

        $sPathKey = ImageList::pathKey();
        foreach ( $aNoUsedImages as $v ) {
            $v[ $sPathKey ] = mb_substr( $v[ $sPathKey ], 0, 1 ) !== DIRECTORY_SEPARATOR ? DIRECTORY_SEPARATOR . $v[ $sPathKey ] : $v[ $sPathKey ];
            $v[ $sPathKey ] = str_replace(__ROOT_DIR__, '', $v[ $sPathKey ]);
            $v[ $sPathKey ] = __ROOT_DIR__ . $v[ $sPathKey ];

            if (is_file($v[ $sPathKey ])) {
                Queue::insertDelFile($v[ $sPathKey ]);
            }

            var_dump($v[ImageList::primary()]);

            Queue::insertDelData($sPathKey);

        }
        $aNoUsedImages = $sPathKey = null;
        unset($aNoUsedImages, $sPathKey);
    }

    private
    function queryAllNoUsedImage ()
    {

        $aWhere = [];
        $aWhere[ ImageList::usedNumber() ]
                = ImageList::noUsedNumber();

        $oMysql = Mysql::table( ImageList::table() );

        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        //        $oMysql->writeSql(TRUE);

        $oMysql->select(
            [
                ImageList::primary(),
                ImageList::pathKey()
            ]
        );

        return $oMysql->all();
    }
}
