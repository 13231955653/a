<?php

namespace ToolClass\Encode;

use ToolClass\Json\Json;
use ToolClass\Log\ErrorInformAdminThrow;
use ToolClass\Log\Exception;
use ToolClass\Server\Server;

/**
 *
 * author: white
 * date:2020/9/22 20:21
 *
 */
class Rsa
{
    /**
     * private key
     */
    private static $sPrivateKey = '-----BEGIN PRIVATE KEY-----
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
t0tRKSmd+AzJU+AUz6UUUUjKvkWweQ==
-----END PRIVATE KEY-----
';

    /**
     * public key
     */
    private static $sPublicKey = '-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAnNWya/mKpYEk2LWFtF5u
9lwiHDlY6TSuq3aKEJisLjVsaWo7pIqdHRDwyUXLUuAR4Rp1gFFW7+/AX7PlVph1
jw5e5xOuvqz/1O6wqENm9/NTjLEvp30cc9jzzXbEsJmBoKRpwtEUiN7a6E//OiSq
Xbezw7x80p1hYJzm7oGLNIh397dE/CJ0dFBMNorzJK7Y0UxcnvIv4bcVcHH2K1YZ
r7hK94Oa4MbbgeuM++/Wf+aiHH+qprmB0jBmCpr+5WEGUJxoNTbkO+1tA1SPIuuO
HQ3pzPs3J9ZFh3XlpAz7oipLtOLzdm371twcpChZ24GYutMCHgM/lzwJ+6+FN7eP
mkcLKt85X4+TRQxyEXeKemvYMBWXaPd6D5qhwSNCFo2qZ+fSkiB2BtS6bENndtH5
LfOU8srOdwhF/1aflT2rb3D5KS03O31BBTRkVHjsjgYRnNBbraijtK668VozbmXt
l3N+CGrztBkT5lS5nlqifBxksejcV6OyTroHPZuzhFGjn6bh6jXD/OgcaNTNc+Uj
RpOkgNdHmUmdB1m0a+z5aGGKR8Q3EMwOBZqHEx2NFnajfTaOgaPu6jOGiSP3+SKN
OvTUZxPV5Ffden3ZxjNb8c7hi+wGYG6tdoO7ErrbDROhtG8VAXELYiQgeC6YLmPy
NijFTFBZCLlRyIiv/gq1TSECAwEAAQ==
-----END PUBLIC KEY-----
';

    private static $iMaxStringLength = 111;
    private static $sIntervalTag     = 'white++white';

    private static
    function checkKey ($sKey)
    {
        //        $sKey = openssl_pkey_get_private(self::$sPrivateKey);
        //        if (!$sKey) {
        //            ErrorInformAdminThrow::recordErrorAndInformAdmin(15, 'rsa private key error');
        //        }
        //
        //        $sKey = openssl_pkey_get_public(self::$sPublicKey);
        //        if (!$sKey) {
        //            ErrorInformAdminThrow::recordErrorAndInformAdmin(16, 'rsa public key error');
        //        }
        if (!$sKey && !openssl_pkey_get_private($sKey) && !openssl_pkey_get_public($sKey)) {
            ErrorInformAdminThrow::recordErrorAndInformAdmin(16,
                Server::$aReturnData['rsa key error']);
            return false;
            //
            //            return Server::response(Server::errorStatus(), Server::$aReturnData[ 'admin login error' ]);
        }
    }

