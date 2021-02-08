<?php
use Controllers\Chat;

require_once '.'  . DIRECTORY_SEPARATOR  . 'config' . DIRECTORY_SEPARATOR  .  'base_config.php';

require_once __ROOT_DIR__  . DIRECTORY_SEPARATOR  . 'autoload' . DIRECTORY_SEPARATOR  .  'autoload.php';

$oChat = new Chat();
$oChat->begin();
