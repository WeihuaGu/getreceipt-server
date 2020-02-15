# getreceipt-server
这个是接受推送的服务端，搭配receiptnotice的安卓端

## 支持nodeJS与php
nodejs位于nodejs分支,PHP 位于php分支

### 安装

`npm install`

### 配置

#### mongodb的连接url
因为数据库采用了mongodb，所以需要配置mongodb的连接url。配置环境变量`mongodbfinaninurl`或者直接在config/default.json中指定mongodburl（连接地址 例如mongodb://用户名:密码@地址:端口/数据库名）

#### 配置post解密秘钥

如果客户端启用了des加密，请配置financepostpass变量，该变量为des加密的秘钥。或者一样在config/default.json中指定financepostpass。

#### 配置支付宝的userid

如果想使用`/show/alipay/get_transfer_code/金额`这个api,而不是每次都附带userid,你可以配置环境变量`transfercode_userid`，或者同样的在config/default.json中指定userid。

### RestFul Api
| 作用 | 方式 | 请求地址 | 参数或POST data |
|-|-|-|-|
|接收客户端收款推送 | POST | /bill/getedmoney/ | 示例json {"time":"2018-09-20 23:18:00","money":"139.34","title":"微信支付","content":"测试收款","deviceid":"yourdeviceid","encrypt":"0"} |
|查询当前时间有无收款 | GET | /bill/querybill/now| |
|查询设备是否在线 | GET | /device/isonline/deviceid | 例如 /device/isonline/mi4c (deviceid为客户端设置里填写的内容) |

#### 支付宝相关api
##### 生成任意金额的转账码
| 作用 | 方式 | 请求地址 | 参数或POST data |
|-|-|-|-|
|下面两个需要在config目录下配置userid|收款码即userid的取得参考wiki| | |
|生产任意金额的转账码uri|GET|/show/alipay/get_transfer_code_uri/金额|例如 /show/alipay/get_transfer_code_uri/66.66|
|生产任意金额的转账码(会直接返回png格式的转账码图片|GET|/show/alipay/get_transfer_code/金额|例如 /show/alipay/get_transfer_code_uri/66.66|
|生产任意金额并且附加备注的转账码(会直接返回png格式的转账码图片|GET|/show/alipay/get_transfer_code/金额/withremark/备注|例如 /show/alipay/get_transfer_code_uri/66.66/withremark/我给你转了一笔钱|
|下面两个可以不配置userid|需要你在请求里附带userid| | |
|生产任意金额的转账码uri|GET|/show/alipay/get_transfer_code_uri/金额/withuserid/你的userid|例如 /show/alipay/get_transfer_code_uri/66.66/withuserid/735648|
|生产任意金额的转账码(会直接返回png格式的转账码图片|GET|/show/alipay/get_transfer_code/金额/withuserid/你的userid|例如 /show/alipay/get_transfer_code_uri/66.66/withuserid/735648|



##### 这个可搭配安卓客户端receiptnotice
[receiptnotice](https://github.com/WeihuaGu/receiptnotice)