    public static
    function encryptByPublicKey ($sString = '', $sKey = '')
    {
        $sString = is_string($sString) && Json::analyJson($sString) ?
            $sString : Json::toJson($sString);

        if (!$sString) {
            Exception::throwException(Server::response(Server::errorStatus(), Server::$aReturnData[ 'rsa encode public error' ]));
            return;
        }

//        self::checkKey(($sKey ? $sKey : self::$sPublicKey));
        $sKey = $sKey ? $sKey : self::$sPublicKey;
        self::checkKey($sKey);

        //        $sString = 'IftV3QL9lae62bdGf7eUwM13z/Cdl/5WXljChTt6QyJZVf9ZDi5DHg9ojduddJU8EaCfzqm0U809mdUtNu7YFNCOFZmrF/u7WZWpm9q8ucvvjnxoyu1WObc/WmvhKbM60eVpt6dJLJrbLz6DM8dOwtCNrfrhvC4M0Z/LsWBjzyHgLiUEycwdIdOwXQvU+6p38e4lDLkLeQH9AnvKuRgaaavziCqbiQq7ZWQLDaKMXwfzDiqZOQbs4I1IyBbKlPEEbyGMmhcw08RY7DSez2HeYBimxeEwhMYYlmoq+IK092HJ5sVgVodPVSb4yC3FqCjHvPj6Y727TxzyH+DUiVcBB7G0f5nW7fg52oMnAIdOmjgUa42BZ3zv0mls1izWHUcY4Nq9Uraotuk1yMGjx7aH2MRTqGanyUhL6iuG85SYu9jVp8QL/g9Ggs3j5YYf+WjUstr2TMKGtb3tiOjWCWZfJWnOBANiYlPJicWK09r4Vlt5tvkf4e/X0wjfoBwnNd423XSRVzmtyJbjLRD/8fpKoCsZw+lWoXmmemNV55VuX4QWs2jlwCghm4eD9PVTlp5zzdLHpBJuXth3we26AzvQIb82o6PyCqwGkBmPRmW5FJpUpMi/zvSN38JHbHhM+lVACo8JOmgC+Grh8HDHzyci9T4+KTW6aHM2716SypzenoE=';

        if (mb_strlen($sString) < self::$iMaxStringLength) {
            return self::publicKeyEncode($sString, $sKey);
        }

        $sEncodeString = '';
        foreach (str_split($sString, self::$iMaxStringLength) as $sChunk) {
            $sEncodeString .= self::publicKeyEncode($sChunk, $sKey) .
                self::$sIntervalTag;
        }
        $sEncodeString = mb_substr($sEncodeString, 0, mb_strlen($sEncodeString) - mb_strlen(self::$sIntervalTag));

        //                var_dump($sEncodeString);
        return $sEncodeString;
    }

    private static
    function publicKeyEncode ($sString, $sKey)
    {
        //        var_dump($sString);
        //        $sString = 'aaa';

        openssl_public_encrypt($sString, $sSignature, $sKey);

        //        var_dump($sSignature);
        $sRetrun = base64_encode($sSignature);

        //        var_dump($sRetrun);
        return $sRetrun;
    }

    public static
    function decodeByPublicKey ($sString = '', $sKey = '')
    {
        if (!$sString) {
            Exception::throwException(Server::response(Server::errorStatus(), Server::$aReturnData[ 'rsa decode public error' ]));
            return;
        }
        //        echo 'aaaaaa';
        //        $sString = 'gg';
        //        self::checkKey();
//        self::checkKey(($sKey ? $sKey : self::$sPublicKey));
        $sKey = $sKey ? $sKey : self::$sPublicKey;
        self::checkKey($sKey);
        //        $sString = 'IftV3QL9lae62bdGf7eUwM13z/Cdl/5WXljChTt6QyJZVf9ZDi5DHg9ojduddJU8EaCfzqm0U809mdUtNu7YFNCOFZmrF/u7WZWpm9q8ucvvjnxoyu1WObc/WmvhKbM60eVpt6dJLJrbLz6DM8dOwtCNrfrhvC4M0Z/LsWBjzyHgLiUEycwdIdOwXQvU+6p38e4lDLkLeQH9AnvKuRgaaavziCqbiQq7ZWQLDaKMXwfzDiqZOQbs4I1IyBbKlPEEbyGMmhcw08RY7DSez2HeYBimxeEwhMYYlmoq+IK092HJ5sVgVodPVSb4yC3FqCjHvPj6Y727TxzyH+DUiVcBB7G0f5nW7fg52oMnAIdOmjgUa42BZ3zv0mls1izWHUcY4Nq9Uraotuk1yMGjx7aH2MRTqGanyUhL6iuG85SYu9jVp8QL/g9Ggs3j5YYf+WjUstr2TMKGtb3tiOjWCWZfJWnOBANiYlPJicWK09r4Vlt5tvkf4e/X0wjfoBwnNd423XSRVzmtyJbjLRD/8fpKoCsZw+lWoXmmemNV55VuX4QWs2jlwCghm4eD9PVTlp5zzdLHpBJuXth3we26AzvQIb82o6PyCqwGkBmPRmW5FJpUpMi/zvSN38JHbHhM+lVACo8JOmgC+Grh8HDHzyci9T4+KTW6aHM2716SypzenoE=';
        //        if (mb_strlen($sString) < self::$iMaxStringLength) {
        //            return self::prikeyKeyDecode($sString);
        //        }

        //        echo 1;
        $aString = explode(self::$sIntervalTag, $sString);
        //        var_dump($aString);
        $sString = NULL;
        unset($sString);
        $sDecodeString = '';
        foreach ($aString as $sChunk) {
            $sDecodeString .= self::publicKeyDecode($sChunk, $sKey);
        }

        //        var_dump($sDecodeString);
        //        die();
        return $sDecodeString;
    }

