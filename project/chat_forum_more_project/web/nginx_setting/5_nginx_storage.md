docker run --name storage_1 -v /usr/local/white/buckup/www/myself/project/chat_forum_more_project/localstorage:/usr/local/storage -p 88:88 -d nginx
docker run --name storage_2 -v /usr/local/white/buckup/www/myself/project/chat_forum_more_project/localstorage:/usr/local/storage -p 89:89 -d nginx

复制nginx配置文件到docker容器
docker cp /usr/local/white/buckup/www/myself/project/chat_forum_more_project/web/nginx_setting/5_nginx_storage_slove_88.conf storage_1:/etc/nginx/conf.d
docker cp /usr/local/white/buckup/www/myself/project/chat_forum_more_project/web/nginx_setting/5_nginx_storage_slove_89.conf storage_2:/etc/nginx/conf.d
