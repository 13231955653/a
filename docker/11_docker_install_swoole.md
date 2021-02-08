>docker pull phpswoole/swoole

>docker run --rm phpswoole/swoole "php -m"

>docker run --rm phpswoole/swoole "php --ri swoole"

>docker run --rm phpswoole/swoole "composer --version"

>docker run --name swoole_chat -v /usr/local/white:/usr/local/chat -d phpswoole/swoole