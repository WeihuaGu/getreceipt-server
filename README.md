# getreceipt-server
这个是个人收款的服务端，搭配receiptnotice的安卓端

### 才刚开始写



### 安装

### RestFul Api
| 作用 | 方式 | 请求地址 | 参数或POST data |
|-|-|-|-|
|接收客户端收款推送 | POST | /getedmoney/ | 示例json {"time":"2018-09-20 23:18:00","money":"139.34","title":"微信支付","content":"测试收款"} |
|查询当前时间有无收款 | GET | /querybill/now| |

### 配置及安全






##### 这个可搭配安卓客户端receiptnotice
[receiptnotice](https://github.com/WeihuaGu/receiptnotice)
