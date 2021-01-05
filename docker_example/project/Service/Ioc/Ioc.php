<?php

namespace Service\Ioc;

use Service\Depend\DependContainer;
/**
 * 控制反转类
 */
class Ioc
{
    /**
     * @var array 注册的依赖数组
     */
    protected static $aRegistry = [];

    /**
     * 添加一个 resolve （匿名函数）到 registry 数组中
     *
     * @param string  $sName    依赖标识
     * @param $sResolve 用来创建实例
     *
     * @return void
     */
    public static
    function register (
        $sName = '',
        $sResolve = ''
    ) {
        if (!$sName || !$sResolve) {
            if (DEBUG) {
                var_dump($sName, $sResolve);
            }

            $sExceptionDepengName = DependContainer::exception();
            $oExceptionDepend = Ioc::resolve($sExceptionDepengName);

            $sServerDepengName = DependContainer::server();
            $oServerDepend = Ioc::resolve($sServerDepengName);

            $oExceptionDepend->throwException(
                $oServerDepend->response(
                    $oServerDepend->errorStatus(),
                    $oServerDepend->returnError('ioc error 1')
                )
            );
            return FALSE;
        }

        if (!isset(static::$aRegistry[ $sName ])) {
            static::$aRegistry[ $sName ] = $sResolve;
        }
    }

    /**
     * 返回一个实例
     *
     * @param string $sName 依赖的标识
     *
     * @return mixed
     * @throws \Exception
     */
    public static
    function resolve (
        $sName = '',
        $parameter = ''
    ) {
        if (!$sName) {
            return FALSE;
        }

        if ( static::registered( $sName ) ) {
            return new static::$aRegistry[ $sName ]($parameter);
        }

        self::register($sName, DependContainer::depend($sName));
        return Ioc::resolve($sName);
    }

    /**
     * 查询某个依赖实例是否存在
     *
     * @param string $sName
     *
     * @return bool
     */
    public static
    function registered (
        $sName = ''
    ) {
        if (!$sName) {
            return FALSE;
        }

        return array_key_exists( $sName, static::$aRegistry );
    }
}
