docker run --name storage -v /usr/local/white/buckup/www/myself/project/chat_forum_more_project/web:/usr/local/storage -p 88:88 -d nginx

复制nginx配置文件到docker容器
docker cp /usr/local/white/buckup/www/myself/project/chat_forum_more_project/web/nginx_setting/7_nginx_storage_slove.conf storage:/etc/nginx/conf.d
