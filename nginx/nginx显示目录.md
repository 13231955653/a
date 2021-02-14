location / {  
        root /data/www/file                     //指定实际目录绝对路径；  
        autoindex on;                            //开启目录浏览功能；  
        autoindex_exact_size off;            //关闭详细文件大小统计，让文件大小显示MB，GB单位，默认为b；  
        autoindex_localtime on;              //开启以服务器本地时区显示文件修改日期！  
}

nginx显示目录