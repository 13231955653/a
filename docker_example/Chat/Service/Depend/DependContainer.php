<?php
namespace Service\Depend;

use Service\Ioc\Ioc;

class DependContainer
{
//    public static function swooleWebsocket ()
//    {
//        return 'swooleWebsocket';
//    }
    
    public static function chatService ()
    {
        return 'chatService';
    }
    
    public static function chatTool ()
    {
        return 'chatTool';
    }
    
    public static function depend ( string $sDepend = '')
    {
        switch ($sDepend) {
//            case 'swooleWebsocket' :
//                return [Ioc::staticObjectFiled() =>  '\Tool\Chat\Chat'];
//                break;
            case 'chatService' :
                return [Ioc::objectFiled() =>  '\Service\Chat\Chat'];
                break;
            case 'chatTool' :
                return [Ioc::staticObjectFiled() =>  '\Tool\Chat\Chat'];
                break;
            default :
                if (DEBUG) {
                    var_dump($sDepend);
                }
                break;
        }
    }
}
