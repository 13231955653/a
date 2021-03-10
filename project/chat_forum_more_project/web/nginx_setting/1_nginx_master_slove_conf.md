docker run --name static_resource_slove_1 -v /usr/local/white/buckup/www/myself/project/chat_forum_more_project/web:/usr/local/project1_static_resource_slove_1 -p 86:86 -d nginx

docker run --name static_resource_slove_2 -v /usr/local/white/buckup/www/myself/project/chat_forum_more_project/web:/usr/local/project1_static_resource_slove_2 -p 87:87 -d nginx

复制nginx配置文件到docker容器
docker cp /usr/local/white/buckup/www/myself/project/chat_forum_more_project/web/nginx_setting/2_nginx_slove_86.conf static_resource_slove_1:/etc/nginx/conf.d
docker cp /usr/local/white/buckup/www/myself/project/chat_forum_more_project/web/nginx_setting/2_nginx_slove_87.conf static_resource_slove_2:/etc/nginx/conf.d




