<?php
/**
 * 依赖容器
 */
namespace ToolClass\Depend;

use ToolClass\Log\Exception;
use ToolClass\Server\Server;

class DependContainer
{
    private $sDepend = '';

    public function __construct (string $sDepend = '')
    {
        if (is_numeric($sDepend) || !$sDepend) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError(
                        'depend container what error'
                    )
                )
            );
            return FALSE;
        }


        $this->sDepend = $sDepend;
    }

    public function selectClassDepend ()
    {
        if (is_numeric($this->sDepend) || !$this->sDepend) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError(
                        'depend container error 1'
                    )
                )
            );
            return FALSE;
        }

        switch ($this->sDepend) {
            case 'database' :
                return new \ToolClass\Depend\Database\DatabaseDepend();
                break;
            case 'sqlSafe' :
                return new \ToolClass\Depend\Database\SqlSafeDepend();
                break;
            case 'json' :
                return new \ToolClass\Depend\Json\Json();
                break;
            default :
                Exception::throwException(
                    Server::response(
                        Server::errorStatus(),
                        Server::returnError(
                            'depend container error 2'
                        )
                    )
                );
                return FALSE;
                break;
        }
    }
}
