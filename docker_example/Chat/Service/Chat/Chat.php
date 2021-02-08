<?php

namespace Service\Chat;

use Service\Ioc\Ioc;
use Service\Depend\DependContainer;

class Chat
{
    private $oWebSocket = false;
    
    private function setWebsocketObject (\Swoole\WebSocket\Server $oWebsocketChat)
    {
        $this->oWebSocket = $oWebsocketChat;
    }
    
    public function open (\Swoole\WebSocket\Server $oWebsocketChat, \Swoole\Http\Request $req)
    {
        $this->setWebsocketObject($oWebsocketChat);
        
//        var_dump($oWebsocketChat, $req);
    }
    
    public function close (\Swoole\WebSocket\Server $oWebsocketChat, int $iCloseFd)
    {
        $this->setWebsocketObject($oWebsocketChat);
        
//        var_dump($oWebsocketChat, $iCloseFd);
    }
    
    public function message (\Swoole\WebSocket\Server $oWebsocketChat, \Swoole\WebSocket\Frame $oFrame)
    {
        $this->setWebsocketObject($oWebsocketChat);
        
//        var_dump($oWebsocketChat, $oFrame);
//        var_dump($oWebsocketChat);
//        var_dump($oFrame);
        $iFd = isset($oFrame->fd) ? $oFrame->fd : false;
        $bFinish = isset($oFrame->finish) ? $oFrame->finish : false;
//        $opcode = $oFrame->opcode;
        $sData = isset($oFrame->data) ? $oFrame->data : false;
        
        if ($bFinish) {
            $this->disposeSendMessage($sData);
            
            $this->sendMessage($sData, $iFd);
        }
    }
    
    private function sendMessage (array $aData = [], int $iFd = 0)
    {
        if (!$aData || !is_array($aData)) {
            return false;
        }
        
        var_dump($aData, $iFd);
    }
    
    private function disposeSendMessage (string & $sData = '')
    {
        if (!$sData) {
            return false;
        }
    
        $sDependName = DependContainer::chatTool();
        Ioc::register($sDependName, DependContainer::depend($sDependName));
    
        $oChatTool = Ioc::resolve($sDependName);
        $sData = $oChatTool::disposeData($sData);
    }
    
    private function sendMessageToFriend ()
    {
    
    }
    
    private function sendMessageToStranger ()
    {
    
    }
    
    private function sendMessageToAll ()
    {
    
    }
    
    private function sendMessageToOne ()
    {
    
    }
    
    private function sendMessageToGroup ()
    {
    
    }
}
