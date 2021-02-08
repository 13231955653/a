<?php

namespace Service\Ioc;

class Ioc
{
    private static $aRegisteredStaticObject = [];
    private static $aRegisteredObject = [];
    
    public static function staticObjectFiled ()
    {
        return 'staticObject';
    }
    
    public static function objectFiled ()
    {
        return 'object';
    }

    public static
    function register (
        string $sName = '',
        array $aResolve = []
    ) {
        if (!$sName || !$aResolve) {
            if (DEBUG) {
                var_dump($sName, $aResolve);
            }
            
            return false;
        }
    
        $sStaticFeild = self::staticObjectFiled();
        if (isset($aResolve[$sStaticFeild])) {
            if (!isset(self::$aRegisteredStaticObject[ $sName ])) {
                self::$aRegisteredStaticObject[ $sName ] = $aResolve[$sStaticFeild];
            }
        }
    
        $sObjectFeild = self::objectFiled();
        if (isset($aResolve[$sObjectFeild])) {
            if (!isset(self::$aRegisteredObject[ $sName ])) {
                self::$aRegisteredObject[ $sName ] = $aResolve[$sObjectFeild];
            }
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
        string $sName = '',
        $parameter = ''
    ) {
        if (!$sName) {
            return FALSE;
        }
    
        if ( self::registered( $sName, true ) ) {
            return self::$aRegisteredStaticObject[ $sName ];
        }
        
        if ( self::registered( $sName, false ) ) {
            if (self::$aRegisteredObject[ $sName ] instanceof self::$aRegisteredObject[ $sName ]) {
                return self::$aRegisteredObject[ $sName ];
            }
    
            return new self::$aRegisteredObject[ $sName ]($parameter);
        }
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
        string $sName = '',
        bool $bStatic = true
    ) {
        if (!$sName) {
            return FALSE;
        }

        if ($bStatic){
            return array_key_exists( $sName, static::$aRegisteredStaticObject );
        }
        
        return array_key_exists( $sName, static::$aRegisteredObject );
    }
}