    private static
    function publicKeyDecode ($sString, $sKey)
    {
//        self::checkKey();

        $sString = base64_decode($sString);
        openssl_public_decrypt($sString, $sDecode, $sKey);

        return $sDecode;
    }

    //
    public static
    function encryptByPrivateKey ($sString = '', $sKey = '')
    {
        if (!$sString) {
            Exception::throwException(Server::response(Server::errorStatus(), Server::$aReturnData[ 'rsa encode private error' ]));
            return;
        }

        $sString = is_string($sString) && Json::analyJson($sString) ?
            $sString : Json::toJson($sString);

        $sKey = $sKey ? $sKey : self::$sPrivateKey;
        self::checkKey($sKey);
//        self::checkKey(($sKey ? $sKey : self::$sPrivateKey));
//        self::checkKey();
        //        $sString = 'IftV3QL9lae62bdGf7eUwM13z/Cdl/5WXljChTt6QyJZVf9ZDi5DHg9ojduddJU8EaCfzqm0U809mdUtNu7YFNCOFZmrF/u7WZWpm9q8ucvvjnxoyu1WObc/WmvhKbM60eVpt6dJLJrbLz6DM8dOwtCNrfrhvC4M0Z/LsWBjzyHgLiUEycwdIdOwXQvU+6p38e4lDLkLeQH9AnvKuRgaaavziCqbiQq7ZWQLDaKMXwfzDiqZOQbs4I1IyBbKlPEEbyGMmhcw08RY7DSez2HeYBimxeEwhMYYlmoq+IK092HJ5sVgVodPVSb4yC3FqCjHvPj6Y727TxzyH+DUiVcBB7G0f5nW7fg52oMnAIdOmjgUa42BZ3zv0mls1izWHUcY4Nq9Uraotuk1yMGjx7aH2MRTqGanyUhL6iuG85SYu9jVp8QL/g9Ggs3j5YYf+WjUstr2TMKGtb3tiOjWCWZfJWnOBANiYlPJicWK09r4Vlt5tvkf4e/X0wjfoBwnNd423XSRVzmtyJbjLRD/8fpKoCsZw+lWoXmmemNV55VuX4QWs2jlwCghm4eD9PVTlp5zzdLHpBJuXth3we26AzvQIb82o6PyCqwGkBmPRmW5FJpUpMi/zvSN38JHbHhM+lVACo8JOmgC+Grh8HDHzyci9T4+KTW6aHM2716SypzenoE=';

        if (mb_strlen($sString) < self::$iMaxStringLength) {
            return self::privateKeyEncode($sString, $sKey);
        }

        $sEncodeString = '';
        foreach (str_split($sString, self::$iMaxStringLength) as $sChunk) {
            $sEncodeString .= self::privateKeyEncode($sChunk, $sKey) .
                self::$sIntervalTag;
        }
        $sEncodeString = mb_substr($sEncodeString, 0, mb_strlen($sEncodeString) - mb_strlen(self::$sIntervalTag));

        //        var_dump($sEncodeString);
        return $sEncodeString;
    }

    private static
    function privateKeyEncode ($sString, $sKey)
    {
//        self::checkKey();

        openssl_private_encrypt($sString, $sSignature, $sKey);

        $sRetrun = base64_encode($sSignature);

        return $sRetrun;
    }

