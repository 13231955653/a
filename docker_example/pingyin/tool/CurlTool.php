<?php
namespace Yurun\Tool;

/**
 *
 * author: white
 * date:2020/9/22 20:21
 *
 */
class CurlTool
{
    
    private $ch;//curl资源对象
    
    /**
     * 构造方法
     * @param string $url 请求的地址
     * @param int $responseHeader 是否需要响应头信息
     */
    public function __construct ($url, $responseHeader = 0)
    {
        var_dump($url);
        $this->ch = curl_init($url);
        curl_setopt($this->ch,CURLOPT_RETURNTRANSFER, 1);//设置以文件流的形式返回
        curl_setopt($this->ch,CURLOPT_HEADER, $responseHeader);//设置响应头信息是否返回
    }
    
    /**
     * User: yuzhao
     * CreateTime: 2018/10/23 下午11:22
     * @param $url
     * Description: 返回当前对象
     */
    public static function instance($url, $responseHeader = 0)
    {
        return new CurlTool($url, $responseHeader);
    }
    
    /**
     * 析构方法
     */
    public function __destruct ()
    {
        $this->close();
    }
    
    /**
     * 添加请求头
     * @param array $aValue 请求头
     */
    public function addHeader ($aValue)
    {
        curl_setopt($this->ch, CURLOPT_HTTPHEADER, $aValue);
    }
    
    /**
     * 发送请求
     * @return string 返回的数据
     */
    private function exec()
    {
        return curl_exec($this->ch);
    }
    
    /**
     * 发送get请求
     * @return string 请求返回的数据
     */
    public function get()
    {
        return $this->exec();
    }
    
    /**
     * 发送post请求
     * @param  arr/string $aValue 准备发送post的数据
     * @param boolean $https 是否为https请求
     * @return string        请求返回的数据
     */
    public function post ($aValue, $https = true)
    {
        if($https){
            curl_setopt($this->ch, CURLOPT_SSL_VERIFYPEER, FALSE);
            curl_setopt($this->ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        }
        
        $this->addVerifyData($aValue);
//        var_dump($aValue);
        curl_setopt($this->ch,CURLOPT_POST, 1);//设置post请求
        curl_setopt($this->ch,CURLOPT_POSTFIELDS, $aValue);
        return $this->exec();
    }
    
    private function addVerifyData (& $aValue)
    {
//        $aValue['REDIS_PERFIX'] = C_REDIS_PERFIX;
//        $aValue['md5'] = '8FACB97BE0692D9875209797BE2B1A08';
    }
    
    /**
     * 关闭curl句柄
     */
    private function close ()
    {
        curl_close($this->ch);
    }
}


//    $rReturn = CurlTool::instance(url)->get();
//    print_r($rReturn);
//$aValue = [];
//$aValue['act'] = 'setnx';
//$aValue['key'] = 'white';
//$aValue['value'] = 'ssss';
//$rReturn = CurlTool::instance('http://192.168.125.128:6999/index.php')->post($aValue, false);
//$rReturn = json_decode($rReturn, true);
//if (isset($rReturn['status']) && $rReturn['status'] === 1) {
//    echo 'success';
//}
//var_dump($rReturn);
