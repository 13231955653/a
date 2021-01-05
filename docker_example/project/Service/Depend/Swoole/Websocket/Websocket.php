<?php

namespace Service\Depend\Swoole\Websocket;

use Service\Depend\DependContainer;
use Service\Ioc\Ioc;
//use ToolClass\Strings\string\Websocket as WebsocketTool;

use Service\Depend\Depend;

class Websocket extends Depend
{
    public
    function newWebsocket (
        string $sPort = '',
        bool $bCheckUsedPort = FALSE
    ) {
        if ( !$sPort || !is_numeric( $sPort ) ) {
            return $this->throwPortError();
        }
        
        if ( $bCheckUsedPort && !$this->checkUsedPort( $sPort ) ) {
            $this->throwError( 'port is used' );
            return;
        }
        
        return new \Swoole\Websocket\Server(
            $this->wescoketServerIp(),
            (int) $sPort
        );
    }
    
    public
    function exist (
        object & $oWebsocketChat,
        $fd = 0
    ) {
        return $oWebsocketChat->exist( $fd );
    }
    
    public
    function getClientInfo (
        object $oWebsocketChat,
        $fd = 0
    ) {
        if ( !$fd || !is_numeric( $fd ) ) {
            return FALSE;
        }
        
        return $oWebsocketChat->getClientInfo( $oWebsocketChat, $fd );
    }
    
    public
    function disconnect (
        object & $oWebsocketChat,
        $fd = 0
    ) {
        if ( !$fd || !is_numeric( $fd ) ) {
            return;
        }
        
        $oWebsocketChat->disconnect(
            $fd,
            SWOOLE_WEBSOCKET_CLOSE_NORMAL,
            'link_close'
        );
        $fd = NULL;
        unset( $fd );
    }
    
    public
    function push (
        object & $oWebsocketChat,
        $fd = 0,
        $aInfo = []
    ) {
        if (!is_array($aInfo)) {
            return;
        }
        
        $sDependName = DependContainer::json();
        Ioc::register(
            $sDependName,
            DependContainer::depend( $sDependName )
        );
        $oJson = Ioc::resolve( $sDependName );
        
        $oWebsocketChat->push(
            $fd,
            $oJson->toJson( $aInfo )
        );
    }
    
    private
    function wescoketServerIp ()
    {
        $sServerDepengName = DependContainer::server();
        $oServerDepend     = Ioc::resolve( $sServerDepengName );
        
        return $oServerDepend->getServerIp();
    }
    
    private
    function throwPortError ()
    {
        return $this->throwError( 'websocket port must number' );
    }
    
    private
    function checkUsedPort (
        string $sPort = ''
    ) {
        if ( !$sPort || !is_numeric( $sPort ) ) {
            return $this->throwPortError();
        }
        
        $sServerDepengName = DependContainer::server();
        $oServerDepend     = Ioc::resolve( $sServerDepengName );
        return $oServerDepend->checkUsedPort( $sPort );
    }
}
