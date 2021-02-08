<?php

namespace Tool\Chat;

require_once __ROOT_DIR__  . DIRECTORY_SEPARATOR  . 'config' . DIRECTORY_SEPARATOR  .  'chat.php';

class Chat
{
    public static function makeWebsocketObject ()
    {
        return new \Swoole\WebSocket\Server(WEBSOCKET_CONFIG['ip'], WEBSOCKET_CONFIG['port']);
    }
    
    public static function disposeData (string $sData = '')
    {
        return @json_decode($sData, true);
    }
}