    public static
    function decodeByPrivateKey ($sString = '', $sKey = '')
    {

        if (!$sString) {
            Exception::throwException(Server::response(Server::errorStatus(),
                Server::$aReturnData[ 'rsa decode private error' ]));
            return;
        }

        $sKey = $sKey ? $sKey : self::$sPrivateKey;
        self::checkKey($sKey);
        //        echo 'aaaaaa';
        //        $sString = 'gg';
//        self::checkKey();
        //        $sString = 'IftV3QL9lae62bdGf7eUwM13z/Cdl/5WXljChTt6QyJZVf9ZDi5DHg9ojduddJU8EaCfzqm0U809mdUtNu7YFNCOFZmrF/u7WZWpm9q8ucvvjnxoyu1WObc/WmvhKbM60eVpt6dJLJrbLz6DM8dOwtCNrfrhvC4M0Z/LsWBjzyHgLiUEycwdIdOwXQvU+6p38e4lDLkLeQH9AnvKuRgaaavziCqbiQq7ZWQLDaKMXwfzDiqZOQbs4I1IyBbKlPEEbyGMmhcw08RY7DSez2HeYBimxeEwhMYYlmoq+IK092HJ5sVgVodPVSb4yC3FqCjHvPj6Y727TxzyH+DUiVcBB7G0f5nW7fg52oMnAIdOmjgUa42BZ3zv0mls1izWHUcY4Nq9Uraotuk1yMGjx7aH2MRTqGanyUhL6iuG85SYu9jVp8QL/g9Ggs3j5YYf+WjUstr2TMKGtb3tiOjWCWZfJWnOBANiYlPJicWK09r4Vlt5tvkf4e/X0wjfoBwnNd423XSRVzmtyJbjLRD/8fpKoCsZw+lWoXmmemNV55VuX4QWs2jlwCghm4eD9PVTlp5zzdLHpBJuXth3we26AzvQIb82o6PyCqwGkBmPRmW5FJpUpMi/zvSN38JHbHhM+lVACo8JOmgC+Grh8HDHzyci9T4+KTW6aHM2716SypzenoE=';
        //        if (mb_strlen($sString) < self::$iMaxStringLength) {
        //            return self::prikeyKeyDecode($sString);
        //        }

        //        echo 1;
        $aString = explode(self::$sIntervalTag, $sString);
        //        var_dump($aString);
        $sString = NULL;
        unset($sString);
        $sDecodeString = '';
        foreach ($aString as $sChunk) {
            $sDecodeString .= self::prikeyKeyDecode($sChunk, $sKey);
        }

        //        var_dump($sDecodeString);
        //        die();
        return $sDecodeString;
    }

    private static
    function prikeyKeyDecode ($sString, $sKey)
    {
        //        $sString = 'TztKyswqL25vIHcjGRLwJwkBvmEN0QAUJ620Iqz5EYO9gUAvMQS/wcnneDzesChAQR/na26Na4NTaqDTXVfvXS/z8BMqHtev8j/dKmDYkctjr8rZR7xJsoVcOGGFljwwB9zr4PHJUXdFqk72jYAuld1oOfSEr2Fr2vI+D6eeRnEz1PmWV+vhfCcKrKZTH7utpp/ERjVNmtGuQVhenRNIbMohIVmm2Bdm8cpDdtMLrjNb/URSbIDJ5zprnpB1Jgcn1OhKV/ELQDgJXlYuPY5/VDHx0V3e3yXioAL25P7rttX/S9TabNp9AS8V5T9SWys/i9yXXlfTu4mROPOderwYqBVY15FvKxS7GyHgQvNQYcByjJ0lmaEPStdAGTsHod08kHwt8GhpLEfPU5XQo+nHhW2PguxbEMrsgtgW7Pz8Y+OUVCu2aXyurwutHy1QkURmYyFQvQMob7XA9AoIs4O7niSxnpkShxvtb+gdiRvYB1Pv+SxLtcAk38lwm4XxScXNfJhYnCdnrAGqVTyiZkS2VgRWXh0Q6xbBU9fDaDKbgfaBH/e6SeWe/VIw4CIMEJCn737dr6Y0pHiw409AefyvhMBGCpADHuC8xyT3R++tHabfe19dAHoOTjaJT/wd+449VDuu9pyTmWOz4ow9lN07SND4V2Mvxkh+GY4pkSlgly0=';
//        self::checkKey();

        $sString = base64_decode($sString);
        openssl_private_decrypt($sString, $sDecode, $sKey);
        //        var_dump($sDecode);

        return $sDecode;
    }
}
