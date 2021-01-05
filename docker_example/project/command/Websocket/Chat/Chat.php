<?php

namespace command\Websocket\Chat;

use Service\Websocket\Chat as ChatService;

use command\CommandFather;

class Chat extends CommandFather
{
    public $sCommandName = 'websocket_chat';

    public
    function __construct ()
    {
    }

    public function do ()
    {
        ChatService::begin();
    }
}
