# getreceipt-server
这个是个人收款的服务端，搭配receiptnotice的安卓端

### 才刚开始写



### 安装

`npm install`

### 配置mongodb的连接url

配置环境变量`mongodbfinaninurl`
或者直接在model/model.js中指定mongodburl（连接地址 例如mongodb://用户名:密码@地址:端口/数据库名）

### RestFul Api
| 作用 | 方式 | 请求地址 | 参数或POST data |
|-|-|-|-|
|接收客户端收款推送 | POST | /bill/getedmoney/ | 示例json {"time":"2018-09-20 23:18:00","money":"139.34","title":"微信支付","content":"测试收款"} |
|查询当前时间有无收款 | GET | /bill/querybill/now| |

### 配置及安全






##### 这个可搭配安卓客户端receiptnotice
[receiptnotice](https://github.com/WeihuaGu/receiptnotice)
