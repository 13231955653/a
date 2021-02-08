<?php

namespace Controllers;

use Service\Ioc\Ioc;
use Service\Depend\DependContainer;

class Chat
{
    public
    function begin ()
    {
        $sDependName = DependContainer::chatTool();
        Ioc::register($sDependName, DependContainer::depend($sDependName));
    
        $oChatTool = Ioc::resolve($sDependName);
        $sDependName = null;
        unset($sDependName);
        
        $oWebsocketChat = $oChatTool::makeWebsocketObject();
        
        $oWebsocketChat->on(
            'open',
            function (
                $oWebsocketChat,
                $req
            ) {
                $sDependName = DependContainer::chatService();
                Ioc::register($sDependName, DependContainer::depend($sDependName));
    
                $oChatService = Ioc::resolve($sDependName);
                
                $oChatService->open( $oWebsocketChat, $req );
            }
        );
        
        $oWebsocketChat->on(
            'message',
            function (
                $oWebsocketChat,
                $frame
            ) {
                $sDependName = DependContainer::chatService();
                Ioc::register($sDependName, DependContainer::depend($sDependName));
    
                $oChatService = Ioc::resolve($sDependName);
                
                $oChatService->message( $oWebsocketChat , $frame);
            }
        );
        
        $oWebsocketChat->on(
            'close',
            function (
                $oWebsocketChat,
                $fd
            ) {
                $sDependName = DependContainer::chatService();
                Ioc::register($sDependName, DependContainer::depend($sDependName));
    
                $oChatService = Ioc::resolve($sDependName);
                
                $oChatService->close(
                    $oWebsocketChat,
                    $fd
                );
            }
        );
    
        $oWebsocketChat->start();
    }
}
