# getreceipt-server
这个是个人收款的服务端，搭配receiptnotice的安卓端

### 才刚开始写
想法是用最简单的php的flight微框架


### 安装
- 将项目放到服务器，然后运行`composer install` 

- 配置服务器，将请求搞到index.php
比如apache 
```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php [QSA,L]
```
比如 Nginx
```
server {
    location / {
        try_files $uri $uri/ /index.php;
    }
}
```
- 配置config目录下的数据库配置文件，推荐用环境变量，如果不配置环境变量或者数据库连接出错，直接用下面的数组直接填写数据库帐号密码

- 拿本机localhost举例，这个时候访问http://localhost/会出现"愿你赚很多钱",如果数据库配置正确访问http://localhost/database/info会出现你的数据库信息






##### 这个可搭配安卓客户端receiptnotice
[receiptnotice](https://github.com/WeihuaGu/receiptnotice)
