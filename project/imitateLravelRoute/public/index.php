<?php
use Illuminate\Container\Container;
use Illuminate\Events\EventServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Routing\RoutingServiceProvider;

//首页入口

//调用自动加载文件
require __DIR__ . '/../vendor/autoload.php';

//实例化服务容器,对事件服务提供者及路由服务提供者进行注册
$app = new Container;
with(new EventServiceProvider($app))->register();
with(new RoutingServiceProvider($app))->register();

//加载路由配置
require __DIR__ . './../app/Http/routes/routers.php';
//实例化请求并分发处理请求
$request  = Request::createFromGlobals();
$response = $app['router']->dispatch($request);
//返回响应请求
$response->send();
