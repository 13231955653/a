#定义日志的源路径，即nginx的默认log路径
source_log_path=/www/server/nginx/logs
#定义保存后的路径位置
dest_log_path=/www/server/nginx/logs/statis_resource_history_logs
#定义log文件的名称，以每天为单位，定义日志的前缀为昨天的日期，因为定时任务拟在凌晨零点后执行。
yesterday=$(date -d "yesterday" +%Y%m%d)
#echo ${yesterday}
#rm -rf ${dest_log_path}/*
#指定移动
mv ${source_log_path}/static_resource_you_com_access.log ${dest_log_path}/access_${yesterday}.log
mv ${source_log_path}/static_resource_you_com_error.log  ${dest_log_path}/error_${yesterday}.log
#移动后，重新向nginx的主进程发送信息，令nginx的主进程将日志重新打开。否则日志将会继续写到mv后的路径中
kill -USR1 `ps axu | grep "nginx: master process" | grep -v grep | awk '{print $2}'`
cd ${dest_log_path}
#进入日志的路径，查询前天前的日志，然后将其删掉。
find . -mtime +7 -name "*20[1-9][3-9]*" |xargs rm -rf
exit 0



crontab -e
0 0 * * * root /www/server/nginx/shell/3_static_resource_log_split.sh
