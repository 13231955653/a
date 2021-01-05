<?php

namespace Service\Websocket;

use function MongoDB\BSON\toJSON;
use Service\Depend\DependContainer;
use Service\Ioc\Ioc;

use Service\Service;

class Chat extends Service
{
    private static $sPort = 9504;
    
    private static $sTypeFeild = 'type';
    
    private static $sUpdateOnlineNumber = 'update_online_num';
    private static $sOnlineTotal        = 'online_total';
    
    private static
    function port ()
    {
        return self::$sPort;
    }
    
    private static function resolveSwooleWebsocket ()
    {
        $sWebsocketDepengName = DependContainer::websocketChat();
        return Ioc::resolve( $sWebsocketDepengName );
    }
    
    private static
    function makeWebsocketObject ()
    {
        $oWebsocketChatDepend = self::resolveSwooleWebsocket();
        return $oWebsocketChatDepend->newWebsocket(
            self::port(),
            FALSE
        );
    }
    
    public static
    function begin ()
    {
        $oWebsocketChat = self::makeWebsocketObject();
        
        $oWebsocketChat->on(
            'open',
            function (
                $oWebsocketChat,
                $req
            ) {
                self::open( $oWebsocketChat );
            }
        );
        
        $oWebsocketChat->on(
            'message',
            function (
                $oWebsocketChat,
                $frame
            ) {
                self::sendMessage( $oWebsocketChat , $frame);
            }
        );
        
        $oWebsocketChat->on(
            'close',
            function (
                $oWebsocketChat,
                $fd
            ) {
                self::close(
                    $oWebsocketChat,
                    $fd
                );
            }
        );
        
        $oWebsocketChat->start();
    }
    
    //////////////////////
    private static function sendMessage (object & $oWebsocketChat, $frame)
    {
        if ( !$oWebsocketChat || !$frame ) {
            return;
        }
        
        $oWebsocketDepend = self::resolveSwooleWebsocket();
        $oWebsocketDepend->push(
            $oWebsocketChat,
            $frame->fd,
//            $frame->data
            //////////////////
            ['type'=>'server_send', 'data' => $frame->fd]
        );
    }
    
    private static
    function updateOnelineTotal (
        object & $oWebsocketChat
    ) {
        $sInfo = [
            self::$sTypeFeild   => self::$sUpdateOnlineNumber,
            self::$sOnlineTotal => count( $oWebsocketChat->connections )
        ];
        
        self::broadcast(
            $oWebsocketChat,
            $sInfo
        );
    }
    
    private static
    function broadcast (
        object $oWebsocketChat,
        $aInfo = []
    ) {
        if ( !$aInfo ) {
            return;
        }
        
        if ( !isset( $aInfo[ self::$sTypeFeild ] ) ) {
            return;
        }
        
        foreach ( $oWebsocketChat->connections as $fd ) {
            if ( !self::exist( $oWebsocketChat, $fd ) ) {
                continue;
            }
            
            self::sendInfo(
                $oWebsocketChat,
                $fd,
                $aInfo
            );
        }
    }
    
    private static
    function exist (
        object & $oWebsocketChat,
        $fd = 0
    ) {
        $oWebsocketDepend = self::resolveSwooleWebsocket();
        return $oWebsocketDepend->exist($oWebsocketChat, $fd);
    }
    
    private static
    function sendInfo (
        object & $oWebsocketChat,
        $fd = 0,
        $aInfo = []
    ) {
        if ( !$fd || !$aInfo ) {
            return;
        }
        
        if ( !isset( $aInfo[ self::$sTypeFeild ] ) ) {
            return;
        }
    
        $oWebsocketDepend = self::resolveSwooleWebsocket();
        $oWebsocketDepend->push(
            $oWebsocketChat,
            $fd,
            $aInfo
        );
    }
    
    private static
    function getClientInfo (
        object $oWebsocketChat,
        $fd = 0
    ) {
        if ( !$fd || !is_numeric( $fd ) ) {
            return FALSE;
        }
    
        $oWebsocketDepend = self::resolveSwooleWebsocket();
        return $oWebsocketDepend->getClientInfo( $oWebsocketChat, $fd );
    }
    
    ////////////////////////
    private static
    function open (
        object & $oWebsocketChat
    ) {
        self::updateOnelineTotal( $oWebsocketChat );
    }
    
    //////////////////////
    private static
    function close (
        object & $oWebsocketChat,
        $fd = 0
    ) {
        if ( !$fd || !is_numeric( $fd ) ) {
            return;
        }
        
        self::deleteOutUserFd(
            $oWebsocketChat,
            $fd
        );
        $fd = NULL;
        unset( $fd );
        
        self::updateOnelineTotal( $oWebsocketChat );
    }
    
    private static
    function deleteOutUserFd (
        object & $oWebsocketChat,
        $fd = 0
    ) {
        if ( !$fd || !is_numeric( $fd ) ) {
            return;
        }
    
        $oWebsocketDepend = self::resolveSwooleWebsocket();
        $oWebsocketDepend->disconnect(
            $oWebsocketChat,
            $fd
        );
        $fd = $oWebsocketDepend = NULL;
        unset( $fd , $oWebsocketDepend);
    }
}
